<script>
export default {
  name: "homeProps",
  computed: {
    trips() {
      return this.$store.getters.getTrips;
    }
  }
};
</script>

<template>
    <div class="homeProps">
        v-for="trip in trips"
        :key="trip.id">
        {{ trip.text }}
    </div>
</template>

<style>
.homeProps {
  font-family: "PT Sans", sans-serif;
}
</style>
