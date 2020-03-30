<template>
  <div class="goods-item">
      <img :src="goodsItem.show.img" alt="">
      <div class="words">
        <p>{{goodsItem.title}}</p>
        <div class="goods-info">
          <span class="price">{{goodsItem.price}}</span>
          <span class="collect">{{goodsItem.cfav}}</span>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props:{
      goodsItem:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
 .goods-item {
    position: relative;

 }
  .goods-item img {
    width: 100%;
    height: 250px;
    border-radius: 5px;
    padding-bottom: 15px;
  }
  .words {
    height: 60px;
    position: relative;
  }
  .words p{
    position: absolute;
    top: 0px;
    font-size: 12px;
  }

  .goods-item p {

  }
  .goods-info .price {
    color: red;
    position: absolute;
    left: 60px;
    font-size: 12px;
    bottom: 3px;
  }
  .goods-info .collect {
    position: absolute;
    font-size: 12px;
    bottom: 3px;
    left: 120px;
  }
 .goods-info .collect::before {
   content: '';
   position: absolute;
   left: -15px;
   top: -1px;
   width: 14px;
   height: 14px;
   background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
 }
</style>