<template>
  <ContentTitle title="Statistics" />
  <DatePicker @select-date="selectDate" />
  <StatsTable :roly-poly-counts="rolyPolyCounts" :other-counts="otherCounts" />
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useStore } from 'vuex'
import { key } from '../stores'
import StatsTable from '@/components/StatsTable.vue'
import ContentTitle from '@/components/ContentTitle.vue'
import DatePicker from '@/components/DatePicker.vue'
import { DirectionCounts, OtherCounts } from '@/types'
import BackendApi from '@/libs/BackendApi'
import { isAxiosError } from 'axios'

// data
const store = useStore(key)
const api = new BackendApi(process.env.VUE_APP_API_URL)
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
const reset = () => {
  rolyPolyCounts.east = 0
  rolyPolyCounts.west = 0
  rolyPolyCounts.south = 0
  rolyPolyCounts.north = 0
  otherCounts.dog = 0
  otherCounts.cat = 0
  otherCounts.butterfly = 0
}
const selectDate = async (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  try {
    await Promise.all([
      fetchRolyPolyWithDate(year, month, day),
      fetchOthersWithDate(year, month, day)
    ])
  } catch (e) {
    if (isAxiosError(e) && e.response?.status === 404) {
      store.state.messages.push('指定日時のデータは存在しません。')
    } else if (e instanceof Error) {
      store.state.errors.push('エラーが発生しました。')
      console.error(e.message)
    }
    reset()
  }
}
const fetchRolyPolyWithDate = async (year: number, month: number, day: number) => {
  const data = await api.getRolyPolyCountsWithDate(store.state.user.id, year, month, day)
  rolyPolyCounts.east = data.east
  rolyPolyCounts.west = data.west
  rolyPolyCounts.south = data.south
  rolyPolyCounts.north = data.north
}
const fetchOthersWithDate = async (year: number, month: number, day: number) => {
  const data = await api.getOthersCountsWithDate(store.state.user.id, year, month, day)
  otherCounts.dog = data.dog
  otherCounts.cat = data.cat
  otherCounts.butterfly = data.butterfly
}
</script>
