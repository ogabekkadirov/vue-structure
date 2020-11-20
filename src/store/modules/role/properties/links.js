export const links = {
    store: {
        name: 'RoleStore',
        path: '/roles/create',
        permission: 'role.store'
    },
    update: {
        name: 'RoleUpdate',
        key: 'id',
        path: '/roles/update/:id',
        permission: 'role.update'
    },
    delete: {
        name: 'Delete',
        permission: 'role.delete',
    }
}