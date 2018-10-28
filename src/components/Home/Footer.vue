<script>
export default {
  name: "Footer"
};
</script>

<template>
  <footer class="footer">
    <div class="container">
      <p>2018</p>
      <p>Prototype is sozdan by <a href="https://github.com/ryabtsovdm/" target="_blank">@ryabtsovdm</a> i <a href="https://github.com/mishantrop/" target="_blank">@mishantrop</a></p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-bottom: 1px solid #666;
  display: block;
  padding: 2rem 0;
}

.masthead__logo {
  display: block;
  max-height: 200px;
  max-width: 100%;
  margin: 0 auto 20px;
}

.masthead__promo {
  color: #222;
  padding: 0 0 2rem;
  text-align: center;
}

.masthead__promo-line--1 {
  font-size: 2rem;
  text-transform: uppercase;
}

.masthead__promo-line--2 {
  font-size: 2.5rem;
  text-transform: uppercase;
}

.main {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5rem;
}

.promoButton {
  background-color: #fff;
  border: 2px solid #ff00a8;
  border-radius: 0.5rem;
  cursor: pointer;
  display: inline;
  font-size: 2rem;
  font-weight: 400;
  padding: 1rem 2rem;
  text-transform: uppercase;
  transition: background-color 0.2s linear, color 0.2s linear;
}

.promoButton:hover {
  background-color: #ff00a8;
  color: #fff;
}

.promoButton--registration {
}

.promoButton--login {
}

.promoButton:last-child {
  margin-left: 4rem;
}
</style>