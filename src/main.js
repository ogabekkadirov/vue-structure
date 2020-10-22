import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import './plugins/element.js'
import './assets/css/main.css';
import Index from '@/mixins/index'
import TableIndex from '@/components/Table'
Vue.config.productionTip = false

Vue.mixin(Index);
Vue.component('loading', Loading)
Vue.component('table-index', TableIndex)
window._ = require("lodash");

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')