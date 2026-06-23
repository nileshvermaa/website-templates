import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import {
  CATALOG, CAT_LABELS, ITEM, TEMPLATES, DENSITY,
  buildItem, rememberBrand,
} from './catalog.js';

/* ----------------------------------------------------------- state */
const state = {
  room: { w: 9, d: 7 },
  use: 'assembly',
  templateLabel: 'Café',
  view: 'plan',
  tool: 'select',
  fireOn: false,
  brand: '#e0654f',
  selected: null,
  dragging: false,
  grab: new THREE.Vector3(),
};

/* ----------------------------------------------------------- three setup */
const canvas = document.getElementById('scene');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xefe9dd);

const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 200);
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.maxPolarAngle = Math.PI / 2.05;

scene.add(new THREE.HemisphereLight(0xffffff, 0xcdbb97, 0.85));
const sun = new THREE.DirectionalLight(0xfff6e8, 1.05);
sun.position.set(6, 12, 8);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.near = 1; sun.shadow.camera.far = 60;
sun.shadow.camera.left = -20; sun.shadow.camera.right = 20;
sun.shadow.camera.top = 20; sun.shadow.camera.bottom = -20;
scene.add(sun);

const roomItems = new THREE.Group();
const egressGroup = new THREE.Group();
scene.add(roomItems, egressGroup);

let floorMesh = null, walls = null, grid = null;
const selBox = new THREE.BoxHelper(new THREE.Object3D(), 0x2b2925);
selBox.visible = false;
scene.add(selBox);

/* ----------------------------------------------------------- room */
function buildRoom() {
  [floorMesh, walls, grid].forEach((o) => o && scene.remove(o));
  const { w, d } = state.room;

  floorMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(w, d),
    new THREE.MeshStandardMaterial({ color: 0xf3efe6, roughness: 0.95 })
  );
  floorMesh.rotation.x = -Math.PI / 2;
  floorMesh.receiveShadow = true;
  scene.add(floorMesh);

  grid = new THREE.GridHelper(Math.max(w, d), Math.round(Math.max(w, d)), 0xb9ab8c, 0xd8cbac);
  grid.position.y = 0.012;
  // clip the helper to the room via a slightly larger faint border
  scene.add(grid);

  walls = new THREE.Group();
  const wmat = new THREE.MeshStandardMaterial({ color: 0xe7e1d4, roughness: 0.9 });
  const H = 1.3, t = 0.1;
  const seg = (ww, hh, dd, x, y, z) => { const m = new THREE.Mesh(new THREE.BoxGeometry(ww, hh, dd), wmat); m.position.set(x, y, z); m.receiveShadow = true; walls.add(m); };
  seg(w + t, H, t, 0, H / 2, -d / 2); seg(w + t, H, t, 0, H / 2, d / 2);
  seg(t, H, d + t, -w / 2, H / 2, 0); seg(t, H, d + t, w / 2, H / 2, 0);
  scene.add(walls);
}

/* ----------------------------------------------------------- items */
function addItem(key, x, z, rot = 0) {
  const meta = ITEM[key]; if (!meta) return null;
  const g = buildItem(key);
  g.position.set(snap(x), 0, snap(z));
  g.rotation.y = rot;
  g.userData.key = key;
  roomItems.add(g);
  return g;
}

function clearRoom() {
  [...roomItems.children].forEach((c) => roomItems.remove(c));
  deselect();
  refresh();
}

function loadTemplate(name) {
  const t = TEMPLATES[name]; if (!t) return;
  clearRoom();
  state.room = { w: t.w, d: t.d };
  state.use = t.use;
  state.templateLabel = t.label;
  document.getElementById('roomW').value = t.w;
  document.getElementById('roomD').value = t.d;
  buildRoom();
  t.items.forEach((it) => addItem(it.key, it.x, it.z, it.rot || 0));
  snapCamera();
  refresh();
}

/* ----------------------------------------------------------- selection */
function select(group) {
  state.selected = group;
  selBox.setFromObject(group);
  selBox.visible = true;
  renderSelected();
}
function deselect() { state.selected = null; selBox.visible = false; renderSelected(); }
function deleteSelected() {
  if (!state.selected) return;
  roomItems.remove(state.selected);
  deselect();
  refresh();
}
function rotateSelected() {
  if (!state.selected) return;
  state.selected.rotation.y += Math.PI / 2;
  selBox.setFromObject(state.selected);
  buildEgress();
}

