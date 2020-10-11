<template>
  <div class="index">
    <!-- 头部 -->
    <van-nav-bar title="比朗" left-text="返回" left-arrow class='head'>
    <template #right>
    <van-icon name="ellipsis" size="34" color='#fff'/>
    </template>
    </van-nav-bar>
    
    <!-- 轮播图 -->
    <transition name="slide">
      <div class='body' v-if='show'>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" >
            <van-swipe-item><img src="../../../static\images\首页\banner_1.png" /></van-swipe-item>
            <van-swipe-item><img src="../../../static\images\首页\banner_1.png" /></van-swipe-item>
            <van-swipe-item><img src="../../../static\images\首页\banner_1.png" /></van-swipe-item>
            <van-swipe-item><img src="../../../static\images\首页\banner_1.png" /></van-swipe-item>
        </van-swipe>
        <!-- 时尚精选 -->
        <van-image
            width="7.5rem"
            height="2.6rem"
            fit="cover"
            src="../../../static\images\首页\index_01.png"
        />
        <!-- 潮流资讯 -->
        <van-image
            width="7.5rem"
            height="2.6rem"
            fit="cover"
            src="../../../static\images\首页\index_02.png"
        />
        <!-- 限时特惠 -->
        <van-image
            @click="$router.push('/Odds')"
            width="7.5rem"
            height="2.6rem"
            fit="cover"
            src="../../../static\images\首页\index_03.png"
        />
        <!-- 品牌故事-->
        <van-image
            width="7.5rem"
            height="2.6rem"
            fit="cover"
            src="../../../static\images\首页\index_04.png"
        />
        <div class='centers'>
            <div class="centers_top">
              <img src="../../../static\images\个人中心\pic.png" alt="">
              <span>vickin</span>
            </div>
            <van-divider dashed>✂</van-divider>
            <div class='centers_icon'>
                <img src="../../../static\images\个人中心\icon_01.png" >
                <span>首页</span>
            </div>
            <div class='centers_icon'>
                <img src="../../../static\images\个人中心\icon_02.png" >
                <span>我的信息</span>
            </div>
            <div class='centers_icon'>
                <img src="../../../static\images\个人中心\icon_03.png" >
                <span>我的订单</span>
            </div>
            <div class='centers_icon'>
                <img src="../../../static\images\个人中心\icon_04.png" >
                <span>我的购物车</span>
            </div>
            <div class='centers_icon'>
                <img src="../../../static\images\个人中心\icon_05.png" >
                <span>我的尺寸</span>
            </div>
            <div class='centers_icon'>
                <img src="../../../static\images\个人中心\icon_06.png" >
                <span>我的钱包</span>
            </div>
            <div class='centers_icon'>
                <img src="../../../static\images\个人中心\icon_07.png" >
                <span>我的收藏</span>
            </div>
            <div class='centers_icon centers_icons'>
                <img src="../../../static\images\个人中心\icon_08.png" >
                <span>我的地址</span>
            </div>
            <div class='centers_icon'>
                <img src="../../../static\images\个人中心\incon_09.png" >
                <span>返回</span>
            </div>
        </div>
       </div> 
      </transition>
       <!-- 定位 -->
        <img src="../../../static\images\首页\button.png" class='fixeds' @click='show = !show'>
        
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      show:true,
}
  },
  methods:{

  },
  computed:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 轮播图 */
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 20px;
    text-align: center;
    background-color: #fff;
  }
  .my-swipe .van-swipe-item>img{
      /* width:100%; */
      height:3.4rem;
  }
  .fixeds{
      position:fixed;
      top:9.22rem;
      left:0.38rem;
      width:0.6rem;
      height:0.6rem;
  }
/* 主体 */

.slide-leave-active{
transition:all 5s;
transform: translateX(5.8rem);
}

.slide-enter{
  opacity: 1;
  transform: translateX(5.8rem);
}
.slide-enter-active{
transition:all 5s;
}
/* 个人中心 */
.centers{
  width:5.8rem;
  height:12.08rem;
  background-color: #2D3657;
  position: absolute;
  /* top:0.88rem; */
  top:0;
  left:-5.8rem;
  /* left:0; */
}
.centers_top{
  width:100%;
  height:1.8rem;
}
.centers_top>img{
  width:0.91rem;
  height:0.91rem;
  margin:0.46rem 0.33rem 0 0.4rem;
  vertical-align: middle;
}
.centers_top>span{
   font-size: 0.26rem;
  color:#fff;
  padding-top: 0.81rem;
}
.van-divider{
  color:#999999;
  background-color:#999999;
}
.centers_icon{
  height:0.9rem;
}
.centers_icon>img{
width:0.27rem;
height:0.25rem;
  margin:0.74rem 0.27rem 0 0.47rem;
}
.centers_icon>span{
  font-size: 0.3rem;
  color:#fff;
}
.centers_icons{
  margin-bottom:0.6rem;
}
</style>
