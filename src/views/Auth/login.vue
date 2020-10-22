<template>
    <div class="login-content-card content-card-mt-4">
        <el-row>
            <el-col :span="24">
                <el-card class="py-2">
                    <dir class="text-center">
                        <span class="login-text"><i class="el-icon-user-solid"></i> Тизимга кириш </span>
                    </dir>
                    <el-form :model="loginForm" :rules="rules" ref="loginForm" @submit.prevent.native="handleLogin()" class="demo-ruleForm px-5">
                        <el-form-item prop="username" >
                            <el-input v-model="loginForm.username" placeholder="Логин"></el-input>
                        </el-form-item>
                        <el-form-item prop="password" >
                            <el-input v-model="loginForm.password" type="password" placeholder="Парол"></el-input>
                        </el-form-item>
                        <el-form-item size="large">
                            <el-button icon="el-icon-d-arrow-right" native-type="submit" class="width-100" type="primary" >Кириш</el-button>
                        </el-form-item>
                    </el-form>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    data:()=>({
        loginForm: {
          username: '',
          password: '',
        },
        rules: {
          username: [
            { required: true, message: 'Логин киритилиши шарт', trigger: 'blur' },
            { min: 3, message: 'Логин камида 3 та белгидан иборат болиши керак .', trigger: 'blur' }
          ],
          password: [
            { required: true, message: 'Парол киритилиши шарт', trigger: 'change' },
            { min: 6, message: 'Парол камида 6 та белгидан иборат болиши керак .', trigger: 'blur' }
          ],
        }
    }),
    methods:{
       ...mapActions({
           login:'auth/login',
       }),
       handleLogin(){
            this.$refs['loginForm'].validate((valid) => {
                if (valid) {
                    this.login(this.loginForm).then(()=>{
                        this.$router.push('/');
                         this.$notify.success({
                            title: 'Success',
                            message: 'Муваффақиятли амалга оширилди.'
                            });
                    }).catch(err=>{
                        this.$notify.error({
                            title: 'Error',
                            message: 'Логин ёки парол нотўғри.'
                            });
                    })
                } else {
                    return false;
                }
            });
    }
    }
}
</script>