function itemRootOf(obj) {
  while (obj && obj.parent && obj.parent !== roomItems) obj = obj.parent;
  return obj && obj.parent === roomItems ? obj : null;
}

/* ----------------------------------------------------------- pointer */
const ray = new THREE.Raycaster();
const ndc = new THREE.Vector2();
let downXY = null;

function pointer(e) {
  const r = canvas.getBoundingClientRect();
  ndc.x = ((e.clientX - r.left) / r.width) * 2 - 1;
  ndc.y = -((e.clientY - r.top) / r.height) * 2 + 1;
}
function floorPoint() {
  ray.setFromCamera(ndc, camera);
  const hit = ray.intersectObject(floorMesh, false)[0];
  return hit ? hit.point : null;
}
function snap(v) { return Math.round(v / 0.25) * 0.25; }
function clampToRoom(p) {
  const { w, d } = state.room;
  p.x = Math.max(-w / 2 + 0.3, Math.min(w / 2 - 0.3, p.x));
  p.z = Math.max(-d / 2 + 0.3, Math.min(d / 2 - 0.3, p.z));
  return p;
}

canvas.addEventListener('pointerdown', (e) => {
  pointer(e);
  downXY = { x: e.clientX, y: e.clientY };

  if (state.tool !== 'select') {              // placement mode
    const p = floorPoint();
    if (p) { clampToRoom(p); const g = addItem(state.tool, p.x, p.z); select(g); refresh(); }
    return;
  }
  // select / drag
  ray.setFromCamera(ndc, camera);
  const hits = ray.intersectObjects(roomItems.children, true);
  const root = hits.length ? itemRootOf(hits[0].object) : null;
  if (root) {
    select(root);
    const p = floorPoint();
    if (p) { state.grab.set(root.position.x - p.x, 0, root.position.z - p.z); state.dragging = true; controls.enabled = false; }
  } else {
    deselect();
  }
});

canvas.addEventListener('pointermove', (e) => {
  if (!state.dragging || !state.selected) return;
  pointer(e);
  const p = floorPoint(); if (!p) return;
  const np = clampToRoom(new THREE.Vector3(p.x + state.grab.x, 0, p.z + state.grab.z));
  state.selected.position.set(snap(np.x), 0, snap(np.z));
  selBox.setFromObject(state.selected);
});

canvas.addEventListener('pointerup', () => {
  if (state.dragging) { state.dragging = false; controls.enabled = state.view === '3d'; buildEgress(); }
});

window.addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT') return;
  if (e.key === 'Delete' || e.key === 'Backspace') { deleteSelected(); }
  if (e.key === 'r' || e.key === 'R') { rotateSelected(); }
  if (e.key === 'v' || e.key === 'V') { setTool('select'); }
});

/* ----------------------------------------------------------- capacity + cost */
function tally() {
  const counts = {}; let seats = 0, exits = 0;
  roomItems.children.forEach((g) => {
    const m = ITEM[g.userData.key];
    counts[g.userData.key] = (counts[g.userData.key] || 0) + 1;
    seats += m.seats;
    if (g.userData.key === 'exit') exits++;
  });
  return { counts, seats, exits };
}

function updateCapacity({ seats, exits }) {
  const area = state.room.w * state.room.d;
  const target = DENSITY[state.use];
  const max = Math.max(1, Math.floor(area / target));
  const pct = Math.min(seats / max, 1) * 100;

  let status = 'ok', label = 'OK';
  if (seats > 0 && exits < 1) { status = 'over'; label = 'No exit'; }
  else if (seats > max) { status = 'over'; label = 'Over'; }
  else if (seats > max * 0.85) { status = 'warn'; label = 'Tight'; }

  const fill = document.getElementById('meterFill');
  fill.style.width = pct + '%';
  fill.style.background = status === 'over' ? 'var(--over)' : status === 'warn' ? 'var(--warn)' : 'var(--brand)';

  const pill = document.getElementById('meterStatus');
  pill.className = 'pill pill-' + status;
  pill.textContent = label;

  document.getElementById('meterUse').textContent =
    `${state.templateLabel} · ${state.use}`;
  document.getElementById('meterMax').textContent = max + ' seats';
  document.getElementById('statSeats').textContent = seats;
  document.getElementById('statArea').textContent = area.toFixed(1) + ' m²';
  document.getElementById('statDensity').textContent = (seats / area).toFixed(2) + ' /m²';
  document.getElementById('statMax').textContent = max;
  document.getElementById('statExits').textContent = exits;

  const note = document.getElementById('capacityNote');
  if (seats > 0 && exits < 1) note.textContent = '⚠ No exit placed — add an exit door from the “Common” tab.';
  else if (seats > max) note.textContent = `⚠ ${seats - max} seats over the recommended occupancy for this area.`;
  else note.textContent = `Egress: ${exits} exit${exits === 1 ? '' : 's'} placed. Toggle “Show fire safety” to view paths.`;
}

