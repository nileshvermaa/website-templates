import * as THREE from 'three'
import type { CatalogItem, CatalogKey, ItemCategory, TemplateDefinition } from './types'

export const CATEGORY_LABELS: Record<ItemCategory, string> = {
  cafe: 'Cafe',
  office: 'Co-working',
  retail: 'Boutique',
  restaurant: 'Restaurant',
  common: 'Common',
}

export const DENSITY_TARGETS = {
  assembly: 1.4,
  office: 9,
  retail: 3.7,
} as const

export const CATALOG: CatalogItem[] = [
  { key: 'counter', category: 'cafe', name: 'Service counter', width: 2.6, depth: 0.8, seats: 0, cost: 2200, branded: true },
  { key: 'cafe2', category: 'cafe', name: 'Cafe table / 2', width: 1.2, depth: 1.5, seats: 2, cost: 340 },
  { key: 'cafe4', category: 'cafe', name: 'Cafe table / 4', width: 1.5, depth: 1.5, seats: 4, cost: 520 },
  { key: 'stool', category: 'cafe', name: 'Bar stool', width: 0.5, depth: 0.5, seats: 1, cost: 95, branded: true },
  { key: 'lounge', category: 'cafe', name: 'Lounge chair', width: 0.85, depth: 0.85, seats: 1, cost: 420, branded: true },
  { key: 'pastry', category: 'cafe', name: 'Pastry display', width: 1.2, depth: 0.6, seats: 0, cost: 1600 },
  { key: 'desk', category: 'office', name: 'Workstation', width: 1.4, depth: 1.4, seats: 1, cost: 480 },
  { key: 'cluster', category: 'office', name: 'Desk cluster / 4', width: 3, depth: 1.7, seats: 4, cost: 1800 },
  { key: 'meeting', category: 'office', name: 'Meeting table / 6', width: 2.6, depth: 1.4, seats: 6, cost: 1500 },
  { key: 'phone', category: 'office', name: 'Phone booth', width: 1.1, depth: 1.1, seats: 1, cost: 2800, branded: true },
  { key: 'shelf', category: 'office', name: 'Storage shelf', width: 0.9, depth: 0.4, seats: 0, cost: 320 },
  { key: 'taskChair', category: 'office', name: 'Task chair', width: 0.6, depth: 0.6, seats: 1, cost: 190 },
  { key: 'rack', category: 'retail', name: 'Clothing rack', width: 1.2, depth: 0.6, seats: 0, cost: 260, branded: true },
  { key: 'displayTable', category: 'retail', name: 'Display table', width: 1.3, depth: 0.9, seats: 0, cost: 340 },
  { key: 'wallShelf', category: 'retail', name: 'Wall shelving', width: 1.2, depth: 0.4, seats: 0, cost: 280 },
  { key: 'checkout', category: 'retail', name: 'Checkout counter', width: 1.7, depth: 0.8, seats: 0, cost: 1700, branded: true },
  { key: 'fitting', category: 'retail', name: 'Fitting room', width: 1.3, depth: 1.3, seats: 0, cost: 2100 },
  { key: 'mannequin', category: 'retail', name: 'Mannequin', width: 0.5, depth: 0.5, seats: 0, cost: 210, branded: true },
  { key: 'dine4', category: 'restaurant', name: 'Dining table / 4', width: 1.5, depth: 1.5, seats: 4, cost: 600 },
  { key: 'restaurantBooth', category: 'restaurant', name: 'Booth / 4', width: 1.9, depth: 1.6, seats: 4, cost: 980, branded: true },
  { key: 'hostStand', category: 'restaurant', name: 'Host stand', width: 0.9, depth: 0.6, seats: 0, cost: 640, branded: true },
  { key: 'plant', category: 'common', name: 'Planter', width: 0.6, depth: 0.6, seats: 0, cost: 70 },
  { key: 'exit', category: 'common', name: 'Exit door', width: 1, depth: 0.3, seats: 0, cost: 0 },
]

export const ITEM = Object.fromEntries(CATALOG.map((item) => [item.key, item])) as Record<CatalogKey, CatalogItem>

type Materials = ReturnType<typeof createMaterials>

