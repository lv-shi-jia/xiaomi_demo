 <template>
  <div class="classify">
    <van-nav-bar title="分类" left-text="返回" left-arrow>
      <van-icon name="search" slot="right" />
    </van-nav-bar>
    <div class="phone">
      <ul>
        <li
          v-for="(item,index) in arr"
          :key="item.id" 
          @click="fn(index)"
          :class="num==index?'active':''"
        >
          <router-link to>{{item}}</router-link>
        </li>
      </ul>
      <ol>
        <li v-for="(item,index) in 3" :key="index">
          <img src="../assets/images/分类_03.png" alt />
          <h2>手机</h2>
          <div class="center">
            <p>
              <img src="../assets/img/68d0ac29ce4a326d.jpg" alt />
              <span>小米9</span>
            </p>
            <p>
              <img src="../assets/img/68d0ac29ce4a326d.jpg" alt />
              <span>小米9</span>
            </p>
            <p>
              <img src="../assets/img/68d0ac29ce4a326d.jpg" alt />
              <span>小米9</span>
            </p>
            <p>
              <img src="../assets/img/68d0ac29ce4a326d.jpg" alt />
              <span>小米9</span>
            </p>
            <button>查看更多</button>
          </div>
        </li>
      </ol>
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
  data() {
    return {
      arr: [
        "手机",
        "电视",
        "电脑",
        "家电",
        "路由",
        "出行",
        "出行",
        "智能",
        "灯具",
        "家电",
        "电脑"
      ],
      num: 0
    };
  },
  methods: {
    fn(i) {
      this.num = i;
    }
  },
  mounted() {
    this.$axios
      .get("https://shiyaming1994.github.io/mi/static/homeGoods.json?page=1")
      .then(res => {
        console.log(res);
      });
  }
};
</script>
<style scoped>
.classify {
  width: 100%;
}
.classify .van-nav-bar {
  width: 100%;
  height: 0.85rem;
  position: fixed;
  top: 0;
  left: 0;
  background: #f2f2f2;
}
.classify .phone {
  width: 100%;
  height: 9.66rem;
  display: flex;
}
.classify .phone ul {
  width: 1.51rem;
  height: 100%;
  background: #fafafa;
  position: fixed;
  top: 0.85rem;
  left: 0;
}
.classify .phone ul li {
  width: 100%;
  height: 0.85rem;
  font-size: 0.3rem;
  color: #666666;
  line-height: 0.85rem;
  text-align: center;
}
.active {
  background: #fff;
  color: #e02e24;
  border-right: 0.08rem solid #e02e24;
}
.classify .phone ol {
  position: absolute;
  right: 0;
  top: 0.85rem;
  width: 4.89rem;
  height: 100%;
}
.classify .phone ol li {
  width: 100%;
  height: 6.5rem;
}
.classify .phone ol li img {
  width: 4.36rem;
  height: 1.53rem;
  margin-top: 0.22rem;
  margin-left: 0.28rem;
}
.classify .phone ol li h2 {
  margin-top: 0.28rem;
  text-align: center;
  font-size: 0.3rem;
  color: #000;
}
.classify .phone ol li .center p {
  width: 1.62rem;
  float: left;
  text-align: center;
}
.classify .phone .center img {
  width: 0.8rem;
  height: 0.8rem;
  display: block;
  margin: 0 auto;
  margin-bottom: 0.1rem;
  margin-top: 0.1rem;
}
.classify .phone ol li button {
  width: 4.38rem;
  height: 0.7rem;
  background: #f9f5e6;
  border: none;
  text-align: center;
  line-height: 0.7rem;
  font-size: 0.3rem;
  color: #aea38d;
  margin: 0 auto;
  margin-left: 0.15rem;
  margin-top: 0.2rem;
}
</style>


