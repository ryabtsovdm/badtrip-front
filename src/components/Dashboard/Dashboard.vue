<script>
import axios from "axios";

const host = "http://cv15621.tmweb.ru";

export default {
  name: "dashboard",
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
    }
  },
  components: {},
  created() {
    const Authorization = localStorage.getItem("token");

    axios({
      url: `${host}/api/trips/my`,
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${Authorization}`
      }
    }).then(({ trips }) => this.setTrips(trips));

    axios({
      url: `${host}/api/projects/my`,
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${Authorization}`
      }
    }).then(({ projects }) => this.setProps(projects));
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
        <div v-bind:class="{ active: tab === 'profile', option: true }">Профиль</div>
        <div v-bind:class="{ active: tab === 'props', option: true }">Мои предложения</div>
        <div v-bind:class="{ active: tab === 'trips', option: true }">Мои путешествия</div>
      </div>
      <div class="content">

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
}

.option:last-child {
  border: none;
}
</style>
