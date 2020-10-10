<template>
  <div class="box">
    <van-nav-bar
      class="nav"
      title="标题"
      left-text="返回"
      right-text="●●●"
      left-arrow
      fixed
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="complete">
      <div class="nangao">
        <img src="../../../static/images/h5页面4/h5页面x4_03_03.png" alt="" />
      </div>
      <div class="banner">
        <div class="banner_1">
          <img
            class="img_g"
            src="../../../static/images/h5页面2/h5页面x2_03.png"
            alt=""
          />
          <span class="vick">VICKIN_HRO</span>
          <span class="dinzhi">感受比朗定制的独特魅力</span>
          <span class="youzhi"
            >“做工精美，优质布料，服务<br />
            态度超棒！” <span>&nbsp;</span></span
          >
        </div>

        <div class="banner_2">
          <img src="../../../static/images/h5页面2/h5页面_6_03.png" alt="" />
          <img src="../../../static/images/h5页面2/h5页面x2_08.png" alt="" />
          <img src="../../../static/images/h5页面2/h5页面x2_05.png" alt="" />
        </div>

        <div class="zhan">
          <p>产品图</p>
          <div class="zhan_1">
            <img src="../../../static/images/h5页面2/h5页面2_03.png" alt="" />
            <img src="../../../static/images/h5页面2/h5页面_3_03.png" alt="" />
            <img src="../../../static/images/h5页面2/h5页面_4_03.png" alt="" />
            <img src="../../../static/images/h5页面2/h5页面_5_03.png" alt="" />
          </div>
          <p>用户晒图</p>
        </div>

        <div class="draw">
          <p class="draw_1">点击领取</p>
          <p class="draw_2">价值200元的体验卷</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.box {
  width: 100%;
  height: 15.5rem;
  background-color: black;
  padding-top: 1.4rem;
  box-sizing: border-box;
}
.complete {
  width: 88%;
  height: 13.5rem;
  margin: auto;
  background-color: #ffffff;
  position: relative;
}
.banner {
  width: 0.5rem;
  height: 0.4rem;
  background-color: #e5e5e5ff;
}

.banner {
  width: 100%;
  height: 5.8rem;
  /* background: linear-gradient(to bottom, #000000 0%,#ffffff 100%); */
  background-image: url("../../../static/images/h5页面2/h5页面x2_02.png");
  background-size: 100% 120%;
  /* box-shadow: inset 0em -1em #E5E5E5FF; */
}
.banner_1 {
  width: 5rem;
  height: 5.8rem;
  float: right;
  display: flex;
  flex-direction: column;
  /* justify-content:center; */
  align-items: flex-end;
  padding-right: 0.5rem;
  padding-top: 0.9rem;
  box-sizing: border-box;
}
.banner_1 span {
  font-size: 0.24rem;
}
.img_g {
  width: 1.3rem;
  height: 1.3rem;
  margin-bottom: 0.4rem;
}
.vick {
  font-size: 0.24rem;
  color: #343434ff;
}
.dinzhi {
  font-size: 0.22rem;
  color: #343434ff;
  margin-bottom: 0.3rem;
}
.youzhi {
  /* font-size: 0.22rem;
  font-weight: 600;
  color: #343434FF;*/
  text-align: right;
  width: 344px;
  height: 49px;
  font-size: 22px;
  font-family: HiraginoSansGB;
  font-weight: bold;
  color: #343434;
}
.banner_2 {
  position: absolute;
  display: flex;
  bottom: 5.4rem;
}
.banner_2 img {
  width: 1.4rem;
  height: 1.4rem;
  margin: 0 0.2rem;
}
.zhan_1 {
  width: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
}
.zhan_1 img {
  width: 1.5rem;
  height: 1.6rem;
  margin: 0 0.1rem;
}
.zhan p {
  font-size: 0.26rem;
  padding-left: 0.2rem;
  box-sizing: border-box;
  color: #343434ff;
}
.zhan {
  padding-top: 6.4rem;
}

.nangao {
  width: 95%;
}
.nangao img {
  width: 7rem;
  position: absolute;
  top: 11.5rem;
  left: -0.2rem;
}

.draw {
  width: 50%;
  height: 45%;
  margin: auto;
  text-align: center;
  background: url('../../../static/images/h5页面4/h5页面x4_03.png')no-repeat;
  background-size:100% 100%;
  position: relative;
}
.draw_1 {
  color: #343434ff;
  font-size: 0.28rem;
  line-height: 1.8rem;
}
.draw_2 {
  color: #343434ff;
  font-size: 0.22rem;
  position: absolute;
  top: 1rem;
  left: 0.6rem;
}
</style>