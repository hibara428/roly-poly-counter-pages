/**
 * State
 */
export type UserInfo = {
  id: number
  email: string
}
export type State = {
  errors: string[]
  messages: string[]
  user: UserInfo
}

/**
 * Data
 */
export type Direction = 'east' | 'west' | 'south' | 'north'
export type DirectionCounts = {
  east: number
  west: number
  south: number
  north: number
}
export type OtherObjects = 'dog' | 'cat' | 'butterfly'
export type OtherCounts = {
  dog: number
  cat: number
  butterfly: number
}

/**
 * Props
 */
export type DailyCountsTableProps = {
  rolyPolyCounts: DirectionCounts
  otherCounts: OtherCounts
}
export type RolyPolyCountsProps = {
  counts: DirectionCounts
}
export type OtherCountsProps = {
  counts: OtherCounts
}
export type StatsTableProps = {
  rolyPolyCounts: DirectionCounts
  otherCounts: OtherCounts
}
export type RolyPolyStatsProps = {
  counts: DirectionCounts
}
export type OtherStatsProps = {
  counts: OtherCounts
}
export type YearsSelectProps = {
  startYear: number
}

/**
 * API
 */
export type BaseApiResponse = {
  message: string
}
