import { mapActions } from 'vuex';

export default {
    methods: {
        ...mapActions({
            list: 'LIST',
            show: 'SHOW',
            storeItem: 'STORE',
            edit: 'EDIT',
            delete: 'DELETE',
            setModel: 'SETMODEL',
            updatePagination: 'updatePagination',
            emptyList: 'EMPTYLIST',
            resetModel: 'RESETMODEL',
        }),
        hasType(type, slug) {
            return type === slug;
        },

        getBGColor(index) {
            return index % 2 === 0 ? 'bg-cool-gray-50' : 'bg-cool-gray-100';
        },

        getError(errors, name) {
            if (errors[name]) {
                return errors[name][0];
            }

            return null;
        },
    },
};