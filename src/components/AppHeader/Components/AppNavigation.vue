<template>
  <div class="bg-white shadow">
    <div class="container py-2">
      <div class="flex items-center" :class="$route.meta.parent || $route.name !='Home'  ? 'justify-between' : 'justify-end'">
        <template v-if="$route.meta.parent">
          <el-page-header @back="changeRoute" >
            <div class="text-gray-700 text-sm text-left" slot="title">
              Рўйҳатга қайтиш
            </div>

            <div class="text-gray-700 text-sm text-left" slot="content">
              {{ $route.meta.title }}
            </div>
          </el-page-header>
        </template>
        <template v-if="!$route.meta.parent && $route.name != 'Home'">
           <el-page-header @back="$router.go(-1)">
            <div class="text-gray-700 text-sm text-left" slot="title">
              Орқага қайтиш
            </div>

            <div class="text-gray-700 text-sm text-left" slot="content">
              {{ $route.meta.title }}
            </div>
          </el-page-header>
        </template>
        <el-select v-model="route" placeholder="Саҳифа" @change="changeRoute">
          <el-option v-for="(route, index) in routes" :key="index" :label="route.meta.title" :value="route.name" v-show="route.is_show"></el-option>
        </el-select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-navigation',

  data: () => ({
    route: null,
    routes: [
      { meta:{title: 'Aсосий ойна'}, name: 'Home',is_show:true},
      { meta:{title: 'Ҳужжатлар'}, name: 'MyFiles',is_show:true},
      { meta:{title: 'Ҳужжат қўшиш'}, name: 'FileStore',is_show:true},
      { meta:{title: 'Ҳужжат турлар'}, name: 'FileTypes',is_show:true},
      { meta:{title: 'Ҳужжат тури қўшиш'}, name: 'FileTypeStore',is_show:true},
      { meta:{title: 'Ташкилотлар'}, name: 'Organizations',is_show:true },
      { meta:{title: 'Ташкилотни кўриш'}, name: 'OrganizationShow',is_show:false},
    ],
  }),

  methods: {
    async changeRoute() {
      if (this.route !== this.$route.name) {
        await this.$router.push({ name: this.route });
      }
    },
  },

  watch: {
    $route(to) {
      console.log()
      if (to.meta.parent) {
        this.route = to.meta.parent.name;
      } else {
        this.route = to.name;
      }
      console.log(this.route)
    },
  },

  mounted() {
    if (this.$route.meta.parent) {
      this.route = this.$route.meta.parent.name;
    } else {
      this.route = this.$route.name;
    }
  },
};
</script>
