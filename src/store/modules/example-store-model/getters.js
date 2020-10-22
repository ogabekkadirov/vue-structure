import { state } from "../user/state"

export const getters = {
    ITEMS: (state) => state.items,
    ITEM: (state) => state.item,
    FILTER: (state) => state.filter,
    SORT: (state) => state.sort,
    COLUMNS: (state) => state.columns,
    PAGINATION: (state) => state.pagination,
    RULES: (state) => state.rules,
    LINKS: (state) => state.links,
    FORM: state => {
        return {
            id: state.item.id,
            name: state.item.name,
            username: state.item.username
        }
    }
}