<template>
  <a v-if="buttonType.normLink" class="capitalize btn def--btn">
    <slot></slot>
  </a>
  <nuxt-link :to="url" v-else class="capitalize btn def--btn">
    <slot></slot>
  </nuxt-link>
</template>

<script setup>
  const props = defineProps({
    buttonType: {
      type: Object,
      default(){
        return { normLink: true, nuxtLink: false }
      }
    },
    url: {
      type: String,
      default(){
        return "/"
      }
    }
  })
</script>

<style>

</style>