import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stage: "login"
  },
  actions: {
    setTrips({ commit }, { trips }) {
      commit("SET_TRIPS", trips);
    }
  },
  mutations: {
    SET_TRIPS: (state, trips) => {
      state.trips = trips;
    }
  },
  getters: {
    getTrips: state => state.trips
  }
});
