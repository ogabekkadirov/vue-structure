<template>
   <div class="sticky top-0 z-10">
    <div class="flex flex-col">
      <div class="bg-white">
        <div class="container py-2">
          <div class="flex items-center justify-between">
            <div class="inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" class="fill-gray-700">
                <path d="M17 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h2V3a1 1 0 1 1 2 0v1h6V3a1 1 0 0 1 2 0v1zm-2 2H9v1a1 1 0 1 1-2 0V6H5v4h14V6h-2v1a1 1 0 0 1-2 0V6zm4 6H5v8h14v-8z"/>
              </svg>

              <span class="text-gray-700 text-sm text-left font-normal ml-2">
                Сана: {{ date }} й.
              </span>
            </div>
            <el-button size="medium" icon="el-icon-right" v-if="isAuth" @click="logout">Тизимдан чиқиш</el-button>
            <router-link :to="{name:'Login'}" class="el-button el-button--default el-button--medium" v-else > <i class="el-icon-back"></i><span>Тизимга кириш</span></router-link>
            <!-- <button type="button" class="inline-flex items-center text-gray-700 bg-white log--out-btn" @click="logout" v-if="isAuth">
              <span class="text-sm text-left font-normal mr-2">
                
              </span>

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" class="fill-current">
                <path d="M18.59 13H3a1 1 0 0 1 0-2h15.59l-5.3-5.3a1 1 0 1 1 1.42-1.4l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.42-1.4l5.3-5.3z"/>
              </svg>
            </button> -->
          </div>
        </div>
      </div>

      <div class="bg-blue-500">
        <div class="container py-4">
          <div class="flex items-center justify-start">
            <router-link to="/" class="text-white hover:opacity-75">
              <img src="/assets/images/logo.png" class="logo" alt="LOGO">
            </router-link>
          </div>
        </div>
      </div>

      <app-navigation v-if="isAuth">
        <!-- app-navigation -->
      </app-navigation>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AppNavigation from './Components/AppNavigation';
import moment from 'moment';
export default {
  name: 'app-header',
    data:()=>({
        date: moment().format('DD.MM.YYYY'),
    }),
  components: {
    AppNavigation,
  },

  computed: {
    ...mapGetters({
        isAuth:'auth/IS_AUTH'
    }),
  },
  methods: {
    ...mapActions({
      fetchLogout: 'auth/logout',
    }),

    async logout() {
      await this.fetchLogout().then(()=>{
         this.$router.push({
          name: 'Login',
        });
      }).catch(error=>{
        this.$notify({
            title: "Error",
            message: "Tizimdan chiqishda xatolik mavjud .",
            type: "error",
        });
      });
    },
  },
};
</script>
