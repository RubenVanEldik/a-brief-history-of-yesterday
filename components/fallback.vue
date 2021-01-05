<template>
  <div class="w-full flex justify-content mt-12">
    <div
      class="w-full text-gray-600 text-lg text-center"
      v-text="loading ? 'Loading...' : 'Error'"
    />
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      required: true
    },
    error: {
      type: Boolean,
      required: true
    }
  }
}
</script>
