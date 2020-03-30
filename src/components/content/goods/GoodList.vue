<template>
  <div class="goods-list">
<!--    每个item的数据是定死的 不需要插槽-->
    <goods-list-item v-for="item in goods" :goods-item="item" class="item"></goods-list-item>
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem";
  export default {
    name: "GoodList",
    components:{
      GoodsListItem
    },
    props:{
      goods:{
        type:Array,
        default(){
          return []
        }
      }
    },

  }
</script>

<style scoped>
 .goods-list {
   display: flex;
   width: 100%;
   flex-wrap: wrap;
   justify-content: space-evenly;
 }
  .goods-list .item {
    width: 48%;
    padding: 2px;

  }
</style>