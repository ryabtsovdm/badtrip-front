
<script>
export default {
  name: "newprop",
  components: {}
};
</script>

<template>
  <form class="newprop" v-on:submit="onSubmit">
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
