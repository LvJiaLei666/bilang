<template>
  <div class="all">
     <van-nav-bar title="我的收藏" left-text="返回" left-arrow class="head">
      <template #right>
        <van-icon name="ellipsis"  size="34" color="#fff"/>
      </template>
  </van-nav-bar>


    <div class="detailed"  v-for="(item,index) in data" :key='item.id'>
      <img src="../../../static/images/限时特惠/pic_1.png"> 
      <p>春秋商务休闲加肥加大胖子衬衣肥佬宽松中年正装长...</p>
      <span>￥ {{item.price}}</span>
      <img src="../../../static/images/我的收藏/我的收藏_06.png" @click="del(index)"> 
    </div>


  </div>
</template>
<style scoped>
.detailed{
  background: #fff;
  position:relative;
  width:7.5rem;
  height:1.8rem;
  border-bottom:1px solid #e1e1e1;
  box-sizing: border-box;
}
.detailed>span:nth-of-type(1){
  margin:0;
  color:#234497;
  position: absolute;
  font-size:0.24rem;
  bottom:0.35rem;
  left:1.76rem;
  width:1.32rem;
  height:0.23rem;
}
.detailed>p{
  margin:0;
  color:#666;
  position: absolute;
  font-size:0.24rem;
  top:0.26rem;
  left:1.76rem;
  width:4.44rem;
  height:0.52rem;
}
.detailed>img:nth-of-type(1){
  position: absolute;
  top:0.29rem;
  left:0.27rem;
  width:1.19rem;
  height:1.2rem;
}
.detailed>img:nth-of-type(2){
  position: absolute;
  right:0.26rem;
  bottom:0.3rem;
  width:0.26rem;
  height:0.26rem;
}
.all{
  background: #F3F4F6;
  width:100%;
  height:14rem;
}
</style>
<script>
export default {
  data(){
    return{
      data:[{
        id:1,
        price:2000
      },
      {
        id:2,
        price:2000
      }
      ,{
        id:3,
        price:2000
      }]
    }
   
  },
   methods:{
    del(i){
      this.data.splice(i,1),
      console.log(i+1)
    }
    }
}
</script>