<template>
    <caption class="text-center">
        <div class="col-lg-12 mt-2 d-flex">
            <el-pagination
                :page-size="pagination.per_page"
                :total="pagination.total"
                :current-page="pagination.page"
                prev-text="Предыдущая"
                next-text="Следующая"
                :page-sizes="page_sizes"
                background
                layout="sizes, prev, pager, next, jumper"
                @size-change="sizeChange"
                @current-change="currentChange"
                @prev-click="currentChange"
                @next-click="currentChange"
            >
            </el-pagination>
        </div>
    </caption>
</template>

<script>
    export default {
        props: {
            pagination: { type: Object }
        },
        data() {
            return {
            }
        },
        computed: {
            page_sizes: () => {
                return [1,10,20,30,40,50,60,70,80,90,100,200]
            }
        },
        methods: {
            sizeChange(newPageSize){
                this.$emit('c-change',{key:'per_page',value: newPageSize});
                this.pagination.per_page = newPageSize;
                this.currentChange(1)
            },
            currentChange(page){
                this.$emit('c-change',{key:'page',value: page});
            }
        },
    }
</script>
<style>
    .el-pagination__rightwrapper {
        margin-left: 4rem !important;
    }
</style>
