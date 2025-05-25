<template>
  <div class="container">
    <h2>Profil</h2>
    <form @submit.prevent="handleUpdate">
      <label for="nama">Nama:</label>
      <input type="text" v-model="nama" id="nama" required />

      <label for="email">Email:</label>
      <input type="email" v-model="email" id="email" required disabled />

      <button type="submit">Update Profil</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nama: 'Budi Santoso',
      email: 'budi@example.com'
    }
  },
  methods: {
    handleUpdate() {
      alert(`Profil diperbarui: ${this.nama}`)
      // Logic update profil di sini
    }
  }
}
</script>
