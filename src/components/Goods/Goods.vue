<template>
  <div class="content">
    <el-image sele :src="$baseURL+img" :lazy="islazy">
       <div slot="placeholder" class="image-slot">
       <i class="el-icon-loading"></i>
        加载中...
      </div>
    </el-image>
    <div class="title">{{title|checkLength}}</div>
    <div class="detail">{{detail|checkLength}}</div>
    <div class="price">{{price+'元'}}</div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      request: true
    },
    title: {
      request: true
    },
    detail: {
    },
    price: {
      request: true
    },
    islazy:{
      default:false
    }
  },
  filters: {
    checkLength(val) {
      if(val!=undefined)
      {
        if (val.length > 15) {
        return val.substring(0, 15) + '...'
      }
      return val
      }
    }
  }
}
</script>

<style lang="less">
.content {
  padding: 15px 0;
  width: 235px;
  text-align: center;
  .title {
    margin-top: 5px;
    font-size: 12px;
  }
  .detail {
    margin-top: 5px;
    font-size: 10px;
    color: #999;
  }
  .price {
    margin-top: 5px;
    color: #ff6a00;
  }
  .image-slot{
    font-size: 10px;
    color: #999;
  }
}
</style>