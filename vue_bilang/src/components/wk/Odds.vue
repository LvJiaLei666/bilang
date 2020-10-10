<template>
  <div class="all">
     <van-nav-bar title="限时特惠" left-text="返回" left-arrow class="head">
      <template #right>
        <van-icon name="ellipsis"  size="34" color="#fff"/>
      </template>
  </van-nav-bar>
  <van-row type="flex" justify="center" style="font-size:0.16rem">
     <van-col span="6" class="time">
       <p>8:00
       </p>
       <p>
         抢购中
       </p>
     </van-col>
     <van-col span="6" class="time"> <p>8:00
       </p>
       <p>
         抢购中
       </p></van-col>
    
     <van-col span="6" class="time">
       <p>8:00
       </p>
       <p>
         抢购中
       </p>
     </van-col>
     <van-col span="6" class="time">
       <p>8:00
       </p>
       <p>
         抢购中
       </p>
     </van-col>
     <van-col span="6" class="time">
       <p>8:00
       </p>
       <p>
         抢购中
       </p>
     </van-col>
</van-row>
<div class="banner">
  <img src="../../../static/images/限时特惠/banner.png"> 
</div>
<div class="count_down">
  <div class="count_time">
    <span>抢购中 08:00 开抢</span>
  </div>
  <van-count-down :time="time" class="count_down_">
  <template #default="timeData">
    <span>距结束</span>
    <span class="block">{{timeData.hours}}</span>
    <span class="colon">:</span>
    <span class="block">{{timeData.minutes}}</span>
    <span class="colon">:</span>
    <span class="block">{{timeData.seconds}}</span>
  </template>
</van-count-down>
</div>
<div class="detailed">
  <img src="../../../static/images/限时特惠/pic_1.png"> 
  <p>春秋商务休闲加肥加大胖子衬衣肥佬宽松中年正装长...</p>
  <span>￥ 199.00</span>
  <span>￥20000.00</span>
  <span>去抢购</span>
  <img src="../../../static/images/限时特惠/icon.png"> 
</div>
<div class="detailed">
  <img src="../../../static/images/限时特惠/pic_1.png"> 
  <p>春秋商务休闲加肥加大胖子衬衣肥佬宽松中年正装长...</p>
  <span>￥ 199.00</span>
  <span>￥20000.00</span>
  <span>去抢购</span>
  <img src="../../../static/images/限时特惠/icon.png"> 
</div>
<div class="detailed">
  <img src="../../../static/images/限时特惠/pic_1.png"> 
  <p>春秋商务休闲加肥加大胖子衬衣肥佬宽松中年正装长...</p>
  <span>￥ 199.00</span>
  <span>￥20000.00</span>
  <span>去抢购</span>
  <img src="../../../static/images/限时特惠/icon.png"> 
</div>
<div class="detailed">
  <img src="../../../static/images/限时特惠/pic_1.png"> 
  <p>春秋商务休闲加肥加大胖子衬衣肥佬宽松中年正装长...</p>
  <span>￥ 199.00</span>
  <span>￥20000.00</span>
  <span>去抢购</span>
  <img src="../../../static/images/限时特惠/icon.png"> 
</div>
  </div>
</template>
<style scoped>
.detailed>img:nth-of-type(2){
  position: absolute;
  bottom:0.34rem;
  right:0.25rem;
  width:0.247rem;
  height:0.248rem;
}
.detailed>span:nth-of-type(3){
  margin:0;
  color:#234597;
  position: absolute;
  font-size:0.24rem;
  top:0.7rem;
  right:0.23rem;
  width:0.72rem;
  height:0.23rem;
}
.detailed>span:nth-of-type(2){
  margin:0;
  text-decoration: line-through;
  color:#999;
  position: absolute;
  font-size:0.2rem;
  bottom:0.34rem;
  left:3.32rem;
  width:1.1rem;
  height:0.17rem;
}
.detailed>span:nth-of-type(1){
  margin:0;
  color:#ff4242;
  position: absolute;
  font-size:0.28rem;
  bottom:0.35rem;
  left:1.76rem;
  width:1.32rem;
  height:0.23rem;
}
.detailed>p{
  margin:0;
  color:#666;
  position: absolute;
  font-size:0.24rem;
  top:0.26rem;
  left:1.76rem;
  width:3.14rem;
  height:0.52rem;
}
.detailed>img:nth-of-type(1){
  position: absolute;
  top:0.29rem;
  left:0.27rem;
  width:1.19rem;
  height:1.2rem;
}
.count_down{
  background: #f2f0f5;
  border:1px solid gray;
  box-sizing: border-box;
  height:0.75rem;
  border-right:none;
  border-left:none;
}
.detailed{
  position:relative;
  margin-top:0.21rem;
  width:7.5rem;
  height:1.84rem;
  background-image: url(../../../static/images/限时特惠/background.png);
  background-size: 100%;

}
.count_down_>span:nth-of-type(1){
  font-size:0.35rem;
  line-height: 0.55rem;
}
.count_time{
  margin-top: 0.1rem;
  margin-left: 0.2rem;
  font-size:0.35rem;
  width: 3rem;
  display: inline-block;
  float:left;
}
.count_down_{
  display: inline-block;
  width:3.2rem;
  float:right;
}
 .colon {
    display: inline-block;
    margin: 0 4px;
    color: #000;
  }
  .block {
    display: inline-block;
    width: 22px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background-color: #000;
  }
  .banner{
    height:1.81rem;
  }
.banner>img{
  width:7.5rem;
  height:1.81rem;
}
.time{
  height:1rem;
  background: #252525;
  color:#fff;
}
.time>p:nth-of-type(1){
  font-size:0.39rem;
  text-align:center;
  margin:0.095rem 0 0 0;
}
.time>p:nth-of-type(2){
  font-size:0.22rem;
  text-align:center;
  margin:0;
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
};
</script>