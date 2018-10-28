
<script>
import { mapActions } from "vuex";
import Prop from "./Prop.vue";

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
      <Prop :key="prop.id" v-bind:title="prop.title" v-bind:text="prop.text"></Prop>
    </template>
  </div>
</template>

<style>
.props {
}
</style>
