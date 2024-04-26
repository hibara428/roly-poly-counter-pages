<template>
  <div class="my-3">
    <input type="date" @input="selectDate" />
  </div>
</template>

<script setup lang="ts">
// emits
const emits = defineEmits<{
  (event: 'select-date', date: Date): void
}>()
// methods
const selectDate = (event: Event) => {
  if (event.target instanceof HTMLInputElement) {
    emits('select-date', new Date(event.target.value))
  }
}
</script>
