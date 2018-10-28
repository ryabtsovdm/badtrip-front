<script>
export default {
  name: "Prop",
  props: ["title", "text"],
  data: () => ({
    text: ""
  })
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
  display: flex;

  width: 100%;
  height: 200px;
}

.image {
  height: 100%;
}

.title {
}
</style>