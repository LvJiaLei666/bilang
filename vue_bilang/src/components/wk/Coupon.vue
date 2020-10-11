<template>
  <div class="all">
    <van-nav-bar title="优惠券" left-text="返回" left-arrow class="head" @click-left="onClickLeft">
      <template #right>
        <van-icon name="ellipsis"  size="34" color="#fff"/>
      </template>
  </van-nav-bar>
  <!-- 未定义使用，导致数据异步更新时报警。 -->
  <van-tabs v-model="activeName">
    <van-tab title="有效" name="a">
      <div class="coupon">
        <div class="imgs">
          <p class="price">
            <span>￥</span>
            <span>200</span>
          </p>
          <div class="times">
            <p>每名用户限用1张本卷</p>
            <p>订单满899可用</p>
            <p>精选品牌储蓄卡专用</p>
            <p>有效时间：2015-11-06至2015-11-17</p>
          </div>
          <span class="Voucher">优惠卡抵用券</span>  
        </div>
        <div class="used">
         <p>马上使用</p>
          <img src="../../../static/images/限时特惠/icon.png"> 
       </div>  
     </div>
    </van-tab>
    <van-tab title="失效" name="b">
      <div class="coupon">
        <div class="imgs_">
           <p class="price">
            <span>￥</span>
            <span>200</span>
          </p>
          <div class="times">
            <p>每名用户限用1张本卷</p>
            <p>订单满899可用</p>
            <p>精选品牌储蓄卡专用</p>
            <p>有效时间：2015-11-06至2015-11-17</p>
          </div>
          <span class="Voucher">优惠卡抵用券</span>  
        </div>
      <div class="used">
         <p>优惠券使用过期</p>
         <img src="../../../static/images/限时特惠/icon.png"> 
       </div> 
      </div>
    </van-tab>
    <van-tab title="全部" name="c">
        <div class="coupon">
        <div class="imgs">
          <p class="price">
            <span>￥</span>
            <span>200</span>
          </p>
          <div class="times">
            <p>每名用户限用1张本卷</p>
            <p>订单满899可用</p>
            <p>精选品牌储蓄卡专用</p>
            <p>有效时间：2015-11-06至2015-11-17</p>
          </div>
          <span class="Voucher">优惠卡抵用券</span>  
        </div>
        <div class="used">
         <p>马上使用</p>
          <img src="../../../static/images/限时特惠/icon.png"> 
       </div>  
     </div>
     <div class="coupon">
        <div class="imgs_">
           <p class="price">
            <span>￥</span>
            <span>200</span>
          </p>
          <div class="times">
            <p>每名用户限用1张本卷</p>
            <p>订单满899可用</p>
            <p>精选品牌储蓄卡专用</p>
            <p>有效时间：2015-11-06至2015-11-17</p>
          </div>
          <span class="Voucher">优惠卡抵用券</span>  
        </div>
      <div class="used">
         <p>优惠券使用过期</p>
         <img src="../../../static/images/限时特惠/icon.png"> 
       </div> 
      </div>
    </van-tab>
  </van-tabs>  
    
  </div>
</template>
<style scoped>
.used>img{
  top:0.19rem;
  right:0.49rem;
  width:0.277rem;
  height:0.248rem;
  position: absolute;
}
.Voucher{
  display:block;
  font-size:0.22rem;
  color:#fff;
  position:absolute;
  top:0.19rem;
  right:0.22rem;
}
.times>p:last-child{
  margin-top:0.2rem;
}
.times{
  position:absolute;
  left:2.12rem;
  top:0.56rem;
  width:3.93rem;
  font-size:0.22rem;
  color:#fff;
}
.times>p{
  margin:0;
}
.price>span{
  display:inline-block;
}
.price>span:nth-of-type(1){
  font-size:0.16rem;
  margin-right:-0.15rem;
}
.price{
   margin:0;
  width:1.41rem;
  height:0.48rem;
  color:#fff;
  font-size:0.45rem;
  position:absolute;
  left:0.39rem;
  bottom:0.36rem;
}
.used{
  background:#fff;
  font-size:0.24rem;
  text-align:center;
  width:6.9rem;
  height:0.6rem;
  margin:0 auto;
  line-height:0.6rem;
  position:relative;
}
.used>p{
  margin:0;
}
.all{
  background: #F3F4F6;
  width:100%;
  height:14rem;
}
.coupon{
  margin:0.17rem 0;
  width:7.5rem;
  
}
.imgs{
  position:relative;
  display:block;
  width:6.9rem;
  height:2.2rem;
  margin:0 auto;
  background-image: url(../../../static/images/优惠券/coupon_1.png);
  background-size: 100%;
}
.imgs_{
  position:relative;
  display:block;
  width:6.9rem;
  height:2.2rem;
  margin:0 auto;
  background-image: url(../../../static/images/优惠券/coupon_2.png);
  background-size: 100%;
}
</style>
<script>
export default {
  data() {
    return {
      activeName: 'a',
    };
  },
   methods:{
      onClickLeft(){
      this.$router.go(-1)
    }
    }
};
</script>