<template>
  <v-app>
    <Header/>
    <v-main>
      <Calendar/>
    </v-main>
  </v-app>
</template>

<script>
import Grid from './components/component/Grid.vue'
import Calendar from './components/component/Calendar.vue'
import Header from './components/component/Header.vue'

export default {
  name: 'App',

  components: {
    Grid,
    Calendar,
    Header
  },

  data: () => ({
    //
  }),
}
</script>

<style scoped>

</style>