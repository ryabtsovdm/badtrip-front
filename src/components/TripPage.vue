<script>
import axios from "axios";
import Logo from "./Home/Logo.vue";
import Footer from "./Home/Footer.vue";

const host = "http://cv15621.tmweb.ru";

export default {
  name: "TripPage",
  computed: {
    id: function() {
      return this.$route.params.id;
    }
  },
  components: {
    Footer,
    Logo
  },
  data: () => ({
    trip: null
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

      const { lat, lng, text } = data;
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
        myMap.behaviors.disable("multiTouch");

        const placemark = new window.ymaps.Placemark(
          [lat, lng],
          {},
          {
            preset: "islands#blueAirportIcon",

            balloonCloseButton: false,
            hideIconOnBalloonOpen: false
            // hint: text,
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
    <header>
      <a href="/" title="Перейти на главную страницу" v-on:click.prevent="$router.push('/')">
        <Logo />
      </a>
    </header>
    <div id="map" />
    <div class="container">
      <div v-if="trip !== null" class="trip-page__text">
        {{ trip.text }}
      </div>
    </div>
    <Footer />
  </div>
</template>


<style scoped>
.trip-page__text {
  padding: 2rem 0;
}
</style>