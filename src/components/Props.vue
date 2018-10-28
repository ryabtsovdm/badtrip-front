
<script>
import { mapActions } from "vuex";
import Prop from "./Prop.vue";

export default {
  name: "props",
  components: { Prop },
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
      <Prop :key="prop.id" v-bind:prop="prop"></Prop>
    </template>
  </div>
</template>

<style>
.props {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
}
</style>
