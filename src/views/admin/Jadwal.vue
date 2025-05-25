<template>
  <div class="container">
    <h2>Kelola Jadwal</h2>
    <form @submit.prevent="handleTambah">
      <label for="tanggal">Tanggal:</label>
      <input type="date" v-model="tanggal" id="tanggal" required />

      <label for="jam">Jam:</label>
      <input type="text" v-model="jam" id="jam" placeholder="Contoh: 08:00 - 09:00" required />

      <button type="submit">Tambah Jadwal</button>
    </form>

    <h3>Daftar Jadwal</h3>
    <ul>
      <li v-for="(jadwal, index) in jadwalList" :key="index">
        {{ jadwal.tanggal }} - {{ jadwal.jam }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tanggal: '',
      jam: '',
      jadwalList: []
    }
  },
  methods: {
    handleTambah() {
      this.jadwalList.push({ tanggal: this.tanggal, jam: this.jam })
      this.tanggal = ''
      this.jam = ''
    }
  }
}
</script>
