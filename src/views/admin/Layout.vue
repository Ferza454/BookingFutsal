<template>
  <div class="admin-layout">
    <aside>
      <nav>
        <ul>
          <li><router-link to="/admin/jadwal">Kelola Jadwal</router-link></li>
          <li><router-link to="/admin/lapangan">Kelola Lapangan</router-link></li>
          <li><router-link to="/admin/laporan">Laporan</router-link></li>
        </ul>
      </nav>
    </aside>

    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.admin-layout {
  display: flex;
  min-height: 80vh;
}

aside {
  width: 220px;
  background-color: #34495e;
  color: #ecf0f1;
  padding: 1rem;
}

aside ul {
  list-style: none;
  padding: 0;
}

aside li {
  margin-bottom: 1rem;
}

aside a {
  color: #ecf0f1;
  text-decoration: none;
}

aside a.router-link-exact-active {
  font-weight: bold;
  text-decoration: underline;
}

main {
  flex-grow: 1;
  padding: 2rem;
  background: #f9f9f9;
}
</style>

<script>
export default {
  name: 'AdminLayout'
}
</script>
