<template>
    <div class="home">
        <div class="header">
            <div class="headPortrait"></div>
            <van-search value="" placeholder="请输入搜索关键词" background="none" />
        </div>
        <div class="swiper">
            <van-swipe :autoplay="3000" indicator-color="skyblue">
                <van-swipe-item v-for="(item,index) in arr">
                    <img class="photo" :src="item.img" alt="">
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="nav">
            <van-grid :column-num="5">
                <van-grid-item icon="balance-o" text="文字" />
                <van-grid-item icon="chat-o" text="文字" />
                <van-grid-item icon="like-o" text="文字" />
                <van-grid-item icon="qr" text="文字" />
                <van-grid-item icon="comment-o" text="文字" />
            </van-grid>
        </div>
        <div class="content">
            <div class="content_box"  v-for="(item,index) in ars">
                <div class="content_box_a" @click="fn(item)">
                    <img :src="item.img" alt="" class="content_box_a_photo">
                    <p class="content_name">{{ item.name }}</p>
                    <p class="content_details">{{ item.content }}</p>
                    <p class="content_money ">￥{{ item.price }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                arr: [],
                ars: []
            }
        },
        mounted() {
            // 轮播图
            this.$axios.get("https://shiyaming1994.github.io/mi/static/rotationChart.json", {

            }).then((res) => {
                this.arr = res.data
            })

            // 商品
            this.$axios.get("https://shiyaming1994.github.io/mi/static/homeGoods.json?page=1", {

            }).then((res) => {
                this.ars = res.data
            })
        },
        methods:{
            fn(item){
                this.$router.push({
                    name:"Details",
                    params:{
                        item:item
                    }
                })
            }
        }
    }
</script>
<style scoped>
    body,html{
        background: #f5f5f5;
    }
    .header {
        width: 100%;
        height: 1.1rem;
        background: #f2f2f2;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9;
    }

    .home {
        width: 100%;
        overflow: hidden;
    }

    .headPortrait {
        width: 0.68rem;
        height: 0.68rem;
        border-radius: 50%;
        background: #87ceeb;
        margin-top: 0.22rem;
        margin-left: 0.36rem;
        float: left;
    }

    .header_search {
        width: 3.8rem;
        height: 0.48rem;
        border: 0.01rem solid #e5e5e5;
        float: right;
        border-radius: 0.4rem;
        margin-right: 0.44rem;
        margin-top: 0.3rem;
        background: #fff;
        box-sizing: border-box;
    }

    .van-search__content /deep/ {
        border-radius: 0.4rem;
        margin-top: 0.12rem;
        margin-left: 0.3rem;
        float: left;
    }

    .swiper {
        width: 100%;
        height: 3.2rem;
        padding-top: 1.1rem;
    }

    .photo {
        width: 100%;
        height: 100%;
    }

    .nav {
        width: 100%;
        background: #fff;
    }

    .content {
        width: 100%;
        overflow: hidden;
        background: #f5f5f5;
        margin-bottom: 1rem;
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
    .content_box_a_photo{
        width: 100%;
        height: 3.14rem;
    }
    .content_box_a p{
        text-indent: 0.16rem;
    }
    .content_name{
        font-size: 0.3rem;
        margin-top: 0.2rem;
    }
    .content_details{
        margin-top: 0.06rem;
        font-size: 0.2rem;
        color: #757575;
    }
    .content_money{
        margin-top: 0.06rem;
        color: #ea625b;
        font-size: 0.26rem;
    }
</style>