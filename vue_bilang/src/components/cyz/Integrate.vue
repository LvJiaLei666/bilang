<template>
  <div class="box">

    <van-nav-bar title="我的积分" left-text="返回" left-arrow class="head" @click-left="onClickLeft">
      <template #right>
        <van-icon name="ellipsis"  size="34" color="#fff"/>
      </template>
    </van-nav-bar>

    <van-cell-group>
      <van-cell title="积分余额" value="200000" />
    </van-cell-group>

    <van-row type="flex" justify="space-between" class="JF">
      <van-col span="6" @click="$router.push('/Integral')">积分兑换</van-col>
      <van-col span="6"><span></span></van-col>
      <van-col span="6">积分规则</van-col>
    </van-row>
   
    <van-row type="flex" justify="space-between" class="FXJF FXJF_">
      <van-col span="6">2016.01.11</van-col>
      <van-col span="6">分享积分</van-col>
      <van-col span="6">+5</van-col>
    </van-row>
    
    
   <van-row type="flex" justify="space-between" class="FXJF">
      <van-col span="6">2016.01.11</van-col>
      <van-col span="6">分享积分</van-col>
      <van-col span="6">+5</van-col>
    </van-row>
     <van-row type="flex" justify="space-between" class="FXJF">
      <van-col span="6">2016.01.11</van-col>
      <van-col span="6">分享积分</van-col>
      <van-col span="6">+5</van-col>
    </van-row>
    <van-row type="flex" justify="space-between" class="FXJF">
      <van-col span="6">2016.01.11</van-col>
      <van-col span="6">分享积分</van-col>
      <van-col span="6">+5</van-col>
    </van-row>

  </div>
</template>

<script>
export default {
  name: 'Integrate',
  data () {
    return {
      
    }
  },
  methods:{
    onClickLeft() {
      this.$router.go(-1)
    },
  }
}
</script>

<style scoped>
    .box{
      width: 100%;
      height: 13.34rem;
      background: #e1e1e1;
    }
    .van-cell{
      width: 100%;
      height: 1.6rem;
      background: #ffffff;
      margin-top: .2rem;
      font-size: .3rem;
      line-height: 1.4rem;
      color: #333;
    }
    .van-cell__value{
      color: red;
    }
    .JF{
      width: 100%;
      height: 1rem;
      background: #ffffff;
      font-size: .26rem;
      color: #234497;
      line-height: 1rem;
    }
    .van-col:nth-of-type(1){
      text-align: right;
      width: 2.6rem;
    }
    .van-col:nth-of-type(2){
      text-align: center;
      width: 1.8rem;
    }
    .van-col:nth-of-type(2)>span{
      display: inline-block;
      width: .01rem;
      height: .5rem;
      background: #234497;
      margin-top: .25rem;
    }
    .van-col:nth-of-type(3){
      width: 2.6rem;
      text-align: left;
    }
    .FXJF_{
      margin-top: .5rem;
    }
    .FXJF{
      width: 100%;
      height: 1rem;
      background: #ffffff;
      font-size: .2356rem;
      line-height: 1rem;
      border-bottom: 1px solid #E1E1E1;
    }
    .FXJF>.van-col:nth-of-type(1){
      text-align:center;
    }
    .FXJF>.van-col:nth-of-type(2){
      text-align:center;
    }
    .FXJF>.van-col:nth-of-type(3){
      text-align:center;
      color: #FF5858;
    }
</style>