function createMaterials(brand: string) {
  return {
    oat: new THREE.MeshStandardMaterial({ color: 0xcdbb97, roughness: 0.85 }),
    top: new THREE.MeshStandardMaterial({ color: 0xe2d7be, roughness: 0.8 }),
    dark: new THREE.MeshStandardMaterial({ color: 0x34312c, roughness: 0.72, metalness: 0.08 }),
    metal: new THREE.MeshStandardMaterial({ color: 0x8a857c, roughness: 0.48, metalness: 0.55 }),
    glass: new THREE.MeshStandardMaterial({ color: 0xbfe0e6, roughness: 0.1, transparent: true, opacity: 0.36 }),
    green: new THREE.MeshStandardMaterial({ color: 0x6f8f5f, roughness: 0.85 }),
    pot: new THREE.MeshStandardMaterial({ color: 0x9c6b4a, roughness: 0.85 }),
    light: new THREE.MeshStandardMaterial({ color: 0xefe9dd, roughness: 0.9 }),
    brand: new THREE.MeshStandardMaterial({ color: brand, roughness: 0.55 }),
  }
}

function box(w: number, h: number, d: number, mat: THREE.Material, x = 0, y = 0, z = 0) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat)
  mesh.position.set(x, y, z)
  mesh.castShadow = true
  mesh.receiveShadow = true
  return mesh
}

function cyl(r: number, h: number, mat: THREE.Material, x = 0, y = 0, z = 0, seg = 24) {
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, seg), mat)
  mesh.position.set(x, y, z)
  mesh.castShadow = true
  mesh.receiveShadow = true
  return mesh
}

function brandedBox(m: Materials, w: number, h: number, d: number, x: number, y: number, z: number) {
  const mesh = box(w, h, d, m.brand, x, y, z)
  mesh.userData.branded = true
  return mesh
}

function brandedCyl(m: Materials, r: number, h: number, x: number, y: number, z: number, seg = 24) {
  const mesh = cyl(r, h, m.brand, x, y, z, seg)
  mesh.userData.branded = true
  return mesh
}

function chair(m: Materials, accent = false) {
  const group = new THREE.Group()
  group.add(
    accent ? brandedBox(m, 0.44, 0.06, 0.44, 0, 0.45, 0) : box(0.44, 0.06, 0.44, m.dark, 0, 0.45, 0),
    accent ? brandedBox(m, 0.44, 0.42, 0.06, 0, 0.66, -0.19) : box(0.44, 0.42, 0.06, m.dark, 0, 0.66, -0.19),
  )
  ;[[-0.17, -0.17], [0.17, -0.17], [-0.17, 0.17], [0.17, 0.17]].forEach(([x, z]) =>
    group.add(cyl(0.02, 0.45, m.metal, x, 0.22, z, 8)),
  )
  return group
}

function seatAt(parent: THREE.Group, m: Materials, x: number, z: number, rotation: number, accent = false) {
  const seat = chair(m, accent)
  seat.position.set(x, 0, z)
  seat.rotation.y = rotation
  parent.add(seat)
}

