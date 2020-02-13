<template>
  <div id="app" class="shell">
    <div class="shell__title">
      Chat Client
    </div>
    <div id="nav" class="shell__navigation">
      <router-link to="/users">Participants</router-link>
      <router-link to="/chat">Chat</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

$color-background:    #ebebeb !default;
$color-text:          #354052 !default;

$spacer:              1rem !default
$spacer-y:            1rem !default
$spacer-x:            1rem !default

html,
body {
  margin: 0;
  padding: 0;
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

  &__title {
    padding-top: $spacer-y;
    padding-bottom: $spacer-y;
  }

  &__navigation {
    display: flex;
    justify-content: space-around;

    a {
      flex: 1 1 auto;
      padding: $spacer;
    }
  }
}
</style>
