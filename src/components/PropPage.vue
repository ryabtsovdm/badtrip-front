<script>
import axios from "axios";
import Logo from "./Home/Logo.vue";
import Footer from "./Home/Footer.vue";

const host = "http://cv15621.tmweb.ru";

export default {
  name: "PropPage",
  computed: {
    id: function() {
      return this.$route.params.id;
    }
  },
  components: {
    Footer,
    Logo,
  },
  data: () => ({
    prop: null,
  }),
  methods: {
    setProp: function(prop) {
      this.prop = prop;
    }
  },
  created() {
    const Authorization = localStorage.getItem("token");

    axios({
      url: `${host}/api/project/${this.id}`,
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${Authorization}`
      }
    }).then(({ data }) => {
      /** */ console.log(data);
      this.setProp(data);
    });
  }
};
</script>

<template>
  <div>
    <header>
      <a href="/" title="Перейти на главную страницу" v-on:click.prevent="$router.push('/')">
        <Logo />
      </a>
    </header>
    <div class="container">
        <img src="" alt="" class="image">
        <div class="content">
          <h1 v-if="prop !== null" class="pageheader">
            {{ prop.title }}
          </h1>
          <div v-if="prop !== null" class="project-page__text">
            {{ prop.text }}
          </div>
        </div>
    </div>
    <Footer />
  </div>
</template>


<style scoped>
.project-page__text {
  padding: 2rem 0;
}
</style>