import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

export const APIS = {
  'randomJoke': Vue.resource('/api/jokes/random'),
  'searchJoke': Vue.resource('/api/jokes{?q*}'),
  'createJoke': Vue.resource('/api/jokes'),
  'voteForJoke': Vue.resource('/api/jokes/{jokeId}/vote'),
  'mostLikedJokes': Vue.resource('/api/jokes/likes')
};

