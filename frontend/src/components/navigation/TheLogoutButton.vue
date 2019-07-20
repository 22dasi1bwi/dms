<template>
  <button @click="toggleLogoutMenu"
          :class="buttonClass">
    <svg-person :class="svgClass"></svg-person>
    </button>
</template>

<script>
  import {mapState} from "vuex";

  export default {
    name: "TheLogoutButton",
    components: {},
    computed: {
      ...mapState('LogoutMenu', {
        logoutMenuActive: 'logoutMenuActive'
      }),
      svgClass() {
        if (this.logoutMenuActive) {
          return "text-grey-600 w-8 h-8";
        } else {
          return "text-grey-500 w-8 h-8";
        }
      },
      buttonClass() {
        if (this.logoutMenuActive) {
          return "text-center block border-b-2 pt-0 pb-1 px-1 inline-block border-teal-400 outline-none focus:outline-none "
        } else {
          return "block border-b-2 pt-0 pb-1 px-1 inline-block hover:border-grey-500 border-transparent outline-none focus:outline-none "
        }
      },
    },
    methods: {
      toggleLogoutMenu() {
        this.$store.commit('LogoutMenu/activateLogoutMenu');
      }
    }
  }
</script>
