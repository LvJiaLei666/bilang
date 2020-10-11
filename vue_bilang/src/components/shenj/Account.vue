<template>
  <div class="accounts">
    <!-- 头部 -->
    <van-nav-bar title="填写订单" left-text="返回" left-arrow class='head' @click-left="onClickLeft">
    <template #right>
    <van-icon name="ellipsis" size="34" color='#fff'/>
    </template>
    </van-nav-bar>
    <!-- 主体一 -->
    <div class='body_01 clearfix'>
        <div class="body_01_l l"></div>
        <van-icon name="location-o" color='#DEDEDE' size='0.39rem' />
        <div class="body_01_r r">
            <p>李先生<span>13423433424</span></p>
            <p>广东省佛山市禅城区印象购物中心5号楼1902室</p>
        </div>
    </div>
    <!-- 主体二 -->
    <van-notice-bar
        left-icon='circle'
        text="您定制的商品预计于2016年04月15日寄出。"
        color='#666666'
        background='#E1E1E1'
    />
    <!-- 主体三 -->
    <div class='body_03'>
        <div class="body_031">
            <img src="../../../static\images\结算\pic_1.png" class='body_031_img'/>
            <img src="../../../static\images\结算\pic_1.png" class='body_031_img' />
            <img src="../../../static\images\结算\pic_1.png" class='body_031_img' />
            <van-icon name="ellipsis" size='0.4rem'/>
            <span>共6件</span>
            <img src="../../../static\images\结算\icon.png" class='body_031_imgs' />
        </div>
        <div class="body_032">
            <span>测量尺寸</span>
            <img src="../../../static\images\结算\icon.png" class='body_031_imgs' />
        </div>
        <div class="body_033 clearfix">
            <p class='l'>支付及配送</p>
            <div class='r'>
                <p>微信支付</p>
                <p>快递</p>
                <p>工作日、双休日与假日均可送货</p>
            </div>
        </div>
        <div class='body_034'>
            <van-cell center title="优惠卷抵扣" size='0.26rem' color='#666666'>
                <template #right-icon>
                    <van-switch v-model="checked" size="0.3rem" />
                </template>
            </van-cell>
        </div>
    </div>
    <!-- 主体四 -->
    <input class="body_04" type="text" placeholder="备注留言">
    <!-- 主体五 -->
    <div class="body_05">
            <span class="body_051">商品金额</span>
            <span class="body_052 r">￥ 6000.00</span><br/>
            <span class="body_051">商品金额</span>
            <span class="body_052 r">￥ 6000.00</span>
    </div>
    <!-- 主体六 -->
    <!-- <div class='body_06'>
        <span class="body_061">商品金额</span>
        <span class="body_061 ">￥ 6000.00</span>
        <div class='foot_r' @click="$router.push('/MyOrder')">
            <img src="../../../static\images\购物车\icon.png"><br/>去结算
        </div>
    </div> -->

    <van-submit-bar :price="6000.00" button-text="提交订单" label='实付款:' @submit="onSubmit">
    </van-submit-bar>
  </div>
</template>

<script>
export default {
  name: 'Account',
  data () {
    return {
     checked:false
  }
},
methods:{
    onSubmit(){
          this.$router.push({
              path:'/MyOrder',
          })
    },
    onClickLeft(){
      this.$router.go(-1)
    }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.van-submit-bar__text{
text-align: left;
}
.accounts{
  width:100%;
  height:13.77rem;
  background-color: #E1E1E1;
}
.van-icon van-icon-circle van-notice-bar__left-icon{
    width:0.1rem;
    height:0.1rem;
    background-color: #FF4242;
    border-radius: 50%;
}
/* 主体一 */
.body_01{
    width:100%;
    height:1.71rem;
    background-color: #fff;
}
.body_01_l{
    width:0.07rem;
    height:100%;
    background-color: #244498;
    margin-right:0.17rem;
}
.body_01_r{
    width:5.23rem;
    height:100%;
    line-height: 1.17rem;
    margin-right:1.47rem;
    font-size: 0.3rem;
}
.body_01_r>p:first-child{
    height:0.3rem;
    color: #c09c9c;
    margin-bottom: 0.07rem;
}
.body_01_r>p:last-child{
    height:0.24rem;
    font-size: 0.24rem;
    color: #666666;
}
/* 主体三 */
.body_03{
    width:100%;
    height:6rem;
    background-color: #fff;
}
.body_031{
    height:1.78rem;
    border-bottom: 2px solid #EEEEEE;
}
.body_031_img:first-child{
    margin-left: 0.25rem;
}
.body_031_img{
    width:1.2rem;
    vertical-align: middle;
    margin-top:0.28rem;
}
.body_031>span{
    color: #343434;
    font-size: 0.24rem;
    margin-left: 0.8rem;
}
.body_031_imgs{
    width:0.28rem;
}
.body_032{
    height:1.29rem;
    border-bottom: 2px solid #EEEEEE;
}
.body_032>span{
    color: #343434;
    font-size: 0.24rem;
    margin-left:0.15rem;
}
.body_032>.body_031_imgs{
    float:right;
    margin:0.53rem 0.23rem 0 0;
}
.body_033{
    height:1.75rem;
    border-bottom: 2px solid #EEEEEE;
}
.body_033>p{
    font-size: 0.26rem;
    color: #666666;
    line-height: 1.75rem;
    margin-left: 0.25rem;
}
.body_033>div>p:first-child{
    margin-top: 0.35rem;
}
.body_033>div>p{
    font-size:0.24rem;
    color: #343434;
    text-align: right;
    line-height: 0.4rem;
}
.body_033>div>p:last-child{
    color: #9A9A9A;
}
.body_034{
    height:1.03rem;
}
/* 主体四 */
.body_04{
    width:100%;
    height:1rem;
    background-color: #fff;
    margin-top:0.2rem;
    outline: none;
    border:none;
    font-size: 0.26rem;
    color:#BCBCBC;
    padding-left: 0.24rem;
    box-sizing: border-box;
}
/* 主体五 */
.body_05{
    width:100%;
    height:1.26rem;
    line-height: 0.63rem;
    background-color: #fff;
    margin-top:0.2rem;
    font-size: 0.26rem;
    padding:0 0.22rem;
    box-sizing: border-box;
}
.body_051{
    color:#666666;
}
.body_052{
    color:#244598;
}
/* 主体六 */
.body_06{
    width:100%;
    height:1.2rem;
    margin:0;
    margin-top:0.35rem;
    color: #244598;
    font-size: 0.29rem;
}
.body_061{
    line-height:1.2rem;
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
    margin-top:0.2rem;
}
</style>
