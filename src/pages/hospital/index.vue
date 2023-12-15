<template>
  <div class="hospital">
    <!-- 左侧导航栏区 -->
    <div class="menu">
      <div class="top">
        <el-icon><HomeFilled /></el-icon>
        <span> / 医院信息</span>
      </div>
      <!-- Menu菜单 -->
      <el-menu :default-active="route.path" class="el-menu-vertical-demo">

        <el-menu-item
          index="/hospital/register"
          @click="changeActive('/hospital/register')"
        >
          <el-icon><Document /></el-icon>
          <span>预约挂号</span>
        </el-menu-item>

        <el-menu-item
          index="/hospital/detail"
          @click="changeActive('/hospital/detail')"
        >
          <el-icon><IconMenu /></el-icon>
          <span>医院详情</span>
        </el-menu-item>

        <el-menu-item
          index="/hospital/notice"
          @click="changeActive('/hospital/notice')"
        >
          <el-icon><Setting /></el-icon>
          <span>预约通知</span>
        </el-menu-item>

        <el-menu-item
          index="/hospital/close"
          @click="changeActive('/hospital/close')"
        >
          <el-icon><InfoFilled /></el-icon>
          <span>停诊信息</span>
        </el-menu-item>

        <el-menu-item
          index="/hospital/search"
          @click="changeActive('/hospital/search')"
        >
          <el-icon><Search /></el-icon>
          <span>查询/取消</span>
        </el-menu-item>

      </el-menu>
    </div>
    <!-- 右侧内容展示区 -->
    <div class="content">
      <!-- 子组件内容展示 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
//左侧菜单需要用到的图标
import {
  Document,
  Menu as IconMenu,
  Setting,
  InfoFilled,
  Search,
  HomeFilled,
  House,
} from "@element-plus/icons-vue";

import { useRouter, useRoute } from "vue-router";
// 获取路由器
let router = useRouter();
// 获取当前路由的信息
let route = useRoute();

const changeActive = (path: string) => {
  router.push(path);
};
</script>

<style scoped lang="scss">
.hospital {
  display: flex;
  // 开启弹性盒子 子元素 2:8分配布局
  .menu {
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    .top {
      color: #7f7f7f;
    }
  }
  .content {
    flex: 8;
  }
}
</style>