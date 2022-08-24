<template>
  <div class="banner_box w">
    <a @click="go()" href="javascript:;">
       <el-image :src="$baseURL+imgUrl" lazy></el-image>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: {
      require: true
    },
    goodsId:{
       require: true
    }
  },
  methods:{
    go(){
      console.log(this.goodsId)
    }
  }
}
</script>

<style lang="less">
.banner_box {
  height: 120px;
  margin: 20px auto !important;
  img{
    width: 100%;
    height: 100%;
  }
}
</style>