<script>
import axios from "axios";

const host = "http://cv15621.tmweb.ru";

export default {
  name: "PropPage",
  computed: {
    id: function() {
      return this.$route.params.id;
    }
  },
  data: () => ({
    prop: {}
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
    <div class="prop">
        <img src="" alt="" class="image">
        <div class="content">
            <p class="title">{{prop.title}}</p>
            <p class="description">{{prop.text}}</p>
        </div>
    </div>
</template>


<style scoped>
</style>