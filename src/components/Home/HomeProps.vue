<script>
import Prop from "../Prop.vue";

export default {
  name: "homeProps",
  components: { Prop },
  computed: {
    props() {
      return this.$store.getters.getProps;
    }
  }
};
</script>

<template>
  <section class="home-projects">
    <div class="container">
      <h2 class="home-projects__header" v-on:click="$router.push('/props')">Все заказы</h2>
      <div class="home-projects__intro">
        <p>
          Кажется, эти люди готовы платить за фоточки. Мдауш.
        </p>
      </div>
      <div>
        <template v-for="(prop) in props">
          <Prop :key="prop.id" class="prop" v-bind:prop="prop"></Prop>
        </template>
      </div>
    </div>
  </section>
</template>

<style scope>
.home-projects {
  background-color: #eee;
  font-family: "PT Sans", sans-serif;
  padding: 0 0 2rem;
}

.home-projects__header {
  display: block;
  margin: 0;
  padding: 1rem 0.5rem;
  text-transform: uppercase;
}

.prop {
  background-color: #fff;
  cursor: pointer;
  margin: 0 0 2px;
  padding: 0.5rem 1rem;
  text-align: left;
  transition: background-color 0.2s linear;
}

.prop:first-child {
  border-radius: 8px 8px 0 0;
}

.prop:last-child {
  border-radius: 0 0 8px 8px;
}

.prop:hover {
  background-color: #f5f5f5;
}
.prop__title {
  font-size: 1.2rem;
  font-weight: bold;
}

.prop__text {
}
</style>