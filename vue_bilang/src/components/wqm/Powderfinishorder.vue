<template>
  <div class="hello">
    
  <van-nav-bar title="粉比订单" left-text="返回" left-arrow class="head" @click-left="onClickLeft">
      <template #right>
        <van-icon name="ellipsis"  size="34" color="#fff"/>
      </template>
    </van-nav-bar>
<van-tabs @click="onClick">
  <van-tab title="一级粉比">
    <table class="table_tr">
      <tr>
        <td class="tab_num">1</td>
        <td class="tab_pic"><img src="..\..\..\static\images\我的粉丝&我的代言费\fans.png"></td>
        <td><p class="tab_name">昵称</p><p class="tab_money">消费金额</p></td>
        <td class="tab_right"><p class="tab_name_a">董大伟</p><p class="tab_money_a">99999</p></td>
      </tr>
       <tr>
        <td class="tab_num">1</td>
        <td class="tab_pic"><img src="..\..\..\static\images\我的粉丝&我的代言费\fans.png"></td>
        <td><p class="tab_name">昵称</p><p class="tab_money">消费金额</p></td>
        <td class="tab_right"><p class="tab_name_a">董大伟</p><p class="tab_money_a">99999</p></td>
      </tr>
       <tr>
        <td class="tab_num">1</td>
        <td class="tab_pic"><img src="..\..\..\static\images\我的粉丝&我的代言费\fans.png"></td>
        <td><p class="tab_name">昵称</p><p class="tab_money">消费金额</p></td>
        <td class="tab_right"><p class="tab_name_a">董大伟</p><p class="tab_money_a">99999</p></td>
      </tr>
    </table>
  </van-tab>
  <van-tab title="二级粉比">
    <table>
       <tr>
        <td class="tab_num">1</td>
        <td class="tab_pic"><img src="..\..\..\static\images\我的粉丝&我的代言费\fans.png"></td>
        <td><p class="tab_name">昵称</p><p class="tab_money">消费金额</p></td>
        <td class="tab_right"><p class="tab_name_a">董大伟</p><p class="tab_money_a">99999</p></td>
      </tr>
    </table>
    
      
  </van-tab>
</van-tabs>
 
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  name: 'Powderfinishorder',
  data () {
    return {
     username: '',
      password: '',
    }
  },  methods: {
    onClickLeft() {
     this.$router.go(-1)
    },
    onClickRight() {
      Toast('按钮');
    },
      onSubmit(values) {
      console.log('submit', values);
    },
      onClick(name, title) {
      Toast(title);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .my-swipe .van-swipe-item {
   width: 100%;
   height: 10rem;
  }
   .my-swipe img{
     width:100%;
     height: 100%;
   }
.img_btn1{
  display: inline-block;
  width: 0.36rem;
  height: 0.36rem;
  position: fixed;
  top:1.5rem;
  right: 0.5rem;
}
.img_btn2{
  display: inline-block;
  width: 1.3rem;
  height: 1.3rem;
  position: fixed;
  top:1.2rem;
  left: 0.5rem;
}
.sku_foot{
  width:100%;
  position: relative;
  text-align: center;
}
.img_btn3{
  display: inline-block;
  width: 1.2rem;
  height: 1.2rem;
  position: absolute;
  right: 0.5rem;
  top: -1.5rem;
}
.sku_foot_wz_top{
font-size: 0.3rem;
font-family: HiraginoSansGB;
font-weight: normal;
color: #333333;
}
.sku_foot_wz_mid{

font-size: 0.24rem;
font-family: HiraginoSansGB;
font-weight: normal;
color: #333333;
}
.sku_foot_wz_foot{
font-size: 0.34rem;
font-family: HiraginoSansGB;
font-weight: bold;
color: #FF4242;
}

.tab_num{
width: 0.8rem;
font-size: 0.3rem;
font-family: HiraginoSansGB;
font-weight: normal;
color: #999999;
text-align: center;
}
.tab_pic{
  width: 1.3rem;
}
.tab_pic img{
 width: 1.06rem;height: 1.06rem;
}
.tab_name{
font-size: 0.24rem;
font-family: HiraginoSansGB;
font-weight: normal;
color: #999999;
}
.tab_money{
  font-size: 0.24rem;
font-family: HiraginoSansGB;
font-weight: normal;
color: #999999;
}
.tab_right{
  width: 4rem;
  text-align: right;
}
.tab_name_a{

font-size: 0.24rem;
font-family: HiraginoSansGB;
font-weight: normal;
color: #333333;
}
.tab_money_a{

font-size: 0.24rem;
font-family: HiraginoSansGB;
font-weight: normal;
color: #333333;
}
</style>