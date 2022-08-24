<template>
  <div class="home_box">
    <!-- 轮播图区域 -->
    <div class="banner w">
      <el-carousel height="460px"
                   arrow="always">
        <el-carousel-item v-for="item in banner"
                          :key="item.g_id">
          <el-image :src="$baseURL+item.g_img"></el-image>
        </el-carousel-item>
      </el-carousel>
      <!-- 左侧导航 -->
      <div class="left-nav">
        <ul>
          <li class="nav_list"
              v-if="index<10"
              v-for="(item,index) in goodsType"
              @mouseover="select(item.t_id)"
              :key="item.t_id">
            <a href="javascript:;">{{item.t_name}}</a>
            <i class="el-icon-arrow-right"></i>
            <!-- 根据类别查询列表 -->
            <div class="goods_list"
                 v-if="overGoods.length!=0">
              <div class="item">
                <ul>
                  <li v-if="index<6"
                      v-for="(item,index) in overGoods"
                      :key="item.g_id">
                    <a href="javascript:;">
                      <img :src="$baseURL+item.goodsPic[0].g_pic">
                      {{item.g_name|strLength}}
                    </a>
                  </li>
                </ul>
                <ul>
                  <li v-if="index>5&&index<12"
                      v-for="(item,index) in overGoods"
                      :key="item.g_id">
                    <a href="javascript:;">
                      <img :src="$baseURL+item.goodsPic[0].g_pic">
                      {{item.g_name|strLength}}
                    </a>
                  </li>
                </ul>
                <ul>
                  <li v-if="index>11&&index<18"
                      v-for="(item,index) in overGoods"
                      :key="item.g_id">
                    <a href="javascript:;">
                      <img :src="$baseURL+item.goodsPic[0].g_pic">
                      {{item.g_name|strLength}}
                    </a>
                  </li>
                </ul>
                <ul>
                  <li v-if="index>17"
                      v-for="(item,index) in overGoods"
                      :key="item.g_id">
                    <a href="javascript:;">
                      <img :src="$baseURL+item.goodsPic[0].g_pic">
                      {{item.g_name|strLength}}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <!-- 根据类别查询列表 end-->
          </li>
        </ul>
      </div>
    </div>
    <!-- 轮播图区域 end-->
    <!-- 二级 -->
    <div class="sub w">
      <div class="sub_left">
        <ul>
          <li v-for="(item,index) in subList"
              :key="index">
            <a href="javascript:;">
              <img :src="item.img">
              <br>
              {{item.text}}
            </a>
          </li>
        </ul>
      </div>
      <div class="sub_right">
        <ul>
          <li v-for="item in subBanner"
              :key="item.g_id">
            <a href="javascript:;">
              <img :src="$baseURL+item.g_img">
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- 二级 end-->
    <!-- 商品区域 -->
    <div class="bgc_main">
      <!-- 宽屏banner -->
      <BannerBox :goodsId="bannerBox[0].g_id"
                 :imgUrl="bannerBox[0].g_img"></BannerBox>
      <!-- 宽屏banner end-->
      <!-- 商品 -->
      <GoodsBox class="w"
                v-for="(item,index) in goodsType"
                v-if="index<6"
                :key="item.t_id"
                :typeId="item.t_id"
                :name="item.t_name"></GoodsBox>
      <!-- 商品 end -->
    </div>
    <!-- 商品区域 -->

  </div>
</template>

<script>
//导入商品接口
import { getBanner, getGoodsType, getAllGoods } from '@/Api/GoodsApi'
//导入组件
import BannerBox from '@/components/Banner/BannerBox.vue'
import GoodsBox from '@/components/Goods/GoodsBox.vue'

