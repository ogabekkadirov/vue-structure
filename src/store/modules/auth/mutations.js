import * as types from './properties/mutation_types'

export const mutations = {
    [types.SET_AUTH_ACCESS_TOKEN](state, access_token) {
        state.access_token = access_token
    },

    [types.SET_AUTH_REFRESH_TOKEN](state, refresh_token) {
        state.refresh_token = refresh_token
    },

    [types.REMOVE_AUTH_ACCESS_TOKEN](state) {
        state.access_token = null
    },

    [types.REMOVE_AUTH_REFRESH_TOKEN](state) {
        state.refresh_token = null
    }
}