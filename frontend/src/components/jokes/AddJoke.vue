<template>
  <div>
    <div class="pt-2">
      <vt-text-field-outline class="w-1/2" placeholder="Add joke" v-model="phraseToAdd"/>
      <vt-button @click="callCreateJokeApi" >Add Joke</vt-button>
    </div>
  </div>
</template>

<script>
  import {APIS} from "../../backend-apis";

  //TODO toast after adding
  export default {
    data() {
      return {
        phraseToAdd: "",
        responseMsg: [],
      }
    },
    methods: {
      callCreateJokeApi() {
        APIS.createJoke.save({
          'phrase' : this.phraseToAdd
        }).then(response => {
          this.responseMsg = response.data.phrase
        })
      }
    }
  }
</script>

