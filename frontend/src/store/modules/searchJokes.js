import {APIS} from "../../backend-apis";

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
          if (response.body && response.body.length > 0) {
            console.info("success response")
            commit('setSearchJokes', response.body);
          } else if (response.body && response.body.length === 0) {
            commit('setSearchJokes', []);
          } else {
            dispatch('showGlobalError', {caption: 'Error', message: 'Response body empty.'}, {root: true});
            commit('setSearchJokes', []);
          }
        },
        error => {
          dispatch('showGlobalError', {caption: 'HTTP' + error.status, message: error.bodyText}, {root: true});
        }
      )
    },
  },
  setters: {
    setSearchText(searchText) {
      state.searchText = searchText
    }
  }
};
