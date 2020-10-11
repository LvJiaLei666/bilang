<template>
  <div>
    <!-- nav -->
    <van-nav-bar title="添加收货地址" left-text="返回" left-arrow class="head" @click-left="onClickLeft">
      <template #right>
        <van-icon name="ellipsis" size="34" color="#fff" />
      </template>
    </van-nav-bar>
    <div class="wrap">
      <!-- 列表 -->
      <van-cell-group class="person_msg">
        <van-cell title="收货人姓名" value="张小明" />
        <van-cell title="手机号码：" value="16987542586" />
      </van-cell-group>

      <!-- hr -->
      <van-divider dashed :style="{ borderColor: '#999', padding: '0 16px' }">
      </van-divider>
      <!-- 列表 -->
      <van-cell-group class="person_msg">
        <van-cell title="邮政编码：" value="528031" center />
        <van-cell title="省份" center>
          <!-- 使用 right-icon 插槽来自定义右侧图标 -->
          <template #right-icon>
            <van-icon name="arrow" class="arrow-icon" />
          </template>
        </van-cell>
        <van-cell title="城市" center>
          <!-- 使用 right-icon 插槽来自定义右侧图标 -->
          <template #right-icon>
            <van-icon name="arrow" class="arrow-icon" />
          </template>
        </van-cell>
        <van-cell title="区县" center>
          <!-- 使用 right-icon 插槽来自定义右侧图标 -->
          <template #right-icon>
            <van-icon name="arrow" class="arrow-icon" />
          </template>
        </van-cell>
        <van-cell-group>
          <van-field placeholder="详细地址" center />
        </van-cell-group>
        <van-cell title="设置默认收货地址" center color="#ccc">
          <!-- 使用 right-icon 插槽来自定义右侧图标 -->
          <template #right-icon>
            <van-switch v-model="switchChecked" size="20" />
          </template>
        </van-cell>
        <van-form>
          <div class="save">
            <van-button round block type="info" native-type="submit" @click="$router.push('/MyAddress')">
              保存
            </van-button>
          </div>
        </van-form>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddShippingAddress',
  data() {
    return {
      switchChecked: false,
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
.wrap {
  background: #eeeeee;
}
.person_msg {
  margin-top: 0.21rem;
}
.van-cell {
  height: 1rem;
}
.van-cell:last-of-type {
  color: #666666;
}
.van-cell__value {
  font-size: 0.26rem;
  color: #333333;
}
.save {
  margin: 0.3rem;
  margin-top: 1.63rem;
}
.van-button--info {
  width: 6.9rem;
  height: 1.01rem;
  background: #234497;
  border-radius: 4px;
}
</style>
