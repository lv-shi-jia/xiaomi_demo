<template>
    <div class="Details" v-if="arr.length!=0">
        <div class="Details_box">
            <div class="returns" @click="fn">
                <van-icon class="icon" name="arrow-left" size=20px />
            </div>
            <div class="Details_box_photo">
                <van-swipe :autoplay="3000" indicator-color="skyblue">
                    <van-swipe-item v-for="(item,index) in arr.imgList">
                        <img class="photo" :src="item.img" alt="">
                    </van-swipe-item>
                </van-swipe>
            </div>
            <div class="Details_box_content">
                <p class="Details_box_content_left">{{ arr.name }}</p>
                <p class="Details_box_content_center">{{ arr.info }}</p>
                <p class="Details_box_content_right">￥{{ arr.price }}</p>
            </div>
            <div class="Details_box_content_bottom">
                <div class="Details_box_content_bottom_top" @click="fal = true">
                    <p class="Details_specification_a">已选</p>
                    <p class="Details_specification_b">6G+128G</p>
                    <p class="Details_specification_c"> 〉</p>
                </div>
                <div class="Details_box_content_bottom_bottom">
                    <p class="Details_specification_a">送至</p>
                    <p class="Details_specification_b">北京</p>
                    <p class="Details_specification_c"> 〉</p>
                </div>
            </div>
        </div>
        <div class="Details_photo">
            <img v-for="(item,index) in arr.info_img" :src="item.img" alt="">
        </div>
        <div class="footer">
            <van-goods-action>
                <van-goods-action-icon icon="chat-o" text="客服" />
                <van-goods-action-icon icon="cart-o" text="购物车" />
                <van-goods-action-button type="warning" text="加入购物车" />
                <van-goods-action-button type="danger" text="立即购买" />
            </van-goods-action>
        </div>
        <div class="join" v-show=fal>
            <div class="join_box">
                <div class="join_box_top">
                    <div class="join_box_top_del">
                        <span @click="fn1">×</span>
                    </div>
                    <div class="join_box_parameter">
                        <div class="join_box_parameter_photo">
                            <img :src="arr.edition[num1].color[num].img" alt="">
                        </div>
                        <div class="join_box_parameter_details">
                            <p>￥{{ arr.edition[num1].edition_price }}</p>
                            <p>{{arr.name}} {{arr.edition[num1].Memory}} {{arr.edition[num1].color[num].color_list}}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="join_box_center">
                    <div>版本</div>
                    <div @click="fn4(index,item.edition_price)" v-for="(item,index) in arr.edition"
                        :class="num1==index? 'border':'border1'">
                        <span>
                            {{ item.Memory }}
                        </span>
                        <span>
                            ￥{{ item.edition_price }}
                        </span>
                    </div>
                </div>
                <div class="join_box_bottom">
                    <div class="join_box_bottom_title">颜色</div>
                    <div class="join_box_bottom_content">
                        <div @click="fn3(index)" v-for="(item,index) in arr.edition[num1].color"
                            :class="num==index? 'border':'border1'">
                            {{ item.color_list }}</div>
                    </div>
                </div>
                <div class="join_box_num">
                    <div>购买数量</div>
                    <van-stepper v-model="obj.value" />
                </div>
                <div class="join_box_button_box">
                    <button class="join_box_button" @click="fn2()">加入购物车</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                i: this.$route.params.item,
                arr: [],
                fal: false,
                index: 0,
                num: 0,
                num1: 0,
                obj: {
                    value: 1,
                    money: 0,
                    n: 0
                }
            }
        },
        methods: {
            fn() {
                this.$router.go(-1)
            },
            fn1() {
                this.fal = false
            },
            fn2() {
                this.obj.n=this.i
                this.$store.commit('addcomm',this.obj)
                this.$router.push("/Shopping")
            },
            // 颜色
            fn3(i) {
                this.num = i
            },
            // 模板
            fn4(i,money) {
                this.num1 = i
                this.obj.money = money
                this.obj.img=this.arr.edition[this.num1].color[this.num].img
                this.obj.name = this.i.name
                window.localStorage.setItem("key",JSON.stringify(this.obj.value))
            }
        },
        mounted() {
            this.$axios.get("https://shiyaming1994.github.io/mi/static/homeGoods.json?page=1", {

            }).then((res) => {
                this.arr = this.i
            })
        }
    };
</script>

