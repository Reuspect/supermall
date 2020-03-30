<template>
  <div id="home">
    <navbar class="home-nav"><div slot="center">贸大购物广场</div></navbar>
    <div class="wrapper">
      <div class="content">
        <home-swiper :banners="banners"></home-swiper>
        <home-recommend-view :recommends="recommends"></home-recommend-view>
        <feature-view></feature-view>
        <tab-control class="tab-control"
                     :title="['流行','新款','精选']" @getData="getData"></tab-control>
        <GoodList class="goods" :goods="showGoods"></GoodList>
      </div>
    </div>

  </div>
</template>

<script>

  import HomeSwiper from "./childComps/HomeSwiper";
  import HomeRecommendView from "./childComps/HomeRecommendView";
  import FeatureView from "./childComps/FeatureView";


  import {getHomeMultidata,getHomeGoods} from 'network/home';

  import Navbar from "../../components/common/navbar/NavBar";
  import TabControl from "../../components/content/tabControl/TabControl";
  import GoodList from "../../components/content/goods/GoodList";
  import GoodsListItem from "../../components/content/goods/GoodsListItem";

  //import Swiper from 'components/common/swiper/Swiper'
  //import SwiperItem from 'components/common/swiper/SwiperItem'
  // import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: "Home",
    components: {

      HomeSwiper,
      HomeRecommendView,
      FeatureView,

      Navbar,
      TabControl,
      GoodList,
      GoodsListItem,
    },
    data(){
      return {
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0, list:[]},
          'new':{page:0, list:[]},
          'sell':{page:0, list:[]},
        },
        currentType:'pop',

      }
    },
    created(){
      //1.请求多个数据
      this.getHomeMultidata()
      //2. 请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    methods:{
      //事件监听 相关方法
      getData(index){
        console.log(index)
        switch (index) {
          case 0:
            this.currentType='pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
        }
        const GoodList = document.getElementsByTagName('GoodList')

      },

      //网络请求相关方法

      getHomeMultidata() {
        //从created里抽出来 继续做一层封装
        getHomeMultidata().then(res=>{
          console.log(res);
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type){
        //这里传入type 参数
        const page = this.goods[type].page + 1;
        //goods格式中有pages储存第几页 而这里利用page+1实现按页获取
        getHomeGoods(type,page).then(res=>{
          console.log(res);
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1;

        })
      },

    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
    padding-bottom: 50px;
  }
  .home-nav {
    background-color: var(--color-tint);
    color:#fff;
    position: fixed;
    left: 0;
    right: 0;
    top:0;
    z-index: 9;
  }
  .tab-control {
    position: sticky;
    top:44px;
    z-index: 9;
  }

</style>
