<template>
  <v-app>
    <v-main>
      <Header/>
      <Calendar/>
      <Footer/>
    </v-main>
  </v-app>
</template>

<script>
import Grid from './components/component/Grid.vue'
import Calendar from './components/component/Calendar.vue'
import Header from './components/component/Header.vue'
import Footer from './components/component/Footer.vue'

export default {
  name: 'App',

  components: {
    Header,
    Grid,
    Calendar,
    Footer
  },

  data: () => ({
    //
  }),
}
</script>

<style scoped>

</style>