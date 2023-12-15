<template>
  <div class="region">
    <div class="left">地区:</div>
    <div class="right">
      <ul class="region-list">
        <li :class="{ active: regionFlag == '' }" @click="changeRegion('')">
          全部
        </li>
        <li
          v-for="region in regionArr"
          :key="region.value"
          :class="{ active: regionFlag == region.value }"
          @click="changeRegion(region.value)"
        >
          {{ region.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reqHospitalLevelAndRegion } from "@/api/home/index";
import { onMounted, ref } from "vue";
import {
  HospitalLevelAndRegionResponseData,
  HospitalLevelAndRegionArr,
} from "@/api/home/type";

// 定义一个数组,存储地区等级信息
let regionArr = ref<HospitalLevelAndRegionArr>([]);
// 控制地区等级高亮响应式数据
let regionFlag = ref<string>("");

onMounted(() => {
  getLevelInfo();
});

const changeRegion = (level: string) => {
  // 高亮响应式数据 存储地区的值
  regionFlag.value = level;
  // 触发自定义事件,将地区信息返回给父组件
  $emit("getRegion", level);
};

const getLevelInfo = async () => {
  let result: HospitalLevelAndRegionResponseData =
    await reqHospitalLevelAndRegion("Beijin");
  if (result.code == 200) {
    regionArr.value = result.data;
  }
};

let $emit = defineEmits(["getRegion"]);
</script>

<style scoped lang="scss">
.region {
  display: flex;
  margin-top: 20px;
  color: #7f7f7f;
  .left {
    width: 60px;
    margin-right: 10px;
  }
  .right {
    .region-list {
      display: flex;
      flex-flow: wrap;
      li {
        margin-right: 10px;
        margin-bottom: 10px;
        &.active {
          color: #55a6fe;
        }
      }

      li:hover {
        color: #55a6fe;
        cursor: pointer;
      }
    }
  }
}
</style>