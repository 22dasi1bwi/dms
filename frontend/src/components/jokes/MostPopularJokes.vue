<template>
  <div class="mt-2 py-2">
    <vt-scroll-to-top/>
    <div class="flex flex-row items-center" v-for="joke in mostPopularJokes" :key="joke.id">
      <vt-clickable-list-item :title="joke.phrase" :subtitle="getSubtitle(joke.popularity)"></vt-clickable-list-item>
    </div>
  </div>
</template>

<script lang="ts">

  import {mapState} from 'vuex';

  export default {
    data() {
      return {};
    },
    computed: {
      ...mapState('MostPopularJokes', {
        mostPopularJokes: 'mostPopularJokes',
      })
    },
    methods: {
      getSubtitle(popularity) {
        return 'Popularity: ' + popularity
      }
    },
      created() {
        this.$store.dispatch('MostPopularJokes/load');
      },
  }
</script>

