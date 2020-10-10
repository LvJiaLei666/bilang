<template>
  <div class="hello">
    
  <van-nav-bar title="悠闲型男套装" left-text="返回" left-arrow class="head">
      <template #right>
        <van-icon name="ellipsis"  size="34" color="#fff"/>
      </template>
    </van-nav-bar>
  <div class="pro_lbt">
 <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item><img src="..\..\..\static\images\时尚精选\pic_01.png" alt=""></van-swipe-item>
  <van-swipe-item><img src="..\..\..\static\images\时尚精选\pic_02.png" alt=""></van-swipe-item>
  <van-swipe-item><img src="..\..\..\static\images\时尚精选\pic_03.png" alt="">></van-swipe-item>
  <van-swipe-item><img src="..\..\..\static\images\时尚精选\pic_04.png" alt=""></van-swipe-item>
</van-swipe>
 <img src="..\..\..\static\images\首页\button.png" alt="" class="img_btn2"> 
 <div class="pro_token">
   <img src="..\..\..\static\images\产品列表\产品列表__01.png" alt="" class="pro_token_gb">
   <p class="pro_token_sjs">设计师：vickin_hro</p>
   <p class="pro_token_nr">设计理念：纵横二千之零售店及产品均不断创新，并在市场上获得一致的良好口碑。</p>
   </div> 
    <img src="..\..\..\static\images\我的粉丝&我的代言费\fans.png" class="pro_token_tx">
  </div>
  <div class="pro_foot">

    <div>  <img src="..\..\..\static\images\产品列表\产品列表1_01.png" alt="">
    <p class="pro_foot_top">Sportsman leisure suit</p>
    <p class="pro_foot_mid">灰色衬衫</p>
    <p class="pro_foot_foot">¥899</p></div>
    <div>    <img src="..\..\..\static\images\产品列表\产品列表1_02.png" alt="">
    <p class="pro_foot_top">Sportsman leisure suit</p>
    <p class="pro_foot_mid">白色v领t-shirt</p>
    <p class="pro_foot_foot">¥99</p></div>
    <div>
     <img src="..\..\..\static\images\产品列表\产品列1_03.png" alt="">
    <p class="pro_foot_top">Sportsman leisure suit</p>
    <p class="pro_foot_mid">灰色衬衫</p>
    <p class="pro_foot_foot">¥899</p></div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  data () {
    return {
     username: '',
      password: '',
    }
  },  methods: {
    onClickLeft() {
      Toast('返回');
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
.img_btn2{
  display: inline-block;
  width: 1.3rem;
  height: 1.3rem;
  position: fixed;
  top:1.2rem;
  left: 0.5rem;
}
.pro_lbt{
  position: relative;
}
.pro_token{
  width: 6.7rem;
  height: 1.6rem;
  background: url("..\..\..\static\images\产品列表\产品列表_03.png") no-repeat;
  background-size: 6.7rem 1.6rem;
  position: absolute;
  left: 0.3rem;top: 7rem;
}
.pro_token_sjs{
  
font-size: 0.24rem;
font-family: HiraginoSansGB;
font-weight: normal;
color: #234497;
width: 6rem;
margin-left: 0.5rem;
}
.pro_token_nr{
font-size: 0.24rem;
font-family: HiraginoSansGB;
font-weight: normal;
color: #333333;
width: 6rem;
margin:-0.1rem 0.5rem;

}
.pro_token_gb{
  width: 0.4rem;height: 0.4rem;position: absolute;right: -0.2rem;top: -0.2rem;
}
.pro_token_tx{
  width: 0.8rem;height: 0.8rem;position: absolute;right: 0.5rem;top:8.7rem;
}
.pro_foot{
  width: 100%;
 	display: flex;
   flex-flow:row; 
   justify-content:space-around;
   margin-top: 0.5rem;
}
.pro_foot img{
  width: 1.2rem;height: 1.4rem;
}
.pro_foot p{
  margin-top: -0.2rem;
}
.pro_foot div{
  width: 5rem;
  text-align: center;
}
.pro_foot_top{
  
font-size: 0.2rem;
font-family: HiraginoSansGB;
font-weight: normal;
color: #333333;
  width: 2.7rem;
}
.pro_foot_mid{
  
font-size: 0.24rem;
font-family: HiraginoSansGB;
font-weight: normal;
color: #333333;
}
.pro_foot_foot{
font-size: 0.24rem;
font-family: HiraginoSansGB;
font-weight: normal;
color: #333333;
}
</style>