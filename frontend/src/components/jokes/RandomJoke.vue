<template>
  <div>
    <div class="pt-2">
      <vt-button @click="callRandomJokeApi" >Generate Joke</vt-button>
     Joke: {{ responseMsg }}
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import {APIS} from "../../backend-apis";

  export default {
    data() {
      return {
        responseMsg: [],
      }
    },
    methods: {
      callRandomJokeApi() {
        APIS.randomJoke.get().then(response => {
          this.responseMsg = response.data.phrase
        })
      }
    },
    computed: {
      ...mapState('RandomJoke', {
        list: state => state.list,
      }),

      filteredPropertiesList() {
        return this.list;
      }
    },
    created() {
      // The mounted method is part of the Vue component lifecycle. Called before render.
      this.$store.dispatch('RandomJoke/loadList'); //Ask the store to load the data from the API.
    },
  }
</script>

