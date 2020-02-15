<template>
  <div class="message">
    <div v-if="!showToolbar" class="message__text">
      <div v-if="!editingMessage">
        <span>{{ msg }}</span>
        <span v-if="edited">Edited</span>
        <button @click="toggleToolbar">...</button>
      </div>
      <div v-else>
        <input v-model="updatedMessage" type="text">
        <button @click="updateMessageText">Done</button>
      </div>
    </div>
    <div v-else>
      <button @click="editMessage">Edit</button>
      <button @click="deleteMessage">delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: {
    msg: {
      type: String,
      default: ''
    },
    id: {
      type: Number,
      default: 0
    },
    edited: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      updatedMessage: '',
      showToolbar: false,
      editingMessage: false
    }
  },
  methods: {
    toggleToolbar () {
      this.showToolbar = true
    },
    editMessage () {
      this.updatedMessage = this.msg
    },
    deleteMessage () {
      // TODO delete message logic
    },
    updateMessageText () {
      // TODO update message text logic
      this.editingMessage = false
    }
  }
}
</script>

<style scoped lang="scss">
 .message {
   &__text {

   }
 }
</style>
