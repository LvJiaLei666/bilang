<template>
  <div class="all">
    <van-nav-bar title="我的粉笔" left-text="返回" left-arrow class="head" @click-left="onClickLeft">
      <template #right>
        <van-icon name="ellipsis"  size="34" color="#fff"/>
      </template>
  </van-nav-bar>
  <van-tabs v-model="active">
  <van-tab title="一级粉笔(8)">
    <van-grid :border="false" :column-num="4">
  <van-grid-item>
    <img src="../../../static/images/我的粉丝&我的代言费/fans.png" style="height:1.06rem" />
    <span class="text">粉比权益</span>
  </van-grid-item>
  <van-grid-item>
    <img src="../../../static/images/我的粉丝&我的代言费/fans.png" style="height:1.06rem" />
    <span class="text">粉比权益</span>
  </van-grid-item>
  <van-grid-item>
    <img src="../../../static/images/我的粉丝&我的代言费/fans.png" style="height:1.06rem" />
    <span class="text">粉比权益</span>
  </van-grid-item>
   <van-grid-item>
    <img src="../../../static/images/我的粉丝&我的代言费/fans.png" style="height:1.06rem" />
    <span class="text">粉比权益</span>
  </van-grid-item>
   <van-grid-item>
    <img src="../../../static/images/我的粉丝&我的代言费/fans.png" style="height:1.06rem" />
    <span class="text">粉比权益</span>
  </van-grid-item>
   <van-grid-item>
    <img src="../../../static/images/我的粉丝&我的代言费/fans.png" style="height:1.06rem" />
    <span class="text">粉比权益</span>
  </van-grid-item>
   <van-grid-item>
    <img src="../../../static/images/我的粉丝&我的代言费/fans.png" style="height:1.06rem" />
    <span class="text">粉比权益</span>
  </van-grid-item>
   <van-grid-item>
    <img src="../../../static/images/我的粉丝&我的代言费/fans.png" style="height:1.06rem" />
    <span class="text">粉比权益</span>
  </van-grid-item>
</van-grid>
  </van-tab>
  <van-tab title="二级粉笔">二级粉笔</van-tab>
</van-tabs>

  </div>
</template>
<style scoped>
.van-grid{
  margin-top:0.2rem;
}
.text{
  font-size:0.24rem;
  color:#666;
  display:block;
  margin-top:0.2rem;
}
.all{
  background: #F3F4F6;
  width:100%;
  height:14rem;
}

</style>
<script>
export default {
  data() {
    return {
      active: 2,
    };
  },
  methods:{
   onClickLeft(){
      this.$router.go(-1)
    }
},
};
</script>