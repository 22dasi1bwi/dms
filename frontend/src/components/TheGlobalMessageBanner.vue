<template>
  <div v-if="globalBanner.display"
       class="bg-teal-400 border border-transparent shadow-md -mt-2 mb-2 py-4 pl-12 align-middle relative flex">

    <span class="relative block w-2/3 text-white font-semibold antialiased">
      {{globalBanner.message}}
    </span>
    <span class="object-right absolute right-0 top-0 bottom-0 mr-4 flex flex-row items-center">
      <vt-button inverted v-if="globalBanner.button && globalBanner.button.display"
                 @click="globalBanner.button.method"
                 class="mr-2">
        {{globalBanner.button.text}}
      </vt-button>
      <vt-button inverted @click="resetGlobalBanner">
       <svg-close></svg-close>
      </vt-button>
    </span>
  </div>
</template>

<script>
  import SvgClose from "./svg/SvgClose";
  import {mapActions, mapState} from "vuex";

  export default {
    name: 'TheGlobalMessageBanner',
    components: {SvgClose},
    computed: {
      ...mapState([
        'globalBanner'
      ])
    },
    methods: {
      ...mapActions([
        'resetGlobalBanner'
      ])
    }
  }
</script>

