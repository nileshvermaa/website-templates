import * as THREE from 'three';

/* Current brand colour — new branded parts are built with this; existing ones
   are recoloured by traversing the scene (see main.js setBrandColor). */
export let CUR_BRAND = '#e0654f';
export function rememberBrand(hex) { CUR_BRAND = hex; }

/* Shared (non-branded) materials */
const M = {
  oat:   new THREE.MeshStandardMaterial({ color: 0xcdbb97, roughness: 0.85 }),
  top:   new THREE.MeshStandardMaterial({ color: 0xe2d7be, roughness: 0.8 }),
  dark:  new THREE.MeshStandardMaterial({ color: 0x3a3733, roughness: 0.7, metalness: 0.1 }),
  metal: new THREE.MeshStandardMaterial({ color: 0x8a857c, roughness: 0.5, metalness: 0.5 }),
  glass: new THREE.MeshStandardMaterial({ color: 0xbfe0e6, roughness: 0.1, transparent: true, opacity: 0.35 }),
  green: new THREE.MeshStandardMaterial({ color: 0x6f8f5f, roughness: 0.85 }),
  pot:   new THREE.MeshStandardMaterial({ color: 0x9c6b4a, roughness: 0.85 }),
  light: new THREE.MeshStandardMaterial({ color: 0xefe9dd, roughness: 0.9 }),
};

function box(w, h, d, mat, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  m.position.set(x, y, z); m.castShadow = true; m.receiveShadow = true; return m;
}
function cyl(r, h, mat, x = 0, y = 0, z = 0, seg = 24) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, seg), mat);
  m.position.set(x, y, z); m.castShadow = true; m.receiveShadow = true; return m;
}
/* Branded box/cyl — own material, tagged so the picker can recolour it. */
function bbox(w, h, d, x, y, z) {
  const m = box(w, h, d, new THREE.MeshStandardMaterial({ color: CUR_BRAND, roughness: 0.55 }), x, y, z);
  m.userData.branded = true; return m;
}
function bcyl(r, h, x, y, z, seg = 24) {
  const m = cyl(r, h, new THREE.MeshStandardMaterial({ color: CUR_BRAND, roughness: 0.55 }), x, y, z, seg);
  m.userData.branded = true; return m;
}

function chair(accent = false) {
  const g = new THREE.Group();
  const seat = accent ? bbox(0.44, 0.06, 0.44, 0, 0.45, 0) : box(0.44, 0.06, 0.44, M.dark, 0, 0.45, 0);
  const back = accent ? bbox(0.44, 0.42, 0.06, 0, 0.66, -0.19) : box(0.44, 0.42, 0.06, M.dark, 0, 0.66, -0.19);
  g.add(seat, back);
  [[-0.17, -0.17], [0.17, -0.17], [-0.17, 0.17], [0.17, 0.17]].forEach(([x, zz]) =>
    g.add(cyl(0.02, 0.45, M.metal, x, 0.22, zz, 8)));
  return g;
}
/* place a freshly built chair at (x,z) facing the centre, then add to group */
function seatAt(g, x, z, ry, accent = false) {
  const c = chair(accent); c.position.set(x, 0, z); c.rotation.y = ry; g.add(c);
}

