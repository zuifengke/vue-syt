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
import useDetailStore from "@/store/modules/hospitalDetail";
import { onMounted } from "vue";

// 获取对象仓库
let detailStore = useDetailStore();
// 获取路由器
let router = useRouter();
// 获取当前路由的信息
let route = useRoute();
// 跳转到其他路径
const changeActive = (path: string) => {
  // 切换二级路径 后面也加上query信息 页面刷新时能重新请求存储数据
  router.push({ path, query: { hoscode: route.query.hoscode } });
};

// 组件挂载完成 通过pinia仓库发送请求获取医院的详情信息,并存储到仓库中
onMounted(() => {
  // 获取医院详情信息
  // 指定(断言) route.query.hoscode 为string 类型
  detailStore.getHospital(route.query.hoscode as string);

  // 获取医院科室的数据 （测试数据 仅部分数据有科室信息）
  detailStore.getDeparment(route.query.hoscode as string);
});
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