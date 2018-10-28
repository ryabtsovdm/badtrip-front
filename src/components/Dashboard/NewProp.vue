<script>
import axios from "axios";
import Logo from "../Home/Logo.vue";

const host = "http://cv15621.tmweb.ru";

export default {
  name: "newprop",
  components: {
    Logo
  },
  methods: {
    setTab: function(tab) {
      this.tab = tab;
    },
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
  },
  data: () => ({
    tab: "newprop"
  })
};
</script>

<template>
  <div class="newprop">
    <header>
      <a href="/" title="Перейти на главную страницу" v-on:click.prevent="$router.push('/')">
        <Logo />
      </a>
    </header>
    <div class="container">
      <div class="main">
        <nav class="menu">
          <div v-bind:class="{ active: tab === 'profile', option: true }" v-on:click="$router.push('/dashboard')">Профиль</div>
          <div v-bind:class="{ active: tab === 'newprop', option: true }" v-on:click="$router.push('/dashboard')">Мои предложения</div>
          <div v-bind:class="{ active: tab === 'trips', option: true }" v-on:click="$router.push('/dashboard')">Мои путешествия</div>
        </nav>
        <div class="content">
          <form v-on:submit="onSubmit">
            <div class="textBox"><label class="label">Название: </label><input class="inputField" type="text" name="title" required /></div>
            <div class="textBox"><label class="label">Минимальный бюджет: </label><input class="inputField" type="number" name="from" required /></div>
            <div class="textBox"><label class="label">Максимальный бюджет: </label><input class="inputField" type="number" name="to" required /></div>
            <div class="textBox"><label class="label">Комментарий: </label><textarea class="text" name="text" placeholder="Комментарий" required /></div>
            <div class="buttons">
              <button class="button button--submit" type="submit">
                Сохранить
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.newprop {
}

.newprop-form {
}

.newprop-form textarea,
.newprop-form input {
  width: 100%;
}
.newprop-form textarea {
  width: 100%;
}

.main {
  display: flex;
  padding: 0 2rem;
  font-size: 1rem;
}

.menu {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.option {
  border-radius: 4px;
  cursor: pointer;
  padding: 0.5rem 1rem;
  margin: 0 0 0.5rem;
  text-transform: uppercase;
}
.option:hover {
  background-color: #eee;
}

.active {
  font-weight: bold;
}

.option:last-child {
  border: none;
}

.textBox {
  margin: 0 0 1rem;
}

.param {
  width: 400px;
  margin: 0 0 0.5rem;
}

.inputField {
  color: #000;
  border: 1px solid #ddd;
  padding: 0.5rem;
  border-radius: 0.3rem;
}

.label {
  display: block;
  margin: 0 0 0.2rem;
}

.button {
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

.button--submit {
  margin: 0 1rem 0 0;
}

.button--submit:hover {
  background-color: #ff00a8;
  color: #fff;
}
</style>