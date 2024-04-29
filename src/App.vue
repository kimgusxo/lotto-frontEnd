<template>
  <v-app>
    <TopNav/>
    <v-main>
      <Grid/>
      <Calendar/>
    </v-main>
  </v-app>
</template>

<script>
import Grid from './components/component/Grid.vue'
import Calendar from './components/component/Calendar.vue'
import TopNav from './components/component/TopNav.vue'

export default {
  name: 'App',

  components: {
    Grid,
    Calendar,
    TopNav
  },

  data: () => ({
    //
  }),
}
</script>

<style scoped>

</style>