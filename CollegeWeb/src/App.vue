<template>
  <div id="app">
    <!-- <info-bar class="info"/> -->
    <header-comp class="nav-scroll" />
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComp from "./components/HeaderComp.vue";
// import InfoBar from "./components/InfoBar.vue";
export default {
  name: "App",
  components: {
    HeaderComp,
    // InfoBar,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  overflow: hidden;
}
.nav-scroll {
  width: 100%;
  position: -webkit-sticky; /* Safari & IE */
  position: sticky;
  top: 0;
  z-index: 1;
}

@media screen and (max-width: 500px) {
}
</style>
