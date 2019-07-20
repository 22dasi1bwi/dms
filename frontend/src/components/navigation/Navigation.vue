<template>
  <div class="relative">
    <nav class="bg-white pl-8 pr-2 pt-2 my-2 border-b">
      <div class="-mb-px flex relative">
        <navigation-button to="/jokes/random">Random Joke</navigation-button>
        <navigation-button to="/jokes/search">Search Joke</navigation-button>
        <navigation-button to="/jokes/add">Add Joke</navigation-button>
        <navigation-button to="/jokes/popular">Most Popular Jokes</navigation-button>
      </div>
    </nav>
    <the-global-error></the-global-error>
    <the-global-message-banner></the-global-message-banner>
    <the-logout-menu></the-logout-menu>
  </div>
</template>
<script>
  import NavigationButton from './NavigationButton.vue';
  import TheGlobalError from '../TheGlobalError';
  import LogoutButton from "./TheLogoutButton";
  import SvgPerson from "../svg/SvgPerson"
  import TheLogoutMenu from "./TheLogoutMenu";
  import TheGlobalMessageBanner from "../TheGlobalMessageBanner";


  export default {
    components: {
      TheLogoutMenu,
      TheGlobalError,
      TheGlobalMessageBanner,
      LogoutButton,
      SvgPerson,
      NavigationButton,
    }
  }
</script>
