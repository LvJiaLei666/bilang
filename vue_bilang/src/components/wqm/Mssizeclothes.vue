<template>
  <div class="hello">
    <van-nav-bar title="开始测量" left-text="返回" left-arrow class="head">
      <template #right>
        <van-icon name="ellipsis"  size="34" color="#fff"/>
      </template>
    </van-nav-bar>
    <div class="pic">
     
    </div>
     <p class="wz_top">测量防法</p>
      <p class="wz_foot">将卷尺放在缆骨上部和胸腔下部中间的地方，贴紧皮肤但不要物素。在呼气状态下|突取测量值，精确到0.1cm</p>
  <div class="foot">
      <p class="foot_top">添加衣长</p>
      <img src="..\..\..\static\images\我的尺寸\ft_pic_2.png" alt="" class="foot_pic01">
       <img src="..\..\..\static\images\我的尺寸\ft_pic.png" alt="" class="foot_pic02">
          <div class="ms_price">
        <span class="ms_price_cm1">0.0</span><span class="ms_price_cm">cm</span>
      </div>
       <div class="jt">
         <span>下一步</span>
         <img src="..\..\..\static\images\我的尺寸\icon.png" alt="">
       </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Mssizeclothes',
  data () {
    return {
    }
    },
      methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    }
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pic{
  width:100%;height:7rem;
  background:url('../../../static/images/测量尺寸-衣长/测量尺寸-衣长_03.png') no-repeat 1.4rem 1rem;
  background-size: 5rem 5rem;
}
.wz_top{
  width:6rem;color:rgb(156, 156, 156);font-size: 0.3rem;margin:0 auto;text-align: center;
}
.wz_foot{
  width:6rem;margin:0 auto;color:rgb(156, 156, 156);font-size: 0.2rem;
}
.foot{
  width:100%;height: 4.19rem;background: url("..\..\..\static\images\我的尺寸\footer.png") no-repeat;background-size: 7.5rem 4.19rem;
  margin-top:0.5rem;position: relative;
}
.foot .foot_top{
  width: 1.2rem;
font-size: 0.3rem;
font-family: HiraginoSansGB;
font-weight: normal;
color: #333333;
margin:0 auto;
padding-top: 0.3rem;
}
.foot .foot_pic01{
  display: inline-block;
  width: 100%;
  height: 1rem;
  position:absolute;
  left:0;
  bottom: 0.8rem;
}
.foot .foot_pic02{
  width: 0.32rem;
height: 1.47rem;
  display: inline-block;
  position:absolute;
  left:3.4rem;
  bottom: 0.5rem;
}
.jt{
  position: absolute;
  top:1rem;
  right: 0.5rem;
}
.jt span{

height: 0.23rem;
font-size: 0.24rem;
font-family: HiraginoSansGB;
font-weight: normal;
color: #234397;
}
.jt img{
  width: 0.27rem;height: 0.24rem;margin-left: -0.2rem;
}
</style>