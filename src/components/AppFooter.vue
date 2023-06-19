<template>
  <v-footer
      color="secondary"
      padless
      class="my-footer"
  >
    <v-container>
      <v-layout align-center justify-center>
        <v-container>
          <v-row no-gutters>
            <v-col
                cols="12"
                sm="4"
            >
              <span class="ma-2 pa-2">
                &copy; {{ new Date().getFullYear() }} My Website
              </span>
            </v-col>
            <v-col cols="12"
                   sm="4">
              <span class="ma-2 pa-2">
                Pereguda Kirill
              </span>
            </v-col>
            <v-col cols="12"
                   sm="4">
              <a class="link-button" href="https://github.com/kirilloidas" target="_blank">Go to git</a>
            </v-col>
          </v-row>
        </v-container>
      </v-layout>
    </v-container>
  </v-footer>
</template>


<script>
export default {
  name: 'AppFooter'
}
</script>

<style lang='scss'>
.my-footer {
  max-height: 100px;
  position: fixed;
  bottom: -3px;
  width: 100%;
}
</style>
