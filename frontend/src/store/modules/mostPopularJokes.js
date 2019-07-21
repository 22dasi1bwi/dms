import {APIS} from "../../backend-apis";

export const MostPopularJokes = {
  namespaced: true,
  state: {
    mostPopularJokes: []
  },
  mutations: {
    setMostPopularJokes(state, mostPopularJokes) {
      state.mostPopularJokes = mostPopularJokes
    },
  },
  actions: {
    load({commit, dispatch}) {
      APIS.mostPopularJokes.get().then(
        response => {
          if (response.body && response.body.length > 0) {
            commit('setMostPopularJokes', response.body);
          } else if (response.body && response.body.length === 0) {
            //no data present
            commit('setMostPopularJokes', []);
          } else {
            //no response body, also an error.
            dispatch('showGlobalError', {caption: 'Error', message: 'Response body empty.'}, {root: true});
            commit('setMostPopularJokes', []);
          }
        },
        error => {
          dispatch('showGlobalError', {caption: 'HTTP' + error.status, message: error.bodyText}, {root: true});
        }
      )
    },
  },
};
