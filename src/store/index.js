import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import global from './modules/global';
import auth from './modules/auth';
import role from './modules/role';
const store = new Vuex.Store({
    modules: {
        global,
        auth,
        role,
    },
});
export default store;