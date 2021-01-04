<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="prose m-2">
    <h2 v-text="yesterday.format('MMMM D')" />
    <div
      v-if="!error && html"
      v-html="html"
    />
    <div
      v-else
      v-text="error ? 'Error' : 'Loading...'"
    />
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  data () {
    return {
      yesterday: dayjs().subtract(1, 'day'),
      html: null,
      error: false
    }
  },
  async mounted () {
    // Fetch the current events page from Wikipedia
    const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&prop=revisions&titles=Portal%3ACurrent%20events%2F${this.yesterday.format('YYYY MMMM D')}&formatversion=latest&rvprop=content&rvparse=1`)
    const { query } = await response.json()
    const page = query?.pages?.[0]
    const content = page?.revisions?.[0]?.content

    // Set error to true if the page is missing
    this.error = page.missing === true

    if (content) {
      // Get the needed HTML if there is any content
      const element = document.createElement('div')
      element.innerHTML = content
      this.html = element.getElementsByClassName('description')?.[0]?.outerHTML
    }
  }
}
</script>
