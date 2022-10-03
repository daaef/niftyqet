<template>
  <div class="event--card-grid" :class="gridSize === 3 ? 'three' : 'two'">
    <event-card />
    <event-card />
    <event-card />
    <event-card />
    <event-card />
    <event-card />
  </div>
</template>

<script setup>
const props = defineProps({
  gridSize: {
    type: Number,
    default(){
      return 3
    }
  }
})
</script>

<style scoped>

</style>