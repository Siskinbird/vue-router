<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <h1 class="home-title">Easy homework with password validation and validation form cleanup</h1>
        <div class="button-block">

          <!-- Modal with validate-->
          <button class="btn btnPrimary" @click="modalValidate = !modalValidate">Modal validate</button>

          <modalValidate
              v-show="modalValidate"
              @close="modalValidate = !modalValidate"
          />
        </div>


      </div>
    </section>
  </div>
</template>

<script>


import modal from "@/components/UI/Modal";
import ModalValidate from "@/components/ModalValidate";

export default {
  name: 'Easy',
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
  align-items: center;
  justify-content: center;
}
</style>