<style scoped>
    .Details {
        width: 100%;
    }

    .Details_box {
        width: 100%;
        height: 12.18rem;
    }

    .Details_box_photo {
        width: 100%;
        height: 7.04rem;
    }

    .Details_box_photo img {
        width: 100%;
        height: 100%;
    }

    .Details_box_content {
        width: 100%;
        height: 2.64rem;
        overflow: hidden;
    }

    .Details_box_content p {
        width: 5.88rem;
    }

    .Details_box_content_left {
        font-size: 0.42rem;
        margin: auto;
        margin-top: 0.36rem;
    }

    .Details_box_content_center {
        margin: auto;
        margin-top: 0.12rem;
        font-size: 0.22rem;
        color: #757575;
    }

    .Details_box_content_right {
        margin: auto;
        margin-top: 0.24rem;
        color: #ff6700;
        font-size: 0.32rem;
    }

    .Details_box_content_bottom {
        width: 5.88rem;
        height: 1.68rem;
        margin: auto;
        background: #fafafa;
        border-radius: 0.2rem;
    }

    .Details_box_content_bottom_top {
        width: 100%;
        height: 50%;
        line-height: 0.84rem;
        box-sizing: border-box;
        border-bottom: 0.02rem solid #cccccc;
    }

    .Details_box_content_bottom_top p {
        float: left;
        text-indent: 0.28rem;
        font-size: 0.22rem;
        color: #737373;
    }

    .Details_box_content_bottom_top p+p {
        text-indent: 0.28rem;
        color: #000;
    }

    .Details_box_content_bottom_top p+p+p {
        float: right;
        margin-right: 0.26rem;
        color: #000;
    }

    .Details_box_content_bottom_bottom {
        width: 100%;
        height: 50%;
        line-height: 0.84rem;
    }

    .Details_box_content_bottom_bottom p {
        float: left;
        text-indent: 0.28rem;
        font-size: 0.22rem;
        color: #737373;
    }

    .Details_box_content_bottom_bottom p+p {
        text-indent: 0.28rem;
        color: #000;
    }

    .Details_box_content_bottom_bottom p+p+p {
        float: right;
        margin-right: 0.26rem;
        color: #000;
    }

    .Details_photo {
        width: 100%;
        height: 15.66rem;
    }

    .Details_photo img {
        width: 100%;
    }

    .returns {
        width: 0.52rem;
        height: 0.52rem;
        text-align: center;
        line-height: 0.52rem;
        font-size: 0.3rem;
        background: #626262;
        border-radius: 50%;
        color: #fafafa;
        position: fixed;
        top: 0.34rem;
        left: 0.34rem;
        z-index: 99;
    }

    .footer {
        width: 5.98rem;
        height: 0.86rem;
    }

    .icon /deep/ {
        margin-top: 0.08rem;
    }

    .join {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: #0000008c;
    }

    .join_box {
        width: 100%;
        height: 8.55rem;
        position: absolute;
        bottom: 0;
        left: 0;
        background: #fff;
        border-radius: 0.2rem 0.2rem 0 0;
    }

    .join_box_top {
        width: 100%;
    }

    .join_box_top_del {
        overflow: hidden;
    }

    .join_box_top_del span {
        width: 0.4rem;
        height: 0.4rem;
        float: right;
        font-size: 0.56rem;
        text-align: center;
        line-height: 0.4rem;
        margin-top: 0.46rem;
        margin-right: 0.32rem;
        margin-bottom: 0.3rem;
    }

    .join_box_parameter {
        width: 5.84rem;
        height: 1.7rem;
        margin: auto;
    }

    .join_box_parameter_photo {
        width: 1.68rem;
        height: 1.68rem;
        float: left;
    }

    .join_box_parameter_photo img {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        border: 0.01rem solid #cccccc;
    }

    .join_box_parameter_details {
        width: 4.08rem;
        height: 100%;
        float: left;
    }

    .join_box_parameter_details p:first-of-type {
        font-size: 0.34rem;
        margin-top: 0.42rem;
        text-indent: 0.14rem;
        font-weight: bold;
    }

    .join_box_parameter_details p:last-of-type {
        font-size: 0.24rem;
        margin-top: 0.12rem;
        text-indent: 0.14rem;
    }

    .join_box_center {
        width: 5.84rem;
        overflow: hidden;
        margin: auto;
        margin-top: 0.2rem;
    }

    .join_box_center div:nth-child(1) {
        width: 100%;
        height: 0.74rem;
        line-height: 0.74rem;
        color: #4a4a4a;
    }

    .join_box_center div:nth-child(2) {
        width: 100%;
        height: 0.58rem;
        line-height: 0.58rem;

        box-sizing: border-box;

    }

    .join_box_center div:nth-child(3) {
        width: 100%;
        height: 0.58rem;
        line-height: 0.58rem;

        box-sizing: border-box;

        margin-top: 0.14rem;
    }

    .join_box_center div>span {
        float: left;
        margin-left: 0.58rem;
    }

    .join_box_center div>span+span {
        float: right;
        margin-right: 0.58rem;
    }

    .join_box_bottom {
        width: 5.84rem;
        overflow: hidden;
        margin: auto;
    }

    .join_box_bottom_title {
        width: 100%;
        height: 0.74rem;
        line-height: 0.74rem;
        color: #4a4a4a;
    }

    .join_box_bottom_content div {
        box-sizing: border-box;
        text-align: center;
        line-height: 0.58rem;
        width: 1.08rem;
        float: left;
        margin-left: 0.3rem;

    }

    .border {
        border: 0.01rem solid #f56600;
        color: #f56600;
    }

    .border1 {
        border: 0.01rem solid #cccccc;
        color: #99999d;
    }

    .join_box_num {
        width: 5.86rem;
        margin: auto;
        height: 1.1rem;
        line-height: 1.1rem;
    }

    .join_box_num div {
        float: left;
    }

    .join_box_num div+div /deep/ {
        float: right;
    }

    .join_box_button_box {
        width: 100%;
        text-align: center;
        margin-top: 0.2rem;
    }

    .join_box_button {
        width: 5.86rem;
        height: 0.54rem;
        border-radius: 2rem;
        border: none;
        background: #ff6700;
        color: #fff;
        text-align: center;
        line-height: 0.54rem;
    }
</style>