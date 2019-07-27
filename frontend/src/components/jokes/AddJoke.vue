<template>
  <div>
      <div class="py-6 w-full text-sm">
      <vt-text-field-outline class="w-1/2" placeholder="Add joke ..." v-model="phraseToAdd" @keyup.enter.native="callCreateJokeApi"/>
      <vt-text-field-outline class="w-1/4" placeholder="Author - get yourself into the hall of fame ;)" v-model="author" @keyup.enter.native="callCreateJokeApi"/>
      </div>
      <vt-button @click="callCreateJokeApi" :disabled="phraseToAdd.length == 0" >Add Joke</vt-button>
    </div>
</template>

<script>
  import {APIS} from "../../backend-apis";

  export default {
    data() {
      return {
        phraseToAdd: "",
        author: "",
        responseMsg: [],
      }
    },
    methods: {
      callCreateJokeApi() {
        APIS.createJoke.save({
          'phrase' : this.phraseToAdd,
          'author' : this.author
        }).then(response => {
          this.responseMsg = response.data.phrase;
          this.phraseToAdd = "";
          this.author = "";
          this.$notify({
            title: 'Vote',
            type: 'success',
            text: 'Your joke has been added!'
          });
        },
          () =>{
            this.$notify({
              title: 'Vote',
              type: 'error',
              text: 'Your joke could not be added.'
            });
          }
        )
      }
    }
  }
</script>

