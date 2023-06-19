<template>
  <v-overlay class="loader-overlay" v-model="loader">
    <v-progress-circular class="my-loader"
                         :size="50"
                         indeterminate
                         color="primary"></v-progress-circular>
  </v-overlay>
</template>

<script>

export default {
  name: 'AppLoader',
  computed: {
    loader: {
      get() {
        return this.$store.state.app.loader > 0
      }
    }
  },
}
</script>
<style lang='scss'>
.loader-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
