<script>
import axios from "axios";
import Logo from "../Home/Logo.vue";

const host = "http://cv15621.tmweb.ru";

export default {
  name: "newtrip",
  components: {
    Logo
  },
  data: () => ({
    marker: {
      lat: 59.59,
      lng: 45.45
    },
    tab: "newtrip",
    placemark: null
  }),
  methods: {
    setTab: function(tab) {
      this.tab = tab;
    },
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
      myMap.behaviors.disable("scrollZoom");

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
  <div class="newtrip">
    <header>
      <a href="/" title="Перейти на главную страницу" v-on:click.prevent="$router.push('/')">
        <Logo />
      </a>
    </header>
    <div class="container">
      <nav class="menu">
        <div v-bind:class="{ active: tab === 'profile', option: true }" v-on:click="$router.push('/dashboard')">Профиль</div>
        <div v-bind:class="{ active: tab === 'props', option: true }" v-on:click="$router.push('/dashboard')">Мои предложения</div>
        <div v-bind:class="{ active: tab === 'newtrip', option: true }" v-on:click="$router.push('/dashboard')">Мои путешествия</div>
      </nav>
    </div>
    <h1 class="pageheader">Новое путешествие</h1>
    <div id="map"></div>
    <div class="container">
      <form class="newtrip-form" v-on:submit="onSubmit">
        <div class="textBox"><label class="label">Минимальная цена: </label><input class="inputField" type="number" name="from" required /></div>
        <div class="textBox"><label class="label">Максимальная цена: </label><input class="inputField" type="number" name="to" required /></div>
        <div class="textBox"><label class="label">Дата начала: </label><input class="inputField" type="date" name="start" value="2018-10-28" required /></div>
        <div class="textBox"><label class="label">Дата завершения: </label><input class="inputField" type="date" name="end" value="2018-10-29" required /></div>
        <div class="textBox"><label class="label">Комментарий: </label><textarea class="text" name="text" placeholder="Комментарий" required /></div>
        <div class="buttons">
          <button class="button submit" type="submit">Сохранить</button>
          <button class="button cancel" v-on:click="onCancelCreate" type="button">Отмена</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.newtrip {
  padding: 2rem 0;
}

.newtrip-form {
  padding: 2rem 0;
}

.newtrip-form textarea,
.newtrip-form input {
  color: #000;
  border: 1px solid #ddd;
  display: block;
  padding: 0.5rem;
  border-radius: 0.3rem;
  width: 100%;
}
.newtrip-form textarea {
  width: 100%;
}

.main {
  padding: 0 2rem;
  font-size: 1rem;
}

.menu {
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  font-family: "PT Sans", sans-serif;
}

.option {
  border-radius: 4px;
  cursor: pointer;
  padding: 0.5rem 1rem;
  margin: 0 0 0.5rem;
  text-transform: uppercase;
}
.option:hover {
  background-color: #eee;
}

.active {
  font-weight: bold;
}

.option:last-child {
  border: none;
}

.textBox {
  margin: 0 0 1rem;
}

.param {
  width: 400px;
  margin: 0 0 0.5rem;
}

.inputField {
}

.label {
  display: block;
  margin: 0 0 0.2rem;
}

.button {
  background-color: #fff;
  border: 1px solid #ff00a8;
  border-radius: 0.5rem;
  cursor: pointer;
  display: inline;
  font-size: 1rem;
  font-weight: 400;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  transition: background-color 0.2s linear, color 0.2s linear;
}

.button--submit {
  margin: 0 1rem 0 0;
}

.button--submit:hover {
  background-color: #ff00a8;
  color: #fff;
}
</style>
