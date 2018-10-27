import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import App from "./App.vue";
import Home from "./components/Home/Home.vue";
import Dashboard from "./components/Dashboard/Dashboard.vue";
import Trips from "./components/Trips.vue";
import Props from "./components/Props.vue";
import NewTrip from "./components/Dashboard/NewTrip.vue";
import NewProp from "./components/Dashboard/NewProp.vue";

import store from "./store";

const routes = [
  { path: "/", component: Home },
  { path: "/dashboard", component: Dashboard },
  { path: "/trips", component: Trips },
  { path: "/props", component: Props },
  { path: "/new/trip", component: NewTrip },
  { path: "/new/prop", component: NewProp }
];

const router = new VueRouter({
  mode: "history",
  routes
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
