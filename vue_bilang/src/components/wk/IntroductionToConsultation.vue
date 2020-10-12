<template>
  <div class="all">
    <van-nav-bar title="介绍" left-text="返回" left-arrow class="head" @click-left="onClickLeft">
      <template #right>
        <van-icon name="ellipsis"  size="34" color="#fff"/>
      </template>
  </van-nav-bar>
    <div class="imgs">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item>
    <img src="../../../static/images/咨询简介/资讯简介.png">
      <div class="text">
        <p>啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦
          啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦
          啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦
        </p>
      </div>
     <div class="slide-point">
     </div>
      </van-swipe-item>
  <van-swipe-item><img src="../../../static/images/咨询简介/资讯简介.png">
      <div class="text">
        <p>啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦
          啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦
          啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦
        </p>
      </div></van-swipe-item>
  <van-swipe-item><img src="../../../static/images/咨询简介/资讯简介.png">
      <div class="text">
        <p>啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦
          啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦
          啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦
        </p>
      </div></van-swipe-item>
  <van-swipe-item><img src="../../../static/images/咨询简介/资讯简介.png">
      <div class="text">
        <p>啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦
          啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦
          啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦
        </p>
      </div></van-swipe-item>
</van-swipe>
      
    </div>
  </div>
</template>
<style scoped>
.slide-point{
  width:6rem;
  height:2rem;
}
.all{
  width:100%;
  height:100%;
  background:#343638;
}
.imgs{
  width:6rem;
  margin:0 auto;
  padding-top:0.6rem;
}
.imgs img{
width:100%;
display: block;
}
.text{
  font-size:0.24rem;
  width:6rem;
  height:2rem;
  background: #fff;
  padding:0.3rem 0.25rem;
  box-sizing: border-box;
}
.text>p{
  margin:0;
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