/* ----- builders ----- each returns a Group centred at the origin, on y=0 ----- */
const build = {
  cafe2() {
    const g = new THREE.Group();
    g.add(cyl(0.06, 0.72, M.metal, 0, 0.36, 0), cyl(0.36, 0.05, M.top, 0, 0.74, 0));
    g.add(cyl(0.3, 0.04, M.dark, 0, 0.02, 0));
    seatAt(g, 0, 0.55, Math.PI); seatAt(g, 0, -0.55, 0);
    return g;
  },
  cafe4() {
    const g = new THREE.Group();
    g.add(box(0.9, 0.05, 0.9, M.top, 0, 0.74, 0), box(0.08, 0.72, 0.08, M.metal, 0, 0.36, 0));
    seatAt(g, 0, 0.62, Math.PI); seatAt(g, 0, -0.62, 0);
    seatAt(g, 0.62, 0, -Math.PI / 2); seatAt(g, -0.62, 0, Math.PI / 2);
    return g;
  },
  counter() {
    const g = new THREE.Group();
    g.add(bbox(2.4, 1.0, 0.6, 0, 0.5, 0));                 // branded front
    g.add(box(2.4, 0.06, 0.72, M.top, 0, 1.04, 0.02));     // worktop overhang
    g.add(box(2.2, 0.3, 0.5, M.dark, 0, 1.2, -0.05));      // back gantry
    return g;
  },
  stool() {
    const g = new THREE.Group();
    g.add(cyl(0.04, 0.74, M.metal, 0, 0.37, 0), bcyl(0.2, 0.07, 0, 0.76, 0));
    g.add(cyl(0.22, 0.02, M.metal, 0, 0.2, 0));
    return g;
  },
  lounge() {
    const g = new THREE.Group();
    g.add(bbox(0.78, 0.18, 0.74, 0, 0.34, 0));             // branded cushion base
    g.add(box(0.78, 0.45, 0.16, M.oat, 0, 0.55, -0.3));    // back
    g.add(box(0.16, 0.4, 0.74, M.oat, -0.31, 0.5, 0), box(0.16, 0.4, 0.74, M.oat, 0.31, 0.5, 0));
    return g;
  },
  pastry() {
    const g = new THREE.Group();
    g.add(box(1.2, 0.85, 0.6, M.dark, 0, 0.42, 0), box(1.18, 0.5, 0.58, M.glass, 0, 1.05, 0));
    g.add(box(1.2, 0.04, 0.6, M.top, 0, 0.86, 0));
    return g;
  },
  desk() {
    const g = new THREE.Group();
    g.add(box(1.3, 0.04, 0.7, M.top, 0, 0.74, 0));
    [[-0.6, -0.3], [0.6, -0.3], [-0.6, 0.3], [0.6, 0.3]].forEach(([x, z]) => g.add(box(0.05, 0.72, 0.05, M.metal, x, 0.36, z)));
    g.add(box(0.45, 0.3, 0.02, M.dark, 0, 0.95, -0.34)); // monitor
    seatAt(g, 0, 0.55, Math.PI);
    return g;
  },
  cluster() {
    const g = new THREE.Group();
    for (const sx of [-0.72, 0.72]) for (const sz of [-0.42, 0.42]) {
      const d = build.desk(); d.position.set(sx, 0, sz);
      if (sz > 0) d.rotation.y = Math.PI;
      g.add(d);
    }
    return g;
  },
  meeting() {
    const g = new THREE.Group();
    g.add(box(2.2, 0.05, 1.0, M.top, 0, 0.74, 0), box(1.9, 0.5, 0.1, M.metal, 0, 0.4, 0));
    for (const z of [-0.75, 0.75]) for (const x of [-0.7, 0, 0.7]) seatAt(g, x, z, z > 0 ? Math.PI : 0);
    return g;
  },
  phone() {
    const g = new THREE.Group();
    g.add(box(1.0, 2.1, 1.0, M.light, 0, 1.05, 0));
    g.add(bbox(1.02, 0.18, 1.02, 0, 2.0, 0));              // branded cap
    g.add(box(0.6, 1.3, 0.02, M.glass, 0, 1.1, 0.5));      // glass door
    return g;
  },
  shelf() {
    const g = new THREE.Group();
    g.add(box(0.9, 1.8, 0.36, M.oat, 0, 0.9, 0));
    for (const y of [0.4, 0.85, 1.3]) g.add(box(0.86, 0.03, 0.34, M.top, 0, y, 0));
    return g;
  },
  chairO() { return chair(false); },

  rack() {
    const g = new THREE.Group();
    g.add(bcyl(0.03, 1.3, -0.55, 0.65, 0), bcyl(0.03, 1.3, 0.55, 0.65, 0));
    g.add(bcyl(0.025, 1.1, 0, 1.28, 0).rotateZ(Math.PI / 2));
    for (let i = 0; i < 6; i++) g.add(box(0.32, 0.5, 0.04, i % 2 ? M.oat : M.dark, -0.5 + i * 0.2, 0.95, 0));
    g.add(box(0.7, 0.04, 0.5, M.metal, 0, 0.05, 0));
    return g;
  },
  dtable() {
    const g = new THREE.Group();
    g.add(box(1.2, 0.78, 0.8, M.oat, 0, 0.39, 0), box(1.24, 0.04, 0.84, M.top, 0, 0.8, 0));
    return g;
  },
  wshelf() {
    const g = new THREE.Group();
    g.add(box(1.2, 1.6, 0.32, M.light, 0, 0.8, 0));
    for (const y of [0.5, 0.9, 1.3]) g.add(box(1.16, 0.03, 0.3, M.oat, 0, y, 0));
    return g;
  },
  checkout() {
    const g = new THREE.Group();
    g.add(bbox(1.5, 0.95, 0.7, 0, 0.47, 0), box(1.54, 0.05, 0.74, M.top, 0, 0.98, 0));
    g.add(box(0.3, 0.2, 0.25, M.dark, 0.4, 1.1, 0));       // register
    return g;
  },
  fitting() {
    const g = new THREE.Group();
    g.add(box(1.2, 2.1, 1.2, M.light, 0, 1.05, 0));
    g.add(box(1.0, 1.9, 0.04, M.oat, 0, 1.0, 0.6));        // curtain front
    g.add(bbox(1.22, 0.12, 1.22, 0, 2.05, 0));
    return g;
  },
  mannequin() {
    const g = new THREE.Group();
    g.add(cyl(0.18, 0.05, M.dark, 0, 0.03, 0), cyl(0.03, 1.1, M.metal, 0, 0.55, 0));
    g.add(bbox(0.34, 0.5, 0.2, 0, 1.2, 0));                // branded torso
    g.add(cyl(0.09, 0.18, M.light, 0, 1.55, 0));
    return g;
  },

  dine4() {
    const g = build.cafe4();
    return g;
  },
  rbooth() {
    const g = new THREE.Group();
    g.add(box(1.6, 0.05, 0.8, M.top, 0, 0.74, 0), box(0.1, 0.7, 0.7, M.metal, 0, 0.37, 0));
    g.add(bbox(1.8, 0.5, 0.4, 0, 0.25, 0.6), bbox(1.8, 0.5, 0.4, 0, 0.25, -0.6)); // branded benches
    g.add(bbox(1.8, 0.5, 0.12, 0, 0.7, 0.78), bbox(1.8, 0.5, 0.12, 0, 0.7, -0.78));
    return g;
  },
  host() {
    const g = new THREE.Group();
    g.add(bbox(0.8, 1.1, 0.5, 0, 0.55, 0), box(0.84, 0.04, 0.54, M.top, 0, 1.12, 0));
    return g;
  },

  plant() {
    const g = new THREE.Group();
    g.add(cyl(0.22, 0.4, M.pot, 0, 0.2, 0));
    const f = new THREE.Mesh(new THREE.IcosahedronGeometry(0.34, 0), M.green);
    f.position.y = 0.7; f.castShadow = true; g.add(f);
    return g;
  },
  exit() {
    const g = new THREE.Group();
    const post = new THREE.MeshStandardMaterial({ color: 0x5f8f5f, roughness: 0.6 });
    g.add(box(1.0, 0.12, 0.18, post, 0, 0.06, 0));
    g.add(box(0.1, 2.0, 0.1, post, -0.45, 1.0, 0), box(0.1, 2.0, 0.1, post, 0.45, 1.0, 0));
    g.add(box(1.0, 0.28, 0.06, post, 0, 2.05, 0));         // EXIT lintel
    g.userData.isExit = true;
    return g;
  },
};

