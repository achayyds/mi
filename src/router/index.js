import Vue from 'vue'
import VueRouter from 'vue-router'

//导入组件
import Home from '@/views/Home/Home.vue'
Vue.use(VueRouter)

const routes = [
    {
      path:'/',
      component:Home
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
