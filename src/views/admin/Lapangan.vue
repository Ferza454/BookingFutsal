<template>
  <div class="container">
    <h2>Kelola Lapangan</h2>
    <form @submit.prevent="handleTambahLapangan">
      <label for="nama">Nama Lapangan:</label>
      <input type="text" v-model="namaLapangan" id="nama" required />

      <button type="submit">Tambah Lapangan</button>
    </form>

    <h3>Daftar Lapangan</h3>
    <ul>
      <li v-for="(lapangan, idx) in lapanganList" :key="idx">{{ lapangan }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      namaLapangan: '',
      lapanganList: []
    }
  },
  methods: {
    handleTambahLapangan() {
      if(this.namaLapangan.trim() !== '') {
        this.lapanganList.push(this.namaLapangan)
        this.namaLapangan = ''
      }
    }
  }
}
</script>
