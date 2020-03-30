<template>
  <div class="tab-control">
<!--    如果只是文字不一样的话 可以不搞插槽 没有必要-->
    <div v-for="(item,index) in title"
         class="tab-control-item"
         :class="{active:index===currentIndex}" @click="changeIndex(index,item)">
      <span>{{item}}</span>
    </div>

  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props:{
      title:{
        type:Array,
        default(){
          return [];
        }
      }
    },
    data(){
      return {
        currentIndex:0,
      }
    },
    methods:{
      changeIndex(index){
        this.currentIndex = index;
        this.$emit('getData',index)
      },
    }

  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    width: 100%;
    flex:1;
    height: 40px;
    font-size: 15px;
    background-color: #fff;
    padding-top: 10px;
  }
  .tab-control-item {
    flex: 1;
    text-align: center;
  }
  .tab-control-item span {
    padding: 5px;
  }
  .active span {
    color:var(--color-high-text);
    border-bottom: 3px solid var(--color-tint);
  }
</style>