
<script>
import Masthead from "./Masthead.vue";
import Registration from "./Registration.vue";
import Login from "./Login.vue";
import HomeTrips from "./HomeTrips.vue";
import HomeProps from "./HomeProps.vue";
import axios from "axios";
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
    stage: "promo"
  }),
  methods: {
    setStage: function(val) {
      this.stage = val;
    },
    fetchData: async function() {
      try {
        const { data } = await axios({
          url: "http://cv15621.tmweb.ru/api/trips/getlist"
        });
        console.log(this);
        this.$store.dispatch("SET_TRIPS", data);
      } catch (error) {
        console.log("Error while loading trips list", error);
      }
    }
  },
  beforeCreate() {
    this.fetchData();
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
