<script>
export default {
  name: "homeTrips",
  computed: {
    trips() {
      return this.$store.getters.getTrips.trips;
    }
  },
  created() {
    ymaps.ready(() => {
      var myMap = new ymaps.Map(
        "map",
        {
          center: [59.59, 45.45],
          zoom: 11
        },
        {
          balloonMaxWidth: 200,
          searchControlProvider: "yandex#search"
        }
      );
      myMap.behaviors.disable("scrollZoom");
    });
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