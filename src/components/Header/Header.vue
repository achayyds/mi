<template>
  <div>
    <!-- 顶部导航 -->
    <div class="header-top">
      <!-- topbar -->
      <div class="header-nav w">
        <div class="right">
          <a href="javascript:;">小米官网</a>
          <span>|</span>
          <a href="javascript:;">小米商城</a>
          <span>|</span>
          <a href="javascript:;">MIUI</a>
          <span>|</span>
          <a href="javascript:;">loT</a>
          <span>|</span>
          <a href="javascript:;">云服务</a>
          <span>|</span>
          <a href="javascript:;">天星数科</a>
          <span>|</span>
          <a href="javascript:;">有品</a>
          <span>|</span>
          <a href="javascript:;">小爱开放平台</a>
          <span>|</span>
          <a href="javascript:;">企业团购</a>
          <span>|</span>
          <a href="javascript:;">资质证照</a>
          <span>|</span>
          <a href="javascript:;">协议规则</a>
          <span>|</span>
          <a href="javascript:;">下载app</a>
          <span>|</span>
          <a href="javascript:;">Select Location</a>
        </div>

        <!-- 右边区域 -->
        <div class="left">
          <div>
            <span>
              <a href="javascript:;">登录</a>
              <span>|</span>
              <a href="javascript:;">注册</a>
            </span>
            <!-- <span>
              <a href="javascript:;">acha.</a>
            </span> -->
            <span>|</span>
            <a href="javascript:;">消息通知</a>
          </div>
          <div class="mycar">
            <i class="el-icon-shopping-cart-2"></i>
            <a href="javascript:;">购物车(0)</a>
            <div class="car_goods">
              <span>购物车中还没有商品，赶紧选购吧！</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--end 顶部导航 -->

    <!-- 菜单区域 -->
    <div class="header_menu w">
      <!-- logo区域 -->
      <div class="logo">
        <img width="60px"
             title="小米商城"
             src="https://s02.mifile.cn/assets/static/image/logo-mi2.png"
             alt="">
      </div>
      <!-- logo区域 end-->
      <!-- 右侧菜单区域 -->
      <div class="header_right_menu">
        <ul class="menu_list">
          <li>
            <a href="javascript:;">Xiaomi手机</a>
            <div class="menu_goodslist">
              <Goods v-for="(item,index) in phone"
                     v-if="index<7"
                     :key="item.g_id"
                     :title="item.g_name"
                     :img="item.goodsPic[0].g_pic"
                     :price="item.g_money"></Goods>
            </div>
          </li>
          <li>
            <a href="javascript:;">Redmi手机</a>
            <div class="menu_goodslist">
              <Goods v-for="(item,index) in phone"
                     v-if="index>7 &&index<15"
                     :key="item.g_id"
                     :title="item.g_name"
                     :img="item.goodsPic[0].g_pic"
                     :price="item.g_money"></Goods>
            </div>
          </li>
          <li>
            <a href="javascript:;">电视</a>
            <div class="menu_goodslist">
              <Goods v-for="(item,index) in tv"
                     v-if="index<7"
                     :key="item.g_id"
                     :title="item.g_name"
                     :img="item.goodsPic[0].g_pic"
                     :price="item.g_money"></Goods>
            </div>
          </li>
          <li>
            <a href="javascript:;">笔记本</a>
            <div class="menu_goodslist">
              <Goods v-for="(item,index) in notebook"
                     v-if="index<7"
                     :key="item.g_id"
                     :title="item.g_name"
                     :img="item.goodsPic[0].g_pic"
                     :price="item.g_money"></Goods>
            </div>
          </li>
          <li>
            <a href="javascript:;">平板</a>
            <div class="menu_goodslist">
              <Goods v-for="(item,index) in notebook"
                     v-if="index>7&&index<15"
                     :key="item.g_id"
                     :title="item.g_name"
                     :img="item.goodsPic[0].g_pic"
                     :price="item.g_money"></Goods>
            </div>
          </li>
          <li>
            <a href="javascript:;">家电</a>
            <div class="menu_goodslist">
              <Goods v-for="(item,index) in home"
                     v-if="index<7"
                     :key="item.g_id"
                     :title="item.g_name"
                     :img="item.goodsPic[0].g_pic"
                     :price="item.g_money"></Goods>
            </div>
          </li>
          <li>
            <a href="javascript:;">路由器</a>
            <div class="menu_goodslist">
              <Goods v-for="(item,index) in router"
                     v-if="index<7"
                     :key="item.g_id"
                     :title="item.g_name"
                     :img="item.goodsPic[0].g_pic"
                     :price="item.g_money"></Goods>
            </div>
          </li>
          <li>
            <a href="javascript:;">服务中心</a>
          </li>
          <li>
            <a href="javascript:;">社区</a>
          </li>
        </ul>
        <div class="mouse_hover"></div>
      </div>
      <!-- 右侧菜单区域 end -->

      <!-- 右侧搜索区域 -->
      <div ref="search"
           class="header_search">
        <input @focus="inp_focus"
               @blur="inp_blur"
               type="text"
               placeholder="手机">
        <button ref="btn">
          <i style="font-size:16px;"
             class="el-icon-search"></i>
        </button>
        <div ref="list_show"
             class="search_list">
          <ul>
            <li :key="item.t_id"
                v-for="(item,index) in goodsType"
                v-if="index < 7">
              {{item.t_name}}
            </li>
          </ul>
        </div>
      </div>
      <!-- 右侧搜索区域 end-->
    </div>
    <!-- end 菜单区域 -->
  </div>
