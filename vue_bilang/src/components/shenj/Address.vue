<template>
  <div class="address">
    <!-- 头部 -->
    <van-nav-bar title="选择收货地址" left-text="返回" left-arrow class='head'>
    <template #right>
    <van-icon name="ellipsis" size="34" color='#fff'/>
    </template>
    </van-nav-bar>
    <!-- 主体 -->
    <van-address-list
  v-model="chosenAddressId"
  :list="list"
  default-tag-text="默认"
  @add="onAdd"
  @edit="onEdit"
  add-button-text='添加新地址'
/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '李先生',
          tel: '13423433424',
          address: '广东省佛山市禅城区印象购物中心5号楼b-1011221902室',
          isDefault: true,
        },
        {
          id: '2',
          name: '李先生',
          tel: '13423433424',
          address: '广东省佛山市禅城区印象购物中心5号楼b-1011221902室',
          // isDefault: false,
        },
      ]
    }
  },
  methods: {
    onAdd() {
      this.$toast('添加新地址');
    },
    onEdit(item, index) {
      this.$toast('编辑地址:' + index);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.address{
  width:100%;
  height:13.34rem;
  background-color: #E1E1E1;
}
.van-icon-edit::before{
    content: '';
}
.van-radio__icon .van-icon{
    display: none;
}
.van-address-item__tag{
    width:0.61rem;
    height:0.61rem;
    border-radius: 50%;
    font-size:0.2rem;
    color: #FFFFFF;
    text-align:center;
    position:absolute;
    top:0.4rem;
    right:0;
    padding-left:0.08rem;
    box-sizing: border-box;
}
</style>
