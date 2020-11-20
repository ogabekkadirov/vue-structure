import * as crud from '@/utils/api/crud'
import * as types from './properties/mutation_types'
import { permissionParents } from '@/api/roles'
export const actions = {
    list({
        commit
    }, query) {
        let url = 'roles'
        return crud.list({
            commit
        }, types.namespace, url, query)
    },
    store({
        commit,
    }, data) {
        let url = 'roles'
        return crud.store({
            commit
        }, types.namespace, url, data)
    },
    show({
        dispatch,
        commit
    }, data) {
        let url = 'roles/' + data.id
        return crud.show({
            dispatch,
            commit
        }, types.namespace, url, data.query)
    },
    update({
        commit
    }, data) {
        let url = 'roles/' + data.id
        return crud.update({
            commit
        }, types.namespace, url, data)
    },
    delete({
        commit
    }, id) {
        let url = 'roles/' + id
        return crud.destroy({
            commit
        }, types.namespace, url)
    },
    permissionParents({
        commit
    }, query) {
        return new Promise((resolve, reject) => {
            permissionParents(query)
                .then((response) => {
                    commit(types.SET_PERMISSIONS, response.result.data.data);
                    resolve();
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    updateSort({
        commit
    }, sort) {
        commit(types.UPDATE_SORT, sort)
    },
    updateFilter({
        commit
    }, filter) {
        commit(types.UPDATE_FILTER, JSON.parse(JSON.stringify(filter)))
    },
    updateColumn({
        commit
    }, column) {
        commit(types.UPDATE_COLUMN, column)
    },
    updatePagination({
        commit
    }, pagination) {
        commit(types.UPDATE_PAGINATION, pagination)
    },
    resetModel({
        commit
    }) {
        commit(types.RESET)
    }
}