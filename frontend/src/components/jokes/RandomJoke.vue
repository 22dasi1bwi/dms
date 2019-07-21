<template>
  <div>
    <div class="pt-2">
      <vt-button @click="callRandomJokeApi" >Get Random Joke</vt-button>
      <h1>Joke: {{ responseMsg }}</h1>
    </div>
    <div class="pt-2">
      <vt-button @click="callVoteForJokeApi" >UpVote</vt-button>
    </div>
  </div>
</template>

<script>
  import {APIS} from "../../backend-apis";
  import axios from "axios";

  export default {
    data() {
      return {
        jokeId: "",
        responseMsg: [],
      }
    },
    methods: {
      callRandomJokeApi() {
        APIS.randomJoke.get().then(response => {
          this.responseMsg = response.data.phrase
          this.jokeId = response.data.id
        })
      },
      callVoteForJokeApi() {
        //TODO isn't that possible with Vue.resource()?
        axios.put('/api/jokes/' + this.jokeId + '/vote').then(_ => {
          this.$notify({
            title: 'Vote',
            type: 'success',
            text: 'Your vote has been successfully registered.'
          });
        },
          () => {
            this.$notify({
              title: 'Vote',
              type: 'error',
              text: 'Your vote could not be registered.'
            });
          }
        )
      }
    }
  }
</script>

