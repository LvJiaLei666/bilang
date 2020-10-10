<template>
  <div>
     <van-nav-bar title="全部评价" left-text="返回" left-arrow class="head">
      <template #right>
        <van-icon name="ellipsis"  size="34" color="#fff"/>
      </template>
    </van-nav-bar>
    <div class="tou">
      <img src="../../../static\images\全部评价\fans.png" />
      <span>董大伟</span>
      <p>产品不错，衣服尺寸很适合，下次还会再来！</p>
      <div class="Img">
        <img src="../../../static\images\全部评价\pic_01.png">
        <img src="../../../static\images\全部评价\pic_02.png">
        <img src="../../../static\images\全部评价\pic_03.png">
      </div>
      <div class="ping">
        <span class="PF">产品质量:</span>
        <van-rate v-model="value":size="10" color="#234497" />
        <span class="PF">服务态度:</span>
        <van-rate v-model="value":size="10" color="#234497" />
        <span class="PF">尺寸合适:</span>
        <van-rate v-model="value":size="10" color="#234497" />
      </div>
    </div>

     <div class="tou tou2">
      <img src="../../../static\images\全部评价\fans.png" />
      <span>董大伟</span>
      <p>产品不错，衣服尺寸很适合，下次还会再来！</p>
      <div class="ping">
        <span class="PF">产品质量:</span>
        <van-rate v-model="value":size="10" color="#234497" />
        <span class="PF">服务态度:</span>
        <van-rate v-model="value":size="10" color="#234497" />
        <span class="PF">尺寸合适:</span>
        <van-rate v-model="value":size="10" color="#234497" />
      </div>
      
    </div>

    
  </div>
</template>

<script>
export default {
  name: 'AllEvaluatio',
   data () {
    return {
      value: 5,
    }
  }
}
</script>

<style scoped>
.tou{
    width:100%;
    height:1.1rem;
    line-height: 1.1rem;
    font-size: .24rem;
  }
  .tou>span{
    font-size: .24rem;
  }
  .tou>img{
    width: .6rem;
    height: .6rem;
    vertical-align: middle;
    margin-left:0.27rem;
    margin-right: 0.14rem;
  }
  .tou>p{
    display: block;
    font-size: .26rem;
    color: #333333;
    margin-top: -.3rem;
    margin-left: .26rem;
  }
  .Img{
    margin-top: -.4rem;
    margin-left: .27rem;
  }
  .Img>img{
    width: 1.1rem;
    height: 1.1rem;
  }
  .Img>:nth-of-type(2){
    margin-left: .15rem;
  }
  .Img>:nth-of-type(3){
    margin-left: .15rem;
  }
  .ping{
    margin-top: -.6rem;
    margin-left: .05rem;
    border-bottom: 1px solid #E1E1E1;
  }
  .PF{
    display: inline-block;
    font-size: .2rem;
    color: #999999;
    vertical-align: middle;
    margin-top: -.05rem;
    margin-left: .19rem;
  }
  
  .tou2{
    margin-top: 2.7rem;
  }
</style>