<script>
export default {
  name: "homeTrips",
  computed: {
    trips() {
      return this.$store.getters.getTrips;
    }
  }
};
</script>

<template>
  <div class="homeTrips">
    v-for="trip in trips"
    :key="trip.id">
    {{ trip.text }}
  </div>
</template>

<style>
.homeTrips {
  font-family: "PT Sans", sans-serif;
}
</style>
