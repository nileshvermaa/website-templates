export type PlannerUse = 'assembly' | 'office' | 'retail'
export type PlannerView = 'plan' | '3d'
export type ItemCategory = 'cafe' | 'office' | 'retail' | 'restaurant' | 'common'
export type ToolKey = 'select' | CatalogKey

export interface CatalogItem {
  key: string
  category: ItemCategory
  name: string
  width: number
  depth: number
  seats: number
  cost: number
  branded?: boolean
}

export interface PlannerItem {
  id: string
  key: CatalogKey
  x: number
  z: number
  rotation: number
}

export interface RoomSpec {
  width: number
  depth: number
}

export interface TemplateDefinition {
  label: string
  subtitle: string
  use: PlannerUse
  room: RoomSpec
  items: Array<Omit<PlannerItem, 'id'>>
}

export interface PlannerState {
  room: RoomSpec
  use: PlannerUse
  templateLabel: string
  view: PlannerView
  activeTool: ToolKey
  fireSafety: boolean
  brand: string
  items: PlannerItem[]
  selectedId: string | null
  costOpen: boolean
}

export type CatalogKey =
  | 'counter'
  | 'cafe2'
  | 'cafe4'
  | 'stool'
  | 'lounge'
  | 'pastry'
  | 'desk'
  | 'cluster'
  | 'meeting'
  | 'phone'
  | 'shelf'
  | 'taskChair'
  | 'rack'
  | 'displayTable'
  | 'wallShelf'
  | 'checkout'
  | 'fitting'
  | 'mannequin'
  | 'dine4'
  | 'restaurantBooth'
  | 'hostStand'
  | 'plant'
  | 'exit'
