import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { baseURL } from '@/Utils/request'
//css
import '@/assets/base.css'
//导入组件
import Goods from '@/components/Goods/Goods.vue'
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer/Footer.vue'
import RightBar from '@/components/RightBar/RightBar.vue'
//element ui
import { Icon, Image, Carousel, CarouselItem } from 'element-ui'
//挂载
Vue.prototype.$baseURL = baseURL
//注册为全局组件
Vue.component('Header', Header)
Vue.component('Footer', Footer)
Vue.component('Goods', Goods)
Vue.component('RightBar', RightBar)
//注册插件
Vue.use(Icon)
Vue.use(Image)
Vue.use(Carousel)
Vue.use(CarouselItem)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
