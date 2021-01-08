<template>
  <div class="min-h-screen w-screen m-auto flex flex-col max-w-prose">
    <main class="flex-grow">
      <nuxt />
    </main>
    <footer class="flex justify-center mb-4">
      <div class="max-w-md mx-2 text-sm text-center text-gray-600 dark:text-gray-400">
        Original text is written by the amazing
        <a
          class="text-gray-700 dark:text-gray-300 underline"
          :href="`https://en.wikipedia.org/w/index.php?title=Portal:Current_events/${$dayjs($route.params.date).format('YYYY_MMMM_D')}&action=history`"
        >
          Wikipedia contributors
        </a>
        and shared under the Creative Commons Attribution-ShareAlike License.
      </div>
    </footer>
    <introduction-modal />
  </div>
</template>

<script>
export default {
  head: {
    bodyAttrs: {
      class: 'bg-gray-100 dark:bg-gray-800'
    }
  }
}
</script>
