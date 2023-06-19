<template>
  <v-container width="500" class="mx-auto my-header">
    <v-form @submit.prevent="getPackages">
      <v-row>
        <v-col
            cols="12"
            md="12"
        >
          <v-text-field
              color="success"
              v-model="packageName"
              :error-messages="message"
              label="Package name"
              required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn :disabled="!packageName || loader > 0" type="submit">Find packages</v-btn>
    </v-form>
  </v-container>


</template>

<script>
import {mapGetters} from 'vuex'


export default {
  name: 'AppHeader',
  computed: {
    ...mapGetters(['message', 'loader', 'currentPage', 'pageSize']),
    packageName: {
      get() {
        return this.$store.state.packagesData.packageName
      },
      set(value) {
        if (this.message) {
          this.$store.commit('setMessage', '')
        }
        this.$store.commit('setPackageName', value)
        this.$store.commit('setCurrentPage', 1)
      }
    }
  },
  methods: {
    getPackages() {
      if (this.packageName) {
        const packageName = this.packageName
        const from = Math.ceil((this.currentPage - 1) * this.pageSize)
        this.$store.dispatch('getPackagesByName', {packageName, from})
      }
    }
  }
}
</script>

<style lang='scss'>

</style>
