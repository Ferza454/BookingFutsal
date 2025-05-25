<template>
  <div class="container">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <label for="email">Email:</label>
      <input type="email" v-model="email" id="email" required />

      <label for="password">Password:</label>
      <input type="password" v-model="password" id="password" required />

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleLogin() {
      alert(`Login dengan email: ${this.email}`)
      // Di sini nanti logic autentikasi bisa kamu tambahkan
    }
  }
}
</script>
