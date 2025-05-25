<template>
  <div class="container">
    <h2>Laporan Booking</h2>
    <table border="1" cellpadding="8" cellspacing="0">
      <thead>
        <tr>
          <th>Tanggal</th>
          <th>Lapangan</th>
          <th>Jumlah Booking</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="laporan in laporanData" :key="laporan.tanggal">
          <td>{{ laporan.tanggal }}</td>
          <td>{{ laporan.lapangan }}</td>
          <td>{{ laporan.jumlah }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      laporanData: [
        { tanggal: '2025-06-01', lapangan: 'A', jumlah: 5 },
        { tanggal: '2025-06-02', lapangan: 'B', jumlah: 3 },
      ]
    }
  }
}
</script>
