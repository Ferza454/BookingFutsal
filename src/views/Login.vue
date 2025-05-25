<template>
  <div class="container">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div>
        <label>Username</label>
        <input v-model="username" required />
      </div>
      <div>
        <label>Password</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
      <p v-if="error" style="color: red">{{ error }}</p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      error: ''
    }
  },
  methods: {
    handleLogin() {
      const validUser = 'admin'
      const validPass = '1234'

      if (this.username === validUser && this.password === validPass) {
        localStorage.setItem('loggedIn', 'true')
        this.$router.push('/dashboard')
      } else {
        this.error = 'Username atau password salah'
      }
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
input {
  padding: 0.5rem;
}
button {
  padding: 0.5rem;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 4px;
}
</style>
