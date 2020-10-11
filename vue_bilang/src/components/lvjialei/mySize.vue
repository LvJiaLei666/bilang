<template>
  <div class="mySize">
    <!-- nav -->
    <van-nav-bar title="测量尺寸" left-text="返回" left-arrow class="head" @click-left="onClickLeft">
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
      <div class="white_block">
        <div @click="$router.push('/mySizeNone')">
          <img src="../../../static/images/我的尺寸/icon_1.png" />
          <p>重新测量</p>
        </div>
      </div>
    </div>
    <div class="wrap">
      <div class="all_size">
        <div class="size_part">
          <img src="../../../static/images/我的尺寸/pic_5.png" />
          <p>身高</p>
          <span>180cm</span>
        </div>
        <div class="size_part">
          <img src="../../../static/images/我的尺寸/pic_4.png" />
          <p>体重</p>
          <span>176kg</span>
        </div>
        <div class="size_part">
          <img src="../../../static/images/我的尺寸/pic_6.png" />
          <p>肩宽</p>
          <span>91.6cm</span>
        </div>
      </div>
      <div class="all_size">
        <div class="size_part">
          <img src="../../../static/images/我的尺寸/pic_2.png" />
          <p>胸围</p>
          <span>86.5cm</span>
        </div>
        <div class="size_part">
          <img src="../../../static/images/我的尺寸/pic_1.png" />
          <p>腰围</p>
          <span>33.6cm</span>
        </div>
        <div class="size_part">
          <img src="../../../static/images/我的尺寸/pic_3.png" />
          <p>臀围</p>
          <span>91.6cm</span>
        </div>
      </div>
      <div class="analysis">
        <p>体型分析</p>
        <span>健美型身材。肩很宽、很厚、结实、健壮，腰明显较细，大腿部的肌肉很发达。</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mySize',
  data() {
    return {
    };
  },
  computed: {
  },
  watch: {
  },
  methods: {
    onClickLeft(){
      this.$router.go(-1)
    }
  },
};
</script>

<style scoped>
.mySize {
  background: #f9f9f9;
  height: 15rem;
  font-size: 0px;
}
.user {
  height: 2rem;
  background-color: #ccc;
  padding: 0 0.74rem;
  overflow: hidden;
  padding-right: 0;
}
.white_block {
  width: 2rem;
  height: 2rem;
  border-radius: 75% 0 0 75%;
  background-color: #fff;
  float: right;
}
.white_block div {
  width: 1rem;
  height: 1rem;
  margin: 0.59rem 0.46rem 0.58rem 0.78rem;
  text-align: center;
}
.white_block img {
  width: 0.41rem;
  height: 0.41rem;
}
.white_block p {
  color: #244498;
  font-size: 0.22rem;
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
  font-size: 0.31rem;
  color: #999;
  float: left;
  text-align: center;
}
.all_size span {
  color: #234497;
  width: 1rem;
  font-size: 0.31rem;
  display: block;
  text-align: center;
  float: left;
  margin-top: 0.3rem;
}
.size_part {
  width: 1rem;
  height: 2.43rem;
}
.wrap {
  padding: 0 0.74rem;
}
.analysis {
  margin: 1rem 0;
}
.analysis p {
  font-size: .30rem;
  color: #333;
  margin-bottom: .28rem;
}
.analysis span{
  font-size: .26rem;
  color: #999;
}
</style>
