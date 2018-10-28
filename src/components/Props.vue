
<script>
import { mapActions } from "vuex";
import Prop from "./Prop.vue";
import Logo from "./Home/Logo.vue";
import Footer from "./Home/Footer.vue";

export default {
  name: "props",
  components: {
    Footer,
    Logo,
    Prop,
  },
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
  <section>
    <header>
      <a href="/" title="Перейти на главную страницу" v-on:click.prevent="$router.push('/')">
        <Logo />
      </a>
    </header>
    <div class="container">
      <h1 class="pageheader">
        Все путешествия
      </h1>
      <div class="trips">
    <template v-for="(prop) in props">
      <Prop :key="prop.id" v-bind:prop="prop"></Prop>
    </template>
      </div>
    </div>
    <Footer />
  </section>
</template>

<style>
.props {
}
</style>
