<template>
  <div>
      <vt-text-field-outline class="w-1/2" placeholder="Search for jokes" v-model="searchText"/>
      <vt-button @click="callSearchForJokeApi" >Search for Jokes</vt-button>
      <table class="table table-striped">
        <thead>
        <tr>
          <td>Phrase</td>
          <td>Popularity</td>
        </tr>
        </thead>
        <tbody>
        <tr v-for="joke in jokes">
          <td>{{ joke.phrase }}</td>
          <td>{{ joke.popularity }}</td>
        </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
  import {APIS} from "../../backend-apis";

  //TODO: if none can be found, display a toast
  export default {
    data() {
      return {
        searchText: "",
        jokes: [],
      }
    },
    methods: {
      callSearchForJokeApi() {
        APIS.searchJoke.get({
          'q': {
            'phrase': this.searchText
          }
        }).then(response => {
          this.jokes = response.data
        })
      }
    }
  }
</script>

