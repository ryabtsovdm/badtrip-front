<script>
import Trip from "../Trip.vue";

export default {
  name: "homeTrips",
  components: { Trip },
  computed: {
    trips() {
      return this.$store.getters.getTrips;
    }
  },
  created() {
    window.ymaps.ready(() => {
      let myMap = new window.ymaps.Map(
        "map",
        {
          center: [59.59, 45.45],
          zoom: 5
        },
        {
          balloonMaxWidth: 200,
          searchControlProvider: "yandex#search"
        }
      );

      myMap.behaviors.disable("scrollZoom");
      myMap.behaviors.disable("multiTouch");

      Array.from(this.trips).forEach(({ lat, lng, text, id }) => {
        const placemark = new window.ymaps.Placemark(
          [lat, lng],
          {
            balloonContentBody: `<span style="font-size: 16px;">${text}</span>`,
            balloonContentFooter: `<a href="trips/${id}">Подробнее</a>`
          },
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
  <section class="home-trips">
    <div class="container">
      <h2 class="home-trips__header" v-on:click="$router.push('/trips')">Все путешествия</h2>
      <div class="home-trips__intro">
        <p>
          На карте ты найдёшь путешественника, который разнообразит ваш унылый инстаграмчик.
        </p>
      </div>
    </div>
    <div id="map"></div>
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