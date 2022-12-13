<template>
  <modal
      title="Авторизация"
      @close="onSubmit()"
  >
    <!-- body -->
    <div slot="body">
      <form @submit.prevent="onSubmit">
        <!--E-mail-->
        <div class="form-item" :class="{errorInput: $v.email.$error}">
          <label>Email:</label>
          <p class="errorText" v-if="!$v.email.required">Field is required</p>
          <p class="errorText" v-if="!$v.email.email">E-mail is not correct !</p>
          <input v-model="email"
                 :class="{error: $v.email.$error}"
                 @change="$v.email.$touch()">
        </div>

        <!--Password-->
        <div class="form-item" :class="{errorInput: $v.password.$error}">
          <label>Password:</label>
          <p class="errorText" v-if="!$v.password.required">Field is required</p>
          <p class="errorText" v-if="!$v.password.minLength">Password length must be more than {{ $v.password.$params.minLength.min }} !</p>
          <input v-model="password"
                 type="password"
                 :class="{error: $v.password.$error}"
                 @change="$v.password.$touch()">
        </div>
        <button class="btn btnPrimary">Войти</button>
        <div class="registry-link">
          <router-link to="/registration">Мне нужен аккаунт</router-link>
        </div>
      </form>
    </div>
  </modal>
</template>
<script>
import {required, minLength, email} from 'vuelidate/lib/validators'
import modal from '@/components/UI/Modal.vue'
export default {
  components: {modal},
  data() {
    return {
      email: '',
      password: ''
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    }
  },
  methods: {
    onSubmit() {
      this.$v.$touch()
      if(!this.$v.$invalid) {
        const  user = {
          email: this.email,
          password: this.password
        }
        console.log(user);
      }
      this.email = ''
      this.$v.$reset()
      this.password = ''
      this.$emit('close')
    },
  }
}
</script>
<style lang="scss">
.form-item .errorText {
  display: none;
  margin-bottom: 8px;
  font-size: 13px;
  color: #DE4040;
}

.form-item {
  position: relative;
  display: flex;
  align-items: baseline;
  justify-content: center;

  &.errorInput .errorText {
    display: block;
    position: absolute;
    top: 23px;
    right: 23px;
  }
  input {
    height: auto;
    padding: 10px;
    margin: 10px;
  }
  label {
    font-size: 14px;
  }
}
input.error {
  border-color: #DE4040;
}
.registry-link {
  font-size: 16px;
  margin-top: 20px;
  color: #999999;
  text-decoration: underline;
  font-weight: bold;
  cursor: pointer;
  transition: .3s ease-in-out;
  &:hover {
    color: #5247e7;
  }
}
</style>