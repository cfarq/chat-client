<template>
  <div class="home">
    <Login />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/auth/Login'

export default {
  name: 'home',
  components: {
    Login
  }
}
</script>
