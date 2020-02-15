<template>
  <div class="message">
    <div v-if="!showToolbar" class="message__text">
      <span>{{ msg }}</span>
      <button @click="showToolbar">...</button>
    </div>
    <div v-else>
      <button @click="editMessage(id)">Edit</button>
      <button>delete</button>
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
    }
  },
  data () {
    return {
      showToolbar: false
    }
  },
  methods: {
    toggleToolbar () {
      this.showToolbar = true
    }
  }
}
</script>

<style scoped lang="scss">

</style>
