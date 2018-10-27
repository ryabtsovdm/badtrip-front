<script>
import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "",
    libraries: "places" //,drawing,visualization"
  }

  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,

  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then disable the following:
  // installComponents: true,
});

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
    <GmapMap :center="{lat:59, lng:45}" :zoom="6" map-type-id="terrain" style="width: 100%; height: 500px">
      <GmapMarker :key="index" v-for="(trip, index) in trips" :position="{lat: parseInt(trip.lat), lng: parseInt(trip.lng)}" :clickable="true" :draggable="true" />
    </GmapMap>
  </div>
</template>

<style>
.homeTrips {
  font-family: "PT Sans", sans-serif;
}
</style>
