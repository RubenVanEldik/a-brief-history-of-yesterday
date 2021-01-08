<template>
  <modal :show="!hasClosedModal">
    <div class="prose dark:prose-dark text-center">
      <div class="flex justify-center -mb-2">
        <svg
          class="h-8 sm:w-10"
          aria-hidden="true"
          focusable="false"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"
          />
        </svg>
      </div>
      <h3>
        Welcome to A Brief History of Yesterday
      </h3>
      <div>
        <p>
          News in the digital age updates constantly. No matter what, there is always some "breaking news". This causes news sites to become more of a slot machine than a substantive source of information.
        </p>
        <p>
          A Brief History of Yesterday tries to be an antidote. It only shows a summary of what happened yesterday. It updates once a day, so it can't act as a slot machine. It's no news: the content is already slowly becoming history.
        </p>
      </div>
    </div>
    <button
      class="block w-full max-w-xs mt-2 mx-auto py-2 px-4 rounded-sm bg-gray-800 dark:bg-gray-200 text-gray-100 dark:text-gray-900 font-semibold"
      @click="closeModal"
    >
      Let's enter yesterday
    </button>
  </modal>
</template>

<script>
export default {
  data () {
    return {
      hasClosedModal: true
    }
  },
  mounted () {
    this.hasClosedModal = localStorage.getItem('hasClosedModal') === 'true'
  },
  methods: {
    closeModal () {
      this.hasClosedModal = true
      localStorage.setItem('hasClosedModal', true)
    }
  }
}
</script>
