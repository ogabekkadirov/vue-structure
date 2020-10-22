export const links = {
    store: {
        name: 'ItemStore',
        path: '/items/create',
        permission: 'item.store'
    },
    show: {
        name: 'ItemShow',
        key: 'id',
        path: '/items/show/:id',
        permission: 'item.show'
    },
    delete: {
        name: 'Delete',
        permission: 'item.delete'
    }
}