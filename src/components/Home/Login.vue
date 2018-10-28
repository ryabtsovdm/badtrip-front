<script>
import { mapActions } from "vuex";
import Logo from "./Logo.vue";

export default {
  name: "Login",
  components: {
    Logo
  },
  methods: {
    ...mapActions({
      login: "login"
    }),
    onSuccessLogin() {
      this.$router.push("/dashboard");
    },
    onCancelLogin() {
      this.$emit("cancelLogin");
    },
    onSubmit(event) {
      event.preventDefault();
      const {
        target: { email, password }
      } = event;

      this.login({
        email: email.value,
        password: password.value,
        onSuccess: this.onSuccessLogin
      });
    }
  }
};
</script>

<template>
  <div class="login">
    <div class="container">
      <h1 class="pageheader">Вход</h1>
      <form class="login-form" v-on:submit="onSubmit">
        <div class="textBox">
          <label class="label">E-mail: </label>
          <input class="inputField" type="email" name="email" required />
        </div>
        <div class="textBox">
          <label class="label">Пароль: </label>
          <input class="inputField" type="password" name="password" required />
        </div>
        <div class="login__buttons">
          <button class="login-button login-button--submit" type="submit">
            Войти
          </button>
          <button class="login-button login-button--cancel" v-on:click="onCancelLogin" type="button">
            Отмена
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style>
.login {
  padding: 2rem 0;
}
.login-form {
  font-family: "PT Sans", sans-serif;
  width: 100%;
}

.textBox {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3rem 0;
}

.inputField {
  width: 50%;
  border: 1px solid #ddd;
  padding: 0.5rem;
  border-radius: 0.3rem;
}

.label {
  padding: 0 1rem 0 0;
  text-align: right;
  width: 50%;
}

.login__buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 1rem;
}

.login-button {
  background-color: #fff;
  border: 1px solid #ff00a8;
  border-radius: 0.5rem;
  cursor: pointer;
  display: inline;
  font-size: 1rem;
  font-weight: 400;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  transition: background-color 0.2s linear, color 0.2s linear;
}

.login-button--submit {
  margin: 0 1rem 0 0;
}

.login-button--submit:hover {
  background-color: #ff00a8;
  color: #fff;
}

.login-button--cancel {
  background-color: #eee;
  border: 1px solid #aaa;
  color: #666;
  margin: 0 0 0 1rem;
}

.login-button--cancel:hover {
  background-color: #ddd;
  color: #888;
}
</style>