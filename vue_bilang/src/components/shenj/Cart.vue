<template>
  <div class="carts">
    <!-- 头部 -->
    <van-nav-bar title="购物车" left-text="返回" left-arrow class='head'>
    <template #right>
    <van-icon name="ellipsis" size="34" color='#fff'/>
    </template>
    </van-nav-bar>
    <!-- 主体 -->
    <div class='body'>
        <div class="body_carts">
            <van-checkbox-group v-model="result">
                <van-checkbox name="1" label-disabled>
                    <img src="../../../static\images\购物车\h5页面_2_04.png" class='body_imgs'>
                    <div class="body_carts_shop">
                        <p class="body_ps">春秋商务休闲加肥加大胖子衬衣肥佬宽松中年正装长</p>
                        <h5 class='body_h5'>¥ 2000.00</h5>
                        <van-stepper v-model="value" input-width="0.6rem" button-size="0.5rem" class='bjq' />
                        <img src="../../../static\images\购物车\del.png" class="img_del">
                    </div>
                </van-checkbox>
                <van-checkbox name="2" label-disabled>
                    <img src="../../../static\images\购物车\h5页面_2_04.png" class='body_imgs'>
                    <div class="body_carts_shop">
                        <p class="body_ps">春秋商务休闲加肥加大胖子衬衣肥佬宽松中年正装长</p>
                        <h5 class='body_h5'>¥ 2000.00</h5>
                        <van-stepper v-model="value1" input-width="0.6rem" button-size="0.5rem" class='bjq' />
                        <img src="../../../static\images\购物车\del.png" class="img_del">
                    </div>
                </van-checkbox>
                <van-checkbox name="3" label-disabled>
                    <img src="../../../static\images\购物车\h5页面_2_04.png" class='body_imgs'>
                    <div class="body_carts_shop">
                        <p class="body_ps">春秋商务休闲加肥加大胖子衬衣肥佬宽松中年正装长</p>
                        <h5 class='body_h5'>¥ 2000.00</h5>
                        <van-stepper v-model="value2" input-width="0.6rem" button-size="0.5rem" class='bjq' />
                        <img src="../../../static\images\购物车\del.png" class="img_del">
                    </div>
                </van-checkbox>
            </van-checkbox-group>
        </div>
        
    </div>
    <!-- 底部 -->
    <!-- <div class='foot'>
        <van-radio-group v-model="radio">
            <van-radio name='2' icon-size="0.3" class='foot_l' label-disabled >
                <p class='foot_span'>全选</p>
                <div class="foot_c">
                    <p>合计：¥ 2000.00</p>
                    <p>数量：1</p>
                </div>
                <div class='foot_r' @click="$router.push('/Account')">
                    <img src="../../../static\images\购物车\icon.png">
                    <p>去结算</p>
                </div>
            </van-radio>
        </van-radio-group>
    </div> -->
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
    <van-checkbox v-model="checked">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data () {
    return {
      result:[],
      value:1,
      value1:1,
      value2:1,
      checked:false
    }
  },
  methods:{
      onSubmit(){

      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.van-checkbox{
    padding-left: 0.3rem;
    background-color: #fff;
    margin-top:0.18rem;
}
.carts{
    width:7.5rem;
    height:13.14rem;
    background-color: #E1E1E1;
}
.body_carts{
    width:100%;
    height:2.1rem;
    margin:0.3rem auto;
    background-color: #fff;
}
.van-radio{
    margin-left:0.25rem;
}
.body_imgs{
    width:1.5rem;
    height:1.5rem;
    margin:0.31rem 0.25rem;
}
.body_carts_shop{
    /* width:0.58rem; */
    /* height:1.49rem; */
    float:right;
    margin-top:0.2rem;
}
.body_ps{
    width: 4rem;
    /* height: 0.48rem; */
    font-size: 0.2rem;
    font-family: HiraginoSansGB;
    font-weight: normal;
    color: #666666;
}
.body_h5{
    height:0.3rem;
    font-size: 0.24rem;
    color: #234497;
    margin-bottom:0.1rem;
}
.bjq{
    float: left;
}
.img_del{
    float:right;
    width:0.26rem;
    height:0.27rem;
}
/* 底部 */
.foot{
    width:7.5rem;
    height:1.2rem;
    background-color: #fff;
    position:absolute;
    bottom:0;
}
.foot_l{
    height:1.2rem;
    margin:0;
    padding-left:0.24rem;
    box-sizing:border-box;
}
.foot_span{
    font-size: 0.3rem;
    margin-right:0.29rem;
    color: #666666;
    float: left;
    padding-top: 0.4rem;
}
.foot_c{
    width:1.98rem;
    font-size:0.24rem;
    color: #333333;
    float: left;
    margin-top:0.2rem;
}
.foot_r{
    width:1.72rem;
    height:1.2rem;
    background-color:#999999;
    float: right;
    margin-left: 2.27rem;
    text-align:center;
    font-size: 0.22rem;
    color:#234497;
}
.foot_r>img{
    width:0.37rem;
    height:0.47rem;
    margin-top:0.15rem;
}

</style>
