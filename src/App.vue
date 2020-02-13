<template>
  <div id="app">
    <div id="nav">
      <router-link to="/chat">Chat</router-link>
      <router-link to="/users">Users</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

  // const SERVER_LOCATION = 'ws://127.0.0.1:1337'
  //
  // window.webSocket = window.WebSocket || window.MozWebSocket
  //
  // let connection = new WebSocket(SERVER_LOCATION)

  // connection.onopen = () => {
  //   console.log('connection ready')
  // }
  //
  // connection.onerror = (error) => {
  //   console.log(error, 'on error')
  // }
  //
  // connection.onmessage = (message) => {
  //   try {
  //     let json = JSON.parse(message.data)
  //   } catch (e) {
  //     console.log('error', message.data)
  //     return
  //   }
  //   // dispatch action to get messages
  // }


  export default {
    data () {
      return {

      }
    },
    beforeRouteEnter (to, from, next) {
      next()
    },
    methods: {

    }
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
