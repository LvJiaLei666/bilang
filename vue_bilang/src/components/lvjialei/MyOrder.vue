<template>
  <div class="myorder">
    <!-- nav -->
    <van-nav-bar title="我的订单" left-text="返回" left-arrow class="head">
      <template #right>
        <van-icon name="ellipsis" size="34" color="#fff" />
      </template>
    </van-nav-bar>
    <van-tabs v-model="active">
      <van-tab title="全部"> </van-tab>
      <van-tab title="待付款">
        <van-cell-group>
          <van-cell center class="order_top">
            <template #title>
              <span class="order_num">订单号：1000800245123569</span>
              <span class="order_state">待付款</span>
            </template>
          </van-cell>
          <van-cell>
            <template #title>
              <div>
                <img
                  @click="$router.push('/OrderDetails')"
                  src="../../../static/images/我的订单/pic_1.png"
                  class="order_img"
                />
              </div>
              <div class="order_name">
                <span>春秋商务休闲加肥加大胖子衬衣肥佬宽松中年正装长</span>
                <p>¥2000.00</p>
              </div>
              <p class="order_count">x1</p>
            </template>
          </van-cell>
        </van-cell-group>
        <van-cell-group>
          <div class="order_last">
            <div class="order_cancel">
              <span>取消订单</span>
            </div>
            <div class="order_pay">
              <span>去支付</span>
              <img src="../../../static/images/我的订单/icon.png" class="order_pay_next">
            </div>
          </div>
        </van-cell-group>
      </van-tab>
      <van-tab title="待收货">
        <van-cell-group>
          <van-cell center class="order_top">
            <template #title>
              <span class="order_num">订单号：1000800245123569</span>
              <span class="order_state">待付款</span>
            </template>
          </van-cell>
          <van-cell>
            <template #title>
              <div>
                <img
                  src="../../../static/images/我的订单/pic_1.png"
                  class="order_img"
                />
              </div>
              <div class="order_name">
                <span>春秋商务休闲加肥加大胖子衬衣肥佬宽松中年正装长</span>
                <p>¥2000.00</p>
              </div>
              <p class="order_count">x1</p>
            </template>
          </van-cell>
        </van-cell-group>
        <van-cell-group>
          <div class="order_last">
            <div class="order_confirm">
              确认收货
              <img src="../../../static/images/我的订单/icon.png" class="order_pay_next">
            </div>
          </div>
        </van-cell-group>
        <van-cell-group>
          <van-cell center class="order_top">
            <template #title>
              <span class="order_num">订单号：1000800245123569</span>
              <span class="order_state">待付款</span>
            </template>
          </van-cell>
          <van-cell>
            <template #title>
              <div>
                <img
                  src="../../../static/images/我的订单/pic_1.png"
                  class="order_img"
                />
              </div>
              <div class="order_name">
                <span>春秋商务休闲加肥加大胖子衬衣肥佬宽松中年正装长</span>
                <p>¥2000.00</p>
              </div>
              <p class="order_count">x1</p>
            </template>
          </van-cell>
        </van-cell-group>
        <van-cell-group>
          <div class="order_last">
            <div class="order_confirm">
              确认收货
              <img src="../../../static/images/我的订单/icon.png" class="order_pay_next">
            </div>
          </div>
        </van-cell-group>
      </van-tab>
      <van-tab title="待评价">
        <van-cell-group>
          <van-cell center class="order_top">
            <template #title>
              <span class="order_num">订单号：1000800245123569</span>
              <span class="order_state">待付款</span>
            </template>
          </van-cell>
          <van-cell>
            <template #title>
              <div>
                <img
                  src="../../../static/images/我的订单/pic_1.png"
                  class="order_img"
                />
              </div>
              <div class="order_name">
                <span>春秋商务休闲加肥加大胖子衬衣肥佬宽松中年正装长</span>
                <p>¥2000.00</p>
              </div>
              <p class="order_count">x1</p>
            </template>
          </van-cell>
        </van-cell-group>
        <van-cell-group>
          <div class="order_last">
            <div class="order_confirm">
              评价&晒单
              <img src="../../../static/images/我的订单/icon.png" class="order_pay_next">
            </div>
          </div>
        </van-cell-group>
        <van-cell-group>
          <van-cell center class="order_top">
            <template #title>
              <span class="order_num">订单号：1000800245123569</span>
              <span class="order_state">待付款</span>
            </template>
          </van-cell>
          <van-cell>
            <template #title>
              <div>
                <img
                  src="../../../static/images/我的订单/pic_1.png"
                  class="order_img"
                />
              </div>
              <div class="order_name">
                <span>春秋商务休闲加肥加大胖子衬衣肥佬宽松中年正装长</span>
                <p>¥2000.00</p>
              </div>
              <p class="order_count">x1</p>
            </template>
          </van-cell>
        </van-cell-group>
        <van-cell-group>
          <div class="order_last">
            <div class="order_confirm">
              评价&晒单
              <img src="../../../static/images/我的订单/icon.png" class="order_pay_next">
            </div>
          </div>
        </van-cell-group>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: 'MyOrder',
  data() {
    return {
      active: 1,
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
.order_num {
  color: #666;
  font-size: 0.24rem;
}
.order_state {
  color: #ff4242;
  font-size: 0.24rem;
  display: block;
  float: right;
}
.order_top {
  margin-top: 0.2rem;
}
.order_img {
  width: 1.2rem;
  height: 1.2rem;
}
.order_name {
  width: 4.27rem;
  margin-left: 0.3rem;
}
.order_name span,
.order_count {
  font-size: 0.28rem;
  color: #666;
}
.van-cell__title div {
  float: left;
}
.order_count {
  float: right;
}
.order_cancel span {
  color: #999;
  font-size: 0.28rem;
  line-height: 1rem;
}
.order_cancel {
  float: left;
  width: 50%;
  text-align: center;
}
.order_pay {
  width: 50%;
  background: #e1e1e1;
  float: left;
  text-align: center;
  position: relative;
}
.order_pay span,.order_confirm{
  color: #234497;
  font-size: 0.28rem;
  line-height: 1rem;
}
.order_pay_next{
  width: 28px;
  height: 25px;
  position: absolute;
  top: 50%;
  right: .33rem;
  transform: translate(0,-50%);
}
.order_last {
  width: 100%;
  height: 1rem;
}
.order_confirm{
  text-align: center;
  background: #e1e1e1;
  position: relative;
}
.van-tabs__line{
  background-color:#234497!important;
}
</style>
