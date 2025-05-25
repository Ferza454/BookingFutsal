<template>
  <div class="container">
    <h2>Register</h2>
    <form @submit.prevent="handleRegister">
      <label for="name">Nama Lengkap:</label>
      <input type="text" v-model="name" id="name" required />

      <label for="email">Email:</label>
      <input type="email" v-model="email" id="email" required />

      <label for="password">Password:</label>
      <input type="password" v-model="password" id="password" required />

      <button type="submit">Daftar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    handleRegister() {
      alert(`Registrasi dengan email: ${this.email}`)
      // Logic pendaftaran bisa ditambahkan di sini
    }
  }
}
</script>
