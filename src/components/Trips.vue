
<script>
import { mapActions } from "vuex";
import Trip from "./Trip.vue";

export default {
  name: "props",
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
      <div :key="trip.id" class="trip">
        <div class="trip__title">
          {{ trip.title }}
        </div>
        <div class="trip__text">
          {{ trip.text }}
        </div>
      </div>
    </template>
  </div>
</template>

<style>
.trips {
}
</style>
