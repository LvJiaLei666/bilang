<template>
<div class="box">  
  <van-nav-bar class="van-nav-bar"

  title="比朗"
  left-text="返回"
  right-text="●●●"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
<div class="box_1">
  <img src="../../../static/images/h5页面1/h5页面_1_02.png" alt="">
  <div class="box_11">
  <img src="../../../static/images/h5页面1/h5页面_2_04.png" alt="">
</div>
</div>

<div class="box_2">
  <img src="../../../static/images/h5页面1/h5页面_3_03.png" alt="">
  <van-divider
  :style="{ color: '#234497FF', borderColor: '#1989fa', padding: '0 79px' }"
>
  转为您定制
</van-divider>
</div>

<div class="box_3">
  <div class="box_31">
  <p>点击领取现金体验卷200元</p>

  </div>
</div>
</div>
  
</template>

<script>
  import { Toast } from 'vant';

export default {
  
  methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    },
  },
}
</script>

<style scoped>
*{
  margin:0;
  padding:0;
}
.van-nav-bar{
  width: 100%;
  background-color: black;
}
.box_1{
  width: 100%;
  position: relative;

}
.box_1 img{
  width: 100%;
}
.box_11 img{
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  left: 0.5rem;
  top: 6.7rem;

}
.box_2{
  width: 100%;
  text-align: center;
}
.box_2 img{
  width: 4.3rem;
  height: 0.68rem;
  margin-top: 1rem;
  color:#234497FF;
}
.box_3{
  width: 100%;
}
.box_31 {
  text-align: center;
  margin:auto;
  width: 6.06rem;
  height: 1.04rem;
  background-color: #234497FF;
  border-radius: 5px;
}
.box_31 p{
  font-size: 0.24rem;
  color: #ffffff;
  line-height: 1rem;
  letter-spacing :0.1rem;
  margin-top:0.5rem;
}
</style>