<template>
  <component
    :is="newDate ? 'nuxt-link' : 'span'"
    :to="`/${newDate}`"
    class="px-3"
    :class="{ 'text-gray-300 dark:text-gray-700': !newDate }"
  >
    <svg
      aria-hidden="true"
      focusable="false"
      role="img"
      class="h-5 mt-0.5"
      :class="{ 'transform rotate-180': next }"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 512"
    >
      <path
        fill="currentColor"
        d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"
      />
    </svg>
  </component>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      required: false,
      default: null
    },
    previous: {
      type: Boolean,
      required: false,
      default: false
    },
    next: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    newDate () {
      return this.previous
        ? this.previousDate
        : this.next
          ? this.nextDate
          : null
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
