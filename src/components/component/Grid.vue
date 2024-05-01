<template>
  <v-container>
    <v-row v-for="row in 15" :key="'row-' + row">
      <v-col cols="4" v-for="col in 3" :key="'col-' + col + '-row-' + row">
        <v-card class="pa-2">
          <v-card-title class="text-center"> {{ ((row - 1) * 3) + col }}번</v-card-title>
          <v-card-text>
            <graph :percentage="2.38524" :bonusPercentage="2.17542"/>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Graph from './Graph.vue';

export default {
  components: {
    Graph
  }
}
</script>

<style scoped>
.v-card-title {
  text-align: center;
}
</style>
