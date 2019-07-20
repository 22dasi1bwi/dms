<template>
  <div>
    <vt-button @click="callMostPopularJokesApi" >Get Most Popular Jokes</vt-button>
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

  export default {
    data() {
      return {
        jokes: [],
      }
    },
    methods: {
      callMostPopularJokesApi() {
        APIS.mostPopularJokes.get().then(response => {
          this.jokes = response.data
        })
      }
    }
  }
</script>

