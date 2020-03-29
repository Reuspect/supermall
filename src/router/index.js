import Vue from 'vue'
import VueRouter from 'vue-router'

//这里搞一波懒加载 （箭头函数）
const Home = ()=>import('../views/home/Home')
const Category = ()=>import('../views/category/Category')
const Cart = ()=>import('../views/cart/Cart')
const Profile = ()=>import('../views/profile/Profile')

//1. 第一步 安装插件
Vue.use(VueRouter)

//2. 创建路由对象

//在这里配置映射关系
const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home,
  },
  {
    path:'/category',
    component:Category,
  },
  {
    path:'/cart',
    component:Cart,
  },
  {
    path:'/profile',
    component:Profile,
  },

];

const router = new VueRouter({
  routes,
  //默认时hash模式 此处手动改为history模式
  mode:'history',
});

//3.导出router 然后去main.js里引入
export default router

//整合一下
// export default new Router({
//   routes: [
//
//   ]
// })