const money = (n) => '$' + Math.round(n).toLocaleString('en-US');
function updateCost({ counts }) {
  const body = document.getElementById('costBody');
  body.innerHTML = '';
  let total = 0;
  const rows = Object.entries(counts)
    .filter(([k]) => ITEM[k].cost > 0)
    .sort((a, b) => ITEM[b[0]].cost * b[1] - ITEM[a[0]].cost * a[1]);
  if (!rows.length) {
    body.innerHTML = '<div class="cost-empty">No costed items yet. Place fixtures to build the estimate.</div>';
  }
  rows.forEach(([k, qty]) => {
    const sub = ITEM[k].cost * qty; total += sub;
    const line = document.createElement('div');
    line.className = 'cost-line';
    line.innerHTML = `<span class="cl-name">${ITEM[k].name}<span class="cl-qty">×${qty}</span></span><span class="cl-sub">${money(sub)}</span>`;
    body.appendChild(line);
  });
  document.getElementById('costTotal').textContent = money(total);
  return total;
}

/* ----------------------------------------------------------- egress */
function nearestExit(pos, exits) {
  let best = null, bd = Infinity;
  exits.forEach((ex) => { const dd = pos.distanceToSquared(ex); if (dd < bd) { bd = dd; best = ex; } });
  return best;
}
const egressPaths = [];
function buildEgress() {
  [...egressGroup.children].forEach((c) => egressGroup.remove(c));
  egressPaths.length = 0;
  if (!state.fireOn) return;

  const exits = roomItems.children.filter((g) => g.userData.key === 'exit')
    .map((g) => new THREE.Vector3(g.position.x, 0.06, g.position.z));
  if (!exits.length) return;

  const seatItems = roomItems.children.filter((g) => ITEM[g.userData.key].seats > 0);
  const brand = new THREE.Color(state.brand);

  seatItems.forEach((g) => {
    const a = new THREE.Vector3(g.position.x, 0.06, g.position.z);
    const b = nearestExit(a, exits);
    // faint guide line
    const line = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([a, b]),
      new THREE.LineBasicMaterial({ color: brand, transparent: true, opacity: 0.35 })
    );
    egressGroup.add(line);
    // arrowhead at the exit
    const dir = b.clone().sub(a).normalize();
    const head = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.3, 12), new THREE.MeshBasicMaterial({ color: brand }));
    head.position.copy(b.clone().sub(dir.clone().multiplyScalar(0.25)));
    head.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
    egressGroup.add(head);
    // flowing dots
    const dots = [];
    for (let i = 0; i < 4; i++) {
      const dot = new THREE.Mesh(new THREE.SphereGeometry(0.06, 10, 10), new THREE.MeshBasicMaterial({ color: brand }));
      egressGroup.add(dot); dots.push(dot);
    }
    egressPaths.push({ a, b, dots });
  });
}
function animateEgress(now) {
  if (!state.fireOn || !egressPaths.length) return;
  egressPaths.forEach(({ a, b, dots }) => {
    dots.forEach((dot, i) => {
      const t = ((now * 0.00018) + i / dots.length) % 1;
      dot.position.lerpVectors(a, b, t);
    });
  });
}

/* ----------------------------------------------------------- brand */
function setBrandColor(hex) {
  state.brand = hex;
  rememberBrand(hex);
  scene.traverse((o) => { if (o.isMesh && o.userData.branded) o.material.color.set(hex); });
  document.documentElement.style.setProperty('--brand', hex);
  document.getElementById('brandColor').value = hex;
  document.querySelectorAll('.swatch').forEach((s) => s.classList.toggle('is-active', s.dataset.color === hex));
  buildEgress();
}

