import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Vuelidate from 'vuelidate'
import {store} from './store/store';
import App from './App.vue';
import {routes} from './routes';
import vueDebounce from 'vue-debounce'
import VueTailwind from './VueTailwind/plugin';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuelidate);
Vue.use(VueTailwind);
Vue.use(vueDebounce)

const router = new VueRouter({
    routes,
    mode: 'hash' //default: 'hash'; alternate: 'history'
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});

