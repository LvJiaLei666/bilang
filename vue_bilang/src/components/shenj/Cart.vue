<template>
  <div class="carts">
    <!-- 头部 -->
    <van-nav-bar title="购物车" left-text="返回" left-arrow class='head' @click-left="onClickLeft">
    <template #right>
    <van-icon name="ellipsis" size="34" color='#fff'/>
    </template>
    </van-nav-bar>
    <!-- 主体 -->
    <div class='body'>
        <div class="body_carts">
            <van-checkbox-group v-model="result" >
                    <div class="contens" v-for='(item,index) in cartsList' :key='item.id'>
                        <van-checkbox :name="item.num" label-disabled @click='other' class='checkbox' />
                        <img src="../../../static\images\购物车\h5页面_2_04.png" class='body_imgs'>
                        <div class="body_carts_shop">
                            <p class="body_ps">{{item.title}}</p>
                            <h5 class='body_h5'>¥ <span>{{item.price}}</span></h5>
                            <van-stepper v-model="item.value" input-width="0.6rem" button-size="0.5rem" class='bjq' @change='change' />
                            <img src="../../../static\images\购物车\del.png" class="img_del" @click='del(index)'>
                        </div>
                    </div>
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
    <van-submit-bar  button-text="提交订单" @submit="onSubmit">
    <van-checkbox class='alls' v-model="checked" @click='all'>全选</van-checkbox>
        <p class='prices'><span>合计：</span>￥<span>{{totals}}</span></p>
        <p class='counts'><span>数量：</span>￥<span>{{count}}</span></p>
    </van-submit-bar>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data () {
    return {
      result:[],
      checked:false,
      cartsList:[{
        id:1,
       title:'春秋商务休闲加肥加大胖子衬衣肥佬宽松中年正装长',
       price:2000.00,
       num:1,
       value:1
      },{
       id:2,
       title:'春秋商务休闲加肥加大胖子衬衣肥佬宽松中年正装长',
       price:2000.00,
       num:2,
       value:1
      },{
       id:3,
       title:'春秋商务休闲加肥加大胖子衬衣肥佬宽松中年正装长',
       price:2000.00,
       num:3,
       value:1
      }]
    }
  },
  methods:{
      onSubmit(){
          this.$router.push({
              path:'/Account',
          })
      },
      all(){
        this.cartsList.forEach((item,index) => {
            if(this.checked == true){
                this.result.push(item.id);
            }else{
                this.result = [];
            }
        })
      },
      other(){
        if(this.result.length == this.cartsList.length){
            this.checked = true;
        }else{
        this.checked = false
        }
      },
      del(i){
        this.cartsList.splice(i,1);
        console.log(i);
      },
      change(){
          this.cartsList.forEach(item =>{
              if(item.value <= 0){
                  item.value = 1
              }
          })
      },
      onClickLeft(){
      this.$router.go(-1)
      }
  },
  computed:{
    count(){
        var pieces = 0;
        this.cartsList.forEach((item,index) =>{
            if(this.cartsList[index].checked == true){
                pieces += item.value;
            }
            return pieces;
        })
        return pieces;
    },
    totals(){
        var total = 0;
        total += 2000;
        return total;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.checkbox{
    margin-top:0.78rem;
}
.contens{
    width:7.5rem;
    background-color:#fff;
    float: right;
    overflow: hidden;
}
.van-icon van-icon-success{
    position:absolute;
    top:0.2rem;
}
.alls{
    margin-right: 0.2rem;
}
.prices{
        margin-right:0.05rem;

}
.counts{
    margin-right:0.05rem;
}
.van-checkbox{
    padding-left: 0.3rem;
    background-color: #fff;
    font-size: 0.14rem;
    color:#323233;
    text-align: left;
    float: left;
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
}

.body_imgs{
    width:1.5rem;
    height:1.5rem;
    margin:0.31rem 0.45rem;
}
.body_carts_shop{
    /* width:0.58rem; */
    /* height:1.49rem; */
    float:right;
    margin-top:0.3rem;
    margin-right: 0.2rem;
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
