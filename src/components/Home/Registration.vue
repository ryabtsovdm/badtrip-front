<script>
import { mapActions } from "vuex";

export default {
  name: "registration",
  methods: {
    ...mapActions({
      register: "register"
    }),
    onSuccessRegister() {
      this.$emit("loggedIn");
    },
    onCancelReg() {
      this.$emit("cancelReg");
    },
    onSubmit(event) {
      event.preventDefault();
      const {
        target: { email, password }
      } = event;

      this.register({
        email: email.value,
        password: password.value,
        onSuccess: this.onSuccessRegister
      });
    }
  }
};
</script>

<template>
  <div class="registration">
    <div class="container">
      <h1 class="pageheader">Регистрация</h1>
      <form class="registration-form" v-on:submit="onSubmit">
        <div class="textBox">
          <label class="label">E-mail:</label>
          <input class="inputField" type="email" name="email" />
        </div>
        <div class="textBox">
          <label class="label">Пароль:</label>
          <input class="inputField" type="password" name="password" />
        </div>
        <div class="registration__buttons">
          <button class="registration-button registration-button--submit" type="submit">
            Зарегистрироваться
          </button>
          <button class="registration-button registration-button--cancel" v-on:click="onCancelReg" type="button">
            Отмена
            </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style>
.pageheader {
  display: block;
  font-family: "PT Sans", sans-serif;
  margin: 0;
  padding: 1rem 0.5rem;
  text-transform: uppercase;
}

.registration {
  padding: 2rem 0;
}
.registration-form {
  align-items: center;
  display: flex;
  font-family: "PT Sans", sans-serif;
  flex-direction: column;
  width: 100%;
}

.textBox {
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0.3rem 0;
  width: 80%;
}

.inputField {
  border: 1px solid #ddd;
  padding: 0.5rem;
  border-radius: 0.3rem;
  width: 50%;
}

.label {
  width: 50%;
}

.registration__buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 1rem;
}

.registration-button {
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

.registration-button--submit {
  margin: 0 1rem 0 0;
}

.registration-button--submit:hover {
  background-color: #ff00a8;
  color: #fff;
}

.registration-button--cancel {
  background-color: #eee;
  border: 1px solid #aaa;
  color: #666;
  margin: 0 0 0 1rem;
}

.registration-button--cancel:hover {
  background-color: #ddd;
  color: #888;
}
</style>
