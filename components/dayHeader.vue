<template>
  <h2 class="flex justify-center items-center text-2xl text-gray-900 dark:text-gray-100">
    <day-header-arrow
      :date="date"
      previous
    />
    <div v-text="beautifiedDate" />
    <day-header-arrow
      :date="date"
      next
    />
  </h2>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      required: true
    }
  },
  computed: {
    beautifiedDate () {
      return this.$dayjs(this.date).format('dddd MMMM D')
    }
  }
}
</script>
