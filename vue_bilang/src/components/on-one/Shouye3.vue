<template>
  <div class="shouye">
     <div class="reset">
   <van-nav-bar title="比朗" left-text="返回" left-arrow class="head" @click-left="onClickLeft">
      <template #right>
        <van-icon name="ellipsis"  size="34" color="#fff"/>
      </template>
    </van-nav-bar>
     </div>
<!-- <div style="height:0.6rem;"></div> -->
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

<div class="quan">

  <div class="quan_1">
    <span>●恭喜您获得200元现金体验卷</span>
  </div>
  <div class="quan_2">
    <div class="quan_21" @click="$router.push('/Shouye4')">
      <div class="quan_21_1">
          <span>点击获取</span>
          <img src="../../../static/images/h5页面3/h5页面x3_123_03.png" alt="">
      </div>

    </div>

  </div>

</div>

  </div>
</template>

<script>
export default {
 methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
  },
}
</script>

<style scoped>
/* #reset /deep/ .van-ellipsis{
		color: red !important;
	} */

  .van-nav-bar__text{
    color: #ffffff;
  }
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
  padding-top: 1rem;
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
      margin-top: 0.2rem;
}
.zhan{
  background-color: #000000FF;
  margin-top: -0.26rem;
}

.xian{
  font-size: 0.3rem;
  margin-top: 0.2rem;
  margin-right: 0.2rem;
  position: absolute;
  right: 0.2rem;
}

/* 组件样式修改 */

.quan{
  width: 100%;
  height: 4rem;
  background-color: black;
  display: flex;
  color: #ffffff;
  margin-top: -0.3rem;
}
.quan_1{
  width: 50%;
  display: flex;
}
.quan_1 span{
  font-size: 0.24rem;
  margin-top: 3.2rem;
  margin-left: 0.3rem;
}
.quan_2 {
  width: 50%;
  position: relative;

}
.quan_21{
  width: 87%;
  height: 3rem;
  background: url("../../../static/images/h5页面3/h5页面x3_03.png")no-repeat;
  background-size: 111% 100%; 
  position: absolute;
  left: 0.5rem;
  top: 1rem;
}
.quan_21_1 span{
  font-size: 0.24rem;
  position: absolute;
  left: 1.5rem;
  top: 2.2rem;
}
.quan_21_1 img{
  width: 0.44rem;
  height: 0.44rem;
  position: absolute;
  left:2.6rem;
  top: 2.2rem;
}
</style>