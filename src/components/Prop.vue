<script>
export default {
  name: "Prop",
  props: ["title", "text"]
};
</script>

<template>
  <div class="prop">
    <img src="" alt="" class="image">
    <div class="content">
      <p class="title">{{title}}</p>
      <p class="description">{{text}}</p>
    </div>
  </div>
</template>



<style scoped>
.prop {
  width: 100%;
  height: 200px;
}

.image {
}

.title {
}
</style>