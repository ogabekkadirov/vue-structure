import {
    pagination
} from '@/store/modules/properties/pagination'
import request from '../request'
import * as mutation_type_keys from '@/store/modules/properties/mutation/type_keys'

export const list = ({
    commit
}, namespace, url, query) => {
    return new Promise((resolve, reject) => {
        request({
            url: url,
            method: 'GET',
            params: query
        }).then(res => {
            commit(namespace + mutation_type_keys.SET_ITEMS, res.result.data.data)
            commit(namespace + mutation_type_keys.UPDATE_PAGINATION, { key: 'total', value: res.result.data.pagination.total })
            resolve(res)
        }).catch(error => {
            reject(error)
        })
    })
}
export const store = ({
    commit
}, namespace, url, data) => {
    return new Promise((resolve, reject) => {
        request({
            url: url,
            method: 'POST',
            data: data
        }).then(res => {
            resolve(res)
        }).catch(error => {
            reject(error)
        })
    })
}
export const show = ({
    commit
}, namespace, url) => {
    return new Promise((resolve, reject) => {
        request({
            url: url,
            method: 'GET',
        }).then(res => {
            commit(namespace + mutation_type_keys.SET_ITEM, res.data)
            resolve(res)
        }).catch(error => {
            reject(error)
        })
    })
}
export const update = ({
    commit
}, namespace, url, data) => {
    return new Promise((resolve, reject) => {
        request({
            url: url,
            method: 'PUT',
            data: data
        }).then(res => {
            resolve(res)
        }).catch(error => {
            reject(error)
        })
    })
}
export const destroy = ({
    commit
}, namespace, url) => {
    return new Promise((resolve, reject) => {
        request({
            url: url,
            method: 'DELETE',
        }).then(res => {
            resolve(res)
        }).catch(error => {
            reject(error)
        })
    })
}