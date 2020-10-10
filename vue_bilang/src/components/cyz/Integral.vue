<template>
  <div class="box">
    
    <van-nav-bar title="积分兑换" left-text="返回" left-arrow class="head">
      <template #right>
        <van-icon name="ellipsis"  size="34" color="#fff"/>
      </template>
    </van-nav-bar>

    <van-cell-group>
      <van-cell title="积分余额" value="200000" />
    </van-cell-group>

    <van-cell title="" class="van_cell" icon="../../../static\images\积分兑换\pic_01..png">
      <template #title>
        <span class="qian">￥</span>
        <span class="num">200</span>
        <p class="Title">200元储蓄卡抵用卷</p>
        <p class="text">需要积分：100</p>
      </template>
      <template #right-icon>
        <van-icon class="jian-icon" name="../../../static\images\积分兑换\icon.png"  />
      </template>
    </van-cell>

    <van-cell title="" class="van_cell van_cell_2" icon="../../../static\images\积分兑换\pic_01..png">
      <template #title>
        <span class="qian">￥</span>
        <span class="num">200</span>
        <p class="Title">200元储蓄卡抵用卷</p>
        <p class="text">需要积分：100</p>
      </template>
      <template #right-icon>
        <van-icon class="jian-icon" name="../../../static\images\积分兑换\icon.png"  />
      </template>
    </van-cell>
  </div>
</template>

<script>
  export default {
  name: 'Integral',
  data () {
    return {
      
    }
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
    .van_cell{
      margin-top: .5rem;
      background: #ffffff;
      
    }
    .van-cell__left-icon>img{
      width:1.3rem;
      height:1.3rem;
    }
    .van-icon__image{
     width: .277rem;
     height: .248rem;
     margin-top: .5rem;
    }
    .van-cell__left-icon{
      margin-top: -.5rem;
    }
    .qian{
      display: inline-block;
      color: #ffffff;
      font-size: .2rem;
      position: absolute;
      left: .53rem;
      font-weight: bolder;
    }
    .num{
      display: inline-block;
      color: #ffffff;
      font-size: .36rem;
      position: absolute;
      left: .8rem;
      top: .15rem;
      font-weight: bolder;
    }
    .Title{
      font-size: 0.3rem;
      margin-left: .27rem;
      line-height: .2rem;
      color: #333333;
      margin-top: .25rem;
    }
    .text{
      font-size: .24rem;
      margin-left: .27rem;
      line-height: .2rem;
      color: #666666;
      margin-top: .25rem;
    }
    .van_cell_2{
      margin-top: .1rem;
    }

</style>
