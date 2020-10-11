<template>
  <div class="all">
     <van-nav-bar title="注册" left-text="返回" left-arrow class="head" @click-left="onClickLeft">
      <template #right>
        <van-icon name="ellipsis"  size="34" color="#fff"/>
      </template>
  </van-nav-bar>
  <div class="bodys">
    <img src="../../../static/images/注册/logo.png">
    <div class="message">
      <div class="message_">
        <img src="../../../static/images/注册/login_icon_1.png">
        <div class="inputs">
          <input type="text" placeholder="请输入内容">
        </div>
        <div class="send">
          <span>发送验证码</span>
        </div>
      </div>
    </div>
      <div class="message">
      <div class="message_">
        <img src="../../../static/images/注册/login_icon_2.png">
        <div class="inputs">
          <input type="text" placeholder="请输入内容">
        </div>
      </div>
    </div>
      <div class="message">
      <div class="message_">
        <img src="../../../static/images/注册/login_icon_3.png">
        <div class="inputs">
          <input type="text" placeholder="请输入内容">
        </div>
        <div class="show">
         <img src="../../../static/images/注册/login_icon_4.png">
        </div>
      </div>
    </div>
    <div class="choice">
      <van-icon name="passed" size="0.3rem" style="float:left;margin-right:0.1rem;"/>
      <span>请阅读<a href="#">《注册须知》</a></span>
    </div>
    <div class="register" @click="$router.push('/')">
      <span>注册</span>
    </div>
  </div>
  </div>
</template>
<style scoped>
.register>span{
  font-size:0.3rem;
  color:#fff;
  display: block;
  text-align:center;
}
.register{
  box-sizing: border-box;
  padding-top:0.3rem;
  width:6rem;
  height: 1rem;
  background: #234497;
  border-radius:0.1rem;
}
.choice>span{
  font-size:0.24rem;
  float:left;
}
.choice{
  margin-bottom:0.51rem;
  margin-top:0.22rem;
  height:0.23rem;
}
.show{
  position:absolute;
  right:0.34rem;
  bottom:0.08rem;

}
.show>img{
  width:0.36rem;
  margin-bottom:0.2rem;
}
.send>span{
  font-size:0.24rem;
  color:#fff;
  display:block;
  line-height: 1rem;
  margin-left:0.35rem;
}
.send{
  width:1.9rem;
  height:1rem;
  background: #234497;
  position: absolute;
  right:0;
  top:0;
}
.inputs{
  /* background: blue; */
  width:3.22rem;
  height:0.6rem;
  float:left;
  border-left:2px solid #E1E1E1;

}
.inputs>input{
  width:2rem;
  height:0.4rem;
  font-size:0.2rem;
  float:left;
  background: none;
  border:none;
  margin-top: 0.08rem;
  margin-left:0.31rem;
}
.message_{
  width:6.1rem;
  height:0.6rem;
  /* background:blue; */
  
}
.message_>img{
  width:0.3rem;
  float:left;
  margin-left:0.325rem;
  margin-top:0.15rem;
  margin-right:0.334rem;
}
.message{
  margin-bottom:0.1rem;
  position:relative;
  background: #F3F4F6;
  width:6.1rem;
  height:1rem;
  padding-top:0.2rem;
  box-sizing: border-box;
}
.all{
  width:100%;
  height:100%;
}
.bodys{
  width:6.1rem;
  height:100%;
  margin:0 auto;
  padding-top:1.98rem;
  box-sizing: border-box;
}
.bodys>img{
  width:6.1rem;
  margin-bottom:1.52rem;
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