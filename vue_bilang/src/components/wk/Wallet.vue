<template>
  <div class="all">
     <van-nav-bar title="我的钱包" left-text="返回" left-arrow class="head" @click-left="onClickLeft">
      <template #right>
        <van-icon name="ellipsis"  size="34" color="#fff"/>
      </template>
  </van-nav-bar>
  <div class="count">
     <img src="../../../static/images/我的钱包/headPic.png"> 
     <p>
       <span class="li_1">账户余额</span>
       <span class="li_2">￥0.00</span>
     </p>
      <p>
       <span class="li_3">累计积分收益</span>
       <span class="li_4">1000</span>
     </p>
  </div>
  <div class="balance">
  <p>余额提现</p>
  <img src="../../../static/images/我的钱包/icon.png"> 
  </div>
  <van-grid :border="false" :column-num="3">
  <van-grid-item>
    <img src="../../../static/images/我的钱包/icon_1.png" style="height:0.6rem" />
    <span class="text">我的粉笔</span>
  </van-grid-item>
  <van-grid-item>
    <img src="../../../static/images/我的钱包/icon_2.png" style="height:0.6rem" />
    <span class="text">粉比订单</span>
  </van-grid-item>
  <van-grid-item>
    <img src="../../../static/images/我的钱包/icon_3.png" style="height:0.6rem" />
    <span class="text">我的代言费</span>
  </van-grid-item>
  <van-grid-item>
    <img src="../../../static/images/我的钱包/icon_4.png" style="height:0.6rem" />
    <span class="text">我的私享卡</span>
  </van-grid-item>
  <van-grid-item>
    <img src="../../../static/images/我的钱包/icon_5.png" style="height:0.6rem" />
    <span class="text">我的积分</span>
  </van-grid-item>
  <van-grid-item>
    <img src="../../../static/images/我的钱包/icon_6.png" style="height:0.6rem" />
    <span class="text">我的优惠券</span>
  </van-grid-item>
  <van-grid-item>
    <img src="../../../static/images/我的钱包/icon_7.png" style="height:0.6rem" />
    <span class="text">账单查询</span>
  </van-grid-item>
  <van-grid-item>
    <img src="../../../static/images/我的钱包/icon_8.png" style="height:0.6rem" />
    <span class="text">粉比权益</span>
  </van-grid-item>
  <van-grid-item>
    <img src="../../../static/images/我的钱包/icon_9.png" style="height:0.6rem"/>
    <span class="text">比朗学院</span>
  </van-grid-item>
</van-grid>
  </div>
</template>
<style scoped>
.text{
  font-size:0.24rem;
  color:#666;
  display:block;
  margin-top:0.2rem;
}
.van-grid-item{
  height:2.44rem;
  border:1px solid #e1e1e1;
  box-sizing: border-box;
}
.balance>img{
  position: absolute;
  width:0.277rem;
  height:0.248rem;
  right:0.36rem;
  bottom:0.38rem;
}
.balance>p{
  margin:0;
  font-size:0.28rem;
  color:#234497;
  text-align: center;
  line-height: 1rem;
}
.balance{
  position: relative;
  width:7.5rem;
  height:1rem;
  background: #E1E1E1;
}
.li_2{
  color:red;
}
.li_2,.li_4{
  margin-right:0.36rem;
}
.li_1{
  margin-right:2.08rem;
}
.li_3{
  margin-right:1.8rem;
}
.count>p{
  margin:0;
  height:0.24rem;
}
.count>p:nth-of-type(2){
  margin-top:0.35rem;
}
.count>p span{
  display:inline-block;
  font-size:0.24rem;
  
}
.count>img{
  position:absolute;
  top:0.52rem;
  left:0.83rem;
  width:1.3rem;
  height:1.3rem;
}
.count{
  padding-top:0.65rem;
  box-sizing: border-box;
  text-align: right;
  position: relative;
  width:7.5rem;
  height:2.25rem;
  background: #fff;
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