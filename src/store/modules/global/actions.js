export const actions = {
    LIST(context, { model, query }) {
        return context.dispatch(`${model}/list`, query);
    },
    GET(context, { model, id }) {
        return context.dispatch(`${model}/show`, id);
    },

    STORE(context, { model, attributes }) {
        return context.dispatch(`${model}/store`, attributes);
    },

    EDIT(context, { model, id, attributes }) {
        return context.dispatch(`${model}/edit`, { id, attributes });
    },
    SETMODEL(context, { model, item }) {
        return context.dispatch(`${model}/setModel`, item);
    },
    DELETE(context, { model, id }) {
        return context.dispatch(`${model}/delete`, id);
    },
    updatePagination(context, { model, data }) {
        return context.dispatch(`${model}/updatePagination`, data);
    },
}