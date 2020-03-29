<template>
  <div id="tab-bar">
    <slot></slot>
  </div>

</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  #tab-bar {
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    /*设计flex布局让其横向展示 落到底部 左右占满*/
    box-shadow:0 -3px 1px rgba(100,100,100,0.4);
    /*  添加一个小阴影 x方向 y方向*/
  }

</style>
