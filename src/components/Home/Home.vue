
<script>
import Masthead from "./Masthead.vue";
import Registration from "./Registration.vue";
import Login from "./Login.vue";
import HomeTrips from "./HomeTrips.vue";
import HomeProps from "./HomeProps.vue";
import axios from "axios";
import { mapMutations } from "vuex";

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
    }
  },
  methods: {
    setStage: function(val) {
      this.stage = val;
    },
    fetchData: async function() {
      try {
        const { data } = await axios({
          url: "http://cv15621.tmweb.ru/api/trips/getlist"
        });
        this.setTrips(data);
      } catch (error) {
        console.log("Error while loading trips list", error);
      }
    },
    ...mapMutations({
      setTrips: "SET_TRIPS"
    })
  },
  created() {
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
