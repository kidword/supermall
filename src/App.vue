<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import mainTabBar from 'components/content/mainTabBar.vue'

export default {
  name: 'app',
  components: {
    mainTabBar
  }
}
</script>

<style>


  #tab-bar{
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f6f6f6;
  box-shadow: 0px -1px 1px rgba(100,100,100, 0.1)
}
</style>
