import { mapGetters, mapActions } from 'vuex';
export default {
    data: () => ({
        loadingData: false,
        filter_query: {},
        filter_relation_item: [],
    }),
    watch: {
        'pagination.page': {
            handler: async function(newVal, oldVal) {
                if (newVal != oldVal && _.isFunction(this.debouncedFetchData)) {
                    this.debouncedFetchData();
                }
            },
            deep: true,
            immediate: true,
        },
        'pagination.per_page': {
            handler: async function(newVal, oldVal) {
                if (newVal != oldVal && _.isFunction(this.debouncedFetchData)) {
                    this.debouncedFetchData();
                }
            },
            deep: true,
            immediate: true,
        },
    },
    created() {
        this.debouncedFetchData = _.debounce(this.fetchData, 100);
        this.fetchModels();
        this.updateFilter();
    },

    methods: {
        async fetchModels() {
            for (const index in this.filter) {
                if (this.filter.hasOwnProperty(index)) {
                    let item = this.filter[index];
                    if (item.type == 'select' && item.model) {
                        let query = [];
                        if (!item.action_name || item.action_name == null) {
                            item.action_name = 'list';
                        }
                        await this.list({
                                model: item.model,
                                action_name: item.action_name,
                                query: query,
                            })
                            .then((res) => {
                                this.filter[index].options = res.data.data;
                                if (item.key == 'type_id') {
                                    this.filter_relation_item = this.filter[index].options;
                                }
                            })
                            .catch((error) => {
                                this.$notify({
                                    title: 'Error',
                                    message: "Ma'lumot olishda xatolik mavjud .",
                                    type: 'error',
                                });
                            });
                    }
                }
            }
        },
        getRelation_name(item) {
            let relation_item = {};
            this.filter_relation_item.forEach((element) => {
                if (parseInt(element.id) == parseInt(item.type_id)) {
                    relation_item = element;
                }
            });
            return relation_item.name;
        },
        async updateFilter() {
            this.filter_query = {};
            for (const index in this.filter) {
                if (this.filter.hasOwnProperty(index)) {
                    if (this.filter[index].type != 'none' && this.filter[index].value) {
                        let key = this.filter[index].key;
                        this.filter_query[key] = this.filter[index].value;
                    }
                }
            }
            if (this.pagination.page != 1) {
                await this.updatePaginationFunction({ key: 'page', value: 1 });
            } else {
                this.debouncedFetchData();
            }
        },
        // async fetchChildren(parent, parent_id) {
        //     const attributes = {};

        //     if (parent.key === 'region_id') {
        //         attributes.region_id = parent_id;
        //     }

        //     for (const key in this.filters) {
        //         if (this.filters[key].model === parent.children) {
        //             this.filters[key].options = await this.all({
        //                 model: this.filters[key].model,
        //                 attributes,
        //             });
        //         }
        //     }
        // },

        async fetchData() {
            this.loadingData = true;
            this.filter_query = {
                ...this.filter_query,
                ...this.pagination,
            };
            this.emptyList({
                model: this.model_name,
            });
            await this.list({
                    model: this.model_name,
                    action_name: this.action_name,
                    query: this.filter_query,
                })
                .then(() => {
                    this.loadingData = false;
                })
                .catch((error) => {
                    this.loadingData = false;
                    this.$notify({
                        title: 'Error',
                        message: 'Маълумотлар келмади !!!',
                        type: 'error',
                    });
                });
        },
        async updatePaginationFunction(data) {
            await this.updatePagination({
                model: this.model_name,
                data,
            });
        },
        async edit(model) {
            this.setModel(model);
        },
        async deleteItem(id) {
            const isConfirm = confirm('Малумот ўчирилиб ташланади. Давом этасизми?');
            if (isConfirm) {
                await this.delete({
                        model: this.model_name,
                        id: id,
                    })
                    .then(() => {
                        this.$notify({
                            title: 'Success',
                            message: "Ma'lumot o'chirildi .",
                            type: 'success',
                        });
                    })
                    .catch((error) => {
                        this.$notify({
                            title: 'Success',
                            message: "Ma'lumotni o'chirishda xatolik yuz berdi.",
                            type: 'success',
                        });
                    });

                await this.fetchData();
            }
        },
    },

    async mounted() {
        // await this.setLoading(true);
        // await this.fetchModels();
        // await this.fetchData();
        // await this.setLoading(false);
        // this.loadingData = true;
    },
};