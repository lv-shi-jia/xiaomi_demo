<template>
  <div class="mine">
    <div class="header">
      <div class="roundness"></div>
      <p>154548787</p>
    </div>
    <van-cell-group>
      <van-cell title="我的订单" value="全部订单" is-link />
    </van-cell-group>
    <van-grid :column-num="3">
      <van-grid-item icon="shopping-cart-o" text="代付款" />
      <van-grid-item icon="gold-coin-o" text="优惠券" />
      <van-grid-item icon="star" text="收藏" />
    </van-grid>
    <div class="center">
      <div class="top">
        <van-cell title="会员中心" icon="like-o" is-link />
        <van-cell title="收货地址" icon="location-o" is-link @click="receive" />
      </div>
      <div class="top1">
        <van-cell title="我的优惠" icon="gold-coin-o" is-link />
        <van-cell title="我的意见" icon="comment-o" is-link />
      </div>
      <div class="top2">
        <van-cell title="浏览记录" icon="underway-o" is-link />
      </div>
      <div class="top3">
        <van-cell title="我的名片" icon="qr" is-link />
      </div>
    </div>
    <tab></tab>
  </div>
</template>
<script>
import Tab from './Tab.vue'
export default {
  components:{
    Tab
  },
  methods: {
    receive() {
      this.$router.push("/Receive");
    }
  }
};
</script>
<style  scoped>
.mine {
  background: #f5f5f5;
}
.mine .header {
  width: 100%;
  height: 1.37rem;
  background: #f37d0f;
  position: fixed;
  left: 0;
  top: 0;
}
.mine .header .roundness {
  width: 0.82rem;
  height: 0.82rem;
  border-radius: 50%;
  background: #f37d0f;
  position: absolute;
  left: 0.26rem;
  top: 0.34rem;
  border: 0.06rem solid #f8b16f;
  float: left;
}
.mine .header p {
  margin-left: 1.4rem;
  margin-top: 0.59rem;
  font-size: 0.18rem;
  color: #fff;
  float: left;
}
.van-cell-group {
  margin-top: 1.37rem;
}
.van-cell__value {
  color: #000;
}
.mine .center .top {
  margin-top: 0.3rem;
}
.mine .center .top1 {
  margin-top: 0.3rem;
}
.mine .center .top2 {
  margin-top: 0.3rem;
}
.mine .center .top3 {
  margin-top: 0.3rem;
}
.van-cell__title span {
  font-size: 0.3rem;
}
.van-cell .van-cell--clickable {
  margin-top: 0.22rem;
}
.van-cell__left-icon {
  color: #f37d0f;
}
.van-cell__right-icon {
  color: #f37d0f;
}
</style>