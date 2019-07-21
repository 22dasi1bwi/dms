import {APIS} from "../../backend-apis";
import Vue from 'vue';

export const SearchJokes = {
  namespaced: true,
  state: {
    searchJokes: [],
  },
  mutations: {
    setSearchJokes(state, searchJokes) {
      state.searchJokes = searchJokes;
    },
  },
  actions: {
    load({commit, dispatch}) {
      APIS.searchJoke.get({
        'q': {
          'phrase': this.state.searchText
        }
      }).then(response => {
          if (response.body && response.body.length !== 0) {
            commit('setSearchJokes', response.body);
          } else {
            commit('setSearchJokes', []);
            Vue.notify({
              title: 'Vote',
              type: 'warn',
              text: 'No jokes found with text: ' + this.state.searchText
            })
          }
        },
        error => {
          dispatch('showGlobalError', {caption: 'HTTP' + error.status, message: error.bodyText}, {root: true});
        }
      )
    },
  },
};
