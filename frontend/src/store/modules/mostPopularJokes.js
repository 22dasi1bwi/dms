import {APIS} from "../../backend-apis";
import Vue from 'vue';

export const MostPopularJokes = {
  namespaced: true,
  state: {
    tableConfig: {
      draw: 0,
      start: 0,
      length: 50,
      order: {
        column: 0,
        dir: 'asc'
      },
      columns: [
        {'data': 'phrase', 'title': 'PHRASE'},
        {'data': 'popularity', 'title': 'POPULARITY'},
      ],
      searchColumns: [
      ],
    }
  },
  mutations: {
    increaseTableDraw(state) {
      state.tableConfig.draw = state.tableConfig.draw + 1;
    },
    setTableData(state, tableData) {
      Vue.set(state, 'tableData', tableData);
    },
    setTableStart(state, start){
      Vue.set(state.tableConfig, 'start', start);
    },
    setSortOrder(state, sortOrder){
      Vue.set(state.tableConfig, 'order', sortOrder);
    },
    setSearchColumns(state, searches) {
      Vue.set(state.tableConfig, 'searchColumns', searches);
    }
  },
  actions: {
    setTableStart({state, commit, dispatch}, start){
      commit('setTableStart', start);
      dispatch('load');
    },
    setSortOrder({state, commit, dispatch}, sortOrder){
      commit('setSortOrder', sortOrder);
      dispatch('load');
    },
    setSearchColumns({state, commit, dispatch}, searches){
      commit('setSearchColumns', searches);
      dispatch('load');
    },
    load({state, commit}) {
      APIS.mostPopularJokes.get().then(
        response => {
          response.body.map((joke) => {
            console.error(joke.phrase)
            commit('setTableData', joke)
            commit('increaseTableDraw');
          })
          console.info("TABLE CONFIG DRAW: " + state.tableConfig.draw)
        },
        error => {
          console.error("Something went wrong!!!")
        }
      )
    }
  },
  getters: {}
};
