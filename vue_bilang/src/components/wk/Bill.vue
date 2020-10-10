<template>
  <div class="all">
    <van-nav-bar title="添加收货地址" left-text="返回" left-arrow class="head">
      <template #right>
        <van-icon name="ellipsis"  size="34" color="#fff"/>
      </template>
  </van-nav-bar>
  <div class="Account">
    <span>账户余额</span>
    <span>￥2000.00</span>
  </div>
  <div class="online-pay">
    <p>
      <span>
        在线支付
      </span>
      <span>
        + ￥548.58 
      </span>
    </p>
    <p class="under-size">
      <span  style="color:gray">
        微信支付
      </span>
      <span  style="color:gray">
        2016.01.25
      </span>
    </p>
  </div>
  <div class="online-pay">
     <p>
      <span>
        在线支付
      </span>
      <span>
        + ￥548.58 
      </span>
    </p>
    <p class="under-size">
      <span style="color:gray">
        微信支付
      </span>
      <span  style="color:gray">
        2016.01.28
      </span>
    </p>
  </div>
  </div>
  
  </div>
</template>
<style scoped>
.under-size{
  font-size:0.24rem; 
}
.online-pay{
  width:100%;
  height:1.6rem;
  background: #fff;
}
.all{
  background: #F3F4F6;
  width:100%;
  height:14rem;
}
.Account{
  margin:0.34rem 0 0.34rem 0;
  width:100%;
  height:1.2rem;
  font-size:0.3rem;
  line-height:1.2rem;
  background: #fff;
}
.Account>span{
  display:inline-block;
  color:red;
}
.Account>span:first-child{
  margin-left:0.27rem;
  margin-right:4.11rem;
  color:#000;
}
.online-pay span{
  font-size:0.3rem;
  /* display:inline-block; */
  color:red;
}

.online-pay span:first-child{
  margin-left:0.27rem;
  margin-right:4.11rem;
  color:#000;
}
.online-pay>p{
  margin:0;
}
</style>