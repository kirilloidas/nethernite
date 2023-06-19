<!-- eslint-disable vue/no-unused-components -->
<template>
  <v-app class='wrapper'>
    <AppHeader/>
    <AppTable/>
    <AppFooter/>
    <AppLoader/>
  </v-app>
  <AppMessage/>

</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
import AppMessage from '@/components/AppDialog'
import AppTable from '@/components/AppTable'
import AppLoader from '@/components/AppLoader';

export default {
  name: 'MainView',
  // eslint-disable-next-line vue/no-unused-components
  components: {AppLoader, AppTable, AppHeader, AppFooter, AppMessage},

}
</script>

<style lang='scss'>
.wrapper {
  //height: 100%;
  //padding-bottom: 100px;
}
</style>
