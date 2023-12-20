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
    <!-- 登录组件 用户登录完成，或是关闭登录窗口 则销毁该组件 重置登录组件相关的设置 -->
    <Login v-if="userStore.visiable"/>
  </div>
</template>

<script setup lang="ts">
// 引入用户仓库
import useUserStore from "@/store/modules/user";
let userStore = useUserStore();
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