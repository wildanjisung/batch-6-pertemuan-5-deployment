<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="redirectTo('/')">navigasi ke home</button>
    <button @click="toBack">kembali</button>
    <button @click="toForward">maju</button>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      angka: 0
    }
  },
  methods: {
    redirectTo(path) {
      this.$router.replace(path)
    },
    toBack() {
      this.$router.go(-1)
    },
    toForward() {
      this.$router.go(1)
    },
  }
}
</script>