/* small helpers used above */
function rot(obj, z, angle, axis) { obj.position.z = z; obj.rotation.y = angle; return obj; }

/* ----- catalog metadata ----- */
export const CATALOG = [
  // café
  { key: 'counter', cat: 'cafe', name: 'Service counter', w: 2.6, d: 0.8, seats: 0, cost: 2200, branded: true },
  { key: 'cafe2', cat: 'cafe', name: 'Café table · 2', w: 1.2, d: 1.5, seats: 2, cost: 340 },
  { key: 'cafe4', cat: 'cafe', name: 'Café table · 4', w: 1.5, d: 1.5, seats: 4, cost: 520 },
  { key: 'stool', cat: 'cafe', name: 'Bar stool', w: 0.5, d: 0.5, seats: 1, cost: 95, branded: true },
  { key: 'lounge', cat: 'cafe', name: 'Lounge chair', w: 0.85, d: 0.85, seats: 1, cost: 420, branded: true },
  { key: 'pastry', cat: 'cafe', name: 'Pastry display', w: 1.2, d: 0.6, seats: 0, cost: 1600 },
  // co-working
  { key: 'desk', cat: 'office', name: 'Workstation', w: 1.4, d: 1.4, seats: 1, cost: 480 },
  { key: 'cluster', cat: 'office', name: 'Desk cluster · 4', w: 3.0, d: 1.7, seats: 4, cost: 1800 },
  { key: 'meeting', cat: 'office', name: 'Meeting · 6', w: 2.6, d: 1.4, seats: 6, cost: 1500 },
  { key: 'phone', cat: 'office', name: 'Phone booth', w: 1.1, d: 1.1, seats: 1, cost: 2800, branded: true },
  { key: 'shelf', cat: 'office', name: 'Storage shelf', w: 0.9, d: 0.4, seats: 0, cost: 320 },
  { key: 'chairO', cat: 'office', name: 'Task chair', w: 0.6, d: 0.6, seats: 1, cost: 190 },
  // boutique
  { key: 'rack', cat: 'retail', name: 'Clothing rack', w: 1.2, d: 0.6, seats: 0, cost: 260, branded: true },
  { key: 'dtable', cat: 'retail', name: 'Display table', w: 1.3, d: 0.9, seats: 0, cost: 340 },
  { key: 'wshelf', cat: 'retail', name: 'Wall shelving', w: 1.2, d: 0.4, seats: 0, cost: 280 },
  { key: 'checkout', cat: 'retail', name: 'Checkout', w: 1.7, d: 0.8, seats: 0, cost: 1700, branded: true },
  { key: 'fitting', cat: 'retail', name: 'Fitting room', w: 1.3, d: 1.3, seats: 0, cost: 2100 },
  { key: 'mannequin', cat: 'retail', name: 'Mannequin', w: 0.5, d: 0.5, seats: 0, cost: 210, branded: true },
  // restaurant
  { key: 'dine4', cat: 'restaurant', name: 'Dining · 4', w: 1.5, d: 1.5, seats: 4, cost: 600 },
  { key: 'rbooth', cat: 'restaurant', name: 'Booth · 4', w: 1.9, d: 1.6, seats: 4, cost: 980, branded: true },
  { key: 'host', cat: 'restaurant', name: 'Host stand', w: 0.9, d: 0.6, seats: 0, cost: 640, branded: true },
  // common
  { key: 'plant', cat: 'common', name: 'Planter', w: 0.6, d: 0.6, seats: 0, cost: 70 },
  { key: 'exit', cat: 'common', name: 'Exit door', w: 1.0, d: 0.3, seats: 0, cost: 0 },
];

