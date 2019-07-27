<template>
  <div>
    <vt-scroll-to-top/>
     <div class="mb-4 py-6 w-full text-sm">
    <vt-button @click="getRandomJoke"  >Get Random Joke</vt-button>
     </div>
    <div class="flex flex-row items-center" v-bind="randomJoke" :key="randomJoke.id">
      <vt-clickable-list-item :title="randomJoke.phrase" :subtitle="getSubtitle(randomJoke.likes, randomJoke.author)"></vt-clickable-list-item>
    </div>
     <div class="mb-4 py-10 w-full text-sm">
    <vt-button @click="likeJoke" >Like <font-awesome-icon icon="thumbs-up"/></vt-button>
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
      ...mapState('RandomJoke', {
        randomJoke: 'randomJoke',
      })
    },
    methods: {
      getSubtitle(likes, author) {
        return 'Likes: ' + likes + ', Author: ' + author
      },
      getRandomJoke(){
        this.$store.dispatch('RandomJoke/getRandomJoke');
      },
      likeJoke(){
          this.$store.state.jokeId = this.randomJoke.id;
          this.$store.dispatch('RandomJoke/likeJoke');
      }
    },
    created() {
      this.$store.dispatch('RandomJoke/getRandomJoke');
    },
  }
</script>
