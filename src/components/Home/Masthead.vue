<script>
export default {
  name: "masthead",
  methods: {
    onClickRegisterButton() {
      this.$emit("registerClicked");
    },
    onClickLoginButton() {
      this.$emit("loginClicked");
    }
  }
};
</script>

<template>
  <div class="masthead">
    <div class="main">
      <img class="cat" src="./images/cat.jpg" />
      <div class="promo">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis nisi maxime culpa suscipit tempore, ea distinctio iusto molestias, eos omnis aut ratione vel! Cupiditate, reiciendis asperiores rem, voluptatem reprehenderit explicabo similique inventore saepe nihil deleniti, rerum tenetur ea aliquam minus consectetur. Amet consequuntur, necessitatibus sed cumque quisquam quae expedita voluptate labore iure a asperiores reiciendis soluta, impedit dolorem nostrum natus culpa unde! Totam, quae dolore repellat earum quis neque illum sint fugiat unde. Quidem error distinctio itaque aliquid, obcaecati odio soluta aliquam alias ducimus deleniti illo. Praesentium molestias sequi eaque vel, dolorem fugit atque voluptas magni debitis, odio ex repellat!</div>
    </div>
    <button class="promoButton" type="button" v-on:click="onClickRegisterButton">Регистрация</button>
    <button class="promoButton" type="button" v-on:click="onClickLoginButton">Вход</button>
  </div>
</template>

<style>
.masthead {
  font-family: "PT Sans", sans-serif;
}

.main {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5rem;
}

.cat {
  border-radius: 5rem;
  width: 50%;
}

.promo {
  padding: 1rem;
}

.promoButton {
  display: inline;

  padding: 1rem;

  font-size: 2rem;
  font-weight: 700;

  border: 1px solid #ccc;
  border-radius: 0.5rem;
}

.promoButton:last-child {
  margin-left: 4rem;
}
</style>
