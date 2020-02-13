<template>
  <div class="login">
    <input v-model="userName" type="text">
    <button @click="addUser" :disabled="!isDisabled">Proceed</button>
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
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>