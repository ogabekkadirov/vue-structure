<template>
    <div class="overflow-hidden">
        <app-header />
        <app-main />
    </div>
</template> 
<script>
import AppHeader from '@/components/AppHeader'
import AppMain from '@/components/AppMain'
export default {
    data:()=>({

    }),
    components:{
        AppHeader,
        AppMain
    }
}
</script>
<style scoped>
    .el-header{
        height: 10vh !important
        }

</style>