import {APIS} from "../../backend-apis";

export const MostLikedJokes = {
  namespaced: true,
  state: {
    mostLikedJokes: []
  },
  mutations: {
    setMostLikedJokes(state, mostLikedJokes) {
      state.mostLikedJokes = mostLikedJokes
    },
  },
  actions: {
    load({commit, dispatch}) {
      APIS.mostLikedJokes.get().then(
        response => {
          if (response.body && response.body.length > 0) {
            commit('setMostLikedJokes', response.body);
          } else if (response.body && response.body.length === 0) {
            //no data present
            commit('setMostLikedJokes', []);
          } else {
            //no response body, also an error.
            dispatch('showGlobalError', {caption: 'Error', message: 'Response body empty.'}, {root: true});
            commit('setMostLikedJokes', []);
          }
        },
        error => {
          dispatch('showGlobalError', {caption: 'HTTP' + error.status, message: error.bodyText}, {root: true});
        }
      )
    },
  },
};

