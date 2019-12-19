<template>
  <div class="new">
    <!-- 新增地址 -->
    <van-nav-bar title="收货地址" left-text="返回" left-arrow @click-left="classify">
      <van-icon name="search" slot="right" />
    </van-nav-bar>
    <van-address-edit
      :area-list="allcity"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>
<script>
import allcity from "../assets/allcity/allcity.js";
export default {
  data() {
    return {
      allcity: allcity,
      searchResult: []
    };
  },

  methods: {
    onSave() {
      Toast("save");
    },
    onDelete() {
      Toast("delete");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区"
          }
        ];
      } else {
        this.searchResult = [];
      }
    },
    classify() {
      this.$router.go(-1);
    }
  }
};
</script>
<style  scoped>
.new {
  width: 100%;
}
.new .van-nav-bar {
  width: 100%;
  height: 0.85rem;
  position: fixed;
  top: 0;
  left: 0;
  background: #f2f2f2;
}
.new .van-address-list {
  margin-top: 0.85rem;
}
</style>