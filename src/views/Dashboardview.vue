<template>
  <div class="container">
    <h2>Selamat datang di Dashboard!</h2>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem('loggedIn')
      this.$router.push('/login')
    }
  }
}
</script>
