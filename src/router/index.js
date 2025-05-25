import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/Dashboard.vue'
import Profil from '../views/Profil.vue'
import Riwayat from '../views/Riwayat.vue'
import Jadwal from '../views/jadwal/Jadwal.vue'
import Booking from '../views/jadwal/Booking.vue'

import AdminLayout from '../views/admin/Layout.vue'
import KelolaJadwal from '../views/admin/Jadwal.vue'
import KelolaLapangan from '../views/admin/Lapangan.vue'
import Laporan from '../views/admin/Laporan.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/dashboard', component: Dashboard },
  { path: '/profil', component: Profil },
  { path: '/riwayat', component: Riwayat },
  { path: '/jadwal', component: Jadwal },
  { path: '/booking', component: Booking },
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      { path: 'jadwal', component: KelolaJadwal },
      { path: 'lapangan', component: KelolaLapangan },
      { path: 'laporan', component: Laporan }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
