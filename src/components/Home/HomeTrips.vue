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
  <section class="home-trips">
    <div class="container">
      <h2 class="home-trips__header">Все путешествия</h2>
      <div class="home-trips__intro">
        <p>
          На карте ты найдёшь путешественника, который разнообразит ваш унылый инстаграмчик.
        </p>
      </div>
    </div>
    <yandex-map :coords="[59, 45]" :zoom="6" map-type-id="terrain" style="width: 100%; height: 500px">
      <ymap-marker :markerId="index" marker-type="placemark" :key="index" v-for="(trip, index) in trips" :coords="[parseInt(trip.lat), parseInt(trip.lng)]" :clickable="true" :draggable="true" />
    </yandex-map>
  </section>
</template>

<style>
.home-trips {
  background-color: #eee;
  font-family: "PT Sans", sans-serif;
  margin: 0;
}

.home-trips__intro {
  font-size: 1.2rem;
}

.home-trips__header {
  display: block;
  margin: 0;
  padding: 1rem 0.5rem;
  text-transform: uppercase;
}
</style>
