<template>
  <div class="login">
    <input v-model="userName" type="text">
    <button @click="addUser" :disabled="!isDisabled">Send</button>
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
      isDisabled () {
        return this.userName.length
      }
    },
    mounted () {

    },
    methods: {
      addUser () {
        this.$socket.sendObj(this.userName)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>