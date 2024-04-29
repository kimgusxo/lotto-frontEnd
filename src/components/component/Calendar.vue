<template>
  <v-container>
    <!-- 캘린더 컴포넌트 -->
    <v-calendar
      v-model="focus"
      :events="events"
      :event-color="getEventColor"
      @click:event="showEvent"
      @change="updateRange"
    ></v-calendar>

    <!-- 이벤트 상세 정보를 보여주는 대화 상자 -->
    <v-dialog
      v-model="selectedEvent"
      max-width="400px"
    >
      <v-card>
        <v-card-title>
          {{ selectedElement.name }}
        </v-card-title>
        <v-card-text>
          <span>{{ selectedElement.details }}</span>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="primary"
            text
            @click="selectedEvent = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    focus: '',
    events: [
      { name: 'Meeting', start: '2023-10-14', end: '2023-10-14', color: 'blue', details: 'Meeting with the team' },
      { name: 'Vacation', start: '2023-10-18', end: '2023-10-22', color: 'green', details: 'Vacation time!' },
      { name: 'Conference', start: '2023-10-25', end: '2023-10-28', color: 'red', details: 'Attending a conference' },
    ],
    selectedEvent: false,
    selectedElement: {}
  }),
  methods: {
    getEventColor(event) {
      return event.color;
    },
    showEvent({ nativeEvent, event }) {
      this.selectedElement = event;
      this.selectedEvent = true;
      nativeEvent.stopPropagation();
    },
    updateRange({ start, end }) {
      // Here you could update the events based on the visible range
    }
  }
};
</script>
