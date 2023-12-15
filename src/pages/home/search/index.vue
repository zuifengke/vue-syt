<template>
  <div class="search">
    <el-autocomplete
      @select="goDetail"
      :trigger-on-focus="false"
      v-model="hospitalName"
      clearable
      placeholder="请输入医院名称"
      :fetch-suggestions="fetchData"
    />
    <el-button type="primary" size="default" :icon="Search">搜索</el-button>
  </div>
</template>

<script setup lang="ts">
import { Search } from "@element-plus/icons-vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { reqHospitalInfo } from "@/api/home/index";
import { HospitalInfo } from "@/api/home/type";

// 收集搜索的关键字(医院的名字) 与 v-model中参数一直 ,回调函数中会进行接收
let hospitalName = ref<string>("");
// 创建路由器对象
let router = useRouter();

// fetch-suggestions 获取输入建议的方法， 仅当你的输入建议数据 resolve 时，通过调用 callback(data:[])  来返回它
// (queryString: string, callback: callbackfn) => void
const fetchData = async (keyword: string, cb: any) => {
  let result: HospitalInfo = await reqHospitalInfo(keyword);
  if (result.code == 200) {
    let showData = result.data.map((item) => {
      // 返回组件所需的固定模式数据 （通过 value 字段展示）
      return {
        // //展示的医院的名字
        value: item.hosname,
        // 存储医院编码
        hoscode: item.hoscode,
      };
    });
    // 给组件提供展示数据
    cb(showData);
  }
};

// @select="goDetail" 点击选中建议项时触发
const goDetail = (selectedHospital: any) => {
  router.push({
    path: "/hospital/register",
    query: { hoscode: selectedHospital.hoscode },
  });
};
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
  :deep(.el-input__wrapper) {
    width: 600px;
    margin-right: 5px;
  }
}
</style>