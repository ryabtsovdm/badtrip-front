
<script>
import Masthead from "./Masthead.vue";
import Registration from "./Registration.vue";
import Login from "./Login.vue";
import HomeTrips from "./HomeTrips.vue";
import HomeProps from "./HomeProps.vue";
import { mapMutations, mapActions } from "vuex";

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
    stage: "promo"
  }),
  computed: {
    trips() {
      return this.$store.getters.getTrips;
    },
    props() {
      return this.$store.getters.getProps;
    }
  },
  methods: {
    setStage: function(val) {
      this.stage = val;
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
    <Registration v-if="stage === 'reg'" />
    <Login v-if="stage === 'login'" />
  </div>
</template>

<style>
.home {
}
</style>
