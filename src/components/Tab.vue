<template>
  <div class="tab">
    <van-tabbar v-model="active">
      <router-link to="/Home">
        <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      </router-link>
      <router-link to="/Classify">
        <van-tabbar-item icon="search">分类</van-tabbar-item>
      </router-link>
      <router-link to="Shopping">
        <van-tabbar-item icon="friends-o">购物车</van-tabbar-item>
      </router-link>
      <router-link to="Mine">
        <van-tabbar-item icon="setting-o">个人</van-tabbar-item>
      </router-link>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>
<style  scoped>
.tab {
  width: 100%;
  height: 0.9rem;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #cccccc;
}
.tab a {
  width: 25%;
  height: 100%;
}
</style>