const builders: Record<CatalogKey, (m: Materials) => THREE.Group> = {
  cafe2(m) {
    const group = new THREE.Group()
    group.add(cyl(0.06, 0.72, m.metal, 0, 0.36, 0), cyl(0.36, 0.05, m.top, 0, 0.74, 0))
    group.add(cyl(0.3, 0.04, m.dark, 0, 0.02, 0))
    seatAt(group, m, 0, 0.55, Math.PI)
    seatAt(group, m, 0, -0.55, 0)
    return group
  },
  cafe4(m) {
    const group = new THREE.Group()
    group.add(box(0.9, 0.05, 0.9, m.top, 0, 0.74, 0), box(0.08, 0.72, 0.08, m.metal, 0, 0.36, 0))
    seatAt(group, m, 0, 0.62, Math.PI)
    seatAt(group, m, 0, -0.62, 0)
    seatAt(group, m, 0.62, 0, -Math.PI / 2)
    seatAt(group, m, -0.62, 0, Math.PI / 2)
    return group
  },
  counter(m) {
    const group = new THREE.Group()
    group.add(brandedBox(m, 2.4, 1, 0.6, 0, 0.5, 0), box(2.4, 0.06, 0.72, m.top, 0, 1.04, 0.02))
    group.add(box(2.2, 0.3, 0.5, m.dark, 0, 1.2, -0.05))
    return group
  },
  stool(m) {
    const group = new THREE.Group()
    group.add(cyl(0.04, 0.74, m.metal, 0, 0.37, 0), brandedCyl(m, 0.2, 0.07, 0, 0.76, 0))
    group.add(cyl(0.22, 0.02, m.metal, 0, 0.2, 0))
    return group
  },
  lounge(m) {
    const group = new THREE.Group()
    group.add(brandedBox(m, 0.78, 0.18, 0.74, 0, 0.34, 0), box(0.78, 0.45, 0.16, m.oat, 0, 0.55, -0.3))
    group.add(box(0.16, 0.4, 0.74, m.oat, -0.31, 0.5, 0), box(0.16, 0.4, 0.74, m.oat, 0.31, 0.5, 0))
    return group
  },
  pastry(m) {
    const group = new THREE.Group()
    group.add(box(1.2, 0.85, 0.6, m.dark, 0, 0.42, 0), box(1.18, 0.5, 0.58, m.glass, 0, 1.05, 0))
    group.add(box(1.2, 0.04, 0.6, m.top, 0, 0.86, 0))
    return group
  },
  desk(m) {
    const group = new THREE.Group()
    group.add(box(1.3, 0.04, 0.7, m.top, 0, 0.74, 0))
    ;[[-0.6, -0.3], [0.6, -0.3], [-0.6, 0.3], [0.6, 0.3]].forEach(([x, z]) => group.add(box(0.05, 0.72, 0.05, m.metal, x, 0.36, z)))
    group.add(box(0.45, 0.3, 0.02, m.dark, 0, 0.95, -0.34))
    seatAt(group, m, 0, 0.55, Math.PI)
    return group
  },
  cluster(m) {
    const group = new THREE.Group()
    ;[-0.72, 0.72].forEach((x) => [-0.42, 0.42].forEach((z) => {
      const desk = builders.desk(m)
      desk.position.set(x, 0, z)
      if (z > 0) desk.rotation.y = Math.PI
      group.add(desk)
    }))
    return group
  },
  meeting(m) {
    const group = new THREE.Group()
    group.add(box(2.2, 0.05, 1, m.top, 0, 0.74, 0), box(1.9, 0.5, 0.1, m.metal, 0, 0.4, 0))
    ;[-0.75, 0.75].forEach((z) => [-0.7, 0, 0.7].forEach((x) => seatAt(group, m, x, z, z > 0 ? Math.PI : 0)))
    return group
  },
  phone(m) {
    const group = new THREE.Group()
    group.add(box(1, 2.1, 1, m.light, 0, 1.05, 0), brandedBox(m, 1.02, 0.18, 1.02, 0, 2, 0))
    group.add(box(0.6, 1.3, 0.02, m.glass, 0, 1.1, 0.5))
    return group
  },
  shelf(m) {
    const group = new THREE.Group()
    group.add(box(0.9, 1.8, 0.36, m.oat, 0, 0.9, 0))
    ;[0.4, 0.85, 1.3].forEach((y) => group.add(box(0.86, 0.03, 0.34, m.top, 0, y, 0)))
    return group
  },
  taskChair(m) {
    return chair(m)
  },
  rack(m) {
    const group = new THREE.Group()
    group.add(brandedCyl(m, 0.03, 1.3, -0.55, 0.65, 0), brandedCyl(m, 0.03, 1.3, 0.55, 0.65, 0))
    const rail = brandedCyl(m, 0.025, 1.1, 0, 1.28, 0)
    rail.rotation.z = Math.PI / 2
    group.add(rail)
    for (let i = 0; i < 6; i += 1) group.add(box(0.32, 0.5, 0.04, i % 2 ? m.oat : m.dark, -0.5 + i * 0.2, 0.95, 0))
    group.add(box(0.7, 0.04, 0.5, m.metal, 0, 0.05, 0))
    return group
  },
  displayTable(m) {
    const group = new THREE.Group()
    group.add(box(1.2, 0.78, 0.8, m.oat, 0, 0.39, 0), box(1.24, 0.04, 0.84, m.top, 0, 0.8, 0))
    return group
  },
  wallShelf(m) {
    const group = new THREE.Group()
    group.add(box(1.2, 1.6, 0.32, m.light, 0, 0.8, 0))
    ;[0.5, 0.9, 1.3].forEach((y) => group.add(box(1.16, 0.03, 0.3, m.oat, 0, y, 0)))
    return group
  },
  checkout(m) {
    const group = new THREE.Group()
    group.add(brandedBox(m, 1.5, 0.95, 0.7, 0, 0.47, 0), box(1.54, 0.05, 0.74, m.top, 0, 0.98, 0))
    group.add(box(0.3, 0.2, 0.25, m.dark, 0.4, 1.1, 0))
    return group
  },
  fitting(m) {
    const group = new THREE.Group()
    group.add(box(1.2, 2.1, 1.2, m.light, 0, 1.05, 0), box(1, 1.9, 0.04, m.oat, 0, 1, 0.6))
    group.add(brandedBox(m, 1.22, 0.12, 1.22, 0, 2.05, 0))
    return group
  },
  mannequin(m) {
    const group = new THREE.Group()
    group.add(cyl(0.18, 0.05, m.dark, 0, 0.03, 0), cyl(0.03, 1.1, m.metal, 0, 0.55, 0))
    group.add(brandedBox(m, 0.34, 0.5, 0.2, 0, 1.2, 0), cyl(0.09, 0.18, m.light, 0, 1.55, 0))
    return group
  },
  dine4(m) {
    return builders.cafe4(m)
  },
  restaurantBooth(m) {
    const group = new THREE.Group()
    group.add(box(1.6, 0.05, 0.8, m.top, 0, 0.74, 0), box(0.1, 0.7, 0.7, m.metal, 0, 0.37, 0))
    group.add(brandedBox(m, 1.8, 0.5, 0.4, 0, 0.25, 0.6), brandedBox(m, 1.8, 0.5, 0.4, 0, 0.25, -0.6))
    group.add(brandedBox(m, 1.8, 0.5, 0.12, 0, 0.7, 0.78), brandedBox(m, 1.8, 0.5, 0.12, 0, 0.7, -0.78))
    return group
  },
  hostStand(m) {
    const group = new THREE.Group()
    group.add(brandedBox(m, 0.8, 1.1, 0.5, 0, 0.55, 0), box(0.84, 0.04, 0.54, m.top, 0, 1.12, 0))
    return group
  },
  plant(m) {
    const group = new THREE.Group()
    group.add(cyl(0.22, 0.4, m.pot, 0, 0.2, 0))
    const foliage = new THREE.Mesh(new THREE.IcosahedronGeometry(0.34, 0), m.green)
    foliage.position.y = 0.7
    foliage.castShadow = true
    group.add(foliage)
    return group
  },
  exit() {
    const group = new THREE.Group()
    const exitMat = new THREE.MeshStandardMaterial({ color: 0x5f8f5f, roughness: 0.6 })
    group.add(box(1, 0.12, 0.18, exitMat, 0, 0.06, 0))
    group.add(box(0.1, 2, 0.1, exitMat, -0.45, 1, 0), box(0.1, 2, 0.1, exitMat, 0.45, 1, 0))
    group.add(box(1, 0.28, 0.06, exitMat, 0, 2.05, 0))
    group.userData.isExit = true
    return group
  },
}

