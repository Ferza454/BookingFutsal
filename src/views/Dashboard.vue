<template>
  <div class="container">
    <h2>Dashboard</h2>
    <p>Selamat datang di aplikasi Booking Lapangan Futsal!</p>
    
    <section>
      <h3>Ringkasan</h3>
      <ul>
        <li>Total Booking Bulan Ini: 12</li>
        <li>Lapangan Tersedia: 4</li>
        <li>Booking Aktif: 3</li>
      </ul>
    </section>

    <section>
      <h3>Menu Cepat</h3>
      <ul>
        <li><router-link to="/jadwal">Lihat Jadwal</router-link></li>
        <li><router-link to="/booking">Booking Lapangan</router-link></li>
        <li><router-link to="/profil">Profil Saya</router-link></li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Dashboard'
}
</script>
