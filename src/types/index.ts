/**
 * State
 */
export interface UserInfo {
  id: number
  email: string
}
export interface State {
  errors: string[]
  messages: string[]
  user: UserInfo
}

/**
 * Types
 */
export type Direction = 'east' | 'west' | 'south' | 'north'
export interface DirectionCounts {
  east: number
  west: number
  south: number
  north: number
}
export type OtherObjects = 'dog' | 'cat' | 'butterfly'
export interface OtherCounts {
  dog: number
  cat: number
  butterfly: number
}
export class Stats {
  rolyPoly: DirectionCounts
  others: OtherCounts

  /**
   * Constructor.
   *
   * @param rolyPoly
   * @param others
   */
  constructor(rolyPoly?: DirectionCounts, others?: OtherCounts) {
    this.rolyPoly = {
      east: rolyPoly?.east || 0,
      west: rolyPoly?.west || 0,
      south: rolyPoly?.south || 0,
      north: rolyPoly?.north || 0
    }
    this.others = {
      dog: others?.dog || 0,
      cat: others?.cat || 0,
      butterfly: others?.butterfly || 0
    }
  }

  /**
   * Merge stats.
   *
   * @param stats
   * @returns
   */
  merge(stats: Stats): Stats {
    this.rolyPoly.east += stats.rolyPoly.east
    this.rolyPoly.west += stats.rolyPoly.west
    this.rolyPoly.south += stats.rolyPoly.south
    this.rolyPoly.north += stats.rolyPoly.north
    if (!this.others?.dog) {
      this.others.dog = 0
    }
    this.others.dog += stats.others?.dog || 0
    if (!this.others?.cat) {
      this.others.cat = 0
    }
    this.others.cat += stats.others?.cat || 0
    if (!this.others?.butterfly) {
      this.others.butterfly = 0
    }
    this.others.butterfly += stats.others?.butterfly || 0
    return this
  }
}

/**
 * Props
 */
export interface DailyCountsTableProps {
  rolyPolyCounts: DirectionCounts
  otherCounts: OtherCounts
}
export interface RolyPolyCountsProps {
  counts: DirectionCounts
}
export interface OtherCountsProps {
  counts: OtherCounts
}
export interface StatsTableProps {
  rolyPolyCounts: DirectionCounts
  otherCounts: OtherCounts
}
export interface RolyPolyStatsProps {
  counts: DirectionCounts
}
export interface OtherStatsProps {
  counts: OtherCounts
}
export interface YearsSelectProps {
  startYear: number
}

/**
 * API
 */
export interface BaseApiResponse {
  message: string
}
