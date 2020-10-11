<template>
  <div class="hip">
    <!-- nav -->
    <van-nav-bar title="开始测量" left-text="返回" left-arrow class="head" @click-left="onClickLeft">
      <template #right>
        <van-icon name="ellipsis" size="34" color="#fff" />
      </template>
    </van-nav-bar>
    <div class="content">
      <img src="../../../static/images/我的尺寸/pic_3.png" />
      <div class="content_text">
        <p>测量方法</p>
        <span
          >将卷尺放在髋骨上部和胸腔下部中间的地方，贴紧皮肤但不要勒紧。在呼气状态下读取测量值，精确到0.1cm</span
        >
      </div>
    </div>
    <footer>
      <img src="" alt="" />
      <p class="footer_title">添加臀围</p>
        <div class="footer_size clearfix">
          <p>
            <span class="footer_num">0.0</span>
          <span class="footer_cm">cm</span>
          </p>
          <div class="next">
            <span>下一步</span>
            <img src="../../../static/images/我的尺寸/icon.png" />
          </div>
        </div>
        <div class="ruler">
            <img src="../../../static/images/我的尺寸/ft_pic_2.png">
            <img src="../../../static/images/我的尺寸/ft_pic.png" class="pointer">
          </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Hip',
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
@import "../../../static/reset.css";
.hip {
  background: #f9f9f9;
  font-size: 0px;
}
.content {
  text-align: center;
  padding: 0 0.39rem;
}
.content img {
  width: 2.83rem;
  height: 2.72rem;
  margin-top: 1.66rem;
}
.content_text p,
.content_text span {
  font-size: 0.3rem;
  color: #999;
}
.content_text p {
  margin: 1rem 0 0.25rem;
}
.content_text span {
  text-align: left;
  font-size: 0.27rem;
}
footer {
  margin-top: 1.1rem;
  height: 4.5rem;
  background: url(../../../static/images/我的尺寸/footer.png) no-repeat;
  background-size: contain;
}
.footer_size {
  margin-top: 0.5rem;
  text-align: center;
  position: relative;
}
.footer_size p{
  float: left;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.footer_title {
  margin-top: 0.3rem;
  text-align: center;
  font-size: 0.3rem;
}
.footer_num {
  color: #343434;
  font-size: 0.6rem;
  font-weight: bold;
  text-align: center;
}
.footer_cm {
  color: #343434;
  font-size: 0.3rem;
  font-weight: bold;
}
.next {
  float: right;
  margin-right: .73rem;
}
.next span{
  font-size: .24rem;
  color: #234497;
  vertical-align: middle;
}
.next img {
  width: 0.27rem;
  height: 0.27rem;
  margin-left: 0.09rem;
}
.ruler{
  margin-top: .6rem;
  position: relative;
}
.ruler img:first-of-type{
  width:100%;
}
.pointer{
  width: .32rem;
  position: absolute;
  bottom: -.2rem;
  left: 50%;
  transform: translate(-50%,0);
}
</style>
