<template>
  <h2 class="flex justify-center align-middle text-2xl text-gray-900 dark:text-gray-100">
    <day-header-arrow
      :date="previousDate"
      arrow="<"
    />
    <div
      class="mx-3"
      v-text="beautifiedDate"
    />
    <day-header-arrow
      :date="nextDate"
      arrow=">"
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
    },
    previousDate () {
      const previousDate = this.$dayjs(this.date).subtract(1, 'day')
      return !previousDate.isSame(this.$dayjs().subtract(1, 'year'), 'day')
        ? previousDate.format('YYYY-MM-DD')
        : null
    },
    nextDate () {
      const nextDate = this.$dayjs(this.date).add(1, 'day')
      return !nextDate.isSame(this.$dayjs(), 'day')
        ? nextDate.format('YYYY-MM-DD')
        : null
    }
  }
}
</script>
