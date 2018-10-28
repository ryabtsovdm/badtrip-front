<script>
import axios from "axios";

const host = "http://cv15621.tmweb.ru";

export default {
  name: "TripPage",
  computed: {
    id: function() {
      return this.$route.params.id;
    }
  },
  data: () => ({
    trip: {}
  }),
  methods: {
    setTrip: function(trip) {
      this.trip = trip;
    }
  },
  created() {
    const Authorization = localStorage.getItem("token");

    axios({
      url: `${host}/api/trip/${this.id}`,
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${Authorization}`
      }
    }).then(({ data }) => {
      this.setTrip(data);

      const { lat, lng } = data;
      /** */ console.log(data);

      window.ymaps.ready(() => {
        let myMap = new window.ymaps.Map(
          "map",
          {
            center: [lat, lng],
            zoom: 8
          },
          {
            balloonMaxWidth: 200,
            searchControlProvider: "yandex#search"
          }
        );

        myMap.behaviors.disable("scrollZoom");

        const placemark = new window.ymaps.Placemark(
          [lat, lng],
          {},
          {
            preset: "islands#blueAirportIcon",

            balloonCloseButton: false,
            hideIconOnBalloonOpen: false,
            hint: text
          }
        );

        myMap.geoObjects.add(placemark);
      });
    });
  }
};
</script>

<template>
    <div>
        <div id="map" />
    </div>
</template>


<style scoped>
</style>