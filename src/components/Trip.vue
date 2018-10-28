<script>
export default {
  name: "Trip",
  props: ["trip"]
};
</script>

<template>
    <div class="trip" v-on:click="$router.push(`trips/${trip.id}`)">
        <img src="" alt="" class="image">
        <div class="content">
            <p class="title">{{trip.title}}</p>
            <p class="description">{{trip.text}}</p>
        </div>
    </div>
</template>



<style scoped>
.trip {
  width: 100%;
  height: 200px;
}

.image {
}

.title {
}
</style>