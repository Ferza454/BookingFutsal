<template>
  <div class="container">
    <h2>Riwayat Booking</h2>
    <ul>
      <li v-for="booking in bookings" :key="booking.id">
        {{ booking.tanggal }} - {{ booking.jam }} - Lapangan {{ booking.lapangan }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookings: [
        { id: 1, tanggal: '2025-06-01', jam: '08:00 - 09:00', lapangan: 'A' },
        { id: 2, tanggal: '2025-06-05', jam: '10:00 - 11:00', lapangan: 'B' }
      ]
    }
  }
}
</script>
