<template>
  <div class="mySizeNone">
    <!-- nav -->
    <van-nav-bar title="测量尺寸" left-text="返回" left-arrow class="head">
      <template #right>
        <van-icon name="ellipsis" size="34" color="#fff" />
      </template>
    </van-nav-bar>
    <div class="user">
      <div class="user_circle">
        <van-icon
          name="https://b.yzcdn.cn/vant/icon-demo-1126.png"
          size="30"
          class="user_head"
        />
      </div>
      <p class="user_name">董大伟</p>
    </div>
    <div class="wrap">
      <div class="all_size">
        <div class="size_part">
          <img src="../../../static/images/我的尺寸/pic_5.png" />
          <p>身高</p>
          <span>-  -</span>
        </div>
        <div class="size_part">
          <img src="../../../static/images/我的尺寸/pic_4.png" />
          <p>体重</p>
          <span>-  -</span>
        </div>
        <div class="size_part">
          <img src="../../../static/images/我的尺寸/pic_6.png" />
          <p>肩宽</p>
          <span>-  -</span>
        </div>
      </div>
      <div class="all_size">
        <div class="size_part">
          <img src="../../../static/images/我的尺寸/pic_2.png" />
          <p>胸围</p>
          <span>-  -</span>
        </div>
        <div class="size_part">
          <img src="../../../static/images/我的尺寸/pic_1.png" />
          <p>腰围</p>
          <span>-  -</span>
        </div>
        <div class="size_part">
          <img src="../../../static/images/我的尺寸/pic_3.png" />
          <p>臀围</p>
          <span>-  -</span>
        </div>
      </div>
      
    </div>
    <div class="start">
      <van-button plain type="info" >开始测量</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mySizeNone',
  data() {
    return {
    };
  },
  computed: {
  },
  watch: {
  },
  methods: {},
};
</script>

<style scoped>
.mySizeNone {
  background: #f9f9f9;
  height: 15rem;
}
.user {
  height: 2rem;
  background-color: #ccc;
  padding: 0 0.74rem;
  overflow: hidden;
}
.user_circle {
  width: 1.11rem;
  height: 1.11rem;
  border-radius: 50%;
  background: #fff;
  position: relative;
  margin: 0.44rem 0;
  float: left;
}
.user_head {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.user_name {
  font-size: 0.3rem;
  font-family: HiraginoSansGB;
  color: #333333;
  line-height: 2rem;
  float: left;
  margin-left: 0.36rem;
}
.all_size {
  margin-top: 0.6rem;
  display: flex;
  justify-content: space-between;
}
.all_size img {
  width: 1rem;
  height: 1.14rem;
  float: left;
}
.all_size p {
  width: 1rem;
  font-size: .31rem;
  color: #999;
  float: left;
  text-align: center;
}
.all_size span{
  width: 1rem;
  font-size: .50rem;
  display: block;
  text-align: center;
  float: left;
}
.size_part{
  width: 1rem;
  height: 2.43rem;
}
.wrap{
  padding: 0 0.74rem;
}
.start{
text-align: center;
margin:2rem 0 ;
}
.start button{
  width: 6.62rem;
height: .9rem;
}
</style>
