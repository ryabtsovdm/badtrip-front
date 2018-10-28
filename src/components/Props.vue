
<script>
export default {
  name: "props",
  computed: {
    props() {
      return this.$store.getters.getProps.projects;
    }
  }
};
</script>

<template>
  <div class="props">
    <template v-for="(prop) in props">
      <div :key="prop.id" class="prop">
        <div class="prop__title">
          {{ prop.title }}
        </div>
        <div class="prop__text">
          {{ prop.text }}
        </div>
      </div>
    </template>
  </div>
</template>

<style>
.props {
}
</style>
