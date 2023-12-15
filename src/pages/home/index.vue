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
        <Level @getLevel="getLevel" />
        <!-- 展示地区 -->
        <Region @getRegion="getRegion" />
        <!-- 展示医院 -->
        <!-- v-if v-els 判断展示区域信息 -->
        <div class="hospital" v-if="hasHospitalArr.length > 0">
          <!-- :hospitalInfo="item" 传参给子类 -->
          <Card
            class="item"
            v-for="(item, index) in hasHospitalArr"
            :key="index"
            :hospitalInfo="item"
          />
        </div>
        <el-empty v-else description="暂无数据" />

        <!-- 分页器  插件方法： @size-change  当page-size 改变时触发-->
        <div class="page">
          <el-pagination
            v-model:current-page="pageNum"
            v-model:page-size="pageSize"
            :page-sizes="[10, 20, 30, 40]"
            :small="false"
            :background="true"
            layout="prev, pager, next, jumper, sizes,total"
            :total="total"
            @size-change="sizeChange"
            @current-change="currentChange"
          />
        </div>
      </el-col>
      <el-col :span="4"><Tip/></el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import Carousel from "./carousel/index.vue";
import Search from "./search/index.vue";
import Level from "./level/index.vue";
import Region from "./region/index.vue";
import Card from "./card/index.vue";
import Tip from "./tip/index.vue";
import { onMounted, ref } from "vue";
import { reqHospital } from "@/api/home/index";
import { Content, HospitalResponseData } from "@/api/home/type";

// 分页器页码
let pageNum = ref<number>(1);
// 一页展示几条数据
let pageSize = ref<number>(10);
// 存储已有的医院的数据
let hasHospitalArr = ref<Content>([]);
// 存储医院总个数
let total = ref<number>(0);
// 存储医院的等级相应数据
let hostype = ref<string>("");
// 存储医院的地区
let districtCode = ref<string>("");

// 组件挂载完毕 发送一次请求
onMounted(() => {
  pageHospitalInfo();
});

// 分页器下拉菜单发生变化的时候会触发
const sizeChange = () => {
  //当前页码归第一页
  pageNum.value = 1;
  // 再次发请求获取医院的数据
  pageHospitalInfo();
};
// 分页器页码发生变化时候回调
const currentChange = () => {
  pageHospitalInfo();
};

// 获取已有医院数据信息
const pageHospitalInfo = async () => {
  let result: HospitalResponseData = await reqHospital(
    pageNum.value,
    pageSize.value,
    hostype.value,
    districtCode.value
  );

  if (result.code == 200) {
    // 存储医院数据
    // 注意：reactive() 不能替换整个对象： let b = reactive({}); b = {}; 执行这段代码后对象失去原本的响应式
    // ref 则直接能通过 a.value = {}, b.value = [] 实现并且不会丢失响应式
    hasHospitalArr.value = result.data.content;
    // 医院总数
    total.value = result.data.totalElements;
  }
};

// 子组件自定义事件:获取儿子给父组件传递过来的等级参数
const getLevel = (level: string) => {
  // 收集参数:等级参数
  hostype.value = level;
  // 再次发请求
  pageHospitalInfo();
};

// 子组件自定义事件：获取子组件传递过来的地区参数
const getRegion = (region: string) => {
  // 存储地区的参数
  districtCode.value = region;
  pageHospitalInfo();
};
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