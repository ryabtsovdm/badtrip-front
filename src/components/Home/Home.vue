
<script>
import Masthead from "./Masthead.vue";
import Registration from "./Registration.vue";
import Login from "./Login.vue";
import HomeTrips from "./HomeTrips.vue";
import HomeProps from "./HomeProps.vue";
import Footer from "./Footer.vue";
import { mapActions } from "vuex";

export default {
  name: "home",
  components: {
    Footer,
    HomeTrips,
    HomeProps,
    Login,
    Masthead,
    Registration,
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
      this.$router.push("/dashboard");
    },
    ...mapActions({
      setTrips: "setTrips",
      setProps: "setProps",
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
    <Masthead
      v-if="stage === 'promo'"
      @registerClicked="setStage('reg')"
      @loginClicked="setStage('login')"
    />
    <Registration
      v-if="stage === 'reg'"
      @cancelReg="setStage('promo')"
    />
    <Login
      v-if="stage === 'login'"
      @cancelLogin="setStage('promo')"
      @loggedIn="logIn()"
    />
    <HomeTrips />
    <HomeProps />
    <Footer />
  </div>
</template>

<style>
.container {
  max-width: 999px;
  margin: 0 auto;
  padding: 0 2rem;
}
</style>
