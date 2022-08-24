<template>
  <div class="goods_title">
    <span class="title">
      {{title}}
    </span>
    <span class="more">
      <a href="javascript:;">
        查看更多
        <i class="el-icon-arrow-right"></i>
      </a>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      require: true
    },
    link: {
      require: true
    }
  }
}
</script>

<style lang="less">
.goods_title {
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title {
    color: #333;
    font-size: 22px;
  }
  .more a {
    font-size: 16px;
    color: #333;
  }
  .more a:hover {
    color: #ff6a00;
  }
}
</style>