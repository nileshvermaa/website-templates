import { DENSITY_TARGETS, ITEM } from './catalog'
import type { CatalogKey, PlannerItem, PlannerUse, RoomSpec } from './types'

export interface PlannerMetrics {
  counts: Partial<Record<CatalogKey, number>>
  seats: number
  exits: number
  area: number
  maxSeats: number
  density: number
  status: 'ok' | 'warn' | 'over'
  statusLabel: string
  totalCost: number
}

export function money(value: number) {
  return '$' + Math.round(value).toLocaleString('en-US')
}

export function calculateMetrics(items: PlannerItem[], room: RoomSpec, use: PlannerUse): PlannerMetrics {
  const counts: Partial<Record<CatalogKey, number>> = {}
  let seats = 0
  let exits = 0
  let totalCost = 0

  items.forEach((item) => {
    const meta = ITEM[item.key]
    counts[item.key] = (counts[item.key] ?? 0) + 1
    seats += meta.seats
    totalCost += meta.cost
    if (item.key === 'exit') exits += 1
  })

  const area = room.width * room.depth
  const maxSeats = Math.max(1, Math.floor(area / DENSITY_TARGETS[use]))
  const density = seats / area
  let status: PlannerMetrics['status'] = 'ok'
  let statusLabel = 'OK'

  if (seats > 0 && exits < 1) {
    status = 'over'
    statusLabel = 'No exit'
  } else if (seats > maxSeats) {
    status = 'over'
    statusLabel = 'Over'
  } else if (seats > maxSeats * 0.85) {
    status = 'warn'
    statusLabel = 'Tight'
  }

  return { counts, seats, exits, area, maxSeats, density, status, statusLabel, totalCost }
}

export function clampNumber(value: number, min: number, max: number, fallback: number) {
  if (Number.isNaN(value)) return fallback
  return Math.max(min, Math.min(max, value))
}
