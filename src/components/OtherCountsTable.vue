<template>
  <h5>Others🐕🐈</h5>
  <table class="table">
    <thead>
      <tr class="table-primary">
        <th scope="col">犬🐕</th>
        <th scope="col">猫🐈</th>
        <th scope="col">蝶🦋</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td id="dog-count">{{ counts.dog }}</td>
        <td id="cat-count">{{ counts.cat }}</td>
        <td id="butterfly-count">{{ counts.butterfly }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { OtherCountsProps } from '@/types'

// props
withDefaults(defineProps<OtherCountsProps>(), {
  counts: () => ({
    dog: 0,
    cat: 0,
    butterfly: 0
  })
})
</script>
