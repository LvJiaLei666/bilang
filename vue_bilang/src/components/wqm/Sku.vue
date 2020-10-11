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
 <img src="..\..\..\static\images\评价&评价点击分享\icon_06.png" alt="" class="img_btn1">
 <img src="..\..\..\static\images\首页\button.png" alt="" class="img_btn2">
  <div class="sku_foot">
  <img src="..\..\..\static\images\单品\单品_03.png" alt="" class="img_btn3">
  <p class="sku_foot_wz_top">悠闲型男灰色衬衫</p>
    <p class="sku_foot_wz_mid">Sportsman leisure suit</p>
      <p class="sku_foot_wz_foot">¥ 899.00</p>
  </div>
 
  </div>
</template>

<script>
export default {
  name: 'Sku',
  data () {
    return {
     username: '',
      password: '',
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  position: fixed;
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
}
.img_btn3{
  display: inline-block;
  width: 1.2rem;
  height: 1.2rem;
  position: absolute;
  right: 0.5rem;
  top: -1rem;
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