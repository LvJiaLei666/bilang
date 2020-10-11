<template>
  <div class="all">
     <van-nav-bar title="我的钱包" left-text="返回" left-arrow class="head" @click-left="onClickLeft">
      <template #right>
        <van-icon name="ellipsis"  size="34" color="#fff"/>
      </template>
  </van-nav-bar>
    <div class="title">
      <img src="../../../static/images/我的私享卡/logo.jpg"> 
      <p>比朗让定制回归大众
      </p>
    </div>
    <div class="logo">
      <p>
        LOGO
      </p>
    </div>
    <div class="code">
      <img src="../../../static/images/我的私享卡/icon.png"> 
      <span>识别二维码，成为会员</span>
    </div>
    <div class="QR">
       <img src="../../../static/images/我的私享卡/erweima.png"> 
       <p>Concerned about the public, to get more benefits</p>
    </div>
  </div>
</template>
<style scoped>
.QR>p{
  font-size:0.18rem;
  color:#fff;
  text-align:center;
}
.QR>img{
  width:2.87rem;
  height:2.97rem;
  margin: 0 auto;
  display:block;
}
.code{
  margin: 0 auto;
  width:3.85rem;
}
.code>img{
width: 0.53rem;
height:0.34rem;
vertical-align: middle;
}
.code>span{
  color:#fff;
  font-size:0.3rem;
  vertical-align: middle;
}
.logo>p{
  font-size:0.61rem;
  color:#fff;
  text-align:center;
  line-height:3.36rem;
}
.logo{
  width:3.36rem;
  height:3.36rem;
  background:#6F8DD8;
  display:block;
  margin:0.41rem auto;
  border-radius: 50%;
}
.all{
  background: #7A96DB;
  width:100%;
  height:14rem;
}
.title>img{
  display:block;
  margin: 0.43rem auto;
  width:5.9rem;
}
.title>p{
  font-size:0.34rem;
  text-align:center;
  margin:0 auto;
  color:#fff;
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