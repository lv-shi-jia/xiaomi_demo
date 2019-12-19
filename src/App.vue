<template>
  <div id="app">
    <tab v-show="$route.meta.flag"></tab>
    <router-view/>
  </div>
</template>

<script>
import Tab from './components/Tab.vue'
export default {
  name: 'App',
  components:{
    Tab
  }
}
</script>

<style>

</style>
