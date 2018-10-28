<script>
export default {
  name: "Prop",
  props: ["prop"]
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
.prop {
  width: 100%;
  height: 200px;
}

.image {
}

.title {
}
</style>