<template>
  <div class="region">
    <div class="left">地区:</div>
    <div class="right">
      <ul class="region-list">
        <li class="active">全部</li>
        <li>萧山区</li>
        <li>萧山区</li>
        <li>萧山区</li>
        <li>萧山区</li>
        <li>萧山区</li>
        <li>萧山区</li>
        <li>萧山区</li>
        <li>萧山区</li>
        <li v-for="item in 10" key="item">萧山区2</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
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