/* ----------------------------------------------------------- camera */
let tween = null;
function camFor(mode) {
  const { w, d } = state.room;
  const m = Math.max(w, d);
  if (mode === 'plan') return { pos: new THREE.Vector3(0, m * 1.5 + 6, 0.9), tar: new THREE.Vector3(0, 0, 0) };
  return { pos: new THREE.Vector3(m * 0.45, m * 0.7 + 3, d * 0.8 + 5), tar: new THREE.Vector3(0, 0.4, 0) };
}
function snapCamera() {
  const c = camFor(state.view);
  camera.position.copy(c.pos); controls.target.copy(c.tar); controls.update();
}
function swingCamera(mode) {
  state.view = mode;
  const c = camFor(mode);
  tween = { fromPos: camera.position.clone(), toPos: c.pos, fromTar: controls.target.clone(), toTar: c.tar, t: 0, dur: 850 };
  controls.enabled = false;
  document.getElementById('viewBadge').textContent = mode === 'plan' ? 'Floor plan' : '3D view';
  document.querySelectorAll('.seg-btn').forEach((b) => b.classList.toggle('is-active', b.dataset.view === mode));
}
const easeInOut = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

/* ----------------------------------------------------------- refresh */
function refresh() {
  const t = tally();
  updateCapacity(t);
  updateCost(t);
  buildEgress();
}
function renderSelected() {
  const el = document.getElementById('selInfo');
  if (!state.selected) { el.className = 'sel-empty'; el.textContent = 'Nothing selected.'; return; }
  const m = ITEM[state.selected.userData.key];
  el.className = 'sel-card';
  el.innerHTML = `
    <div class="sel-name">${m.name}</div>
    <div class="sel-meta">${m.w}×${m.d} m · ${m.seats ? m.seats + ' seats · ' : ''}${m.cost ? money(m.cost) : 'no cost'}</div>
    <div class="sel-actions">
      <button data-act="rotate">Rotate</button>
      <button data-act="delete">Delete</button>
    </div>`;
  el.querySelector('[data-act="rotate"]').onclick = rotateSelected;
  el.querySelector('[data-act="delete"]').onclick = deleteSelected;
}

/* ----------------------------------------------------------- UI wiring */
function setTool(tool) {
  state.tool = tool;
  document.querySelectorAll('.tool').forEach((b) => b.classList.toggle('is-active', b.dataset.tool === tool));
  document.querySelectorAll('.cat-item').forEach((b) => b.classList.toggle('is-active', b.dataset.key === tool));
  const hint = document.getElementById('vpHint');
  hint.textContent = tool === 'select'
    ? 'Click a fixture to select · drag to move · R to rotate · Del to remove'
    : `Click the floor to place: ${ITEM[tool].name}`;
}

function buildCatalogUI() {
  const tabs = document.getElementById('catTabs');
  const list = document.getElementById('catalog');
  const cats = ['cafe', 'office', 'retail', 'restaurant', 'common'];
  let active = 'cafe';
  const renderItems = () => {
    list.innerHTML = '';
    CATALOG.filter((c) => c.cat === active).forEach((c) => {
      const b = document.createElement('button');
      b.className = 'cat-item'; b.dataset.key = c.key;
      b.innerHTML = `<span class="ci-name">${c.name}${c.branded ? '<span class="cat-swatch"></span>' : ''}</span>
        <span class="ci-meta">${c.seats ? c.seats + ' seats · ' : ''}${c.cost ? money(c.cost) : '—'}</span>`;
      b.onclick = () => setTool(c.key);
      list.appendChild(b);
    });
    if (state.tool !== 'select') document.querySelectorAll('.cat-item').forEach((b) => b.classList.toggle('is-active', b.dataset.key === state.tool));
  };
  cats.forEach((cat, i) => {
    const t = document.createElement('button');
    t.className = 'cat-tab' + (i === 0 ? ' is-active' : '');
    t.textContent = CAT_LABELS[cat];
    t.onclick = () => { active = cat; document.querySelectorAll('.cat-tab').forEach((x) => x.classList.remove('is-active')); t.classList.add('is-active'); renderItems(); };
    tabs.appendChild(t);
  });
  renderItems();
}

