<template>
  <div class='fashions'>
     <van-nav-bar title="全部评价" left-text="返回" left-arrow class="head">
      <template #right>
        <van-icon name="ellipsis"  size="34" color="#fff"/>
      </template>
    </van-nav-bar>

    <van-row class="van_left">
      <van-col span="24"><img src="../../../static\images\时尚精选\pic_01.png"></van-col>
      <van-col span="24"><img src="../../../static\images\时尚精选\pic_02.png"></van-col>
      <van-col span="24"><img src="../../../static\images\时尚精选\pic_03.png"></van-col>
    </van-row>

    <van-row class="van_right">
      <van-col span="24"><img src="../../../static\images\时尚精选\banner.png" class="imgs"></van-col>
      <van-col span="24"><img src="../../../static\images\时尚精选\pic_02.png"></van-col>
      <van-col span="24"><img src="../../../static\images\时尚精选\pic_01.png"></van-col>
      <van-col span="24"><img src="../../../static\images\时尚精选\pic_02.png"></van-col>
    </van-row>

      <img src="../../../static\images\时尚精选\button.png" class='btn'>
  </div>
</template>

<script>
export default {
  name: 'Fashion',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
.fashoins{
  width: 100%;
  height: 13.34rem;
  position: relative;
}
  .van-row{
    width: 3.75rem;
    text-align: center;
  }
  img{
    width: 3.42rem;
    height: 3.98rem;
    margin-top:0.2rem;

  }
  .van_left{
    float: left;
  }
  .van_right{
    float: right;
  }
  .imgs{
    width:3.46rem;
    height:1.12rem;
  }

  .btn{
    width:0.7rem;
    height:0.7rem;
    position: absolute;
    top:9.94rem;
    left:0.2rem;
  }
</style>