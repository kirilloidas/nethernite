<template>
  <MainView/>
</template>

<script>

import MainView from '@/views/MainView'

export default {
  name: 'App',
  components: {MainView}
}
</script>

<style lang='scss'>
#app {
  height: 100vh;
}
html {
  overflow: auto!important;
}
* {
  box-sizing: border-box;
}
</style>
