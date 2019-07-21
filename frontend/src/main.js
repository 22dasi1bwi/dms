import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueTailwind from './VueTailwind/plugin';
import Notifications from 'vue-notification'
import {store} from './store/store';
import {routes} from './routes';
import App from './App.vue';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueTailwind);
Vue.use(Notifications);

const router = new VueRouter({
    routes,
    mode: 'hash' //default: 'hash'; alternate: 'history'
});

router.beforeEach((to, from, next) => {
  store.dispatch('resetGlobalError').then(next());
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});

