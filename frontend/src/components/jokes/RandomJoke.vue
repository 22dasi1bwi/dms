<template>
  <div class="mt-2 py-2">
    <vt-scroll-to-top/>
    <vt-button @click="getRandomJoke" >Get Random Joke</vt-button>
    <div class="flex flex-row items-center" v-bind="randomJoke" :key="randomJoke.id">
      <vt-clickable-list-item :title="randomJoke.phrase" :subtitle="getSubtitle(randomJoke.popularity, randomJoke.author)"></vt-clickable-list-item>
    </div>
    <vt-button @click="upVoteJoke" >UpVote</vt-button>
  </div>
</template>
<script lang="ts">

  import {mapState} from 'vuex';

  export default {
    data() {
      return {};
    },
    computed: {
      ...mapState('RandomJoke', {
        randomJoke: 'randomJoke',
      })
    },
    methods: {
      getSubtitle(popularity, author) {
        return 'Popularity: ' + popularity + ', Author: ' + author
      },
      getRandomJoke(){
        this.$store.dispatch('RandomJoke/getRandomJoke');
      },
      upVoteJoke(){
          this.$store.state.jokeId = this.randomJoke.id;
          this.$store.dispatch('RandomJoke/upVoteJoke');
      }
    },
    created() {
      this.$store.dispatch('RandomJoke/getRandomJoke');
    },
  }
</script>
