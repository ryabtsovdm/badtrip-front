
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
  background-color: #fff;
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
  color: #222;
}
.container {
  max-width: 999px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
}
.pageheader {
  display: block;
  font-family: "PT Sans", sans-serif;
  margin: 0;
  padding: 1rem 0.5rem;
  text-align: center;
  text-transform: uppercase;
}
#map {
  width: 100%;
  height: 500px;
  background-color: #eee;
}
</style>