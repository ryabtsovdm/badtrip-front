import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const SET_TRIPS = "SET_TRIPS";
const SET_PROPS = "SET_PROPS";

const store = new Vuex.Store({
  state: {
    trips: [],
    props: []
  },
  mutations: {
    [SET_TRIPS](state, trips) {
      state.trips = trips;
    },
    [SET_PROPS](state, props) {
      state.props = props;
    }
  },
  actions: {
    async setTrips({ commit }) {
      try {
        const { data } = await axios({
          url: "http://cv15621.tmweb.ru/api/trips/getlist"
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
          url: "http://cv15621.tmweb.ru/api/projects/getlist"
        });
        commit(SET_PROPS, data);
      } catch (error) {
        /* eslint-disable-line */ console.log(
          "Error while loading props list",
          error
        );
      }
    }
  },
  getters: {
    getTrips: state => state.trips,
    getProps: state => state.props
  }
});

export default store;
