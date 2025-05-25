<script setup>
</script>

<template>
  <div>
    <h1>Booking Lapangan Futsal</h1>
    <nav>
      <a href="/dashboard">Dashboard</a> |
      <a href="/jadwal">Jadwal</a> |
      <a href="/booking">Booking</a> |
      <a href="/riwayat">Riwayat</a> |
      <a href="/profil">Profil</a> |
      <a href="/admin/jadwal">Admin: Jadwal</a>
    </nav>
    <router-view />
  </div>
</template>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
