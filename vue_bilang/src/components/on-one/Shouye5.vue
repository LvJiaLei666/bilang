<template>
  <div class="box">
       <van-nav-bar
     class="nav"
  title="测量尺寸"
  left-text="返回"
  right-text="●●●"
  fixed
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>

<div class="zhanshi">
  
    <ul class="zhanshi_1">
      <li>
        <img src="../../../static/images/测量尺寸/测量尺寸（无）_03.png" alt="">
        <p>领围</p>
        <p class="hei">- -</p>
      </li>
       <li>
        <img src="../../../static/images/测量尺寸/测量尺寸（无）_05.png" alt="">
        <p>胸围</p>
       <p class="hei">- -</p>
      </li>
       <li>
        <img src="../../../static/images/测量尺寸/测量尺寸（无）_07.png" alt="">
        <p>腰围</p>
      <p class="hei">- -</p>
      </li>
       <li>
        <img src="../../../static/images/测量尺寸/测量尺寸（无）_12.png" alt="">
        <p>肩宽</p>
        <p class="hei">- -</p>
      </li>
       <li>
        <img src="../../../static/images/测量尺寸/测量尺寸（无）_13.png" alt="">
        <p>袖长</p>
        <p class="hei">- -</p>
      </li>
       <li>
        <img src="../../../static/images/测量尺寸/测量尺寸（无）_18.png" alt="">
        <p>衣长</p>
      <p class="hei">- -</p>
      </li>
       <li>
        <img src="../../../static/images/测量尺寸/测量尺寸（无）_23.png" alt="">
        <p>袖肥</p>
        <p class="hei">- -</p>
      </li>
       <li>
        <img src="../../../static/images/测量尺寸/测量尺寸（无）_25.png" alt="">
        <p>袖口</p>
       <p class="hei">- -</p>
      </li>
    </ul>
    <div class="kuan">
      <p>开始测量</p>
    </div>
</div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    },
  },
}
</script>

<style>
.zhanshi{width: 100%;margin-top: 0.7rem;text-align: center;}
.zhanshi_1 {width: 100%; display: flex;flex-wrap: wrap;margin-bottom: 0.5rem;}
.zhanshi_1 li{width: 33%; height: 3.5rem;}
.zhanshi_1 img{width: 1.19rem;height: 1.14rem;margin-top: 0.9rem;}
.zhanshi_1 p{font-size: 0.24rem; color: #999999FF;}
.hei{color: #333333FF;}
.kuan{width: 80%;border: 2px solid #234497FF; margin: auto;border-radius: 7px;}
.kuan p{font-size: 0.24rem;color: #234497FF;}
</style>