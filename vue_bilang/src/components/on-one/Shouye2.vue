<template>
  <div class="shouye">
     <div class="reset">
       <van-nav-bar
     class="nav"
  title="标题"
  left-text="返回"
  right-text="●●●"
  fixed
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
     </div>
<div style="height:0.6rem;"></div>
<div class="banner">
  <div class="banner_0">
    <div class="banner_1">
        <img class="img_g" src="../../../static/images/h5页面2/h5页面x2_03.png" alt="">
        <span class="vick">VICKIN_HRO</span>
        <span class="dinzhi">感受比朗定制的独特魅力</span>
        <span class="youzhi">“做工精美，优质布料，服务<br> 态度超棒！” <span>&nbsp;</span></span>
    </div>

    <div class="banner_2">
        <img src="../../../static/images/h5页面2/h5页面_6_03.png" alt="">
        <img src="../../../static/images/h5页面2/h5页面x2_08.png" alt="">
        <img src="../../../static/images/h5页面2/h5页面x2_05.png" alt="">
    </div>
  <div class="sui" style="width:100%;height:5.8rem;background:rgba(28,10,0,0.6);"></div>

  </div>
</div>

<div class="zhan">
  <p>产品图</p>
  <div class="zhan_1">
    <img src="../../../static/images/h5页面2/h5页面2_03.png" alt="">
    <img src="../../../static/images/h5页面2/h5页面_3_03.png" alt="">
    <img src="../../../static/images/h5页面2/h5页面_4_03.png" alt="">
    <img src="../../../static/images/h5页面2/h5页面_5_03.png" alt="">
  </div>
  <p>用户晒图</p>
</div>
<div class="juan">
  <div class="juan_1">
    <p class="xian">现金体验卷</p>
    <div class="bao">
        <span class="money">$300</span>
        <span class="time">有效时间：2015-11-06至2015-11-17</span>
    </div>
 
  </div>
  <div class="quan">
    <img src="../../..//static/images/h5页面2/右箭头.png" alt="">
    <p>点击领取</p>
    <div></div>
  </div>
</div>

  </div>
</template>

<script>
export default {
 methods: {
    onClickLeft() {
      // Toast('返回');
        this.$router.push({path:'/Shouye'}) 
    },
    onClickRight() {
      Toast('按钮');
    },
  },
}
</script>

<style scoped>
.shouye{
  width: 100%;
  height: cover;
}
.van-nav-bar{
  background-color: black;
}

.banner{
  width: 100%;
  height: 5.8rem;
  background: linear-gradient(to bottom, #000000 0%,#ffffff 100%);
  background-image: url('../../../static/images/h5页面2/h5页面x2_02.png');
  background-size: 100% 120%;
  box-shadow: inset 0em -1em #000000FF;
}
.banner_1{
  width: 5rem;
  height: 5.8rem;
  float: right;
  display: flex;
  flex-direction: column;
  /* justify-content:center; */
  align-items:flex-end;
  padding-right: 0.5rem;
  padding-top: 0.3rem;
  box-sizing: border-box; 
}
.banner_1 span{
  font-size: 0.24rem;
}
.img_g{
  width: 1.3rem;
  height: 1.3rem;
  margin-bottom: 0.2rem;
}
.vick{
  font-size: 0.24rem;
  color:#EDEDEDFF;
}
.dinzhi{
  font-size: 0.22rem;
  color: #EDEDEDFF;
  margin-bottom: 0.3rem;
}
.youzhi{
  font-size: 0.22rem;
  font-weight: 600;
  color: #FFFFFFFF;
  text-align: right;
}
.banner_2{
  position: absolute;
  display: flex;
  bottom: -1rem;
}
.banner_2 img{
  width: 1.4rem;
  height: 1.4rem;
  margin: 0 0.2rem;
}
.banner_0{
  width: 100%;
  height: 4.8rem;
  position: relative;
}
.zhan_1{
  width: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
}
.zhan_1 img{
  width: 1.6rem;
  height: 1.6rem;
  margin: 0 0.1rem;
}
.zhan p{
  font-size: 0.26rem;
  padding-left: 0.2rem;
  box-sizing: border-box;
  color: #fff;
  padding-bottom: 0.5rem;
}
.zhan{
  background-color: #000000FF;
  /* margin-top: -0.26rem; */
}
.juan{
  width: 100%;
  height: 4.3rem;
  background-color: #000000FF;
  margin-top: -0.26rem;

}
.juan_1{
  width: 90%;
  height: 2.5rem;
  margin: auto;
  color:#fff;
  background: url('../../../static/images/h5页面2/h5页面_1_03.png')no-repeat;
  background-size: 100% 100%;
  position: relative;
}
.xian{
  font-size: 0.3rem;
  margin-top: 0.2rem;
  margin-right: 0.2rem;
  position: absolute;
  right: 0.2rem;
}
.bao{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  position: absolute;
  top: 0.8rem;
  left: 1.4rem;
}
.money{
  transform: scale(2,1);
  font-weight: 600;
  font-size: 0.8rem;
  margin-bottom: 0.2rem;
}
.time{
  font-size: 0.2rem;
}
.quan{
  width: 90%;
  margin: auto;
  height: 0.6rem;
  background-color: #ffffff;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  align-items: center;
}
.quan p{
  font-size: 0.2rem;
}
.quan img{
  width: 0.6rem;
  height: 0.6rem;
}


</style>