<template>
  <div class="login-page">
      <div class="row">
        <div class="left-side col col-lg-7 col-sm-0">
          <img alt="MedChain logo" src="@assets/images/logo.svg" class="logo">
          <div class="login_image">
            <img src="@assets/images/doctors.svg" alt="" srcset="">
          </div>
        </div>
        <div class="col col-lg-5 col-md-12">
          <div class="login-form">
            <div class="form">
              <img alt="MedChain logo" src="@assets/images/logo.svg" class="m-logo">
              <div class="welcome">
                <h1>Seja bem-vindo!</h1>
                <h4>Faça login para continuar.</h4>
              </div>
              <Alert color="danger" v-if="clickLogin > 0 && $store.state.auth.formError">
                {{$store.state.auth.msgError}}
              </Alert>
              <Input :class="getFormClass()"
              v-model="inputUser" type="text" placeholder="Usuário"/>

              <Input :class="getFormClass()"
              class="mb-0"
              v-model="inputPassword" type="password" placeholder="Senha"/>

              <a href="#" class="forgot-pass">Esqueci a senha</a>
              <Button class="blue-gradient" @click="login">Entrar</Button>
              <div class="sign-up">
                <p>Ainda não tem uma conta? <a href="#">Crie uma!</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Input from '@atom/Input'
import Alert from '@atom/Alert'
import Button from '@atom/Button'

export default {
  name: 'Login',
  components: {
    Input,
    Button,
    Alert
  },
  data() {
    return {
      inputUser: null,
      inputPassword: null,
      clickLogin: 0
    }
  },
  computed: {
    userLogged() {
      return this.$store.state.auth.userToken;
    },
    ...mapGetters({
      errorMsg: 'msgError',
      error: 'formError'
    })
  },
  watch: {
    userLogged: function () {
      if(this.userLogged !== undefined) {
        return this.$router.push('/medical');
      }
    }
  },
  methods: {
    login() {
      if(!this.inputUser) return this.formError = true;
      if(!this.inputPassword) return this.formError = true;

      this.clickLogin =+ 1;

      this.$store.dispatch('authenticate', {
        user: this.inputUser,
        password: this.inputPassword
      });
    },
    getFormClass(){
      return this.clickLogin > 0 && this.$store.state.auth.formError ? 'error' : ''
    }
  }
}
</script>

<style lang="sass" scoped>
.error
  border: 1px solid $red !important
  &::placeholder
    color: $red
.ok
  border: 1px solid $green !important
  &::placeholder
    color: unset

.container
  width: 100%
.row
  margin: 0
.col
  padding: 0
.login-page
  position: relative
  min-height: 100%
  background-image: linear-gradient(to bottom left, $white, $soft-white)
  .col
    height: 100vh
  .left-side
    .logo
      padding: $space-2 0
      margin-left: $space-4
      max-width: 200px
      position: absolute
      @media only screen and (max-width: 768px)
        padding: $space-3 0
        display: block
        position: relative
        margin: 0 auto
    @media only screen and (max-width: 768px)
      display: none
    .login_image
      position: relative
      display: flex
      height: 100%
      img
        height: 85%
        align-self: flex-end
        padding: $space-2

  .login-form
    padding: $space-2
    height: 100%
    min-height: 100%
    .form
      display: flex
      flex-direction: column
      align-items: center
      justify-content: center
      height: 100%
      background-color: $white
      box-shadow: -3px 2px 16px -6px transparentize($black, .7)
      border-radius: $space-1
      border: 1px solid transparentize($black, .9)
      @media only screen and (max-width: 768px)
        position: relative
      .m-logo
        display: none
        @media only screen and (max-width: 768px)
          display: block
          width: 200px
          margin-bottom: $space-3 
          padding: $space-2
        @media only screen and (max-height: 500px)
          opacity: 0
      .welcome
        text-align: center
        margin-bottom: $space-4
        width: 80%
        @media only screen and (max-width: 768px)
          position: relative
        h1
          font-weight: 600
          font-size: 36px
          @media only screen and (max-width: 768px)
            font-size: 24px

        h4
          font-weight: 500
          font-size: 18px
          @media only screen and (max-width: 768px)
            font-size: 14px
        h1, h4
          margin-bottom: $space-1 /2
          color: $primary

      input
        margin-bottom: $space-2

      .forgot-pass
        font-size: 14px
        align-self: flex-end
        margin-right: $space-6
        margin-bottom: $space-2
        margin-top: $space-1
        font-weight: 500
        color: $primary
        &:hover
          color: lighten($primary, 15)

      Button
        display: inline-block
        height: 40px
        line-height: 40px
        vertical-align: middle
        -webkit-tap-highlight-color: transparent
        width: 80%
        margin-top: $space-1

      .sign-up
        margin-top: $space-2
        a
          color: $secondary
          font-weight: 500
          &:hover
            color: lighten($secondary, 15)
        p
          color: $primary
          font-weight: 400
</style>