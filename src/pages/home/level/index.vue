<template>
  <div class="level">
    <h1>医院</h1>
    <div class="content">
      <div class="left">等级:</div>
      <ul class="hospital-list">
        <li :class="{ active: activeFlag == '' }" @click="changeLevel('')">
          全部
        </li>

        <!-- 点击事件触发时 将被点击等级对象的value 绑定activeFlag高亮响应数据,
          判断每个等级对象的等级值是否等于高亮响应数据,等于的话 class="active" 才生效存在,根据 css进行高亮展示 -->
          <!-- 注意检查变量别写错!!!  activeFlage 未定义-->
        <li
          v-for="level in levelInfoArr"
          :class="{ active: activeFlag == level.value }"
          :key="level.value"
          @click="changeLevel(level.value)"
        >
          {{ level.name }}
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

// 定义一个数组,存储医院等级信息
let levelInfoArr = ref<HospitalLevelAndRegionArr>([]);
// 控制医院等级高亮响应式数据
let activeFlag = ref<string>("");

onMounted(() => {
  getLevelInfo();
});

const changeLevel = (level: string) => {
  // 高亮响应式数据 存储医院等级的值
  activeFlag.value = level;
};

const getLevelInfo = async () => {
  let result: HospitalLevelAndRegionResponseData =
    await reqHospitalLevelAndRegion("HosType");
  if (result.code == 200) {
    levelInfoArr.value = result.data;
  }
};
</script>

<style scoped lang="scss">
.level {
  margin-top: 20px;
  color: #7f7f7f;
  h1 {
    font-weight: 900;
    margin: 10px 0px;
  }
  .content {
    display: flex;
    .left {
      margin-right: 10px;
    }

    .hospital-list {
      display: flex;
      li {
        margin-right: 10px;
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