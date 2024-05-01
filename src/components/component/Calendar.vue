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
  import { VCalendar } from 'vuetify/lib/labs/components.mjs'
  import { useDate } from 'vuetify'

  export default {
    components: {
      VCalendar
    },
    data: () => ({
      type: 'month',
      weekday: [0, 1, 2, 3, 4, 5, 6],
      value: [new Date()],
      events: []
    }),
    mounted() {
      this.generateLottoEvents();
    },
    methods: {
      generateLottoEvents() {
        const adapter = useDate();
        const start = adapter.startOfDay(adapter.startOfMonth(new Date()));
        const end = adapter.endOfDay(adapter.endOfMonth(new Date()));

        let currentDate = start;
        while (currentDate <= end) {
          if (currentDate.getDay() === 6) { // 6 is Saturday
            this.events.push({
              title: '로또 추첨일',
              start: new Date(currentDate),
              end: new Date(currentDate),
              color: this.randomColor(), // Assign a random color to each event
              allDay: true
            });
          }
          currentDate = adapter.addDays(currentDate, 1);
        }
      },
      randomColor() {
        const colors = ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'];
        return colors[Math.floor(Math.random() * colors.length)];
      }
    },
  }
</script>

<style>

</style>
