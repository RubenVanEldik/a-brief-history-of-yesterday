<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="mt-4 mx-2">
    <day-header :date="date" />
    <div
      v-if="!error && html"
      class="prose"
      v-html="html"
    />
    <fallback
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
  async mounted () {
    const content = await this.fetchContent()
    if (content) {
      this.displayContent(content)
    }
  },
  methods: {
    async fetchContent () {
      try {
        const response = await fetch(`${this.$config.NETLIFY_URL || ''}/fetch?date=${this.date}`)
        if (response.status === 200) {
          return await response.text()
        } else {
          throw new Error(response.status)
        }
      } catch (err) {
        this.error = true
      }
    },
    displayContent (content) {
      // Get the necessary HTML
      const element = document.createElement('div')
      element.innerHTML = content
      const html = element.getElementsByClassName('description')?.[0]

      // Beautify the HTML
      html.childNodes.forEach(node => this.filterEmptyNodes(node, html))
      html.childNodes.forEach(node => this.createDetailsTag(node, html))
      html.getElementsByTagName('a').forEach(anchor => this.updateLinks(anchor, html))

      // Set the HTML
      this.html = html.innerHTML
    },
    filterEmptyNodes (node, html) {
      // Remove all nodes without any real content
      return (!node.outerHTML || node.outerHTML === '\n') && html.removeChild(node)
    },
    createDetailsTag (node, html) {
      // Move all info to a details node
      if (node.tagName.toLowerCase() === 'p') {
        // Create title
        const title = document.createElement('h3')
        title.textContent = node.textContent
        title.classList.add('inline-block')

        // Create summary with the title
        const summary = document.createElement('summary')
        summary.appendChild(title)

        // Create details with the summary and child nodes
        const details = document.createElement('details')
        details.appendChild(summary)

        // Add all successive unordered list nodes to the details node
        const addDetailsTag = (details, node, html) => {
          if (node && node.tagName.toLowerCase() === 'ul') {
            const nodeIndex = Array.prototype.indexOf.call(html?.childNodes, node) // Get the index of the current node
            details.appendChild(node) // Move the current node to the details node
            addDetailsTag(details, html.childNodes[nodeIndex], html) // Call this function again with the sibling of the just moved node
          }
        }
        addDetailsTag(details, node.nextElementSibling, html)

        // Replace the node with the new details node
        html.replaceChild(details, node)
      }
    },
    updateLinks (anchor, html) {
      // Replace the relative Wikipedia links with the absolute wikipedia link and open all links in a new tab
      if (location.host === anchor.host) {
        anchor.href = anchor.href.replace(new RegExp(`https?://${anchor.host}`), 'https://en.wikipedia.org')
      }
      anchor.setAttribute('target', '_blank')
      anchor.setAttribute('rel', 'noreferrer')
    }
  }
}
</script>
