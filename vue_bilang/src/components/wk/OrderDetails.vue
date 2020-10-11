<template>
  <div class="all">
     <van-nav-bar title="订单详情" left-text="返回" left-arrow class="head" @click-left="onClickLeft">
      <template #right>
        <van-icon name="ellipsis"  size="34" color="#fff"/>
      </template>
  </van-nav-bar>
  <div class="state">
    <p>
      <span>订单状态：</span>
      <span>已发货</span>
    </p>
    <p>
      <span>订单单号：</span>
      <span>1000800245</span>
    </p>
    <p>
      <span>订单金额：</span>
      <span>¥ 2000.00</span>
    </p>
    <div class="receving">
      <img src="../../../static/images/我的私享卡/icon.png"> 
      <span>确认收货</span>
    </div>
  </div>
   <div class="detailed">
  <img src="../../../static/images/限时特惠/pic_1.png"> 
  <p>春秋商务休闲加肥加大胖子衬衣肥佬宽松中年正装长...</p>
  <span>￥ 2000.00</span>
  <span>X1</span>
</div>
<div class="address">
  <img src="../../../static/images/我的订单/icon_1.png"> 
  <p>
    <span>李先生</span>
    <span>13423433424</span>
  </p>
  <p>
    广东省佛山市禅城区印象购物中心5号楼1902室
  </p>
</div>
<div class="pay">
  <p>
    <span>支付方式</span>
    <span class="pay_wx">微信支付</span>
  </p>
  <p style="margin:0.29rem 0 0.12rem 0">
    <span>配送方式</span>
    <span  class="pay_wx">快递</span>
  </p>
   <p class="delivery">
    工作日、双休日与假日均可送货
  </p>

</div>
<div class="size">
  <p>测量尺寸</p>
  <img src="../../../static/images/限时特惠/icon.png"> 
</div>
  </div>
</template>
<style scoped>
.size>img{
  width: 0.277rem;
  height:0.24rem;
  position:absolute;
  right:0.32rem;
  top:0.38rem;
}
.size>p{
  font-size:0.28rem;
  margin:0 0 0.38rem 0.3rem;
}
.size{
  position:relative;
  box-sizing: border-box;
  padding-top:0.37rem;
  margin-top:0.19rem;
  width:7.5rem;
  height:1rem;
  background: #fff;
}
.delivery{
  font-size:0.24rem;
  color:#999;
}
.pay_wx{
  font-size:0.24rem;
  color:#234497;
  display:block;
  float:right;
  margin-right:0.32rem;
}
.pay>p{
    margin:0;
}
.pay{
  padding:0.2rem 0 0 0.3rem;
  box-sizing: border-box;
  font-size:0.28rem;
  color:#333;
  width:7.5rem;
  height:1.76rem;
  background: #fff;
  margin-top:0.19rem;
}
.address>p{
  font-size:0.24rem;
  margin:0;
}
.address>p:nth-of-type(1){

  top:0.3rem;
  left:0.87rem;
  position: absolute;
}
.address>p:nth-of-type(2){
  bottom:0.29rem;
  left:0.88rem;
  position: absolute;
}
.address>img{
  width:0.319rem;
  height:0.384rem;
  position:absolute;
  left:0.24rem;
  top:0.36rem;
}
.address{
  background: #fff;
  position:relative;
  width:7.5rem;
  height:1.17rem;
  border-left:3px solid blue;
  box-sizing: border-box;
  margin-top:0.19rem;
}
.detailed{
  background: #fff;
  position:relative;
  width:7.5rem;
  height:1.8rem;
  border-bottom:1px solid #e1e1e1;
  box-sizing: border-box;
  margin-top:0.19rem;
}
.detailed>span:nth-of-type(1){
  margin:0;
  color:gray;
  position: absolute;
  font-size:0.24rem;
  bottom:0.35rem;
  left:1.76rem;
  width:1.32rem;
  height:0.23rem;
}
.detailed>span:nth-of-type(2){
  position: absolute;
  font-size:0.24rem;
  top:0.35rem;
  right:0.33rem;
}
.detailed>p{
  margin:0;
  color:#666;
  position: absolute;
  font-size:0.24rem;
  top:0.26rem;
  left:1.76rem;
  width:4.44rem;
  height:0.52rem;
}
.detailed>img:nth-of-type(1){
  position: absolute;
  top:0.29rem;
  left:0.27rem;
  width:1.19rem;
  height:1.2rem;
}
.receving>img{
  display: block;
  margin:0 auto;
  width:0.53rem;
  height:0.33rem;
}
.receving>span{
  display: block;
  font-size:0.22rem;
  margin-top:0.19rem;
}
.receving{
  right:0.46rem;
  bottom:0.51rem;
  text-align:center;
  background:coral;
  position:absolute;
  color:blue;
}
.state>p:nth-of-type(2){
  margin:0.26rem 0;
}
.state>p{
  margin:0 auto;
  height:0.24rem;
}
.state{
  position:relative;
  padding-top:0.19rem;
  box-sizing: border-box;
  padding-left:0.31rem;
  font-size:0.26rem;
  margin-top:0.2rem;
  width:7.5rem;
  height:1.86rem;
  background-image: url(../../../static/images/限时特惠/background.png);
  background-size: 100%;
}
.all{
  background: #F3F4F6;
  width:100%;
  height:14rem;
}

</style>
<script>
export default {
  data(){
    return{
  }
  },
   methods:{
   onClickLeft(){
      this.$router.go(-1)
    }
},
}
</script>