import * as crud from '@/utils/api/crud';
import * as types from './properties/mutation_types';
export const actions = {
    list({ commit }, query) {
        let url = 'users/';
        return crud.list({
                commit,
            },
            types.namespace,
            url,
            query
        );
    },
    store({ commit }, data) {
        let url = 'users/';
        return crud.store({
                commit,
            },
            types.namespace,
            url,
            data
        );
    },
    show({ dispatch, commit }, id) {
        let url = 'users/' + id;
        return crud.show({
                dispatch,
                commit,
            },
            types.namespace,
            url
        );
    },
    update({ commit }, data) {
        let url = 'users/' + data.id;
        return crud.update({
                commit,
            },
            types.namespace,
            url,
            data
        );
    },
    delete({ commit }, id) {
        let url = 'users/' + id;
        return crud.destroy({
                commit,
            },
            types.namespace,
            url
        );
    },
    emptyList({ commit }) {
        commit(types.EMPTY_ITEMS);
    },
    updateSort({ commit }, sort) {
        commit(types.UPDATE_SORT, sort);
    },
    updateFilter({ commit }, filter) {
        commit(types.UPDATE_FILTER, JSON.parse(JSON.stringify(filter)));
    },
    updateColumn({ commit }, column) {
        commit(types.UPDATE_COLUMN, column);
    },
    updatePagination({ commit }, pagination) {
        commit(types.UPDATE_PAGINATION, pagination);
    },
    setModel({ commit }) {
        commit(types.RESET);
    },
    resetModel({ commit }) {
        commit(types.SET_ITEM, data);
    },
};