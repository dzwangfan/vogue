// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Home from './components/Home.vue'
import Brands from './components/Brands.vue'
import HomeFirst from './components/HomeFirst.vue'
import VueRouter from 'vue-router'
import Login from './components/Login.vue';
import Cart from './components/Cart.vue';
import News from './components/News.vue';
import Newsarticle from './components/Newsarticle.vue';
import Collections from './components/Collections.vue';
import Shop from './components/Shop.vue';
import ShoppingItem from './components/ShoppingItem.vue';
import store from './store/index'

Vue.use(VueRouter);
Vue.config.productionTip = false;
const  router=new VueRouter({
  routes:[
    {
      path:'/home',
      component:Home,
      children:[
          {path:'',component:HomeFirst},
          {path:':id',component:Brands}
      ]
    },
    {
      path:'/login',component:Login
    },
    {
      path:'/cart',component:Cart
    },
    {
      path:'/home',redirect:Home
    },
    {
      path:'/news',component:News
    },
    {
      path:'/newsarticle',component:Newsarticle
    },
    {
      path:'/collections',component:Collections
    },
    {
      path:'/shop',component:Shop
    },
    {
      path:'/shoppingItem',component:ShoppingItem
    },
    {
      path:'/*',redirect:'/home'
    }
  ]

});
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
