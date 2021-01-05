<template>
  <h2 class="flex justify-center align-middle text-2xl">
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
import dayjs from 'dayjs'

export default {
  props: {
    date: {
      type: String,
      required: true
    }
  },
  computed: {
    beautifiedDate () {
      return dayjs(this.date).format('MMMM D')
    },
    previousDate () {
      const previousDate = dayjs(this.date).subtract(1, 'day')
      return !previousDate.isSame(dayjs().subtract(1, 'year'), 'day')
        ? previousDate.format('YYYY-MM-DD')
        : null
    },
    nextDate () {
      const nextDate = dayjs(this.date).add(1, 'day')
      return !nextDate.isSame(dayjs(), 'day')
        ? nextDate.format('YYYY-MM-DD')
        : null
    }
  }
}
</script>