export default {
  data() {
    return {
      //轮播图
      banner: [],
      //商品分类
      goodsType: [],
      //所有商品
      allGoods: [],
      //存储导航分类商品
      overGoods: [],
      //二级
      subList: [
        {
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82abdba456e8caaea5848a0cddce03db.png?w=48&h=48',
          text: '保障服务',
          url: ''
        },
        {
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/806f2dfb2d27978e33fe3815d3851fa3.png?w=48&h=48',
          text: '企业团购',
          url: ''
        },
        {
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eded6fa3b897a058163e2485532c4f10.png?w=48&h=48',
          text: 'F码通道',
          url: ''
        },
        {
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/43a3195efa6a3cc7662efed8e7abe8bf.png?w=48&h=48',
          text: '米粉卡',
          url: ''
        },
        {
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f4846bca6010a0deb9f85464409862af.png?w=48&h=48',
          text: '以旧换新',
          url: ''
        },
        {
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a76d7636b08e0988efb4fc384ae497b.png?w=48&h=48',
          text: '话费充值',
          url: ''
        }
      ],
      //subBanner
      subBanner: [],
      bannerBox: []
    }
  },
  methods: {
    //轮播图
    initBanner() {
      if (sessionStorage.getItem('banner')) {
        this.banner = JSON.parse(sessionStorage.getItem('banner'))
        this.subBanner = JSON.parse(sessionStorage.getItem('subBanner'))
        this.bannerBox = JSON.parse(sessionStorage.getItem('bannerBox'))
      }
      else {
        getBanner(1).then(res => { this.banner = res.rows; sessionStorage.setItem('banner', JSON.stringify(res.rows)) })
        getBanner(2).then(res => { this.subBanner = res.rows; sessionStorage.setItem('subBanner', JSON.stringify(res.rows)) })
        getBanner(3).then(res => { this.bannerBox = res.rows; sessionStorage.setItem('bannerBox', JSON.stringify(res.rows)) })
      }
    },
    //所有分类
    initGoodsType() {
      if (sessionStorage.getItem('goodsType')) {
        this.goodsType = JSON.parse(sessionStorage.getItem('goodsType'))
      }
      else {
        getGoodsType().then(res => { this.goodsType = res.rows; sessionStorage.setItem('goodsType', JSON.stringify(res.rows)) })
      }
    },
    //所有商品
    initAllGoods() {
      if (sessionStorage.getItem('allGoods')) {
        this.allGoods = JSON.parse(sessionStorage.getItem('allGoods'))
      }
      else {
        getAllGoods()
          .then(res => {
            sessionStorage.setItem('allGoods', JSON.stringify(res.rows))
            this.allGoods = res.rows
          })
      }
    },
    //鼠标移入导航菜单
    select(id) {
      this.overGoods = this.allGoods.filter(item => { return item.t_id == id })
    }
  },
  created() {
    document.title = '小米商城',
      this.initBanner(),
      this.initGoodsType(),
      this.initAllGoods()
  },
  filters: {
    //标题长度
    strLength(val) {
      if (val != undefined) {
        if (val.length > 15) {
          return val.substring(0, 16) + '...'
        }
        return val
      }
    }
  },
  components: {
    //全屏横幅
    BannerBox,
    BannerBox,
    GoodsBox
  }
}
</script>

<style lang="less">
//轮播图
.banner {
  position: relative;
  // 左边指示点样式
  .el-carousel__arrow--left {
    left: 260px !important;
  }
  // 左边指示点样式 end
  // 底部圆点
  .el-carousel__indicators--horizontal {
    transform: translateX(0%) !important;
    left: 85%;
  }
  // 底部圆点 end
  img {
    width: 100%;
    height: 100%;
  }

  // 左侧导航
  .left-nav {
    position: absolute;
    left: 0px;
    top: 0;
    z-index: 44;
    background: rgba(0, 0, 0, 0.5);
    width: 230px;
    height: 100%;
    ul {
      position: relative;
      padding: 18px 0;
      //物品列表
      .nav_list {
        padding: 12px 25px;
        color: #fff;
        display: flex;
        justify-content: space-between;
        a {
          display: inline-block;
          color: #fff;
        }
        .goods_list {
          display: none;
          position: absolute;
          top: 0px;
          left: 230px;
          height: 460px;
          padding: 0 20px;
          box-shadow: 0px 0px 5px 1px #999;
          background-color: #fff;
          .item {
            display: flex;
          }
          li {
            width: 250px;
            height: 70px;
            line-height: 70px;
            img {
              width: 40px;
              height: 40px;
              vertical-align: middle;
            }
          }
          a {
            color: #333;
            font-size: 12px;
          }
          a:hover {
            color: #ff6a00;
          }
        }
      }
      .nav_list:hover {
        background-color: #ff6a00;
      }
      li:hover .goods_list {
        display: block;
      }
    }
  }
  // 左侧导航 end
}
//轮播图 end

// .二级
.sub {
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  // 左侧
  .sub_left {
    width: 230px;
    text-align: center;
    background-color: #5f5750;
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        padding: 20px 0;
        width: 76px;
        border-left: 1px solid #665e57;
        border-bottom: 1px solid #665e57;
        a {
          font-size: 12px;
          color: #bcb9b6;
          img {
            width: 25px;
            height: 25px;
            vertical-align: bottom;
          }
        }
      }
      li:hover {
        a {
          color: #fff;
        }
      }
    }
  }
  // 左侧 end
  //右侧
  .sub_right {
    width: 996px;
    ul {
      display: flex;
      li {
        margin-left: 15px;
        transition: all 0.5s;
        img {
          width: 100%;
          height: 100%;
        }
      }
      li:hover {
        box-shadow: 0px 0px 10px 0px #000;
      }
    }
  }
  //右侧 end
}
// .二级 end
</style>