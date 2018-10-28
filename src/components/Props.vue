
<script>
import { mapActions } from "vuex";

export default {
  name: "props",
  computed: {
    props() {
      return this.$store.getters.getProps;
    }
  },
  methods: {
    ...mapActions({
      setProps: "setProps"
    })
  },
  created() {
    this.setProps();
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
