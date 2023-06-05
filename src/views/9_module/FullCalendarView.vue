<template>
  <div>
    <FullCalendar :options="calendarOptions" />
  </div>
</template>
<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth',
        dateClick: this.handleDateClick,
        events: [
          { title: 'event 1', date: '2023-06-01' },
          { title: 'event 2', date: '2023-05-31' }
        ],
        headerToolbar: {
          left: 'dayGridMonth, timeGridWeek, timeGridDay custom1',
          center: 'title',
          right: 'custom2 prevYear, prev, next, nextYear'
        }
      }
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    handleDateClick(e) {
      console.log(e)
    }
  }
}
</script>
