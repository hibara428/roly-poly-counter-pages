<template>
  <section class="title">
    <h2>{{ title }}</h2>
  </section>
</template>

<style scoped>
.title h2 {
  margin: 1rem 0;
}
</style>

<script setup lang="ts">
// props
defineProps<{
  title: string
}>()
</script>
