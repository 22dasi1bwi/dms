import Vue from 'vue'
import Router from 'vue-router'
import RandomJoke from '@/components/RandomJoke'
import AddJoke from '@/components/AddJoke.vue'
import SearchJokes from '@/components/SearchJokes'
import MostPopularJokes from '@/components/MostPopularJokes'

Vue.use(Router);

const router = new Router({
    mode: 'history', // uris without hashes #, see https://router.vuejs.org/guide/essentials/history-mode.html#html5-history-mode
    routes: [
        { path: '/', component: RandomJoke },
        { path: '/jokes/add', component: AddJoke},
        { path: '/jokes/random', component: RandomJoke},
        { path: '/jokes/search', component: SearchJokes},
        { path: '/jokes/popular', component: MostPopularJokes},
        // otherwise redirect to home
        { path: '*', redirect: '/' }
    ]
});

export default router;