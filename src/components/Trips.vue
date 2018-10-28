
<script>
import { mapActions } from "vuex";
import Trip from "./Trip.vue";
import Logo from "./Home/Logo.vue";
import Footer from "./Home/Footer.vue";

export default {
  name: "props",
  components: {
    Footer,
    Logo,
    Trip,
  },
  computed: {
    trips() {
      return this.$store.getters.getTrips;
    }
  },
  methods: {
    ...mapActions({
      setTrips: "setTrips"
    })
  },
  created() {
    this.setTrips();
  }
};
</script>

<template>
  <section>
    <header>
      <a href="/" title="Перейти на главную страницу" v-on:click.prevent="$router.push('/')">
        <Logo />
      </a>
    </header>
    <div class="container">
      <h1 class="pageheader">
        Все путешествия
      </h1>
      <div class="trips">
        <template v-for="(trip) in trips">
          <Trip :key="trip.id" v-bind:trip="trip"></Trip>
        </template>
      </div>
    </div>
    <Footer />
  </section>
</template>

<style>
.trips {
}
</style>
