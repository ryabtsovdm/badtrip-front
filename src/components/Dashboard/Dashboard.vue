
<script>
import axios from "axios";

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
  async created() {
    try {
      const { data } = await axios({
        url: `${host}/api/register`,
        method: "POST",
        headers: {
          "content-type": "application/json",
          Accept: "application/json"
        },
        data: {
          email,
          password
        }
      });

      localStorage.setItem("token", data.token);
      onSuccess();
    } catch (error) {
      /* eslint-disable-line */ console.log("Error while login", error);
    }
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
