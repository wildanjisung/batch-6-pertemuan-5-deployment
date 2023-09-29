<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/setting">Setting</router-link> |
      <router-link to="/setting/privacy">Setting - Privacy </router-link> |
      <router-link to="/user">User</router-link> |
      <router-link to="/user/123">User Detail</router-link>
    </nav>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayoutView'
}
</script>

<style scoped>
.container {
  margin-left: 50px;
}
</style>