</template>

<script>
import { getGoodsType, getGoods } from '@/Api/GoodsApi.js'
import Goods from '../Goods/Goods.vue'
export default {
  data() {
    return {
      //类别
      goodsType: [],
      //手机
      phone: [],
      //电视
      tv: [],
      //笔记本
      notebook: [],
      //家电
      home: [],
      //路由器
      router: []
    };
  },
  created() {
    this.initGoodsType();
    this.initGoods()
  },
  methods: {
    //商品分类
    initGoodsType() {
      if (sessionStorage.getItem('goodstype')) {
        this.goodsType = JSON.parse(sessionStorage.getItem('goodstype'))
      }
      else {
        getGoodsType().then(res => {
          this.goodsType = res.rows;
          sessionStorage.setItem('goodstype', JSON.stringify(this.goodsType))
        });
      }

    },
    inp_focus() {
      this.$refs.search.classList.add("search_focus");
      this.$refs.btn.classList.add("btn_focus");
      this.$refs.list_show.style = "display:block";
    },
    inp_blur() {
      this.$refs.search.classList.remove("search_focus");
      this.$refs.btn.classList.remove("btn_focus");
      this.$refs.list_show.style = "display:none";
    },
    // 根据分类获取商品
    initGoods() {
      if (sessionStorage.getItem('phone')) {
        this.phone = JSON.parse(sessionStorage.getItem('phone'))
      } else {
        getGoods(1).then(res => {
          this.phone = res.rows;
          sessionStorage.setItem('phone', JSON.stringify(res.rows))
        });
      }
      //电视
      if (sessionStorage.getItem('tv')) {
        this.tv = JSON.parse(sessionStorage.getItem('tv'))
      } else {
        getGoods(2).then(res => {
          this.tv = res.rows;
          sessionStorage.setItem('tv', JSON.stringify(res.rows))
        });
      }
      //笔记本
      if (sessionStorage.getItem('notebook')) {
        this.notebook = JSON.parse(sessionStorage.getItem('notebook'))
      } else {
        getGoods(3).then(res => {
          this.notebook = res.rows;
          sessionStorage.setItem('notebook', JSON.stringify(res.rows))
        });
      }
      //家电
      if (sessionStorage.getItem('home')) {
        this.home = JSON.parse(sessionStorage.getItem('home'))
      } else {
        getGoods(6).then(res => {
          this.home = res.rows;
          sessionStorage.setItem('home', JSON.stringify(res.rows))
        });
      }
      //路由器
      if (sessionStorage.getItem('router')) {
        this.router = JSON.parse(sessionStorage.getItem('router'))
      } else {
        getGoods(7).then(res => {
          this.router = res.rows;
          sessionStorage.setItem('router', JSON.stringify(res.rows))
        });
      }
    },
  },
  components: { Goods }
}
</script>

