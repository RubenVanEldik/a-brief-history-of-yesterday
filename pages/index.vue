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
    let content
    try {
      const response = await fetch(`${this.$config.NETLIFY_URL || ''}/fetch?date=${this.yesterday.format('YYYY-MM-DD')}`)
      if (response.status === 200) {
        content = await response.text()
      } else {
        throw new Error(response.status)
      }
    } catch (err) {
      this.error = true
    }

    if (content) {
      // Get the needed HTML if there is any content
      const element = document.createElement('div')
      element.innerHTML = content
      this.html = element.getElementsByClassName('description')?.[0]?.outerHTML
    }
  }
}
</script>
