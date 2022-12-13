<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
      </div>
      <div class="button-block">
        <RegistrationValidate
            v-show="registrationValidate"
            @close="registrationValidate = !registrationValidate"
        />

        <button v-show="!registrationValidate" class="btn btnPrimary" @click="registrationValidate = !registrationValidate" >Регистрация</button>
      </div>

    </section>
  </div>
</template>

<script>



import RegistrationValidate from "@/components/RegistrationValidate";

export default {
  name: 'Registration',
  components: {
    RegistrationValidate
  },
  data() {
    return {
       registrationValidate: true,
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
