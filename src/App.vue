<template>
  <v-app>
    <Header/>
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Header from './components/component/Header.vue'
import Footer from './components/component/Footer.vue'
export default {
  name: 'App',

  components: {
    Header,
    Footer
  },

  data: () => ({
    //
  }),
}
</script>

<style scoped>

</style>