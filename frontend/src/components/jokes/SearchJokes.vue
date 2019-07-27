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
  import {APIS} from "../../backend-apis";
  export default {
    data() {
      return {
        searchText: '',
        searchJokes: [],
      };
    },
    methods: {
      getSubtitle(likes, author) {
        return 'Likes: ' + likes + ', Author: ' + author;
      },

      doSearch(){
        APIS.searchJoke.get({
          'q': {
            'phrase': this.searchText
          }
        }).then(response => {
            if (response.body && response.body.length !== 0) {
              this.searchJokes = response.body;
            } else {
              this.searchJokes = [];
              this.$notify({
                title: 'Search',
                type: 'warn',
                text: 'No jokes found with text: ' + this.searchText
              })
            }
          },
        )
      }
    }
  }
</script>


