import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import App from "./App.vue";
import Home from "./components/Home/Home.vue";
import Dashboard from "./components/Dashboard/Dashboard.vue";
import Trips from "./components/Trips.vue";
import Props from "./components/Props.vue";
import New from "./components/New.vue";
import NewTrip from "./components/NewTrip.vue";
import NewProp from "./components/NewProp.vue";

import store from "./store";

const routes = [
  { path: "/", component: Home },
  { path: "/dashboard", component: Dashboard },
  { path: "/trips", component: Trips },
  { path: "/props", component: Props },
  {
    path: "/new",
    component: New,
    children: [
      { path: "/trip", component: NewTrip },
      { path: "/prop", component: NewProp }
    ]
  }
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
