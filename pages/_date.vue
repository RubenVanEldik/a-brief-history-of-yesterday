<template>
  <day
    v-if="$route.params.date"
    :date="$route.params.date"
  />
</template>

<script>
export default {
  validate ({ params }) {
    return /^(19|20)\d\d-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/.test(params.date)
  },
  middleware: ({ route, redirect, $dayjs }) => {
    const yesterday = $dayjs().subtract(1, 'day').format('YYYY-MM-DD')
    if (route.params.date === yesterday) {
      redirect('/')
    }
  }
}
</script>
