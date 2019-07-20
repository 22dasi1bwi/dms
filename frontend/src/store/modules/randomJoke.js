import {APIS} from "../../backend-apis";

export const RandomJoke = {
  namespaced: true,
  state: {
    list: [],
  },
  mutations: {
    setList(state, properties) {
      state.list = properties;
    },
  },
  actions: {
    loadList({state, commit}) {
      APIS.randomJoke.get().then(
        response => {
          const foo = response.body['phrase'];

          return {'phrase': 'foo'};
        })
        commit('setList', 'phrase', 'foo', 'lol', 'loool');
        },
  },
  getters: {}
};
