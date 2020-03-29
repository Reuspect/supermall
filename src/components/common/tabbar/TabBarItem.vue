<template>
  <div  class="tab-bar-item" @click="itemClick">
<!--    <img src="../../assets/img/tabbar/home.svg" alt="">-->
<!--    <div>首页</div>-->
<!--    不能写死 所以继续用插槽-->
<!--    在外面用div封装 可以让slot被替换时的属性得以保留-->
    <div v-if='isActive' class="item-active-icon"><slot  name="item-icon-active"></slot></div>
    <div v-else class="item-icon"><slot  name="item-icon"></slot></div>

    <div class='item-text' :style="activeStyle" ><slot name="item-text"></slot></div>

  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    //props父传子 从App里传到这里 即App调用该组件(tab-bar)
    // 时添加了的属性path将会被传到这里
    props:{
      path:{
        type:String,
        required:true
      },
      activeColor:{
        type:String,
        default:'red',
      },
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1;
        //indexOf返回首次出现的位置 是否包含我当前的path
        //this.$route.path是正活跃的对象.
        //es6 方法如下
        //return this.$route.path.includes(this.path)
      },
      activeStyle(){
        return this.isActive ? {color: this.activeColor}:{};
      },
    },
    data(){
      return {
        //此处不适合写死
        // isActive:true
      }
    },
    methods:{
      itemClick(){
        this.$router.replace(this.path).catch(err=>{})
      //  防止多次点击重复报错
      }
    }
  }
</script>

<style scoped>
    .tab-bar-item {
      flex:1;/*均分*/
      text-align:center;
      height:49px;
      font-size:15px;
    }
  .tab-bar-item img {
    /*因为图片默认太大 此处专门为图片设置大小*/
    width: 24px;
    height: 24px;
    margin-top:3px;
    vertical-align: middle;
    /*margin-bottom:2px;*/
  }
  /*.active {*/
  /*  color:red*/
  /*}*/

</style>
