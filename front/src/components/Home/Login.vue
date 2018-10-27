<script>
export default {
  name: "login"
};
</script>

<template>
  <div class="login">
    <form>
      Логин: <input type="text" />
      Пароль: <input type="password" />
      <button class="submit">Вход</button>
    </form>
  </div>
</template>

<style>
.login {
  font-family: "PT Sans", sans-serif;
}
</style>
