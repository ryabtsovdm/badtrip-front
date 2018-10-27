import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    stage: "login",
    trips: []
  },
  actions: {
    setTrips({ commit }, trips) {
      commit("SET_TRIPS", trips);
    }
  },
  mutations: {
    SET_TRIPS(state, trips) {
      state.trips = trips;
    }
  },
  getters: {
    getTrips: state => state.trips
  }
});

export default store;
