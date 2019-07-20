<template>
  <div>
    <div class="pt-2">
      <vt-button @click="callRandomJokeApi" >Generate Joke</vt-button>
      <h1>Joke: {{ responseMsg }}</h1>
    </div>
    <div class="pt-2">
      <vt-button @click="callVoteForJokeApi" >UpVote</vt-button>
    </div>
  </div>
</template>

<script>
  import {APIS} from "../../backend-apis";

  export default {
    data() {
      return {
        id: "",
        responseMsg: [],
      }
    },
    methods: {
      callRandomJokeApi() {
        APIS.randomJoke.get().then(response => {
          this.responseMsg = response.data.phrase
          this.id = response.data.id
        })
      },
      callVoteForJokeApi() {
        APIS.voteForJoke.update({
          params: {
            jokeId: 'randomId'
          }
        });
      }
    }
  }
</script>

