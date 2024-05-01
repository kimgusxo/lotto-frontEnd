<template>
  <div>
    <v-sheet>
      <v-calendar
        ref="calendar"
        v-model="value"
        :events="events"
        :view-mode="type"
        :weekdays="weekday"
      ></v-calendar>
    </v-sheet>
  </div>
</template>

<script>
import { VCalendar } from 'vuetify/labs/VCalendar'

export default {
  components: {
    VCalendar
  },
}
</script>


<style>

</style>