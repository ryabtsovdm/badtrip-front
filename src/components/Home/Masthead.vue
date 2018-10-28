<script>
import Logo from "./Logo.vue";

export default {
  name: "masthead",
  methods: {
    onClickRegisterButton() {
      this.$emit("registerClicked");
    },
    onClickLoginButton() {
      this.$emit("loginClicked");
    }
  },
  components: {
    Logo,
  },
};
</script>

<template>
  <section class="masthead">
    <div class="container">
      <Logo />
      <div class="masthead__promo">
        <div class="masthead__promo-line--1">Нищий, но любишь фоточки?</div>
        <div class="masthead__promo-line--2">Тебе к нам.</div>
      </div>
    </div>
    <div>
      <button class="promoButton promoButton--registration" type="button" v-on:click="onClickRegisterButton">
        Регистрация
      </button>
      <button class="promoButton promoButton--login" type="button" v-on:click="onClickLoginButton">
        Вход
      </button>
    </div>
  </section>
</template>

<style>
.masthead {
  background-color: #fff;
  font-family: "PT Sans", sans-serif;
  padding: 2rem 0;
}

.masthead__logo {
  background-size: contain;
  display: block;
  height: 200px;
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
