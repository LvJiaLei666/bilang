<template>
  <div class="hello">
    
  <van-nav-bar title="登录" left-text="返回" left-arrow class="head">
      <template #right>
        <van-icon name="ellipsis"  size="34" color="#fff"/>
      </template>
    </van-nav-bar>
    <div class="logo">
      <img src="../../../static/images/登录/logo.png" alt="">
    </div>
    <van-form @submit="onSubmit">
  <van-field
    v-model="username"
    name="用户名"
    label="用户名"
    placeholder="用户名"
    :rules="[{ required: true, message: '请填写用户名' }]"
  />
  <van-field
    v-model="password"
    type="password"
    name="密码"
    label="密码"
    placeholder="密码"
    :rules="[{ required: true, message: '请填写密码' }]"
  />
  <div style=" 
  ">
    <van-button round block type="info" native-type="submit" @click="$router.push('/Index')">
      登录
    </van-button>
  </div>
</van-form>
  <van-button type="default"  style="width:6.1rem; margin-left:0.7rem" @click="$router.push('/Register')">注册账号</van-button> 
      <van-divider style="border:1px soild #1989fa;font-size:0.2rem;padding-top:1.8rem;">第三方登录</van-divider>
      <van-button class="vx" type="default"  style="width:6.1rem;margin-left:0.7rem;">微信登录</van-button>
  </div>
</template>

<script>
export default {
  name: 'Login',
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
.logo {
 width: 5.12rem;height: 0.67rem;margin:0 auto;padding-top:2rem;
}
.logo img{width: 100%;height: 100%;
 width: 5.12rem;height: 0.67rem;
} 
.van-form{
  margin-left:0.7rem;
 
}
.van-form .van-cell{
   background: #eeeeee
           
}
.van-form .van-button{
  width:6.1rem;
  line-height:1rem;
  background:#234497;
  color:#fff;
  opacity: 0.5;
  font-size:0.3rem;
  text-align:center;
 border-radius: 0.5rem;
 margin-top:0.2rem
}
.vx{
   margin:0 auto;
     height:0.6rem;
   background:url('..\..\..\static\images\登录\登录54_11.png') no-repeat 2rem;
   background-size:0.5rem 0.5rem;
}

</style>