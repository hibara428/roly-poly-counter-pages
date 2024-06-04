<template>
  <ContentTitle title="Daily Counter" />
  <DailyCountsTable :roly-poly-counts="rolyPolyCounts" :other-counts="otherCounts" />
  <CounterPanel @count-up-roly-poly="countUpRolyPoly" @count-up-others="countUpOthers" />
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import { useStore } from 'vuex'
import { isAxiosError } from 'axios'
import { key } from '@/stores'
import ContentTitle from '@/components/ContentTitle.vue'
import DailyCountsTable from '@/components/DailyCountsTable.vue'
import CounterPanel from '@/components/CounterPanel.vue'
import { Direction, DirectionCounts, OtherCounts, OtherObjects } from '@/types'
import BackendApi from '@/libs/BackendApi'

const store = useStore(key)
const api = new BackendApi(process.env.VUE_APP_API_URL)
// data
let rolyPolyCounts: DirectionCounts = reactive({
  east: 0,
  west: 0,
  south: 0,
  north: 0
})
let otherCounts: OtherCounts = reactive({
  dog: 0,
  cat: 0,
  butterfly: 0
})

// methods
onMounted(async () => {
  const today = new Date()
  await Promise.allSettled([fetchRolyPoly(today), fetchOthers(today)])
})
/**
 * Fetch roly-poly
 */
const fetchRolyPoly = async (day: Date) => {
  const data = await api.getRolyPolyCounts(store.state.user.id, day)
  rolyPolyCounts.east = data.east
  rolyPolyCounts.west = data.west
  rolyPolyCounts.south = data.south
  rolyPolyCounts.north = data.north
}
/**
 * Fetch others
 */
const fetchOthers = async (day: Date) => {
  const data = await api.getOthersCounts(store.state.user.id, day)
  otherCounts.dog = data.dog
  otherCounts.cat = data.cat
  otherCounts.butterfly = data.butterfly
}
/**
 * roly-poly: Count up
 * @param direction
 */
const countUpRolyPoly = async (direction: Direction) => {
  switch (direction) {
    case 'east':
      rolyPolyCounts.east++
      break
    case 'west':
      rolyPolyCounts.west++
      break
    case 'south':
      rolyPolyCounts.south++
      break
    case 'north':
      rolyPolyCounts.north++
      break
  }
  const date = new Date()

  try {
    await api.countUpRolyPoly(store.state.user.id, direction, date)
  } catch (e) {
    if (e instanceof Error) {
      store.state.errors.push('エラーが発生しました。')
      console.error(e.message)
    }
  }
}
/**
 * others: Count up
 * @param label
 */
const countUpOthers = async (otherObject: OtherObjects) => {
  switch (otherObject) {
    case 'dog':
      otherCounts.dog++
      break
    case 'cat':
      otherCounts.cat++
      break
    case 'butterfly':
      otherCounts.butterfly++
      break
  }
  const date = new Date()

  try {
    await api.countUpOthers(store.state.user.id, otherObject, date)
  } catch (e) {
    if (e instanceof Error) {
      store.state.errors.push('エラーが発生しました。')
      console.error(e.message)
    }
  }
}
</script>
