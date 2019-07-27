<template>
  <div>
    <div class="py-6 w-full text-sm">
    <vt-text-field-outline class="w-1/2" placeholder="Search for jokes ..." v-model="searchText" @keyup.enter.native="doSearch"/>
    </div>
    <div class="py-1 w-full text-sm">
    <vt-button @click="doSearch()" :disabled="searchText.length == 0">Search <font-awesome-icon icon="search"></font-awesome-icon></vt-button>
    <vt-scroll-to-top/>
    </div>
    <div class="flex flex-row items-center" v-for="joke in searchJokes" :key="joke.id">
      <vt-clickable-list-item :title="joke.phrase" :subtitle="getSubtitle(joke.likes, joke.author)"></vt-clickable-list-item>
    </div>
  </div>
</template>

<script lang="ts">

  import {mapState} from 'vuex';

  export default {
    data() {
      return {
        searchText: ''
      };
    },
    computed: {
      ...mapState('SearchJokes', {
        searchJokes: 'searchJokes',
      })
    },
    methods: {
      getSubtitle(likes, author) {
        return 'Likes: ' + likes + ', Author: ' + author;
      },

      doSearch(){
        this.$store.state.searchText = this.searchText;
        this.$store.dispatch('SearchJokes/load');
      }
    },
    created() {
      if(!(this.searchText.length === 0)){
        this.$store.dispatch('SearchJokes/load');
      }
    },
  }
</script>


