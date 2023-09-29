<template>
  <h1>Halaman User Detail : {{ id }}</h1>
</template>

<script>
export default {
  name: 'UserDetailView',
  computed: {
    id() {
      return this.$route.params.id
    }
  }
}
</script>