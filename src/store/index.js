import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import global from './modules/global'
import auth from './modules/auth'

const store = new Vuex.Store({
    modules: {
        global,
        auth,
    }
})
export default store