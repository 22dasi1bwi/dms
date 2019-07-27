<template>
  <div class="mt-2 py-2">
    <vt-scroll-to-top/>
    <div class="flex flex-row items-center" v-for="joke in mostLikedJokes" :key="joke.id">
      <vt-clickable-list-item :title="joke.phrase" :subtitle="getSubtitle(joke.likes, joke.author)"></vt-clickable-list-item>
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
      ...mapState('MostLikedJokes', {
        mostLikedJokes: 'mostLikedJokes',
      })
    },
    methods: {
      getSubtitle(likes, author) {
        return 'Likes: ' + likes + ', Author: ' + author
      }
    },
      created() {
        this.$store.dispatch('MostLikedJokes/load');
      },
  }
</script>