function buildTemplateUI() {
  const grid = document.getElementById('templateGrid');
  const cards = document.getElementById('templateCards');
  Object.entries(TEMPLATES).forEach(([key, t]) => {
    const b = document.createElement('button');
    b.className = 'template-btn';
    b.innerHTML = `${t.label}<span>${t.sub}</span>`;
    b.onclick = () => loadTemplate(key);
    grid.appendChild(b);

    const card = document.createElement('div');
    card.className = 'tpl-card';
    card.innerHTML = `<div class="tc-art blueprint" style="background:linear-gradient(150deg, var(--oat), var(--paper));"></div>
      <div class="tc-body"><h4>${t.label}</h4><p>${t.sub} · ${t.w}×${t.d} m</p></div>`;
    card.onclick = () => { loadTemplate(key); document.getElementById('planner').scrollIntoView({ behavior: 'smooth' }); };
    cards.appendChild(card);
  });
}

function buildSwatches() {
  const colors = ['#e0654f', '#3f7d6e', '#3d6ea5', '#9b5fb0', '#d39a2e', '#2b2925'];
  const wrap = document.getElementById('swatches');
  colors.forEach((c) => {
    const s = document.createElement('button');
    s.className = 'swatch' + (c === state.brand ? ' is-active' : '');
    s.dataset.color = c; s.style.background = c;
    s.onclick = () => setBrandColor(c);
    wrap.appendChild(s);
  });
}

function wireControls() {
  document.querySelectorAll('.seg-btn').forEach((b) => b.onclick = () => swingCamera(b.dataset.view));
  document.querySelector('[data-tool="select"]').onclick = () => setTool('select');
  document.getElementById('rotateBtn').onclick = rotateSelected;
  document.getElementById('deleteBtn').onclick = deleteSelected;
  document.getElementById('clearBtn').onclick = clearRoom;
  document.getElementById('brandColor').oninput = (e) => setBrandColor(e.target.value);
  document.getElementById('fireToggle').onchange = (e) => {
    state.fireOn = e.target.checked;
    document.getElementById('egressLegend').classList.toggle('show', state.fireOn);
    buildEgress();
  };
  const cost = document.getElementById('costPanel');
  document.getElementById('costToggle').onclick = () => cost.classList.toggle('open');
  document.getElementById('costClose').onclick = () => cost.classList.remove('open');
  document.getElementById('roomW').onchange = applyRoomSize;
  document.getElementById('roomD').onchange = applyRoomSize;
  document.getElementById('exportBtn').onclick = exportPDF;
  document.querySelectorAll('[data-launch]').forEach((a) => a.addEventListener('click', () => {
    loadTemplate(a.dataset.launch); swingCamera('plan');
  }));
}
function applyRoomSize() {
  state.room.w = clampNum(document.getElementById('roomW').value, 3, 20, 9);
  state.room.d = clampNum(document.getElementById('roomD').value, 3, 20, 7);
  buildRoom(); snapCamera(); refresh();
}
const clampNum = (v, lo, hi, dflt) => { v = parseFloat(v); return isNaN(v) ? dflt : Math.max(lo, Math.min(hi, v)); };

/* ----------------------------------------------------------- export PDF */
function exportPDF() {
  renderer.render(scene, camera);
  const snap = renderer.domElement.toDataURL('image/png');
  const t = tally();
  const area = state.room.w * state.room.d;
  const max = Math.max(1, Math.floor(area / DENSITY[state.use]));

  document.getElementById('sheetTitle').textContent = `${state.templateLabel} layout`;
  document.getElementById('sheetMeta').textContent =
    `${state.view === 'plan' ? 'Floor plan' : '3D view'} · ${state.room.w.toFixed(1)} × ${state.room.d.toFixed(1)} m`;
  document.getElementById('sheetImg').src = snap;

  const stats = [
    ['Seats placed', t.seats], ['Floor area', area.toFixed(1) + ' m²'],
    ['Recommended max', max], ['Exits placed', t.exits],
  ];
  document.getElementById('sheetStats').innerHTML =
    '<h5>Capacity</h5>' + stats.map(([k, v]) => `<div class="row"><span>${k}</span><strong>${v}</strong></div>`).join('');

  let total = 0;
  const costRows = Object.entries(t.counts).filter(([k]) => ITEM[k].cost > 0)
    .map(([k, q]) => { const s = ITEM[k].cost * q; total += s; return `<div class="row"><span>${ITEM[k].name} ×${q}</span><strong>${money(s)}</strong></div>`; }).join('');
  document.getElementById('sheetCost').innerHTML =
    '<h5>Fit-out cost</h5>' + costRows + `<div class="row"><span><strong>Total</strong></span><strong>${money(total)}</strong></div>`;

  const overlay = document.getElementById('exportOverlay');
  const sheet = document.getElementById('exportSheet');
  const status = document.getElementById('sheetStatus');
  overlay.classList.add('show');
  sheet.classList.remove('build'); void sheet.offsetWidth; sheet.classList.add('build');
  status.textContent = 'Assembling layout sheet…';

  setTimeout(() => {
    status.textContent = 'Generating PDF…';
    generatePDF(snap, { area, max, t, total });
    status.textContent = 'Saved plot-layout.pdf ✓  — click anywhere to close';
  }, 1500);

  overlay.onclick = (e) => { if (e.target === overlay) overlay.classList.remove('show'); };
}

