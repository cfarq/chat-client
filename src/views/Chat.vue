<template>
  <div class="chat">
    <div class="chat__message-list">
      <Message v-for="message in socketMessages" :msg="message.data.text" :id="message.data.id" />
    </div>
    <div class="chat__editor">
      <input v-model="currentMessage" type="text">
      <button :disabled="!canSendMessage" @click="submitMessage">Send</button>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Message from '@/components/chat/Message'

  export default {
    components: {
      Message
    },
    data () {
      return {
        currentMessage: ''
      }
    },
    computed: {
      ...mapGetters([
        'socketMessages'
      ]),
      canSendMessage () {
        return this.currentMessage.length
      }
    },
    methods: {
      submitMessage () {
        this.$socket.sendObj(this.currentMessage)
      }
    }
  }
</script>

<style lang="scss">
  .chat {
    &__message-list {

    }

    &__editor {

    }
  }
</style>