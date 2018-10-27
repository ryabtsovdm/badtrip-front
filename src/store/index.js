import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const host = "http://cv15621.tmweb.ru";
const SET_TRIPS = "SET_TRIPS";
const SET_PROPS = "SET_PROPS";
const SET_USER = "SET_USER";

const store = new Vuex.Store({
  state: {
    trips: [],
    props: [],
    user: {}
  },
  mutations: {
    [SET_TRIPS](state, trips) {
      state.trips = trips;
    },
    [SET_PROPS](state, props) {
      state.props = props;
    },
    [SET_USER](state, user) {
      state.user = user;
    }
  },
  actions: {
    async setTrips({ commit }) {
      try {
        const { data } = await axios({
          url: `${host}/api/trips/getlist`
        });
        commit(SET_TRIPS, data);
      } catch (error) {
        /* eslint-disable-line */ console.log(
          "Error while loading trips list",
          error
        );
      }
    },
    async setProps({ commit }) {
      try {
        const { data } = await axios({
          url: `${host}/api/projects/getlist`
        });
        commit(SET_PROPS, data);
      } catch (error) {
        /* eslint-disable-line */ console.log(
          "Error while loading props list",
          error
        );
      }
    },
    /* eslint-disable-line */ async login(
      { commit },
      { email, password, onSuccess }
    ) {
      try {
        const { data } = await axios({
          url: `${host}/api/login`,
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
        commit(SET_USER, data.user);
        onSuccess();
      } catch (error) {
        /* eslint-disable-line */ console.log("Error while login", error);
      }
    },
    async register({ commit }, { email, password, onSuccess }) {
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
  },
  getters: {
    getTrips: state => state.trips,
    getProps: state => state.props
  }
});

export default store;
