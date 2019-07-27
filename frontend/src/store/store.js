import Vue from 'vue';
import Vuex from 'vuex';
import {MostLikedJokes} from "./modules/mostLikedJokes";
import {SearchJokes} from "./modules/searchJokes";
import {RandomJoke} from "./modules/randomJoke";

Vue.use(Vuex);

export const store = new Vuex.Store({
  namespaced: true,
  modules: {
    MostLikedJokes: MostLikedJokes,
    SearchJokes: SearchJokes,
    RandomJoke: RandomJoke,
  },
  state: { //define properties where data can be stored
    globalError: {
      display: false,
      caption: "",
      message: ""
    },
    globalSnackbar: {
      display: false,
      caption: '',
      message: ''
    },
    globalBanner: {
      display: false,
      message: '',
      button: {
        display: false,
        text: '',
        method: undefined
      }
    }
  },
  getters: { //getters: where stored data can be mapped / filtered / ...

  },
  mutations: { //setting state is only possible via mutations that need to be committed to the store. Synchronous.
    cleanGlobalError(state) {
      state.globalError = {
        display: false,
        caption: '',
        message: ''
      };
    },
    showGlobalError(state, config) {
      state.globalError = {
        display: true,
        caption: config.caption,
        message: config.message
      };
    },
    cleanGlobalSnackbar(state) {
      state.globalSnackbar = {
        display: false,
        caption: '',
        message: ''
      }
    },
    showGlobalSnackbar(state, {caption, message}) {
      state.globalSnackbar = {
        display: true,
        caption: caption,
        message: message
      };
    },
    cleanGlobalBanner(state) {
      state.globalBanner = {
        display: false,
        message: '',
        button: {
          display: false,
          text: '',
          method: undefined
        }
      }
    },
    showGlobalBanner(state, {message, button}) {
      state.globalBanner = {
        display: true,
        message: message,
        button: button
      };
    },
  },
  actions: { // asynchronous actions that can do mutations when they are done
    resetGlobalError({commit}) {
      commit('cleanGlobalError');
    },
    showGlobalError({commit}, config) {
      commit('showGlobalError', config);
    },
    resetGlobalSnackbar({commit}) {
      commit('cleanGlobalSnackbar');
    },
    showGlobalSnackbar({commit}, config) {
      commit('showGlobalSnackbar', config);
      const timeout = config.displaytime || 5000;
      setTimeout(
        () => {
          commit('cleanGlobalSnackbar');
        },
        timeout
      );
    },
    resetGlobalBanner({commit}) {
      commit('cleanGlobalBanner');
    },
    showGlobalBanner({commit}, config) {
      commit('showGlobalBanner', config);
    }
  }
});
