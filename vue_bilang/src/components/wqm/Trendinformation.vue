<template>
  <div class="hello">
    
  <van-nav-bar title="登录" left-text="返回" left-arrow class="head" @click-left="onClickLeft">
      <template #right>
        <van-icon name="ellipsis"  size="34" color="#fff"/>
      </template>
    </van-nav-bar>
   <div class="pic">
      <img src="..\..\..\static\images\潮流资讯\潮流_02.png" alt="">
      <img src="..\..\..\static\images\潮流资讯\潮流_04.png" alt="" class="pic_nr">
       <img src="..\..\..\static\images\潮流资讯\潮流_05_06.png" alt="" class="pic_nr">
   <img src="..\..\..\static\images\潮流资讯\潮流_05_06.png" alt="" class="pic_nr">
   </div>
    
    
  </div>
</template>

<script>
export default {
  name: 'Trendinformation',
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
.pic{
  width: 100%;
}
.pic img{
  display: inline-block;
  width:100%;height: 3.75rem;
}
.pic .pic_nr{

  margin-top: -0.1rem;
}
</style>