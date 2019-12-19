<template>
  <div class="shopping">
    <div class="header">
      <van-nav-bar
        title="购物车"
        left-text="返回"
        left-arrow
        style="background:#f2f2f2"
        @click-left="go"
      >
        <van-icon name="search" slot="right" size="18px" />
      </van-nav-bar>
    </div>
    <div class="logo">
      <p>登录后享受更多优惠</p>
      <p>去登陆 〉</p>
    </div>
    <div class="none">
      <div>购物车还是空的</div>
      <div @click="gog">去逛逛</div>
    </div>
    <div v-if="arr.length!=0">
      <div class="commodity_a" v-for="(item,index) in arr" :key="item.index">
        <img :src="item.img" alt />
        <div>
          <p>{{ item.n.name }}</p>
          <p>￥ {{item.money}}</p>
          <van-stepper v-model="item.value" class="abc" />
        </div>
        <van-icon name="delete" size="30px" />
      </div>
    </div>
    <div class="love">
      <van-divider :style="{ color: '#a7a7a7', borderColor: '#a7a7a7', padding: '0 16px' }">
        猜你喜欢
        <br />实时推荐你的心心念念
      </van-divider>
    </div>
    <div class="content" v-if="ars.length!=0">
      <div class="content_box" v-for="(item,index) in ars" :key="item.index">
        <div class="content_box_a">
          <img :src="item.img" alt class="content_box_a_photo" />
          <p class="content_name">{{ item.name }}</p>
          <p class="content_details">{{ item.content }}</p>
          <p class="content_money">￥{{ item.price }}</p>
        </div>
      </div>
    </div>
    <div class="footer" v-show="true">
      <div class="footer_left">
        <p>共{{count}}件 金额:</p>
        <p>
          <span>{{countt}}</span>
          元
        </p>
      </div>
      <div class="footer_center">继续购物</div>
      <div class="footer_right">去结算</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ars: [],
      arr: []
    };
  },
  methods: {
    go() {
      this.$router.push('/Home');
    },
    gog() {
      history.back();
    }
  },
  mounted() {
    // 商品
    this.$axios
      .get(
        "https://shiyaming1994.github.io/mi/static/homeGoods.json?page=1",
        {}
      )
      .then(res => {
          console.log(res)
        this.ars = res.data;

      });
    this.arr = JSON.parse(localStorage.getItem("name"));
  },
  computed: {
    //件数
    count() {
      var num = 0;
      this.arr.forEach(res => {
        num += res.value;
      });
      return num;
    },
    //金额
    countt() {
      var num = 0;
      this.arr.forEach(res => {
        num += res.money * res.value;
      });
      return num;
    }
  }
}
</script>
<style scoped>
.commodity_a {
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
}
.commodity_a img {
  width: 1.68rem;
  height: 1.82rem;
  margin-top: 0.36rem;
  margin-left: 0.36rem;
}
.commodity_a div {
  width: 50%;
}
.commodity_a p {
  font-size: 0.3rem;
  margin-top: 0.2rem;
  margin-left: 0.1rem;
}
.commodity_a p + p {
  font-size: 0.22rem;
  margin-top: 0.16rem;
}
.commodity_a i {
  height: 0.5rem;
  width: 0.5rem;
  margin-top: 0.2rem;
  margin-right: 0.3rem;
}
.abc /deep/ {
  margin-top: 0.2rem;
  margin-left: 0.1rem;
}
.header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
}

.logo {
  width: 100%;
  height: 1.12rem;
  background: #fff;
  padding-top: 0.8rem;
  line-height: 1.12rem;
}

.logo p:first-of-type {
  text-indent: 0.26rem;
  float: left;
  font-size: 0.3rem;
}

.logo p:last-of-type {
  text-indent: 0.26rem;
  float: right;
  margin-right: 0.46rem;
  color: #757575;
  font-size: 0.24rem;
}

.none {
  width: 100%;
  height: 1.2rem;
  background: #ebebeb;
  color: #ababab;
}

.none div:first-of-type {
  margin-left: 1.6rem;
  float: left;
  font-size: 0.24rem;
  line-height: 1.2rem;
}

.none div:last-of-type {
  width: 1.18rem;
  height: 0.38rem;
  border: 0.01rem solid #c8c8c8;
  float: left;
  font-size: 0.24rem;
  text-align: center;
  color: #000;
  position: relative;
  top: 50%;
  margin-top: -0.19rem;
  margin-left: 0.18rem;
}

.love {
  text-align: center;
}

.content {
  width: 100%;
  overflow: hidden;
  background: #f5f5f5;
  padding-bottom: 1.1rem;
}

.content_box {
  width: 50%;
  float: left;
  height: 4.46rem;
  margin-top: 0.18rem;
}

.content_box_a {
  width: 3.14rem;
  height: 100%;
}

.content_box_a_photo {
  width: 100%;
  height: 3.14rem;
}

.content_box_a p {
  text-indent: 0.16rem;
}

.content_name {
  font-size: 0.3rem;
  margin-top: 0.2rem;
}

.content_details {
  margin-top: 0.06rem;
  font-size: 0.2rem;
  color: #757575;
}

.content_money {
  margin-top: 0.06rem;
  color: #ea625b;
  font-size: 0.26rem;
}

.commodity {
  width: 100%;
  height: 2.3rem;
}

/* .commodity_photo {
        width: 1.66rem;
        height: 1.84rem;
        border: 0.01rem solid #eeeeee;
        margin-top: 0.32rem;
        margin-left: 0.42rem;
        float: left;
    }

    .commodity_box {
        width: 4.28rem;
        height: 1.88rem;
        float: left;
        margin-top: 0.32rem;
    }

    .commodity_box_left {
        width: 3.32rem;
        height: 100%;
        float: left;
    }

    .commodity_box_left_name {
        margin-top: 0.04rem;
        text-indent: 0.14rem;
        font-size: 0.3rem;
    }

    .commodity_box_left_money {
        margin-top: 0.18rem;
        text-indent: 0.14rem;
        color: #9fa19f;
        font-size: 0.24rem;
    }

    .commodity_box_left_add {
        width: 2.36rem;
        height: 0.66rem;
        border: 0.02rem solid #bbbbbb;
        border-radius: 0.1rem;
        line-height: 0.66rem;
        margin-left: 0.14rem;
        margin-top: 0.18rem;
    }

    .commodity_box_left_add div {
        float: left;
        width: 33.33%;
        text-align: center;
        font-size: 0.3rem;
        box-sizing: border-box;
    }

    .commodity_box_left_add_left {
        border-right: 0.02rem solid #bbbbbb;
    }

    .commodity_box_left_add_center {
        border-right: 0.02rem solid #bbbbbb;
    }

    .commodity_box_right {
        width: 0.96rem;
        height: 100%;
        float: left;
        text-align: center;
        line-height: 3.3rem;
    } */

.footer {
  width: 100%;
  height: 0.9rem;
  background: #fff;
  position: fixed;
  bottom: 0;
  z-index: 10;
}

.footer div {
  float: left;
  width: 33.33%;
  height: 100%;
  text-align: center;
  line-height: 1rem;
}

.footer_left p {
  height: 50%;
  line-height: 0.5rem;
  color: #999999;
}

.footer_left p + p > span {
  font-size: 0.3rem;
  color: #ff5722;
  font-weight: bold;
}

.footer div + div {
  background: #f4f4f4;
  font-size: 0.24rem;
}

.footer div + div + div {
  background: #ff6700;
  color: #fff;
  font-size: 0.24rem;
}
</style>