<template>
  <div>
    <!-- 首页轮播图 -->
    <Carousel />
    <!-- 首页搜索医院表单区 -->
    <Search />
    <!-- 底部展示医院结构 -->
    <el-row :gutter="20">
      <el-col :span="20">
        <!-- 展示等级 -->
        <Level/>
        <!-- 展示地区 -->
        <Region/>
        <!-- 展示医院 -->
      </el-col>
      <el-col :span="4">xxx</el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import Carousel from "./carousel/index.vue";
import Search from "./search/index.vue";
import Level from "./level/index.vue";
import Region from "./region/index.vue";
</script>

<style scoped>
</style>