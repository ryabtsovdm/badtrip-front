<script>
import axios from "axios";

const host = "http://cv15621.tmweb.ru";

export default {
  name: "dashboard",
  computed: {
    user() {
      return this.$store.getters.getUser;
    }
  },
  data: () => ({
    tab: "profile",
    trips: [],
    props: []
  }),
  methods: {
    setTrips: function(trips) {
      this.trips = trips;
    },
    setProps: function(props) {
      this.props = props;
    },
    setTab: function(tab) {
      this.tab = tab;
    },
    createNew: function() {
      if (this.tab === "trips") {
        this.$router.push("/new/trip");
      } else {
        this.$router.push("/new/prop");
      }
    }
  },
  created() {
    const Authorization = localStorage.getItem("token");

    axios({
      url: `${host}/api/trips/my`,
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${Authorization}`
      }
    }).then(({ data }) => this.setTrips(data.trips));

    axios({
      url: `${host}/api/projects/my`,
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${Authorization}`
      }
    }).then(({ data }) => this.setProps(data.projects));
  }
};
</script>

<template>
  <div class="dashboard">
    <div class="header">
      <!-- Имя пользователя и иконка -->
    </div>
    <div class="main">
      <div class="menu">
        <div v-bind:class="{ active: tab === 'profile', option: true }" v-on:click="setTab('profile')">Профиль</div>
        <div v-bind:class="{ active: tab === 'props', option: true }" v-on:click="setTab('props')">Мои предложения</div>
        <div v-bind:class="{ active: tab === 'trips', option: true }" v-on:click="setTab('trips')">Мои путешествия</div>
      </div>
      <div class="content">
        <div class="profile" v-if="tab === 'profile'">
          <div class="param"><label class="label">E-mail: </label><input class="inputField" type="email" name="email" v-model="user.email" disabled /></div>
          <div class="param"><label class="label">Пароль: </label><input class="inputField" type="password" name="password" disabled /></div>
        </div>
        <div class="list" v-if="tab === 'props'">
          <template v-for="(prop) in props">
            <div :key="prop.id" class="prop">{{ prop.text }}</div>
          </template>
        </div>
        <div class="list" v-if="tab === 'trips'">
          <template v-for="(trip) in trips">
            <div :key="trip.id" class="trip">{{ trip.text }}</div>
          </template>
        </div>
        <div class="createButton" v-if="tab !== 'profile'" v-on:click="createNew()">
          Создать
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.dashboard {
  background-image: linear-gradient(to right, yellow, violet);
  width: 80%;
  margin: 0 auto;
}

.header {
  width: 4rem;
}

.main {
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  padding: 0 2rem;

  font-size: 18px;
}

.menu {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.option {
  border-bottom: 1px solid #888;
  padding: 0.3rem 0.5rem;
  opacity: 0.5;
}

.active {
  opacity: 1;
  box-shadow: #888;
}

.option:last-child {
  border: none;
}

.param {
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3rem 0;
}

.inputField {
  color: #000;
  width: 50%;
  border: 1px solid #ddd;
  padding: 0.5rem;
  border-radius: 0.3rem;
}

.label {
  width: 50%;
}

.createButton {
  background-color: ghostwhite;
  padding: 0.8rem;
  color: lightcoral;
  font-size: 1.5rem;
  font-weight: 700;
}
</style>
