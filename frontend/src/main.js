import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import {store} from './store/store';
import App from './App.vue';
import {routes} from './routes';
import vueDebounce from 'vue-debounce'
import VueTailwind from './VueTailwind/plugin';
import Notifications from 'vue-notification'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueTailwind);
Vue.use(vueDebounce);
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

