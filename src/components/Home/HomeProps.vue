<script>
export default {
  name: "homeProps",
  computed: {
    props() {
      return this.$store.getters.getProps.projects;
    }
  }
};
</script>

<template>
  <div class="homeProps">
    <h1 class="tripsHeader">Все заказы</h1>
    <template v-for="(prop) in props">
      <div :key="prop.id" class="prop">{{ prop.text }}</div>
    </template>
  </div>
</template>

<style>
.homeProps {
  font-family: "PT Sans", sans-serif;
}

.prop {
}
</style>
