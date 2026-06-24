import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { buildItem, ITEM } from './catalog'
import type { PlannerItem, PlannerState } from './types'

interface EngineCallbacks {
  onItemsChange: (items: PlannerItem[]) => void
  onSelect: (id: string | null) => void
  createItemId: (key: PlannerItem['key']) => string
}

interface RenderedItem extends THREE.Group {
  userData: THREE.Group['userData'] & {
    itemId: string
    itemKey: PlannerItem['key']
  }
}

const snap = (value: number) => Math.round(value / 0.25) * 0.25
const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2)

export class PlannerSceneEngine {
  private readonly canvas: HTMLCanvasElement
  private readonly callbacks: EngineCallbacks
  private readonly renderer: THREE.WebGLRenderer
  private readonly scene = new THREE.Scene()
  private readonly camera = new THREE.PerspectiveCamera(45, 1, 0.1, 200)
  private readonly controls: OrbitControls
  private readonly itemGroup = new THREE.Group()
  private readonly egressGroup = new THREE.Group()
  private readonly raycaster = new THREE.Raycaster()
  private readonly ndc = new THREE.Vector2()
  private readonly grab = new THREE.Vector3()
  private readonly selectionBox = new THREE.BoxHelper(new THREE.Object3D(), 0x1f1b17)
  private floorMesh: THREE.Mesh | null = null
  private walls: THREE.Group | null = null
  private grid: THREE.GridHelper | null = null
  private animationId = 0
  private resizeObserver: ResizeObserver | null = null
  private state: PlannerState
  private draggingId: string | null = null
  private tween: null | {
    fromPos: THREE.Vector3
    toPos: THREE.Vector3
    fromTarget: THREE.Vector3
    toTarget: THREE.Vector3
    progress: number
    duration: number
  } = null
  private egressPaths: Array<{ start: THREE.Vector3; end: THREE.Vector3; dots: THREE.Mesh[] }> = []

