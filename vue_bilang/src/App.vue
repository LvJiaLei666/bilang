<template>
  <div id="app" ref="homePage">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      clientHeight: '',
    }
  },
  mounted() {
    // 获取浏览器可视区域高度
    this.clientHeight = `${document.documentElement.clientHeight}`          //document.body.clientWidth;
    //console.log(self.clientHeight);
    window.onresize = function temp() {
      this.clientHeight = `${document.documentElement.clientHeight}`;
    };
  },
  watch: {
    // 如果 `clientHeight` 发生改变，这个函数就会运行
    clientHeight: function () {
      this.changeFixed(this.clientHeight)
    }
  },
  methods: {
    changeFixed(clientHeight) {                        //动态修改样式
      console.log(clientHeight);
      this.$refs.homePage.style.height = clientHeight + 'px';

    },
  }
}
</script>

<style>
#app {
  font-size: 0px;
  background: #f3f3f3;
  overflow: scroll;
}
* {
  margin: 0;
  padding: 0;
}
.head {
  background: #000;
  background-image: linear-gradient(#1a191f, #363638);
}
.van-nav-bar__title,
.van-nav-bar__text {
  color: #fff;
  font-size: 0.34rem;
  font-family: HiraginoSansGB;
}
.van-icon-arrow-left::before {
  color: #fff;
}
.van-tabs__line {
  background-color: #234497;
}

/* 默认样式 */
  .l{
	float:left;
}
.r{
	float:right;
}
.cl:after,.clearfix:after{content:".";display:block;height:0;clear:both;visibility:hidden}.cl,.clearfix{zoom:1}

</style>
font-size: 0.24rem;
font-family: Arial;
font-weight: 900;
color: #333333;
}
</style>
