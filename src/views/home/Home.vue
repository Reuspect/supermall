<template>
  <div id="home">
    <navbar class="home-nav"><div slot="center">贸大购物广场</div></navbar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
  </div>
</template>

<script>
  import Navbar from "../../components/common/navbar/NavBar";
  import HomeSwiper from "./childComps/HomeSwiper";
  import HomeRecommendView from "./childComps/HomeRecommendView";
  import {getHomeMultidata} from 'network/home'
  //import Swiper from 'components/common/swiper/Swiper'
  //import SwiperItem from 'components/common/swiper/SwiperItem'
  // import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: "Home",
    components: {
      Navbar,
      HomeSwiper,
      HomeRecommendView,
    },
    data(){
      return {
        banners:[],
        recommends:[],
      }
    },
    created(){
      //1.请求多个数据
      getHomeMultidata().then(res=>{
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color:#fff;
  }
</style>
