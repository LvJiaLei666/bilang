<template>
  <div class="details">
      <!-- 头部 -->
    <van-nav-bar title="个人信息" left-text="返回" left-arrow class='head'>
    <template #right>
    <van-icon name="ellipsis" size="34" color='#fff'/>
    </template>
    </van-nav-bar>
    <!-- 主体 -->
    <div class='body'>
    <!-- ------------第一个--------------------- -->
      <div class="details_body_01">
        <span>头像</span>
        <img src="../../../static\images\个人信息\个人信息(绑定手机）_03.png" />
        <img src="../../../static\images\个人信息\个人信息(绑定手机）狮子_03.png" />
      </div>
      <!-- --------------组件-------------------- -->
      <van-cell-group>
      <van-field v-model="value" label="昵称：" class='details_value1'/>
      </van-cell-group>
      <div class="details_body_02">
        <span>性别</span>
        <img src="../../../static\images\个人信息\个人信息(绑定手机）_03.png" />
        <span class="span2">男</span>
      </div>
      <!-- --------------组件-------------------- -->
      <van-cell-group>
      <van-field v-model="value" label="生日：" class='details_value1'/>
      </van-cell-group>
      <div class="details_body_02">
        <span>地区</span>
        <img src="../../../static\images\个人信息\个人信息_11.png" class='details_img03'/>
      </div>

      <div class="details_body_02">
        <span>手机</span>
        <van-button  plain class='code r'>发送验证码</van-button>
      </div>
      <!-- --------------组件-------------------- -->
      <!-- <van-field
        v-model="value"
        label="手机"
        placeholder="发送验证码"
        input-align="right"
      /> -->
      <!-- --------------组件-------------------- -->
      <van-cell-group>
      <van-field v-model="value" label="身高(cm)：" class='details_value1'/>
      </van-cell-group>
      <!-- --------------组件-------------------- -->
      <van-cell-group>
      <van-field v-model="value" label="体重(kg)：" class='details_value1 details_value2'/>
      </van-cell-group>
    </div>
    <van-button type="primary" size="large" class='foot_btn'>保存</van-button> 
  </div>
</template>

<script>
export default {
  name: "PersonalDetails",
  data() {
    return {
      value:''
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.details{
  width:100%;
  height:13.34rem;
  background-color: #E1E1E1;
}
.body{
  width:100%;
  height:9.27rem;
  margin:0.2rem 0 1.28rem 0;
  background-color: #fff;
}
.details_body_01{
  width:7.26rem;
  height:1.5rem;
  line-height: 1.5rem;
  font-size:0.26rem;
  color:#333333;
  border-bottom: 0.01rem solid #E1E1E1;
  margin:0 auto;
  background-color: #fff;
}
.details_body_01>span{
  margin-left:0.31rem;
}
.details_body_01>img{
  width:0.27rem;
  height:0.24rem;
  vertical-align: middle;
  float:right;
  margin-top:0.67rem;
}
.details_body_01>img:last-child{
  width:0.8rem;
  height:0.8rem;
  margin:0.35rem 0.21rem 0 0;
}
.details_value1{
  width:7.26rem;
  height:1.09rem;
  line-height: 0.8rem;
  margin:0 auto;
  border-bottom: 0.01rem solid #E1E1E1;
}
.details_body_02{
  font-size:0.26rem;
  color:#333333;
  width:7.25rem;
  height:1.09rem;
  line-height: 1rem;
  border-bottom: 0.01rem solid #E1E1E1;
  margin:0 auto;
  background-color: #fff;
}
.details_body_02>img{
  width:0.27rem;
  height:0.24rem;
  vertical-align: middle;
  float:right;
  margin-top:0.42rem;
  float:right;
}
.details_body_02>span{
  margin-left:0.31rem;
}
.details_body_02>.span2{
  float:right;
  margin-right:0.19rem;
}

.details_img03{
  width:0.31rem;
  height:0.38rem;
}

.van-cell{
  width:7.25rem;
  height:1.09rem;
  line-height: 0.8rem;
  margin:0 auto;
  border-bottom: 0.01rem solid #E1E1E1;
  color:#234497;
}
.details_value2{
  border-bottom: none;
}
.foot_btn{
  width:6.9rem;
  height:1.01rem;
  background-color: #234497;
  margin-left:0.3rem;
}
.code{
  color:#234497;
  border:none;
  outline:none;
  font-size: 0.26rem;
}
</style>  
