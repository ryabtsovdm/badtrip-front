
<script>
import axios from "axios";
const host = "http://cv15621.tmweb.ru";

export default {
  name: "newtrip",
  data: () => ({
    marker: {
      lat: 59.59,
      lng: 45.45
    },
    placemark: null
  }),
  methods: {
    setMarker(marker) {
      this.marker = marker;
    },
    onSubmit(event) {
      event.preventDefault();
      const {
        target: { from, to, start, end, text }
      } = event;

      const Authorization = localStorage.getItem("token");
      const { lat, lng } = this.marker;

      axios({
        url: `${host}/api/trips/create`,
        method: "POST",
        data: {
          price_from: from.value,
          price_to: to.value,
          trip_start: start.value,
          trip_end: end.value,
          text: text.value,
          lat,
          lng
        },
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${Authorization}`
        }
      }).then(() => this.$router.push("/trips"));
    },
    onCancelCreate() {
      this.$router.go(-1);
    }
  },
  created() {
    window.ymaps.ready(() => {
      var myMap = new window.ymaps.Map(
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

      myMap.events.add("click", e => {
        myMap.geoObjects.remove(this.placemark);

        var coords = e.get("coords");
        const [lat, lng] = coords;
        this.setMarker({ lat, lng });

        this.placemark = new window.ymaps.Placemark(
          coords,
          {},
          {
            preset: "islands#blueAirportIcon",
            balloonCloseButton: false,
            hideIconOnBalloonOpen: false
          }
        );
        myMap.geoObjects.add(this.placemark);
      });
    });
  }
};
</script>

<template>

  <form class="newtrip" v-on:submit="onSubmit">
    <div id="map"></div>
    <div class="textBox"><label class="label">Минимальная цена: </label><input class="inputField" type="number" name="from" required /></div>
    <div class="textBox"><label class="label">Максимальная цена: </label><input class="inputField" type="number" name="to" required /></div>
    <div class="textBox"><label class="label">Дата начала: </label><input class="inputField" type="date" name="start" value="2018-10-28" required /></div>
    <div class="textBox"><label class="label">Дата завершения: </label><input class="inputField" type="date" name="end" value="2018-10-29" required /></div>
    <div class="textBox"><label class="label">Комментарий: </label><textarea class="text" name="text" placeholder="Комментарий" required /></div>
    <div class="buttons">
      <button class="button submit" type="submit">Сохранить</button>
      <button class="button cancel" v-on:click="onCancelCreate" type="button">Отмена</button></div>
  </form>
</template>

<style>
#map {
  width: 100%;
  height: 500px;
}

.newtrip {
}
</style>
