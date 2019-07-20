<template>
  <div>
    <div class="py-2">
      <vt-text-field-outline class="w-1/2" placeholder="Search for jokes" v-model="searchText"/>
      <vt-button @click="callSearchForJokeApi" >Search for Jokes</vt-button>
      <h1>Jokes: {{ responseMsg }}</h1>
    </div>
  </div>
</template>

<script>
  import {APIS} from "../../backend-apis";

  //TODO: if none can be found, display a toast
  export default {
    data() {
      return {
        searchText: "",
        responseMsg: [],
      }
    },
    methods: {
      callSearchForJokeApi() {
        APIS.searchJoke.get({
          'q': {
            'phrase': this.searchText
          }
        }).then(response => {
          this.responseMsg = response.data.map((joke) => {
           return {
              phrase: joke.phrase,
              popularity: joke.popularity
           }
          })
        })
      }
    }
  }
</script>

