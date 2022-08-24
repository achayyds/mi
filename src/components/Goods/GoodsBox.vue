<template>
  <div class="goods_box">
    <!-- 标题 -->
    <Title :title="name"
           :link="typeId"></Title>
    <!-- 标题 end-->
    <div class="item">
      <div class="left">
        <div class="box"
             v-for="(item,index) in goodsList"
             v-if="index<2"
             :key="item.id">
          <el-image lazy
                    :src="$baseURL+item.goodsPic[0].g_pic"></el-image>
        </div>
      </div>
      <div class="right">
        <Goods v-for="(item,index) in goodsList"
               v-if="index<8"
               :key="item.g_id"
               :title="item.g_name"
               :price="item.g_money"
               :detail="item.g_detailed"
               :img="item.goodsPic[0].g_pic"
               :islazy="true"></Goods>
      </div>
    </div>
  </div>
</template>

<script>
//标题
import Title from '@/components/Goods/Title.vue'
import Goods from './Goods.vue'
export default {
  props: {
    typeId: {
      require: true
    },
    name: {
      require: true
    }
  },
  data() {
    return {
      goodsList: []
    }
  },
  methods: {
    //从session中获取数据
    initGoods() {
      if (sessionStorage.getItem('allGoods')) {
        this.goodsList = JSON.parse(sessionStorage.getItem('allGoods')).filter(item => { return item.t_id == this.typeId })
      }
    }
  },
  components: {
    Title,
    Goods
  },
  created() {
    this.initGoods()
  }

}
</script>

<style lang="less">
.item {
  display: flex;
  // 左侧.
  .left {
    width: 18%;
    .box {
      background-color: #fff;
      margin-bottom: 15px;
      height: 286px;
      transition: all 0.5s;
      .el-image {
        height: 100%;
        width: 100%;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    .box:hover {
      transform: translateY(-5px);
      box-shadow: 0px 0px 10px 0px #999;
    }
  }
  // 左侧 end

  // 右侧
  .right {
    width: 82%;
    display: flex;
    flex-wrap: wrap;
    .content {
      padding: 30px 0;
      margin-left: 15px;
      margin-bottom: 15px;
      background-color: #fff;
      cursor: pointer;
      transition: all 0.5s;
      img {
        width: 60%;
      }
      .title {
        margin-top: 10px;
      }
      .detail {
        margin-top: 10px;
      }
      .price {
        margin-top: 10px;
      }
    }
    .content:hover {
      transform: translateY(-5px);
      box-shadow: 0px 0px 10px 0px #999;
    }
  }
  // 右侧 end
}
</style>