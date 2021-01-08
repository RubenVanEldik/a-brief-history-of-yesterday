<template>
  <transition
    enter-class="opacity-0"
    enter-active-class="transition-all duration-200 ease-out"
    enter-to-class="opacity-100"
    leave-class="opacity-100 scale-100"
    leave-active-class="transition-all duration-300 ease-in"
    leave-to-class="opacity-0 scale-50"
    appear
  >
    <div
      v-show="show"
      class="fixed z-10 inset-0"
    >
      <div class="h-screen w-screen">
        <!-- Background -->
        <div
          class="fixed inset-0"
          aria-hidden="true"
        >
          <div class="absolute inset-0 bg-gray-100 dark:bg-gray-900 opacity-80" />
        </div>
        <!-- Actual modal -->
        <div class="flex flex-col justify-center items-center h-full w-full transform py-8 px-6 sm:py-10 sm:px-8">
          <div
            class="max-w-xl py-6 sm:py-8 px-3 sm:px-6 bg-gray-200 dark:bg-gray-800 rounded-md overflow-auto"
            role="dialog"
            aria-modal="true"
          >
            <slot />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true
    }
  }
}
</script>
