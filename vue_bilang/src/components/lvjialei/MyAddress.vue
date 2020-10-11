<template>
  <div class="myaddress">
    <!-- nav -->
    <van-nav-bar title="我的地址" left-text="返回" left-arrow class="head">
      <template #right>
        <van-icon name="ellipsis" size="34" color="#fff" />
      </template>
    </van-nav-bar>
    <van-cell-group @click="$router.push('/AddShippingAddress')">
      <van-cell>
        <template #title>
        <span class="address_name">李先生   13423433424</span>
        </br>
        <span class="address_detail">广东省佛山市禅城区印象购物中心5号楼b-1011221902室</span>
        <van-tag plain type="primary">默认</van-tag>
      </template>
      </van-cell>
    </van-cell-group>
    <van-cell-group @click="$router.push('/AddShippingAddress')">
      <van-cell>
        <template #title>
        <span class="address_name">李先生   13423433424</span>
        </br>
        <span class="address_detail">广东省佛山市禅城区印象购物中心5号楼b-1011221902室</span>
      </template>
      </van-cell>
    </van-cell-group>
    <div class="addnew">
      <van-button type="primary" size="large" color="#234497" @click="$router.push('/AddShippingAddress')">添加新地址</van-button>

    </div>
  </div>
</template>

<script>
export default {
  name: 'MyAddress',
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
.van-cell-group {
  margin-top: 0.27rem;
}
.van-cell--large {
  padding-right: 1.47rem;
  padding-left: 0.45rem;
}
.address_name {
  font-size: 0.3rem;
  color: #333;
}
.address_detail {
  font-size: 0.24rem;
}
.van-tag--plain {
  float: right;
}
/* 按钮 */
.addnew{
  text-align: center;
}
.van-button--large {
  margin-top: 0.2rem;
  width: 6.9rem;
  height: 1.01rem;
}
</style>
