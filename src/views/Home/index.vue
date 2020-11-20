<template>
  <div class="content-card-mt-4 home-page-card">
    <el-row>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <el-card shadow="hover" class="card-item--center ">
          <router-link :to="{ name: 'Organizations' }">
            <div class="items-center text-align-center py-4 ">
              <strong
                >Давлат фуқаролик хизматчиларининг меҳнат фаолиятига оид
                маъмурий ва норматив ҳужжатлар</strong
              >
            </div>
            <el-button type="primary" class="width-100" size="medium"
              >Кўриш</el-button
            >
          </router-link>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <el-card shadow="hover" class="card-item--center">
          <router-link :to="{ name: 'MyFiles' }">
            <div class="items-center text-align-center py-4">
              <strong
                >Давлат фуқаролик хизматчиларининг меҳнат фаолиятини тартибга
                солувчи норматив-ҳуқуқий ҳужжатлар</strong
              >
            </div>
            <el-button type="primary" class="width-100" size="medium"
              >Кўриш</el-button
            >
          </router-link>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  methods: {},
};
</script>
