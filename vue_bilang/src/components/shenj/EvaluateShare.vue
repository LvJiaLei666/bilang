<template>
  <div class="evaluates">
    <!-- 头部 -->
    <van-nav-bar title="评价" left-text="返回" left-arrow class='head'>
    <template #right>
    <van-icon name="ellipsis" size="34" color='#fff'/>
    </template>
    </van-nav-bar>
    <!-- 主体一 -->
    <van-card
        num="1"
        price="2000.00"
        desc="春秋商务休闲加肥加大胖子衬衣肥佬宽松中年正装长"
        thumb="../../../static\images\评价&评价点击分享\pic_1.png"
    />
    <!-- 主体二 -->
    <div class="body_02">
        <textarea class='body_02_text' name="" id="" placeholder="请说说您的评价..."></textarea>
        <van-uploader v-model="fileList" multiple preview-size='1.1rem'/>
        <!-- <van-uploader>
            <van-button  icon="plus" type="primary">上传文件</van-button>
        </van-uploader> -->
    </div>
    <!-- 主体三 -->
    <div class="body_03">
        <div class="body_03_txt">给商品评价</div>
        <div class="body_03_txts">
            <span>产品质量</span>
            <van-rate v-model="value" size='0.38rem' gutter='0.67rem' color='#244498'/>
        </div>
        <div class="body_03_txts">
            <span>服务态度</span>
            <van-rate v-model="value1" size='0.38rem' gutter='0.67rem' color='#244498'/>
        </div>
        <div class="body_03_txts">
            <span>尺寸合适</span>
            <van-rate v-model="value2" size='0.38rem' gutter='0.67rem'color='#244498'/>
        </div>
    </div>
    <!-- 底部 -->
    <van-button type="primary" size="large" class='foot_btn'>提交</van-button> 

    <!-- 遮罩 -->
    <van-overlay :show="show" @click="show = false">
        <div class="wrapper" @click.stop>
            <div class="block">
                <img src="../../../static\images\评价&评价点击分享\icon_01.png" class='block_img'>
                <div class='block_top'>
                    <p>
                        <img src="../../../static\images\评价&评价点击分享\icon_02.png" alt="">
                    </p>
                </div>
                <div class="block_bot">感谢您的体验和评价，立即分享至微信朋友圈，即可成为比朗代言人，推荐好友成功消费，可获代言费现金奖励。</div>
            </div>
            <div class="block1">
                <img src="../../../static\images\评价&评价点击分享\icon_03.png" class="blocks_img">
                转发给朋友
            </div>
            <div class="block2">
                <img src="../../../static\images\评价&评价点击分享\icon_04.png" class="blocks_img">
                分享到朋友圈
            </div>
        </div>
    </van-overlay>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 4,
      value1: 0,
      value2: 0,
      fileList: [
        { url: '../../../static/images/全部评价/pic_01.png' },
        { url: '../../../static/images/全部评价/pic_02.png' },
        { url: '../../../static/images/全部评价/pic_03.png',isImage: true},
      ],
      show: true
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.evaluates{
  width:100%;
  height:13.34rem;
  background-color: #E1E1E1;
}
/* 主体 */
.van-image__error, .van-image__img, .van-image__loading{
    width:1.19rem;
    height:1.2rem;
}
.van-card__desc{
    width:4.27rem;
    font-size: 0.28rem;
    color:#666666;
    margin-top: 0.27rem;
}
.van-ellipsis{
    white-space: normal;
    overflow: inherit;
}
.van-card__price{
    font-size: 0.2rem;
    color: #343434;
}
.van-card__num{
    font-size: 0.2rem;
    color:#666666;
    position: absolute;
    top:0.27rem;
    right:0;
}
/* 主体二 */
.body_02{
    width:100%;
    height:4.49rem;
    background-color: #fff;
    margin-top: 0.2rem;
}
.body_02_text{
    resize:none;
    width:100%;
    height:3.03rem;
    color:#BCBCBC;
    font-size:0.24rem;
    padding:0.27rem 0 0 0.3rem;
    box-sizing: border-box;
    /* border: none; */
}
.van-uploader{
margin-left:0.3rem;
}
/* 主体三 */
.body_03{
    width:100%;
    height:3.7rem;
    background-color: #fff;
    margin-top: 0.2rem;
    overflow: hidden;
}
.body_03_txt{
    font-size: 0.3rem;
    color:#343434;
    margin:0.39rem 0 0 0.29rem;
}
.body_03_txts{
    font-size: 0.26rem;
    color:#343434;
    margin-top:0.4rem;
}
.body_03_txts>span{
    margin:0 0.78rem 0 0.28rem;
}
/* 底部 */
.foot_btn{
  width:6.9rem;
  height:1.01rem;
  background-color: #234497;
  margin-left:0.3rem;
}

/* 遮罩 */
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color:#333333;
    font-size: 0.28rem;
    text-align:center;
  }
  .block {
    width: 6.01rem;
    height: 3.54rem;
    background-color:#FFFFFF;
    border-radius: 0.1rem;
    position:relative;
    top:-0.92rem;
  }
.block1{
    width:2.72rem;
    height:1rem;
    background-color:#FFFFFF;
    position:absolute;
    top:8.01rem;
    left:0.74rem;
    line-height: 1rem;

}
.blocks_img{
    width:0.3rem;
    height:0.24rem;
}
.block2{
    width:2.72rem;
    height:1rem;
    background-color:#FFFFFF;
    position:absolute;
    top:8.01rem;
    left:4.03rem;
    line-height: 1rem;

}
    .block_img{
        width:3.45rem;
        height:0.67rem;
        position:absolute;
        top:-0.65rem;
        left:1.625rem;
    }
    .block_top{
        width:100%;
        height:0.6rem;
        background-color: #E6E6E6;
        border-radius: 0.1rem;
    }

    .block_top>p{
        width:0.5rem;
        height:0.5rem;
        border-radius: 50%;
        background-color: #E6E6E6;
        position: absolute;
        top:-0.2rem;
        right:-0.2rem;
    }
    .block_top>p>img{
        width:0.35rem;
        height:0.35rem;
        position: absolute;
        top:0.08rem;
        right:0.07rem;
    }

    .block_bot{
        width:5.31rem;
        height:1.08rem;
        font-size: 0.28rem;
        color:#333333;
        position: absolute;
        top:50%;
        left:50%;
        transform:translate(-2.555rem,-0.54rem);
    }
</style>
