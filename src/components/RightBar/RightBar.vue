<template>
  <div class="right_bar">
    <ul>
      <li v-for="(item,index) in barList"
          :key="index">
        <i :class="item.icon"></i>
        <br>
        {{item.text}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      barList: [
        {
          icon: 'el-icon-mobile-phone',
          text: '手机APP',
          url: ''
        },
        {
          icon: 'el-icon-user',
          text: '个人中心',
          url: ''
        }
        ,
        {
          icon: 'el-icon-phone-outline',
          text: '售后服务',
          url: ''
        },
        {
          icon: 'el-icon-headset',
          text: '人工客服',
          url: ''
        }
        ,
        {
          icon: 'el-icon-shopping-cart-2',
          text: '购物车',
          url: ''
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.right_bar {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-40%);
  background-color: #fff;
  li {
    text-align: center;
    padding: 20px 15px;
    border: 1px solid #f5f5f5;
    color: #999;
    font-size: 14px;
    i{
      font-size: 30px;
    }
  }
  li:hover{
     color: #ff6a00;
  }
}
</style>