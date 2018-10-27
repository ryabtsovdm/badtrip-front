<script>
import Vue from "vue";

import YmapPlugin from "vue-yandex-maps";
Vue.use(YmapPlugin);

export default {
  name: "homeTrips",
  computed: {
    trips() {
      return this.$store.getters.getTrips.trips;
    }
  }
};
</script>

<template>
  <div class="homeTrips">
    <h1 class="tripsHeader">Все путешествия</h1>
    <yandex-map :coords="[59, 45]" :zoom="6" map-type-id="terrain" style="width: 100%; height: 500px">
      <ymap-marker :markerId="index" marker-type="placemark" :key="index" v-for="(trip, index) in trips" :coords="[parseInt(trip.lat), parseInt(trip.lng)]" :clickable="true" :draggable="true" />
    </yandex-map>
  </div>
</template>

<style>
.homeTrips {
  font-family: "PT Sans", sans-serif;
}
</style>