export const CAT_LABELS = { cafe: 'Café', office: 'Co-working', retail: 'Boutique', restaurant: 'Restaurant', common: 'Common' };
export const ITEM = Object.fromEntries(CATALOG.map((c) => [c.key, c]));

export function buildItem(key) {
  const g = build[key] ? build[key]() : build.plant();
  g.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  return g;
}

/* ----- templates: room + pre-placed items (metres, origin at room centre) ----- */
export const TEMPLATES = {
  cafe: {
    label: 'Café', sub: 'counter + seating', use: 'assembly', w: 9, d: 7,
    items: [
      { key: 'counter', x: 0, z: -2.6 }, { key: 'pastry', x: 2.2, z: -2.7 },
      { key: 'stool', x: -1.6, z: -1.7 }, { key: 'stool', x: -0.9, z: -1.7 }, { key: 'stool', x: -0.2, z: -1.7 },
      { key: 'cafe2', x: -2.8, z: 0.6 }, { key: 'cafe2', x: -2.8, z: 2.2 },
      { key: 'cafe4', x: 0.4, z: 1.4 }, { key: 'cafe4', x: 2.6, z: 1.4 },
      { key: 'lounge', x: 3.2, z: -0.4, rot: -1.2 }, { key: 'plant', x: -3.6, z: -2.4 },
      { key: 'exit', x: 0, z: 3.4 }, { key: 'exit', x: -4.4, z: -1, rot: 1.57 },
    ],
  },
  coworking: {
    label: 'Co-working', sub: 'desks + meeting', use: 'office', w: 12, d: 8,
    items: [
      { key: 'cluster', x: -3.2, z: -1.2 }, { key: 'cluster', x: -3.2, z: 1.8 },
      { key: 'meeting', x: 3.4, z: -1.6 }, { key: 'phone', x: 4.6, z: 2.2 },
      { key: 'phone', x: 3.0, z: 2.2 }, { key: 'shelf', x: 0.2, z: -3.4 },
      { key: 'plant', x: -5.2, z: 3.2 }, { key: 'plant', x: 5.2, z: -3.2 },
      { key: 'exit', x: 0, z: 3.7 }, { key: 'exit', x: -5.9, z: 0, rot: 1.57 },
    ],
  },
  boutique: {
    label: 'Boutique', sub: 'fixtures + fitting', use: 'retail', w: 8, d: 9,
    items: [
      { key: 'checkout', x: -2.4, z: -3.2 }, { key: 'wshelf', x: 3.4, z: -3, rot: 0 },
      { key: 'rack', x: -2.2, z: 0 }, { key: 'rack', x: -2.2, z: 1.6 },
      { key: 'dtable', x: 1.0, z: 0.4 }, { key: 'dtable', x: 1.0, z: 2.4 },
      { key: 'mannequin', x: 2.8, z: -0.6 }, { key: 'mannequin', x: -3.2, z: -1.6 },
      { key: 'fitting', x: 2.8, z: 3.0 }, { key: 'plant', x: -3.2, z: 3.4 },
      { key: 'exit', x: 0, z: 4.4 }, { key: 'exit', x: 3.6, z: -4.4 },
    ],
  },
  restaurant: {
    label: 'Restaurant', sub: 'dining + booths', use: 'assembly', w: 11, d: 8,
    items: [
      { key: 'host', x: -4.6, z: 3.2 }, { key: 'counter', x: 3.8, z: -2.8 },
      { key: 'rbooth', x: -3.6, z: -2.2 }, { key: 'rbooth', x: -3.6, z: 0.6 },
      { key: 'dine4', x: 0, z: -1.4 }, { key: 'dine4', x: 0, z: 1.6 },
      { key: 'dine4', x: 2.6, z: 1.6 }, { key: 'dine4', x: -1.4, z: 3.2 },
      { key: 'plant', x: 4.8, z: 3.2 }, { key: 'plant', x: 4.8, z: 0.4 },
      { key: 'exit', x: 0, z: 3.7 }, { key: 'exit', x: -5.4, z: -1, rot: 1.57 },
    ],
  },
};

/* density target (m² per person) by use type */
export const DENSITY = { assembly: 1.4, office: 9, retail: 3.7 };
