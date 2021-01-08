<template>
  <div class="mt-4 mx-2">
    <day-header :date="date" />
    <day-content
      v-if="!error && html"
      :html="html"
      :date="date"
    />
    <day-fallback
      v-else
      :loading="!error"
      :error="error"
    />
  </div>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      html: null,
      error: false
    }
  },
  async created () {
    try {
      const response = await fetch(`${this.$config.NETLIFY_URL || ''}/fetch?date=${this.date}`)
      if (response.status === 200) {
        this.html = await response.text()
      } else {
        throw new Error(response.status)
      }
    } catch (err) {
      this.error = true
    }
  }
}
</script>
