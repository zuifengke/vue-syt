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
        <Level />
        <!-- 展示地区 -->
        <Region />
        <!-- 展示医院 -->
        <div class="hospital">
          <Card class="item" v-for="item in 10" :key="item" />
        </div>
        <!-- 分页器 -->
        <div class="page">
          <el-pagination
            v-model:current-page="pageNum"
            v-model:page-size="pageSize"
            :page-sizes="[10, 20, 30, 40]"
            :small="false"
            :background="true"
            layout="prev, pager, next, jumper, sizes,total"
            :total="13"
          />
        </div>
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
import Card from "./card/index.vue";
import { ref } from "vue";

let pageNum = ref<number>(1);
let pageSize = ref<number>(10);
</script>

<style scoped lang="scss">
.hospital {
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  margin-top: 20px;
  .item {
    width: 48%;
    margin: 10px 0;
  }
}
.page {
  margin: 10px 0;
}
</style>