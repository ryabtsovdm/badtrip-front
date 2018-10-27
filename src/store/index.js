import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const SET_TRIPS = "SET_TRIPS";

const store = new Vuex.Store({
  state: {
    stage: "login",
    trips: []
  },
  mutations: {
    [SET_TRIPS](state, trips) {
      state.trips = trips;
    }
  },
  // actions: {
  //   setTrips({ commit }, trips) {
  //     commit("SET_TRIPS", trips);
  //   }
  // },
  getters: {
    getTrips: state => state.trips
  }
});

export default store;
