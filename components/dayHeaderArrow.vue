<template>
  <nuxt-link
    v-if="date"
    :to="`/${date}`"
    v-text="arrow"
  />
  <span
    v-else
    class="text-gray-400 dark:text-gray-600"
    v-text="arrow"
  />
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      required: false,
      default: null
    },
    arrow: {
      type: String,
      required: true
    }
  }
}
</script>
