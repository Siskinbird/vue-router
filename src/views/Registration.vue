<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <h1 class="home-title">
          Heavy homework with the implementation of login and registration windows with a switch between them</h1>
      </div>
      <div class="button-block">
        <ModalValidate
            v-show="modalValidate"
            @close="modalValidate = !modalValidate"
        />
        <button class="btn btnPrimary" >Логин</button>
        <button class="btn btnPrimary" @click="modalValidate = !modalValidate" >Регистрация</button>
      </div>

    </section>
  </div>
</template>

<script>


import modal from "@/components/UI/Modal";
import ModalValidate from "@/components/ModalValidate";

export default {
  name: 'Registration',
  components: {
    ModalValidate,
    modal
  },
  data() {
    return {
       modalValidate: false,
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
