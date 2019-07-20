import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

export const APIS = {
  'randomJoke': Vue.resource('/api/jokes/random'),
  'searchJoke': Vue.resource('/api/jokes'),
  'addJoke': Vue.resource('/api/jokes'),
  'voteUp': Vue.resource('/api/jokes{/jokeId}/vote'),
  'mostPopularJokes': Vue.resource('/api/jokes/popular')
};

