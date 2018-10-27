
<script>
export default {
  name: "app"
};
</script>

<template>
  <div id="app" class="app">
    <router-view></router-view>
  </div>
</template>

<style>
@font-face {
  font-family: "PT Sans";
  font-style: normal;
  font-weight: 400;
  src: url("./assets/fonts/PT_Sans/PT_Sans-Web-Regular.ttf") format("truetype");
}
html,
body {
  background-color: #eee;
  margin: 0;
  padding: 0;
}
* {
  box-sizing: border-box;
}
.app {
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 4rem;
}
</style>
