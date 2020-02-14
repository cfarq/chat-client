<template>
  <div id="app" class="shell">
    <div class="shell__title">
      Chat Client
    </div>
    <div v-if="isUser" id="nav" class="shell__navigation">
      <router-link to="/users">Participants</router-link>
      <router-link to="/chat">Chat</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    computed: {
      /**
       * Flag to show / hide the navigation based on whether the user has set themselves
       * a username or not.
       *
       * @returns {boolean}
       * @readonly
       */
      isUser () {
        return this.$store.state.user.hasOwnProperty('userName')
      }
    }
  }
</script>

<style lang="scss">

$color-background:    #ebebeb !default;
$color-text:          #354052 !default;
$transition-base:     all 200ms ease-in-out !default;

html,
body {
  margin: 0;
  padding: 0;
}

a,
button {
  transition: $transition-base;
}

button {
  padding: 0.5rem;
  border: 0;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
}

// using the BEM standard to keep our styling from leaking
// to unwanted parts of the app.
.shell {
  background-color: $color-background;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color-text;
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-size: 16px; // base size for our rem values
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  @media only screen and (max-width: 676px) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  &__title {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  &__navigation {
    display: flex;
    justify-content: space-around;

    a {
      flex: 1 1 auto;
      padding: 1rem;
    }
  }
}
</style>
