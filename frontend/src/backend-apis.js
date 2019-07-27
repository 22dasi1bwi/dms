import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

export const APIS = {
  'randomJoke': Vue.resource('/api/jokes/random'),
  'searchJoke': Vue.resource('/api/jokes{?q*}'),
  'createJoke': Vue.resource('/api/jokes'),
  'likeJoke': Vue.resource('/api/jokes/{jokeId}/like'),
  'mostLikedJokes': Vue.resource('/api/jokes/likes')
};

