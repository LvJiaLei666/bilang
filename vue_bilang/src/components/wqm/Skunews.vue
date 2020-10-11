<template>
  <div class="hello">
    
  <van-nav-bar title="悠闲型男灰色衬衫" left-text="返回" left-arrow class="head" @click-left="onClickLeft">
      <template #right>
        <van-icon name="ellipsis"  size="34" color="#fff"/>
      </template>
    </van-nav-bar>
 <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item><img src="..\..\..\static\images\时尚精选\pic_01.png" alt=""></van-swipe-item>
  <van-swipe-item><img src="..\..\..\static\images\时尚精选\pic_02.png" alt=""></van-swipe-item>
  <van-swipe-item><img src="..\..\..\static\images\时尚精选\pic_03.png" alt="">></van-swipe-item>
  <van-swipe-item><img src="..\..\..\static\images\时尚精选\pic_04.png" alt=""></van-swipe-item>
</van-swipe>
<div class="skun_pj">
<span class="skun_pj_pj">商品评价</span><span class="skun_pj_num">(200)</span>
  <div class="skun_pj_nr">
    <div class="skun_pj_nr_top">
      <img src="..\..\..\static\images\我的粉丝&我的代言费\fans.png" alt="">
      <span>董大伟</span>
    </div>
    <p class="skun_pj_nr_nr">产品不错，衣服尺寸很适合，下次还会再来！</p>
   <div class="skun_pj_nr_pic">
     <img src="..\..\..\static\images\全部评价\pic_01.png" alt="">
      <img src="..\..\..\static\images\全部评价\pic_02.png" alt="">
       <img src="..\..\..\static\images\全部评价\pic_03.png" alt="">
   </div>
   <div class="skun_pj_nr_xj">
     <span>产品质量：</span><van-rate v-model="value" :size="5" color="blue" void-icon="star" void-color="#eee"/>
     <span>服务态度：</span><van-rate v-model="value" :size="5" color="blue" void-icon="star" void-color="#eee"/>
     <span>尺寸合适：</span><van-rate v-model="value" :size="5" color="blue" void-icon="star" void-color="#eee"/>
   </div>
  </div>
    <div class="skun_pj_nr">
    <div class="skun_pj_nr_top">
      <img src="..\..\..\static\images\我的粉丝&我的代言费\fans.png" alt="">
      <span>董大伟</span>
    </div>
    <p class="skun_pj_nr_nr">产品不错，衣服尺寸很适合，下次还会再来！</p>
   <div class="skun_pj_nr_xj">
     <span>产品质量：</span><van-rate v-model="value" :size="4" color="blue" void-icon="star" void-color="#eee"/>
     <span>服务态度：</span><van-rate v-model="value" :size="4" color="blue" void-icon="star" void-color="#eee"/>
     <span>尺寸合适：</span><van-rate v-model="value" :size="4" color="blue" void-icon="star" void-color="#eee"/>
   </div>
  </div>
  <van-button color="#7232dd" plain>单色按钮</van-button>
</div>
 <img src="..\..\..\static\images\评价&评价点击分享\icon_06.png" alt="" class="img_btn1">
 <img src="..\..\..\static\images\首页\button.png" alt="" class="img_btn2">
  <div class="sku_foot">
    <img src="..\..\..\static\images\单品-图文信息\单品－图文信息_02.png" alt="" class="sku_foot_pic">
  <img src="..\..\..\static\images\单品\单品_03.png" alt="" class="img_btn3" @click="$router.push('/Cart')">
  <p class="sku_foot_wz_top">悠闲型男灰色衬衫</p>
    <p class="sku_foot_wz_mid">Sportsman leisure suit</p>
      <p class="sku_foot_wz_foot">¥ 899.00</p>
  </div>
 
  </div>
</template>

<script>
export default {
  name: 'Skunews',
  data () {
    return {
     username: '',
      password: '',
      value: 5,
    }
  },  methods: {
    onClickLeft() {
    this.$router.go(-1)
    },
    onClickRight() {
      Toast('按钮');
    },
      onSubmit(values) {
      console.log('submit', values);
    },
       onChange(value) {
      Toast('当前值：' + value);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.skun_pj{
  width: 7rem;
  margin:0.5rem 0.2rem;
  
}
.skun_pj_pj{
  
font-size: 0.3rem;
font-family: HiraginoSansGB;
font-weight: normal;
color: #000000;
}
.skun_pj_nr{
  width: 100%;
  height: 2rem;
  margin-top:0.7rem;
}
.skun_pj_num{
  font-size: 0.2rem;
font-family: HiraginoSansGB;
font-weight: normal;
color: #333333;
}
.skun_pj_nr_top img{
 width: 0.6rem;height: 0.6rem;
 display: inline-block;
}
.skun_pj_nr_top span{
font-size: 0.24rem;
font-family: HiraginoSansGB;
font-weight: normal;
color: #333333;
margin-left: 0.2rem;
}
.skun_pj_nr_top{
  display: flex;
  align-items: center;
}
.skun_pj_nr_nr{
  
font-size: 0.26rem;
font-family: HiraginoSansGB;
font-weight: normal;
color: #333333;
}
.skun_pj_nr_pic{
  margin-top: 0.1rem;
}
.skun_pj_nr_pic img{
  width: 1.1rem;
  height: 1.1rem;
}
.skun_pj_nr_xj span{

font-size: 0.2rem;
font-family: HiraginoSansGB;
font-weight: normal;
color: #999999;
margin-left:0.2rem ;
}
.skun_pj_nr_xj{
  margin-top:0.2rem ;
}
.van-button{
  width: 2.7rem;
height: 0.4rem;
font-size: 0.24rem;
font-family: HiraginoSansGB;
font-weight: normal;
color: #E42F45;
border: 1px solid #C7C7C7;
border-radius: 0.3rem;
margin-left: 2.1rem ;
}
.sku_foot_pic{
  width: 100%;
  height: 4.3rem;
}
  .my-swipe .van-swipe-item {
   width: 100%;
   height: 10rem;
  }
   .my-swipe img{
     width:100%;
     height: 100%;
   }
.img_btn1{
  display: inline-block;
  width: 0.36rem;
  height: 0.36rem;
  position: absolute;
  top:1.5rem;
  right: 0.5rem;
}
.img_btn2{
  display: inline-block;
  width: 1.3rem;
  height: 1.3rem;
  position: fixed;
  top:1.2rem;
  left: 0.5rem;
}
.sku_foot{
  width:100%;
  position: relative;
  text-align: center;
  margin-top: 0.5rem;
}
.img_btn3{
  display: inline-block;
  width: 1.2rem;
  height: 1.2rem;
  position: absolute;
  right: 0.5rem;
  top: 3.6rem;
}
.sku_foot_wz_top{
font-size: 0.3rem;
font-family: HiraginoSansGB;
font-weight: normal;
color: #333333;
}
.sku_foot_wz_mid{

font-size: 0.24rem;
font-family: HiraginoSansGB;
font-weight: normal;
color: #333333;
}
.sku_foot_wz_foot{
font-size: 0.34rem;
font-family: HiraginoSansGB;
font-weight: bold;
color: #FF4242;
}
</style>