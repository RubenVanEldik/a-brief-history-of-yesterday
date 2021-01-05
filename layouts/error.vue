<template>
  <div class="text-center pt-48 sm:pt-56 md:pt-64 text-gray-600">
    <div
      class="text-4xl mb-2"
      v-text="error.statusCode"
    />
    <div
      class="text-lg"
      v-text="error.message"
    />
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true
    }
  }
}
</script>
