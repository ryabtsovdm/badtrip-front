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
  <form class="registration" v-on:submit="onSubmit">
    <div class="textBox"><label class="label">E-mail: </label><input class="inputField" type="email" name="email" /></div>
    <div class="textBox"><label class="label">Пароль: </label><input class="inputField" type="password" name="password" /></div>
    <div class="buttons">
      <button class="button submit" type="submit">Зарегистрироваться</button>
      <button class="button cancel" v-on:click="onCancelReg" type="button">Отмена</button></div>
  </form>
</template>

<style>
.registration {
  font-family: "PT Sans", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
}

.textBox {
  width: 80%;
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
  width: 50%;
}

.buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1rem;
  width: 80%;
}

.button {
  padding: 0.2rem;
  font-size: 1.3rem;
}

.submit {
}

.cancel {
}
</style>
