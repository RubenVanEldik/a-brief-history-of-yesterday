<template>
  <day
    :date="yesterday"
  />
</template>

<script>
import dayjs from 'dayjs'

export default {
  computed: {
    yesterday () {
      return dayjs().subtract(1, 'day').format('YYYY-MM-DD')
    }
  }
}
</script>
