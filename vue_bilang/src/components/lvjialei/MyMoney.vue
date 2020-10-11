<template>
  <div class="mymoney">
    <!-- nav -->
    <van-nav-bar title="我的代言费" left-text="返回" left-arrow class="head" @click-left="onClickLeft">
      <template #right>
        <van-icon name="ellipsis" size="34" color="#fff" />
      </template>
    </van-nav-bar>
    <van-search placeholder="请输入搜索关键词" />
    <van-cell-group>
      <van-cell center size="large">
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <span class="custom-title">2016-02-25</span>
          <img
            src="../../../static/images/我的粉丝&我的代言费/fans.png"
            class="fans"
          />
          <span class="fans_name">董大伟</span>
          <span class="fans_level">一级粉比</span>
        </template>
      </van-cell>
      <van-cell center>
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <span class="custom-title">消费金额：</span>
          <span class="fans_name">¥1000.00</span>
          <span class="fans_level">收益：<span class="fans_money">¥10.00</span></span>
        </template>
      </van-cell>
    </van-cell-group>

    <van-cell-group>
      <van-cell center size="large">
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <span class="custom-title">2016-02-25</span>
          <img
            src="../../../static/images/我的粉丝&我的代言费/fans.png"
            class="fans"
          />
          <span class="fans_name">董大伟</span>
          <span class="fans_level">一级粉比</span>
        </template>
      </van-cell>
      <van-cell center>
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <span class="custom-title">消费金额：</span>
          <span class="fans_name">¥1000.00</span>
          <span class="fans_level">收益：<span class="fans_money">¥10.00</span></span>
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'MYMoney',
  data() {
    return {
    };
  },
  computed: {
  },
  watch: {
  },
  methods: {
    onClickLeft(){
      this.$router.go(-1)
    }
  },
};
</script>

<style scoped>
.mymoney {
  background-color: #f3f3f3;
}
.van-cell-group{
  margin-top: .15rem;
}
.custom-title,
.fans_level {
  color: #999999;
  font-size: 0.24rem;
  line-height: .7rem;
}
.fans {
  width: 0.7rem;
  height: 0.7rem;
  vertical-align: middle;
  margin-left: 1.47rem;
}
.fans_name {
  font-size: 0.24rem;
  line-height: .7rem;
}
.fans_level {
  float: right;
  line-height: 0.7rem;
}
.fans_money{
  color: #FF4242;
}
</style>
