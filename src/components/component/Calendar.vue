<template>
  <v-container>
    <v-calendar
      v-model="value"
      :events="events"
      :event-color="getEventColor"
    ></v-calendar>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    value: new Date().toISOString().substr(0, 10),  // 현재 날짜
    events: [
      { name: 'Event 1', start: '2024-05-05', end: '2024-05-05', color: 'blue' },
      { name: 'Event 2', start: '2024-05-18', end: '2024-05-18', color: 'green' }
    ]
  }),
  methods: {
    getEventColor(event) {
      return event.color;
    }
  }
}
</script>


<style>

</style>