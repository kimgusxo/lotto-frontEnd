<template>
  <v-app>
    <TopNav/>
    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TopNav from './components/component/TopNav.vue'

export default {
  name: 'App',

  components: {
    HelloWorld,
    TopNav
  },

  data: () => ({
    //
  }),
}
</script>

<style scoped>

</style>