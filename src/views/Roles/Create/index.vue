<template>
  <div class="flex flex-col items-center">
    <el-card class="w-full width-100">
        <dir class="text-center">
            <span class="login-text"> Янги рол қўшиш</span>
        </dir>
        <hr>
        <el-form :model="form" :rules="rules" ref="form"  label-width="120px" class="demo-ruleForm store--form">
            <el-form-item label="Рол номи" prop="name" class="py-2">
                <el-input v-model="form.name" placeholder="Рол номи"></el-input>
            </el-form-item>
            <el-form-item class="py-2">
                <span>Ҳуқуқлар бериш</span>
                    <el-tree
                        :data="permissions"
                        show-checkbox
                        node-key="id"
                        ref="tree"
                        :default-expanded-keys="[]"
                        :default-checked-keys="selected_permissions"
                        :props="defaultProps">
                    </el-tree>
            </el-form-item>
            <el-form-item class="fl-right">
                <el-button type="primary" size="medium" @click="onSave">Қўшиш</el-button>
                <router-link :to="{name:'MyFiles'}" class="el-button el-button--danger el-button--medium">Бекор қилиш</router-link>
            </el-form-item>
        </el-form>
    </el-card>
  </div>
</template>
<script>
import {mapActions } from 'vuex'
import role from '@/mixins/model/models/role'
import form from '@/mixins/model/form'

export default {
    mixins:[role,form],
    data:()=>({
    }),
    created() {
        // this.resetModel();
        this.setForm();
  },
  methods:{
      ...mapActions({
      save: "role/store",
    }),
  }
}
</script>