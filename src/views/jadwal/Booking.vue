<template>
  <div class="container">
    <h2>Booking Lapangan</h2>
    <form @submit.prevent="handleBooking">
      <label for="tanggal">Tanggal:</label>
      <input type="date" v-model="tanggal" id="tanggal" required />

      <label for="jam">Jam:</label>
      <select v-model="jam" id="jam" required>
        <option disabled value="">Pilih jam</option>
        <option>08:00 - 09:00</option>
        <option>09:00 - 10:00</option>
        <option>10:00 - 11:00</option>
        <option>11:00 - 12:00</option>
        <option>12:00 - 13:00</option>
      </select>

      <button type="submit">Booking</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tanggal: '',
      jam: ''
    }
  },
  methods: {
    handleBooking() {
      alert(`Booking lapangan pada ${this.tanggal} jam ${this.jam}`)
      // Logic booking bisa dikembangkan di sini
    }
  }
}
</script>