export function buildItem(key: CatalogKey, brand: string) {
  const group = builders[key](createMaterials(brand))
  group.traverse((object) => {
    if (object instanceof THREE.Mesh) {
      object.castShadow = true
      object.receiveShadow = true
    }
  })
  return group
}

export const TEMPLATES: Record<string, TemplateDefinition> = {
  cafe: {
    label: 'Cafe',
    subtitle: 'counter + seating',
    use: 'assembly',
    room: { width: 9, depth: 7 },
    items: [
      { key: 'counter', x: 0, z: -2.6, rotation: 0 }, { key: 'pastry', x: 2.2, z: -2.7, rotation: 0 },
      { key: 'stool', x: -1.6, z: -1.7, rotation: 0 }, { key: 'stool', x: -0.9, z: -1.7, rotation: 0 }, { key: 'stool', x: -0.2, z: -1.7, rotation: 0 },
      { key: 'cafe2', x: -2.8, z: 0.6, rotation: 0 }, { key: 'cafe2', x: -2.8, z: 2.2, rotation: 0 },
      { key: 'cafe4', x: 0.4, z: 1.4, rotation: 0 }, { key: 'cafe4', x: 2.6, z: 1.4, rotation: 0 },
      { key: 'lounge', x: 3.2, z: -0.4, rotation: -1.2 }, { key: 'plant', x: -3.6, z: -2.4, rotation: 0 },
      { key: 'exit', x: 0, z: 3.4, rotation: 0 }, { key: 'exit', x: -4.4, z: -1, rotation: 1.57 },
    ],
  },
  coworking: {
    label: 'Co-working',
    subtitle: 'desks + meeting',
    use: 'office',
    room: { width: 12, depth: 8 },
    items: [
      { key: 'cluster', x: -3.2, z: -1.2, rotation: 0 }, { key: 'cluster', x: -3.2, z: 1.8, rotation: 0 },
      { key: 'meeting', x: 3.4, z: -1.6, rotation: 0 }, { key: 'phone', x: 4.6, z: 2.2, rotation: 0 },
      { key: 'phone', x: 3, z: 2.2, rotation: 0 }, { key: 'shelf', x: 0.2, z: -3.4, rotation: 0 },
      { key: 'plant', x: -5.2, z: 3.2, rotation: 0 }, { key: 'plant', x: 5.2, z: -3.2, rotation: 0 },
      { key: 'exit', x: 0, z: 3.7, rotation: 0 }, { key: 'exit', x: -5.9, z: 0, rotation: 1.57 },
    ],
  },
  boutique: {
    label: 'Boutique',
    subtitle: 'fixtures + fitting',
    use: 'retail',
    room: { width: 8, depth: 9 },
    items: [
      { key: 'checkout', x: -2.4, z: -3.2, rotation: 0 }, { key: 'wallShelf', x: 3.4, z: -3, rotation: 0 },
      { key: 'rack', x: -2.2, z: 0, rotation: 0 }, { key: 'rack', x: -2.2, z: 1.6, rotation: 0 },
      { key: 'displayTable', x: 1, z: 0.4, rotation: 0 }, { key: 'displayTable', x: 1, z: 2.4, rotation: 0 },
      { key: 'mannequin', x: 2.8, z: -0.6, rotation: 0 }, { key: 'mannequin', x: -3.2, z: -1.6, rotation: 0 },
      { key: 'fitting', x: 2.8, z: 3, rotation: 0 }, { key: 'plant', x: -3.2, z: 3.4, rotation: 0 },
      { key: 'exit', x: 0, z: 4.4, rotation: 0 }, { key: 'exit', x: 3.6, z: -4.4, rotation: 0 },
    ],
  },
  restaurant: {
    label: 'Restaurant',
    subtitle: 'dining + booths',
    use: 'assembly',
    room: { width: 11, depth: 8 },
    items: [
      { key: 'hostStand', x: -4.6, z: 3.2, rotation: 0 }, { key: 'counter', x: 3.8, z: -2.8, rotation: 0 },
      { key: 'restaurantBooth', x: -3.6, z: -2.2, rotation: 0 }, { key: 'restaurantBooth', x: -3.6, z: 0.6, rotation: 0 },
      { key: 'dine4', x: 0, z: -1.4, rotation: 0 }, { key: 'dine4', x: 0, z: 1.6, rotation: 0 },
      { key: 'dine4', x: 2.6, z: 1.6, rotation: 0 }, { key: 'dine4', x: -1.4, z: 3.2, rotation: 0 },
      { key: 'plant', x: 4.8, z: 3.2, rotation: 0 }, { key: 'plant', x: 4.8, z: 0.4, rotation: 0 },
      { key: 'exit', x: 0, z: 3.7, rotation: 0 }, { key: 'exit', x: -5.4, z: -1, rotation: 1.57 },
    ],
  },
}
