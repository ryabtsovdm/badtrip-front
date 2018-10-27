
<script>
import Masthead from "./Masthead.vue";
import Registration from "./Registration.vue";
import Login from "./Login.vue";
import HomeTrips from "./HomeTrips.vue";
import HomeProps from "./HomeProps.vue";
import { mapActions } from "vuex";

export default {
  name: "home",
  components: {
    Masthead,
    Registration,
    Login,
    HomeTrips,
    HomeProps
  },
  data: () => ({
    stage: "promo",
    isLoggedIn: true
  }),
  methods: {
    setStage: function(val) {
      this.stage = val;
    },
    logIn: function() {
      this.setStage("promo");
    },
    ...mapActions({
      setTrips: "setTrips",
      setProps: "setProps"
    })
  },
  created() {
    this.setTrips();
    this.setProps();
  }
};
</script>

<template>
  <div class="home">
    <Masthead v-if="stage === 'promo'" @registerClicked="setStage('reg')" @loginClicked="setStage('login')" />
    <Registration v-if="stage === 'reg'" @cancelReg="setStage('promo')" />
    <Login v-if="stage === 'login'" @cancelLogin="setStage('promo')" @loggedIn="logIn()" />
    <HomeTrips v-if="isLoggedIn" />
    <HomeProps v-if="isLoggedIn" />
  </div>
</template>

<style>
.home {
}
</style>
