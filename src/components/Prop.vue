<script>
export default {
  name: "Prop",
  props: ["prop"]
};
</script>

<template>
  <div class="prop" v-on:click="$router.push(`props/${prop.id}`)">
    <img src="" alt="" class="image">
    <div class="content">
      <p class="title">{{prop.title}}</p>
      <p class="description">{{prop.text}}</p>
    </div>
  </div>
</template>



<style scoped>
.prop {
  width: 100%;
  padding: 1rem;
}

.image {
}

.title {
}
</style>