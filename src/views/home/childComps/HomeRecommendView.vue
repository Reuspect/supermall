<template>
  <div class="recommend-view">
    <div v-for="item in recommends" class="item">
      <a :href="item.link">
        <img :src="item.image">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommendView",
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    },
  }
</script>

<style scoped>
  .recommend-view {
    display: flex;
    flex-direction: row;
    flex-wrap:nowrap;
    justify-content:space-between;
    flex-shrink: 1;
    width: 100%;
    padding: 10px 20px;
    font-size: 12px;
    border-bottom: 8px solid #eeeeee;
  }
  .item {
    flex-shrink: 1;
    text-align: center;
  }
  .item img {
    width: 80px;
  }
</style>