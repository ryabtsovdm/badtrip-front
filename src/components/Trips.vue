
<script>
import { mapActions } from "vuex";
import Trip from "./Trip.vue";

export default {
  name: "props",
  components: { Trip },
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
  <div class="trips">
    <template v-for="(trip) in trips">
      <Trip :key="trip.id" v-bind:trip="trip"></Trip>
    </template>
  </div>
</template>

<style>
.trips {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
}
</style>