  constructor(canvas: HTMLCanvasElement, initialState: PlannerState, callbacks: EngineCallbacks) {
    this.canvas = canvas
    this.state = initialState
    this.callbacks = callbacks

    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: true })
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    this.renderer.outputColorSpace = THREE.SRGBColorSpace

    this.controls = new OrbitControls(this.camera, canvas)
    this.controls.enableDamping = true
    this.controls.dampingFactor = 0.08
    this.controls.maxPolarAngle = Math.PI / 2.05

    this.scene.background = new THREE.Color(0xefe9dd)
    this.selectionBox.visible = false
    this.scene.add(this.itemGroup, this.egressGroup, this.selectionBox)
    this.addLights()
    this.buildRoom()
    this.rebuildItems()
    this.snapCamera()
    this.bindEvents()
    this.resize()

    this.resizeObserver = new ResizeObserver(() => this.resize())
    this.resizeObserver.observe(canvas.parentElement ?? canvas)
    this.loop(0)
  }

  sync(nextState: PlannerState) {
    const roomChanged = nextState.room.width !== this.state.room.width || nextState.room.depth !== this.state.room.depth
    const itemsChanged = nextState.items !== this.state.items || nextState.brand !== this.state.brand
    const viewChanged = nextState.view !== this.state.view
    const egressChanged = nextState.fireSafety !== this.state.fireSafety || itemsChanged || nextState.brand !== this.state.brand
    const selectionChanged = nextState.selectedId !== this.state.selectedId || itemsChanged

    this.state = nextState

    if (roomChanged) {
      this.buildRoom()
      this.snapCamera()
    }
    if (itemsChanged) this.rebuildItems()
    if (viewChanged) this.swingCamera()
    if (egressChanged || roomChanged) this.buildEgress()
    if (selectionChanged) this.updateSelection()
  }

  captureImage() {
    this.renderer.render(this.scene, this.camera)
    return this.renderer.domElement.toDataURL('image/png')
  }

  dispose() {
    cancelAnimationFrame(this.animationId)
    this.resizeObserver?.disconnect()
    this.canvas.removeEventListener('pointerdown', this.handlePointerDown)
    this.canvas.removeEventListener('pointermove', this.handlePointerMove)
    this.canvas.removeEventListener('pointerup', this.handlePointerUp)
    window.removeEventListener('keydown', this.handleKeyDown)
    this.controls.dispose()
    this.renderer.dispose()
    this.disposeObject(this.scene)
  }

  private addLights() {
    this.scene.add(new THREE.HemisphereLight(0xffffff, 0xcdbb97, 0.88))
    const sun = new THREE.DirectionalLight(0xfff6e8, 1.08)
    sun.position.set(6, 12, 8)
    sun.castShadow = true
    sun.shadow.mapSize.set(2048, 2048)
    sun.shadow.camera.near = 1
    sun.shadow.camera.far = 60
    sun.shadow.camera.left = -22
    sun.shadow.camera.right = 22
    sun.shadow.camera.top = 22
    sun.shadow.camera.bottom = -22
    this.scene.add(sun)
  }

  private buildRoom() {
    ;[this.floorMesh, this.walls, this.grid].forEach((object) => {
      if (object) {
        this.scene.remove(object)
        this.disposeObject(object)
      }
    })

    const { width, depth } = this.state.room
    this.floorMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(width, depth),
      new THREE.MeshStandardMaterial({ color: 0xf3efe6, roughness: 0.95 }),
    )
    this.floorMesh.rotation.x = -Math.PI / 2
    this.floorMesh.receiveShadow = true
    this.scene.add(this.floorMesh)

    this.grid = new THREE.GridHelper(Math.max(width, depth), Math.round(Math.max(width, depth)), 0xb9ab8c, 0xd8cbac)
    this.grid.position.y = 0.012
    this.scene.add(this.grid)

    const wallMat = new THREE.MeshStandardMaterial({ color: 0xe7e1d4, roughness: 0.9 })
    const wallHeight = 1.3
    const thickness = 0.1
    const segment = (w: number, h: number, d: number, x: number, y: number, z: number) => {
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), wallMat)
      mesh.position.set(x, y, z)
      mesh.receiveShadow = true
      return mesh
    }

    this.walls = new THREE.Group()
    this.walls.add(
      segment(width + thickness, wallHeight, thickness, 0, wallHeight / 2, -depth / 2),
      segment(width + thickness, wallHeight, thickness, 0, wallHeight / 2, depth / 2),
      segment(thickness, wallHeight, depth + thickness, -width / 2, wallHeight / 2, 0),
      segment(thickness, wallHeight, depth + thickness, width / 2, wallHeight / 2, 0),
    )
    this.scene.add(this.walls)
  }

  private rebuildItems() {
    this.clearGroup(this.itemGroup)
    this.state.items.forEach((item) => {
      const group = buildItem(item.key, this.state.brand) as RenderedItem
      group.position.set(item.x, 0, item.z)
      group.rotation.y = item.rotation
      group.userData.itemId = item.id
      group.userData.itemKey = item.key
      this.itemGroup.add(group)
    })
    this.updateSelection()
    this.buildEgress()
  }

  private updateSelection() {
    const selected = this.getRenderedItem(this.state.selectedId)
    if (!selected) {
      this.selectionBox.visible = false
      return
    }
    this.selectionBox.setFromObject(selected)
    this.selectionBox.visible = true
  }

  private bindEvents() {
    this.canvas.addEventListener('pointerdown', this.handlePointerDown)
    this.canvas.addEventListener('pointermove', this.handlePointerMove)
    this.canvas.addEventListener('pointerup', this.handlePointerUp)
    window.addEventListener('keydown', this.handleKeyDown)
  }

  private handlePointerDown = (event: PointerEvent) => {
    this.setPointer(event)

    if (this.state.activeTool !== 'select') {
      const point = this.floorPoint()
      if (!point) return
      this.clampToRoom(point)
      const key = this.state.activeTool
      const item: PlannerItem = {
        id: this.callbacks.createItemId(key),
        key,
        x: snap(point.x),
        z: snap(point.z),
        rotation: 0,
      }
      this.callbacks.onItemsChange([...this.state.items, item])
      this.callbacks.onSelect(item.id)
      return
    }

    this.raycaster.setFromCamera(this.ndc, this.camera)
    const hit = this.raycaster.intersectObjects(this.itemGroup.children, true)[0]
    const root = hit ? this.itemRootOf(hit.object) : null
    if (!root) {
      this.callbacks.onSelect(null)
      return
    }

    this.callbacks.onSelect(root.userData.itemId)
    const floor = this.floorPoint()
    if (!floor) return
    this.grab.set(root.position.x - floor.x, 0, root.position.z - floor.z)
    this.draggingId = root.userData.itemId
    this.controls.enabled = false
    this.canvas.setPointerCapture(event.pointerId)
  }

  private handlePointerMove = (event: PointerEvent) => {
    if (!this.draggingId) return
    const root = this.getRenderedItem(this.draggingId)
    if (!root) return
    this.setPointer(event)
    const floor = this.floorPoint()
    if (!floor) return
    const next = this.clampToRoom(new THREE.Vector3(floor.x + this.grab.x, 0, floor.z + this.grab.z))
    root.position.set(snap(next.x), 0, snap(next.z))
    this.selectionBox.setFromObject(root)
  }

  private handlePointerUp = (event: PointerEvent) => {
    if (!this.draggingId) return
    const nextItems = this.state.items.map((item) => {
      const rendered = this.getRenderedItem(item.id)
      return rendered ? { ...item, x: snap(rendered.position.x), z: snap(rendered.position.z) } : item
    })
    this.draggingId = null
    this.controls.enabled = this.state.view === '3d'
    if (this.canvas.hasPointerCapture(event.pointerId)) this.canvas.releasePointerCapture(event.pointerId)
    this.callbacks.onItemsChange(nextItems)
  }

  private handleKeyDown = (event: KeyboardEvent) => {
    if ((event.target as HTMLElement | null)?.tagName === 'INPUT') return
    if (event.key === 'v' || event.key === 'V') this.callbacks.onSelect(null)
  }

  private setPointer(event: PointerEvent) {
    const rect = this.canvas.getBoundingClientRect()
    this.ndc.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
    this.ndc.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
  }

  private floorPoint() {
    if (!this.floorMesh) return null
    this.raycaster.setFromCamera(this.ndc, this.camera)
    return this.raycaster.intersectObject(this.floorMesh, false)[0]?.point ?? null
  }

  private clampToRoom(point: THREE.Vector3) {
    const { width, depth } = this.state.room
    point.x = Math.max(-width / 2 + 0.3, Math.min(width / 2 - 0.3, point.x))
    point.z = Math.max(-depth / 2 + 0.3, Math.min(depth / 2 - 0.3, point.z))
    return point
  }

  private itemRootOf(object: THREE.Object3D): RenderedItem | null {
    let current: THREE.Object3D | null = object
    while (current?.parent && current.parent !== this.itemGroup) current = current.parent
    return current?.parent === this.itemGroup ? (current as RenderedItem) : null
  }

  private getRenderedItem(id: string | null) {
    if (!id) return null
    return this.itemGroup.children.find((child) => child.userData.itemId === id) as RenderedItem | undefined ?? null
  }

  private buildEgress() {
    this.clearGroup(this.egressGroup)
    this.egressPaths = []
    if (!this.state.fireSafety) return

    const exits = this.itemGroup.children
      .filter((child) => child.userData.itemKey === 'exit')
      .map((child) => new THREE.Vector3(child.position.x, 0.06, child.position.z))

    if (!exits.length) return
    const brand = new THREE.Color(this.state.brand)

    this.itemGroup.children
      .filter((child) => ITEM[child.userData.itemKey as PlannerItem['key']].seats > 0)
      .forEach((child) => {
        const start = new THREE.Vector3(child.position.x, 0.06, child.position.z)
        const end = nearestPoint(start, exits)
        const line = new THREE.Line(
          new THREE.BufferGeometry().setFromPoints([start, end]),
          new THREE.LineBasicMaterial({ color: brand, transparent: true, opacity: 0.38 }),
        )
        this.egressGroup.add(line)

        const direction = end.clone().sub(start).normalize()
        const cone = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.3, 12), new THREE.MeshBasicMaterial({ color: brand }))
        cone.position.copy(end.clone().sub(direction.clone().multiplyScalar(0.25)))
        cone.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction)
        this.egressGroup.add(cone)

        const dots = Array.from({ length: 4 }, () => {
          const dot = new THREE.Mesh(new THREE.SphereGeometry(0.06, 10, 10), new THREE.MeshBasicMaterial({ color: brand }))
          this.egressGroup.add(dot)
          return dot
        })
        this.egressPaths.push({ start, end, dots })
      })
  }

  private cameraForCurrentView() {
    const { width, depth } = this.state.room
    const max = Math.max(width, depth)
    if (this.state.view === 'plan') {
      return {
        position: new THREE.Vector3(0, max * 1.5 + 6, 0.9),
        target: new THREE.Vector3(0, 0, 0),
      }
    }
    return {
      position: new THREE.Vector3(max * 0.45, max * 0.7 + 3, depth * 0.8 + 5),
      target: new THREE.Vector3(0, 0.4, 0),
    }
  }

  private snapCamera() {
    const camera = this.cameraForCurrentView()
    this.camera.position.copy(camera.position)
    this.controls.target.copy(camera.target)
    this.controls.enabled = this.state.view === '3d'
    this.controls.update()
  }

  private swingCamera() {
    const camera = this.cameraForCurrentView()
    this.tween = {
      fromPos: this.camera.position.clone(),
      toPos: camera.position,
      fromTarget: this.controls.target.clone(),
      toTarget: camera.target,
      progress: 0,
      duration: 850,
    }
    this.controls.enabled = false
  }

  private resize() {
    const rect = (this.canvas.parentElement ?? this.canvas).getBoundingClientRect()
    this.renderer.setSize(rect.width, rect.height, false)
    this.camera.aspect = rect.width / rect.height
    this.camera.updateProjectionMatrix()
  }

  private loop = (now: number) => {
    if (this.tween) {
      this.tween.progress = Math.min(1, this.tween.progress + 16.6 / this.tween.duration)
      const k = easeInOut(this.tween.progress)
      this.camera.position.lerpVectors(this.tween.fromPos, this.tween.toPos, k)
      this.controls.target.lerpVectors(this.tween.fromTarget, this.tween.toTarget, k)
      if (this.tween.progress >= 1) {
        this.controls.enabled = this.state.view === '3d'
        this.tween = null
      }
    }

    if (this.state.fireSafety && this.egressPaths.length) {
      this.egressPaths.forEach(({ start, end, dots }) => {
        dots.forEach((dot, index) => {
          const t = ((now * 0.00018) + index / dots.length) % 1
          dot.position.lerpVectors(start, end, t)
        })
      })
    }

    this.controls.update()
    this.renderer.render(this.scene, this.camera)
    this.animationId = requestAnimationFrame(this.loop)
  }

  private clearGroup(group: THREE.Group) {
    ;[...group.children].forEach((child) => {
      group.remove(child)
      this.disposeObject(child)
    })
  }

  private disposeObject(object: THREE.Object3D) {
    object.traverse((child) => {
      if (child instanceof THREE.Mesh || child instanceof THREE.Line) {
        child.geometry?.dispose()
        const material = child.material
        if (Array.isArray(material)) material.forEach((mat) => mat.dispose())
        else material?.dispose()
      }
    })
  }
}

function nearestPoint(point: THREE.Vector3, points: THREE.Vector3[]) {
  let best = points[0]
  let bestDistance = Number.POSITIVE_INFINITY
  points.forEach((candidate) => {
    const distance = point.distanceToSquared(candidate)
    if (distance < bestDistance) {
      best = candidate
      bestDistance = distance
    }
  })
  return best
}
