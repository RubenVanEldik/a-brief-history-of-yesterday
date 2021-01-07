<template>
  <day
    :date="yesterday"
  />
</template>

<script>
export default {
  computed: {
    yesterday () {
      return this.$dayjs().subtract(1, 'day').format('YYYY-MM-DD')
    }
  }
}
</script>
