<template>
  <div class="search">
    <el-autocomplete clearable placeholder="请输入医院名称" class="form"/>
    <el-button type="primary" size="default" :icon="Search">搜索</el-button>
  </div>
</template>

<script setup lang="ts">
import { Search } from "@element-plus/icons-vue";
</script>
<!-- 深度选择器： >>>  /deep/  ::v-deep -->

<style scoped lang="scss">
.search {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;

  // 深度选择器
  :deep(.el-input__wrapper)  {
    width: 600px;
    margin-right: 5px;
  }
}
</style>