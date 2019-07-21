<template>
  <div class="relative">
    <nav class="bg-white pl-8 pr-2 pt-2 my-2 border-b">
      <div class="-mb-px flex relative">
        <navigation-button exact to="/jokes/random">Random Joke</navigation-button>
        <navigation-button exact to="/jokes/search">Search Joke</navigation-button>
        <navigation-button exact to="/jokes/add">Add Joke</navigation-button>
        <navigation-button exact to="/jokes/popular">Most Popular Jokes</navigation-button>
      </div>
    </nav>
    <the-global-error></the-global-error>
    <the-global-message-banner></the-global-message-banner>
  </div>
</template>
<script>
  import NavigationButton from './NavigationButton.vue';
  import TheGlobalError from '../TheGlobalError.vue';
  import TheGlobalMessageBanner from "../TheGlobalMessageBanner.vue";


  export default {
    components: {
      TheGlobalError,
      TheGlobalMessageBanner,
      NavigationButton,
    }
  }
</script>
