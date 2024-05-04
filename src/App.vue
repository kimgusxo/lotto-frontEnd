<template>
  <v-app>
    <v-main>
      <Header/>
      <PieGraph/>
      <Grid/>
      <Calendar/>
      <BaseInfo/>
      <Main/>
      <LottoMachine/>
      <RoundInfo/>
      <NumberInfo/>
      <Footer/>
    </v-main>
  </v-app>
</template>

<script>
import Grid from './components/component/Grid.vue'
import Calendar from './components/component/Calendar.vue'
import PieGraph from './components/component/PieGraph.vue'
import BaseInfo from './components/component/BaseInfo.vue'
import Main from './components/component/Main.vue'
import LottoMachine from './components/component/LottoMachine.vue'
import RoundInfo from './components/component/RoundInfo.vue'
import NumberInfo from './components/component/NumberInfo.vue'
import Header from './components/component/Header.vue'
import Footer from './components/component/Footer.vue'
export default {
  name: 'App',

  components: {
    Header,
    Grid,
    Calendar,
    PieGraph,
    BaseInfo,
    Main,
    LottoMachine,
    RoundInfo,
    NumberInfo,
    Footer
  },

  data: () => ({
    //
  }),
}
</script>

<style scoped>

</style>