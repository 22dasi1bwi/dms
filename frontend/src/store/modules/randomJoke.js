import {APIS} from "../../backend-apis";
import axios from "axios";
import Vue from "vue";

export const RandomJoke = {
  namespaced: true,
  state: {
    randomJoke: {}
  },
  mutations: {
    setRandomJoke(state, randomJoke) {
      state.randomJoke = randomJoke
    },
  },
  actions: {
    getRandomJoke({commit, dispatch}) {
      APIS.randomJoke.get().then(response => {
          if (response.body.id != null) {
            commit('setRandomJoke', response.body);
          } else {
            dispatch('showGlobalError', {caption: 'Error', message: 'Response body empty.'}, {root: true});
            commit('setRandomJoke', {});
          }
        },
        error => {
          dispatch('showGlobalError', {caption: 'HTTP' + error.status, message: error.bodyText}, {root: true});
        }
      )
    },
    upVoteJoke({commit, dispatch}) {
      //TODO isn't that possible with Vue.resource()?
      axios.put('/api/jokes/' + this.state.jokeId + '/vote').then(response => {
            Vue.notify({
              title: 'Vote',
              type: 'success',
              text: 'Your vote has been successfully registered.'
          })
        RandomJoke.state.randomJoke.popularity = response.data.popularity
        },
          error => {
            Vue.notify({
              title: 'Vote',
              type: 'error',
              text: 'Your vote could not be registered.'
            });
            dispatch('showGlobalError', {caption: 'HTTP' + error.status, message: error.bodyText}, {root: true});
      })
    }
  }
};

