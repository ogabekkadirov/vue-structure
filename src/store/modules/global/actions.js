export const actions = {
    LIST(context, { model, action_name, query }) {
        return context.dispatch(`${model}/${action_name}`, query);
    },
    SHOW(context, { model, id }) {
        return context.dispatch(`${model}/show`, id);
    },

    STORE(context, { model, attributes }) {
        return context.dispatch(`${model}/store`, attributes);
    },
    EMPTYLIST(context, { model }) {
        return context.dispatch(`${model}/emptyList`);
    },
    EDIT(context, { model, id, attributes }) {
        return context.dispatch(`${model}/edit`, { id, attributes });
    },
    SETMODEL(context, { model, item }) {
        return context.dispatch(`${model}/setModel`, item);
    },
    RESETMODEL(context, { model }) {
        return context.dispatch(`${model}/resetModel`);
    },
    DELETE(context, { model, id }) {
        return context.dispatch(`${model}/delete`, id);
    },
    updatePagination(context, { model, data }) {
        return context.dispatch(`${model}/updatePagination`, data);
    },
};