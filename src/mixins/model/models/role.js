import { mapGetters, mapActions } from 'vuex';
export default {
    data() {
        return {
            waiting: false,
            defaultProps: {
                children: 'children',
                label: 'name',
            },
            selected_permissions: [],
        };
    },
    components: {},
    computed: {
        ...mapGetters({
            rules: 'role/RULES',
            item: 'role/ITEM',
            columns: 'role/COLUMNS',
            getForm: 'role/FORM',
            permissions: 'role/PERMISSIONS',
        }),
    },
    async mounted() {
        if (this.permissions && this.permissions.length === 0)
            await this.getpermissionParents();
    },
    async created() {},
    methods: {
        ...mapActions({
            resetModel: 'role/resetModel',
            permissionParents: 'role/permissionParents',
        }),
        setForm() {
            this.form = JSON.parse(JSON.stringify(this.getForm));
        },
        getpermissionParents() {
            this.permissionParents({ include: 'Children' })
                .then((res) => {
                    this.waiting = false;
                })
                .catch((error) => {
                    this.waiting = false;
                    this.$notify({
                        title: 'Error',
                        message: 'Ҳуқуқлар маълумотлари келмади.',
                        type: 'error',
                    });
                });
        },
        loadItem() {
            this.show({
                    model: 'role',
                    id: this.$route.params.id,
                    query: { include: 'Permissions' },
                })
                .then((res) => {
                    let checked_permissions = res.result.data.permissions.data;
                    for (let key in checked_permissions) {
                        this.selected_permissions.push(checked_permissions[key].id);
                    }
                    this.$refs.tree.setCheckedKeys(this.selected_permissions);
                    this.form = JSON.parse(JSON.stringify(this.item));
                })
                .catch(() => {
                    this.$notify({
                        title: 'Error',
                        message: 'Ҳуқуқлар маълумотлари келмади.',
                        type: 'error',
                    });
                });
        },
        onSave() {
            this.$refs['form'].validate((valid) => {
                if (valid) {
                    let checked_permissions = this.$refs.tree.getCheckedNodes();
                    let role_permissions = [];
                    for (let key in checked_permissions) {
                        role_permissions.push(checked_permissions[key].id);
                    }
                    this.form['permissions'] = role_permissions;
                    this.waiting = true;
                    this.save(this.form)
                        .then((res) => {
                            this.waiting = false;
                            if (this.$route.name == 'RoleStore') {
                                this.resetModel();
                                this.setForm();
                                this.$refs.tree.setCheckedKeys([]);
                            }
                            this.$notify({
                                title: 'Success',
                                message: 'Маълумот сақланди.',
                                type: 'success',
                            });
                        })
                        .catch((error) => {
                            this.waiting = false;
                            this.$notify({
                                title: 'Error',
                                message: 'Маълумот сақлашда хатолик мавжуд.',
                                type: 'error',
                            });
                        });
                }
            });
        },
    },
};