import * as types from './properties/mutation_types'

import { model } from './properties/model'

export const mutations = {

    [types.SET_ERROR](state, error) {
        Object.assign(state, { error })
    },
    [types.SET_ITEMS](state, items) {
        state.items = items
    },
    [types.SET_ITEM](state, item) {
        state.item = item
    },
    [types.UPDATE_FILTER]: (state, filter) => (state.filter = filter),

    [types.SET_PAGINATION]: (state, pagination) => (state.pagination = pagination),

    [types.UPDATE_COLUMN]: (state, obj) => {
        state.columns[obj.key].show = obj.value
    },
    [types.UPDATE_SORT]: (state, sort) => {
        state.sort[sort.column] = sort.order
    },
    [types.UPDATE_PAGINATION]: (state, pagination) => {
        state.pagination[pagination.key] = pagination.value
    },
    [types.RESET]: (state) => {
        state.item = JSON.parse(JSON.stringify(model))
    }
}