function generatePDF(snap, { area, max, t, total }) {
  if (!window.jspdf) { alert('PDF library still loading — try again in a moment.'); return; }
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
  const W = 297;

  doc.setFillColor(43, 41, 37); doc.rect(0, 0, W, 18, 'F');
  doc.setTextColor(255, 255, 255); doc.setFont('helvetica', 'bold'); doc.setFontSize(15);
  doc.text(`${state.templateLabel} layout`, 12, 12);
  doc.setFontSize(9); doc.setFont('helvetica', 'normal');
  doc.text(`Plot — ${state.room.w.toFixed(1)} × ${state.room.d.toFixed(1)} m`, W - 12, 12, { align: 'right' });

  const img = renderer.domElement;
  const iw = 180, ih = iw * (img.height / img.width);
  doc.setDrawColor(216, 203, 172); doc.setFillColor(243, 239, 230);
  doc.roundedRect(12, 24, iw, ih, 2, 2, 'F');
  doc.addImage(snap, 'PNG', 14, 26, iw - 4, ih - 4);

  let x = 200, y = 30;
  doc.setTextColor(43, 41, 37); doc.setFont('helvetica', 'bold'); doc.setFontSize(11);
  doc.text('Capacity', x, y); y += 6;
  doc.setFont('helvetica', 'normal'); doc.setFontSize(9);
  [['Seats placed', t.seats], ['Floor area', area.toFixed(1) + ' m2'], ['Recommended max', max], ['Exits', t.exits]]
    .forEach(([k, v]) => { doc.text(String(k), x, y); doc.text(String(v), W - 12, y, { align: 'right' }); y += 5.5; });

  y += 4; doc.setFont('helvetica', 'bold'); doc.setFontSize(11); doc.text('Fit-out cost', x, y); y += 6;
  doc.setFont('helvetica', 'normal'); doc.setFontSize(9);
  Object.entries(t.counts).filter(([k]) => ITEM[k].cost > 0).forEach(([k, q]) => {
    doc.text(`${ITEM[k].name} x${q}`, x, y); doc.text(money(ITEM[k].cost * q), W - 12, y, { align: 'right' }); y += 5.5;
  });
  y += 1; doc.setDrawColor(43, 41, 37); doc.line(x, y, W - 12, y); y += 6;
  doc.setFont('helvetica', 'bold'); doc.setFontSize(11);
  doc.text('Total', x, y); doc.text(money(total), W - 12, y, { align: 'right' });

  doc.save('plot-layout.pdf');
}

/* ----------------------------------------------------------- loop + resize */
function resize() {
  const r = canvas.parentElement.getBoundingClientRect();
  renderer.setSize(r.width, r.height, false);
  camera.aspect = r.width / r.height; camera.updateProjectionMatrix();
}
function loop(now) {
  if (tween) {
    tween.t = Math.min(1, tween.t + 16.6 / tween.dur);
    const k = easeInOut(tween.t);
    camera.position.lerpVectors(tween.fromPos, tween.toPos, k);
    controls.target.lerpVectors(tween.fromTar, tween.toTar, k);
    if (tween.t >= 1) { controls.enabled = state.view === '3d'; tween = null; }
  }
  controls.update();
  animateEgress(now);
  renderer.render(scene, camera);
  requestAnimationFrame(loop);
}

/* ----------------------------------------------------------- init */
buildCatalogUI();
buildTemplateUI();
buildSwatches();
wireControls();
buildRoom();
loadTemplate('cafe');
setTool('select');
snapCamera();
resize();
// ResizeObserver fixes the case where the viewport lays out after init
// (it fires once with the initial size, then on every change).
new ResizeObserver(resize).observe(canvas.parentElement);
window.addEventListener('resize', resize);
requestAnimationFrame(loop);
