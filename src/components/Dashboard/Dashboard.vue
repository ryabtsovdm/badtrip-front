
<script>
export default {
  name: "dashboard",
  components: {}
};
</script>

<template>
  <div class="dashboard">
    <div class="header">
      <!-- Имя пользователя и иконка -->
    </div>
    <div class="main">
      <div class="menu">
        <div class="option">Профиль</div>
        <div class="option">Мои предложения</div>
        <div class="option">Мои путешествия</div>
      </div>
    </div>
  </div>
</template>

<style>
.dashboard {
  background-image: linear-gradient(to right, yellow, violet);
  width: 80%;
  margin: 0 auto;
}

.header {
  width: 4rem;
}

.main {
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  padding: 0 2rem;

  font-size: 18px;
}

.menu {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.option {
  border-bottom: 1px solid #888;
  padding: 0.3rem 0.5rem;
}

.option:last-child {
  border: none;
}
</style>