<style lang="less">
.header-top {
  background-color: #333;
  .header-nav {
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    // 顶部左侧区域
    .left {
      display: flex;
      align-items: center;
      justify-content: space-between;
      // 购物车
      .mycar {
        position: relative;
        margin-left: 50px;
        height: 100%;
        z-index: 99;
        i {
          color: #b0b0b0;
          margin: 0 5px;
        }
        .car_goods {
          display: none;
          background-color: #fff;
          position: absolute;
          width: 250px;
          padding: 30px 10px;
          top: 30px;
          left: -160px;
          transition: all 1s;
          box-shadow: 0px 1px 6px -3px #000;
          span {
            font-size: 10px;
            color: #999;
          }
        }
      }
      .mycar:hover .car_goods {
        display: block;
      }
      .mycar:hover i {
        color: #ff6a00;
      }
      .mycar:hover a {
        color: #ff6a00;
      }
    }
    span {
      margin: 0 10px;
      color: #3b423e;
    }
    a {
      font-size: 8px;
      color: #b0b0b0;
    }
    a:hover {
      color: #fff;
    }
  }
}
// 菜单
.header_menu {
  position: relative;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header_right_menu {
    margin-left: 80px;
    // 菜单列表
    .menu_list {
      cursor: pointer;
      display: flex;
      .menu_goodslist {
        position: absolute;
        display: none;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        top: 60px;
        left: 0px;
        z-index: 51;
        // Goods组件样式
        .content {
          padding-top: 50px;
          width: 150px;
          height: 160px;
          margin: 0 10px;
          float: left;

          .title {
            font-size: 10px !important;
          }
          img {
            width: 60% !important;
          }
          .price {
            font-size: 10px;
          }
        }
      }
      a {
        margin: 0 15px;
        color: #333333;
        font-size: 16px;
      }
      a:hover {
        color: #ff6a00;
      }
      li:hover .menu_goodslist {
        display: block;
      }
    }
    //二级商品背景
    .mouse_hover {
      position: absolute;
      top: 100px;
      left: 0px;
      width: 100%;
      height: 0px;
      border-top: 1px solid #e0e0e0;
      background-color: #fff;
      box-shadow: 0px 2px 2px -1px #d0d0d0;
      z-index: 50;
    }
  }
  // 悬浮背景
  .header_right_menu:hover .mouse_hover {
    height: 150px;
    transition: all 0.2s;
  }
  .menu_list li:hover .content {
    display: block;
  }
  // 搜索区域
  .header_search {
    width: 280px;
    position: relative;
    border: 1px solid #e0e0e0;
    input {
      padding: 15px 10px;
      width: 100%;
    }
    button {
      padding: 0 20px;
      height: 100%;
      position: absolute;
      top: 0px;
      right: 0px;
      background-color: #fff;
      border-left: 1px solid #e0e0e0;
    }
    button:hover {
      color: #fff;
      background-color: #ff6a00;
      border: 0;
    }
    //推荐搜索列表
    .search_list {
      display: none;
      position: absolute;
      z-index: 99;
      width: 222px;
      background-color: #fff;
      border: 1px solid #ff6a00;
      li {
        cursor: default;
        font-size: 12px;
        color: #424242;
        padding: 8px 20px;
      }
      li:hover {
        background-color: #fafafa;
      }
    }
  }
  //悬浮
  .header_search:hover {
    border: 1px solid #b0b0b0;
  }
  .header_search:hover button {
    border-left: 1px solid #b0b0b0;
  }
  //输入框按下效果
  .search_focus {
    border: 1px solid #ff6a00 !important;
  }
  .btn_focus {
    border-left: 1px solid #ff6a00 !important;
  }
}
</style>