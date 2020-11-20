<template>
  <div class="bg-white shadow">
    <div class="container py-2">
      <div class="flex items-center justify-between">
        <template>
          <el-page-header
            @back="$router.go(-1)"
            v-if="!$route.meta.parent && $route.name != 'Home'"
          >
            <div class="text-gray-700 text-sm text-left" slot="title">
              Орқага қайтиш
            </div>

            <div class="text-gray-700 text-sm text-left" slot="content">
              {{ $route.meta.title }}
            </div>
          </el-page-header>
          <div class="text-gray-700 text-sm text-left" slot="content" v-else>
            | {{ $route.meta.title }}
          </div>
          <el-menu
            :default-active="route"
            class="el-menu-demo ml-10"
            mode="horizontal"
            @select="changeRoute"
          >
            <el-menu-item
              :index="route.name"
              v-for="route in routes"
              :key="route.name + 'header_routes'"
            >
              <i :class="route.meta.icon"></i>{{ route.meta.title }}
            </el-menu-item>
          </el-menu>
        </template>
        <template>
          <el-menu class="el-menu-demo ml-10" mode="horizontal">
            <el-submenu index="Profile">
              <template slot="title">Profile</template>
              <el-menu-item index="2-4-1"
                ><span
                  ><i class="el-icon-user"></i> My Profile</span
                ></el-menu-item
              >
              <el-menu-item index="2-4-2"
                ><i class="el-icon-right"></i> Tizimdan chiqish</el-menu-item
              >
            </el-submenu>
          </el-menu>
        </template>
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
      {
        meta: { title: 'Aсосий ойна', icon: 'el-icon-monitor' },
        name: 'Home',
        is_show: true,
      },
      {
        meta: { title: 'Ассессментлар', icon: 'el-icon-user' },
        name: 'Home1',
        is_show: true,
      },
      {
        meta: { title: 'Номзодлар', icon: 'el-icon-s-custom' },
        name: 'Home2',
        is_show: true,
      },
      {
        meta: { title: 'Roles', icon: 'el-icon-cpu' },
        name: 'Roles',
        is_show: true,
      },
    ],
  }),

  methods: {
    async changeRoute(key, keyPath) {
      if (key !== this.$route.name) {
        await this.$router.push({ name: key });
      }
    },
  },

  watch: {
    $route(to) {
      if (to.meta.parent) {
        this.route = to.meta.parent.name;
      } else {
        this.route = to.name;
      }
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

<style scoped>
.el-menu-item a {
  text-decoration: none;
}
</style>
