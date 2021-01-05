<template>
  <div class="min-h-screen w-screen m-auto flex flex-col max-w-prose">
    <main class="flex-grow">
      <nuxt />
    </main>
    <footer class="mb-4 text-sm text-center text-gray-500 italic">
      <a href="mailto:contact@hackerdaily.io">
        Made with ♥ in Utrecht
      </a>
    </footer>
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
