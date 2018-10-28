
<script>
import axios from "axios";
const host = "http://cv15621.tmweb.ru";

export default {
  name: "newprop",
  methods: {
    onSubmit(event) {
      event.preventDefault();
      const {
        target: { title, from, to, text }
      } = event;

      const Authorization = localStorage.getItem("token");

      axios({
        url: `${host}/api/projects/create`,
        method: "POST",
        data: {
          title: title.value,
          budget_from: from.value,
          budget_to: to.value,
          text: text.value
        },
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${Authorization}`
        }
      }).then(() => this.$router.push("/props"));
    },
    onCancelCreate() {
      this.$router.go(-1);
    }
  }
};
</script>

<template>
  <form class="newprop" v-on:submit="onSubmit">
    <div class="textBox"><label class="label">Название: </label><input class="inputField" type="text" name="title" /></div>
    <div class="textBox"><label class="label">Минимальный бюджет: </label><input class="inputField" type="number" name="from" /></div>
    <div class="textBox"><label class="label">Максимальный бюджет: </label><input class="inputField" type="number" name="to" /></div>
    <div class="textBox"><label class="label">Комментарий: </label><textarea class="text" name="text" placeholder="Комментарий" /></div>
    <div class="buttons">
      <button class="button submit" type="submit">Сохранить</button>
      <button class="button cancel" v-on:click="onCancelCreate" type="button">Отмена</button></div>
  </form>
</template>

<style>
.newprop {
}
</style>
