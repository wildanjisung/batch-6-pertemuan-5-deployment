<template>
  <div>
    <h1>Halaman User</h1>
    <h1>angka dari store: {{ ambilDariStore }}</h1>
    <input type="number" v-model="newAngka">
    <button @click="gantiAngka">Ganti angka</button>
  </div>
</template>

<script>
export default {
  name: 'UserView',
  data() {
    return {
      newAngka: 0
    }
  },
  methods: {
    gantiAngka() {
      this.$store.dispatch("user/changeAngkaValue", this.newAngka)
    }
  },
  computed: {
    ambilDariStore() {
      return this.$store.state.user.angka
    }
  }
}
</script>