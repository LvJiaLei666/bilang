<template>
  <div class="hello">
    <van-nav-bar title="测量尺寸" left-text="返回" left-arrow class="head" @click-left="onClickLeft">
      <template #right>
        <van-icon name="ellipsis"  size="34" color="#fff"/>
      </template>
    </van-nav-bar>
     <div class="msno_nr">
       <div @click="$router.push({path:'/msneck'})">
    <img src="..\..\..\static\images\测量尺寸\测量尺寸（无）_03.png" />
    <p class="msno_wz">领围</p>
     <p class="msno_wz_foot"><span class="msno_wz_foot_a">180</span><span class="msno_wz_foot_b">cm</span></p>
      </div>
           <div @click="$router.push({path:'/msbust'})">
    <img src="..\..\..\static\images\测量尺寸\测量尺寸（无）_05.png" />
    <p class="msno_wz">胸围</p>
     <p class="msno_wz_foot"><span class="msno_wz_foot_a">180</span><span class="msno_wz_foot_b">cm</span></p>
      </div>
           <div @click="$router.push({path:'/msw'})">
    <img src="..\..\..\static\images\测量尺寸\测量尺寸（无）_07.png" />
    <p class="msno_wz">腰围</p>
     <p class="msno_wz_foot"><span class="msno_wz_foot_a">180</span><span class="msno_wz_foot_b">cm</span></p>
      </div>
           <div @click="$router.push({path:'/msshlr'})">
    <img src="..\..\..\static\images\测量尺寸\测量尺寸（无）_12.png" />
    <p class="msno_wz">肩宽</p>
     <p class="msno_wz_foot"><span class="msno_wz_foot_a">180</span><span class="msno_wz_foot_b">cm</span></p>
      </div>
           <div @click="$router.push({path:'/msl'})">
    <img src="..\..\..\static\images\测量尺寸\测量尺寸（无）_13.png" />
    <p class="msno_wz">袖长</p>
     <p class="msno_wz_foot"><span class="msno_wz_foot_a">180</span><span class="msno_wz_foot_b">cm</span></p>
      </div>
           <div @click="$router.push({path:'/msc'})">
    <img src="..\..\..\static\images\测量尺寸\测量尺寸（无）_18.png" />
    <p class="msno_wz">衣长</p>
     <p class="msno_wz_foot"><span class="msno_wz_foot_a">180</span><span class="msno_wz_foot_b">cm</span></p>
      </div>
           <div @click="$router.push({path:'/mssw'})">
    <img src="..\..\..\static\images\测量尺寸\测量尺寸（无）_23.png" />
    <p class="msno_wz">袖肥</p>
     <p class="msno_wz_foot"><span class="msno_wz_foot_a">180</span><span class="msno_wz_foot_b">cm</span></p>
      </div>
           <div @click="$router.push({path:'/mscf'})">
    <img src="..\..\..\static\images\测量尺寸\测量尺寸（无）_25.png" />
    <p class="msno_wz">袖口</p>
     <p class="msno_wz_foot"><span class="msno_wz_foot_a">180</span><span class="msno_wz_foot_b">cm</span></p>
      </div>
      <div></div>
    </div>
    <div class="btn">
       <van-button color="#bbbbbb" plain  @click="$router.push({path:'/msn'})">重新测量</van-button>
    <van-button color="#7232dd" @click="$router.push('/mySize')">确定尺寸</van-button>
   
    </div>
  </div>
</template>

<script>
export default {
  name: 'Measurementsnone',
  data () {
    return {
    }
    },
      methods: {
    onClickLeft() {
     this.$router.go(-1)
    },
    onClickRight() {
      Toast('按钮');
    }
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.msno_nr{
  width: 7.5rem;
  margin-top:0.5rem;
  display: flex;
  flex-flow:row wrap;
  justify-content:space-around;
}
.msno_nr div{
  width: 2.4rem;
  text-align: center;
}
.msno_nr img{
  width: 1.2rem;
  height: 1.2rem;
}
.msno_wz{

font-size: 0.32rem;
font-family: STXihei;
font-weight: 400;
color: #999999;
}
.msno_wz_foot_a{
  
font-size: 0.45rem;
font-family: STHeitiSC;
font-weight: 500;
color: #234497;
}
.msno_wz_foot_b{
  
font-size: 0.3rem;
font-family: STHeitiSC;
font-weight: 500;
color: #234497;
}
.van-button{
  width: 3rem;
  height: 0.9rem;
}
.btn{
  width: 6.5rem;
  margin: 2rem auto;
}
</style>