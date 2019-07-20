<template>
  <div v-if="active"
       class="absolute z-30 right-0 mr-1 -mt-2 py-2 px-4 border border-t-0 w-64 bg-white font-bold text-sm text-teal-500 shadow">
    <logout-menu-item @click="logout">Logout</logout-menu-item>
   </div>
</template>

<script>
  import {mapState} from 'vuex';
  import LogoutMenuItem from "./LogoutMenuItem";

  export default {
    name: "TheLogoutMenu",
    components: {LogoutMenuItem},
    computed: {
      ...mapState('LogoutMenu', {
        active: 'logoutMenuActive' //map the 'LogoutMenu.logoutMenuActive" property to just "active"
      }),
    },
    methods: {
      logout() {
        this.$http.post('/logout').then(
          success => {
            this.$store.commit('LogoutMenu/deactivateLogoutMenu'); // close menu on logout
            window.location = '/'; //call spring logout and then redirect for page reload
          }
        )
      },
      clickOutside(event) {
        if (event.target !== this.$el && event.target.parentElement !== this.$el) {
          this.$store.commit('LogoutMenu/deactivateLogoutMenu'); //close the menu if someone clicks outside of it
        }
      }
    },
    watch: { //watch for changes on properties
      active() {
        if (this.active) {
          window.addEventListener('click', this.clickOutside); //add event listener for clicks everywhere
        } else {
          window.removeEventListener('click', this.clickOutside); //remove event listener on closing the menu
        }
      }
    },
  }
</script>
