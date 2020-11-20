<template>
    <div class="">
        <table-index :name="name" :data="data" :model_name="model_name" :pagination="pagination" :filter="filter" :links="links" :columns="columns">

        </table-index>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data:()=>({
        name: 'Роллар',
        model_name:'role',
    }),
    computed:{
        ...mapGetters({
            filter:'role/FILTER',
            columns:'role/COLUMNS',
            links:'role/LINKS',
            data:'role/ITEMS',
            pagination:'role/PAGINATION'
            })    
        },
    methods:{
    }
}
</script>