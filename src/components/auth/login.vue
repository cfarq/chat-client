<template>
  <div class="login">
    <div class="login__container">
      <div class="login__container__message">
        Please enter a user name to begin using the
        chat app
      </div>
      <input v-model="userName" type="text" class="login__container__input">
      <button @click="addUser" :disabled="!isDisabled" class="login__container__btn">Proceed</button>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Login',
    data () {
      return {
        userName: ''
      }
    },

    computed: {
      /**
       * Flag to disable the send button if userName is empty
       */
      isDisabled () {
        return this.userName.length
      }
    },

    methods: {
      /**
       * First message sent by the user adds their username as a client
       */
      addUser () {
        this.$socket.sendObj(this.userName)
        this.$store.commit('SET_USER', {
          userName: this.userName
        })
        this.$router.push('/chat')
      }
    }
  }
</script>

<style lang="scss">
  .login {
    display: flex;
    flex-direction: row;
    justify-content: center;

    &__container {
      display: flex;
      flex-direction: column;
      margin-top: 3rem;
      border-radius: 4px;
      padding: 1.5rem;
      background-color: #fff;

      &__message {
        margin-bottom: 1rem;
      }

      &__input {
        border-radius: 4px;
        padding: 0.5rem;
        border: 1px solid #ccc;
        margin-bottom: 0.5rem;
      }

      &__btn {
        background-color: #4bb543;
        color: #fff;
      }
    }
  }
</style>