
<script>
import axios from "axios";
const host = "http://cv15621.tmweb.ru";

export default {
  name: "newtrip",
  data: () => ({
    marker: {
      lat: 59.59,
      lng: 45.45
    }
  }),
  methods: {
    setMarker() {},
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
    },
    onMapClick(event) {
      /** */ console.log(event);
    }
  }
};
</script>

<template>
  <form class="newtrip" v-on:submit="onSubmit" v-on:click="onMapClick">
    <yandex-map :coords="[59, 45]" :zoom="6" style="width: 100%; height: 500px">
      <ymap-marker :markerId="1" marker-type="placemark" :coords="[parseInt(marker.lat), parseInt(marker.lng)]" :clickable="true" :draggable="true" />
    </yandex-map>
    <div class="textBox"><label class="label">Минимальная цена: </label><input class="inputField" type="number" name="from" /></div>
    <div class="textBox"><label class="label">Максимальная цена: </label><input class="inputField" type="number" name="to" /></div>
    <div class="textBox"><label class="label">Дата начала: </label><input class="inputField" type="date" name="start" value="2018-10-28" /></div>
    <div class="textBox"><label class="label">Дата завершения: </label><input class="inputField" type="date" name="end" value="2018-10-29" /></div>
    <div class="textBox"><label class="label">Комментарий: </label><textarea class="text" name="text" placeholder="Комментарий" /></div>
    <div class="buttons">
      <button class="button submit" type="submit">Сохранить</button>
      <button class="button cancel" v-on:click="onCancelCreate" type="button">Отмена</button></div>
  </form>
</template>

<style>
.newtrip {
}
</style>
