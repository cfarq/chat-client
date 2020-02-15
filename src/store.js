/* eslint-disable */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    socket: {
      isConnected: false,
      message: '',
      reconnectError: false,
    },
    user: {},
    messages: [],
    usersList: []
  },
  getters: {
    socketMessages (state) {
      return state.messages
    }
  },
  mutations: {
    // send message

    // delete message

    // edit message

    /**
     * Updates "user" state on commit
     *
     * @param state
     * @param payload
     * @constructor
     */
    SET_USER (state, payload) {
      state.user = payload
    },

    // Mutations required by the websocket-vue bridge plugin
    SOCKET_ONOPEN (state, event)  {
      Vue.prototype.$socket = event.currentTarget
      state.socket.isConnected = true
    },
    SOCKET_ONCLOSE (state, event)  {
      state.socket.isConnected = false
      // resets the view back to the user name view if this is fired
      this.$router.push('/')
    },
    SOCKET_ONERROR (state, event)  {
      console.error(state, event)
    },
    // default handler called for all methods
    SOCKET_ONMESSAGE (state, message)  {
      // state.socket.message = message
      state.messages.push(message)
    },
    // mutations for reconnect methods
    SOCKET_RECONNECT(state, count) {
      console.info(state, count)
    },
    SOCKET_RECONNECT_ERROR(state) {
      state.socket.reconnectError = true;
    },

  },
  actions: {
    // get message history from server

    // get users from server
  }
})
