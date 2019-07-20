<template>
  <button @click="scrollToTop"
          class="fixed right-0 top-0 justify-end border border-grey-300 rounded bg-grey-900 py-2 px-4 mt-3 mr-3 text-white text-sm font-bold hover:bg-grey-600"
          v-if="scrollToTopVisible">
    Back to top
  </button>
</template>
<script>
  export default {
    name: 'VtScrollToTop',
    data() {
      return {
        scrollToTopVisible: false
      }
    },
    methods: {
      scrollToTop() {
        window.scrollTo(0, 0);
      },
      handleScroll() {
        this.scrollToTopVisible = window.scrollY > 250;
      }
    },
    mounted() {
      document.addEventListener('scroll', this.handleScroll);
    },
  }
</script>
