<script>
import axios from "axios";
import Logo from "../Home/Logo.vue";
import { mapActions } from "vuex";

const host = "http://cv15621.tmweb.ru";

export default {
  name: "dashboard",
  components: {
    Logo
  },
  computed: {
    user() {
      console.log(this.$store.getters.getUser);
      return this.$store.getters.getUser;
    },
    myProps() {
      return this.$store.getters.getMyProps;
    },
    myTrips() {
      return this.$store.getters.getMyTrips;
    }
  },
  data: () => ({
    tab: "profile"
  }),
  methods: {
    ...mapActions({
      setMyTrips: "setMyTrips",
      setMyProps: "setMyProps"
    }),
    setTab: function(tab) {
      this.tab = tab;
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
    }).then(({ data }) => {
      console.log(data);
      this.setMyTrips(data.trips);
    });

    axios({
      url: `${host}/api/projects/my`,
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${Authorization}`
      }
    }).then(({ data }) => {
      console.log(data.projects);
      this.setMyProps(data.projects);
    });
  }
};
</script>

<template>
  <div class="dashboard">
    <header>
      <a href="/" title="Перейти на главную страницу" v-on:click.prevent="$router.push('/')">
        <Logo />
      </a>
    </header>
    <div class="container">
      <div class="main">
        <nav class="menu">
          <div v-bind:class="{ active: tab === 'profile', option: true }" v-on:click="setTab('profile')">Профиль</div>
          <div v-bind:class="{ active: tab === 'props', option: true }" v-on:click="setTab('props')">Мои предложения</div>
          <div v-bind:class="{ active: tab === 'newtrip', option: true }" v-on:click="setTab('trips')">Мои путешествия</div>
        </nav>
        <div class="content">
          <div class="profile" v-if="tab === 'profile'">
            <div class="param"><label class="label">E-mail: </label><input class="inputField" type="email" name="email" v-model="user.email" disabled required /></div>
            <div class="param"><label class="label">Пароль: </label><input class="inputField" type="password" name="password" disabled required /></div>
          </div>
          <div class="list" v-if="tab === 'props'">
            <template v-for="(prop) in myProps">
              <div :key="prop.id" class="prop">{{ prop.text }}</div>
            </template>
          </div>
          <div class="list" v-if="tab === 'trips'">
            <template v-for="(trip) in myTrips">
              <div :key="trip.id" class="trip">{{ trip.text }}</div>
            </template>
          </div>
          <a href="/new/prop" class="createButton" v-if="tab === 'props'" v-on:click.prevent="$router.push('/new/prop')">
            Создать предложение
          </a>
          <a href="/new/trip" class="createButton" v-if="tab === 'trips'" v-on:click.prevent="$router.push('/new/trip')">
            Создать путешествие
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  font-family: "PT Sans", sans-serif;
}

.profile {
  padding: 0 2rem;
}

.main {
  display: flex;
  padding: 0 2rem;
  font-size: 1rem;
}

.menu {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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

.param {
  width: 400px;
  margin: 0 0 0.5rem;
}

.inputField {
  color: #000;
  border: 1px solid #ddd;
  padding: 0.5rem;
  border-radius: 0.3rem;
}

.label {
  display: block;
  margin: 0 0 0.2rem;
}

.createButton {
  background-color: #fff;
  border: 1px solid #ff00a8;
  border-radius: 4px;
  color: #ff00a8;
  font-size: 1.2rem;
  font-weight: 400;
  padding: 0.8rem;
  text-decoration: none;
  text-transform: uppercase;
  transition: background-color 0.2s linear, color 0.2s linear;
}

.createButton:hover {
  background-color: #ff00a8;
  color: #fff;
}
</style>