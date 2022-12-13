<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
      </div>
      <div class="button-block">
        <LoginValidate
            v-show="loginValidate"
            @close="loginValidate = !loginValidate"
        />
        <button v-show="!loginValidate" class="btn btnPrimary" @click="loginValidate = !loginValidate">Авторизация</button>
      </div>
    </section>
  </div>
</template>

<script>


import modal from "@/components/UI/Modal";
import ModalValidate from "@/components/ModalValidate";
import LoginValidate from "@/components/LoginValidate";

export default {
  name: 'Login',
  components: {
    LoginValidate
  },
  data() {
    return {
       loginValidate: true,
    }
  }
}
</script>
<style lang="scss" scoped>
.home-title {
  text-align: center;
}
.button-block {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    margin-right: 20px;
  }
}
</style>
