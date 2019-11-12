<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import mainTabBar from 'components/content/mainTabBar'

export default {
  name: 'app',
  components: {
    mainTabBar
  }
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
}
</style>
