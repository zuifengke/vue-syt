<template>
  <div class="container">
    <!-- 顶部全局组件 -->
    <HospitalTop />
     <!-- 展示路由组件的区域 -->
    <div class="content">
      <!-- 使用路由 -->
      <router-view></router-view>
    </div>
    <HospitalBottom />
  </div>
</template>

<script setup lang="ts">
import request from '@/utils/request';
import { onMounted } from 'vue';

onMounted(() => {
  request.get('/hosp/hospital/1/10')
})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  // 主轴从上到下
  flex-direction: column;
  // 侧轴中点对齐
  align-items: center;
  .content {
    margin-top: 70px;
    width: 1200px;
    min-height: 700px;
  }
}
</style>