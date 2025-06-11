<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title class="d-flex align-center justify-space-between">
            <h3>Project Calendar</h3>
            <v-btn
              color="primary"
              @click="showAddEventDialog = true"
              prepend-icon="mdi-plus"
            >
              Add Event
            </v-btn>
          </v-card-title>

          <v-card-text>
            <!-- FullCalendar Component -->
            <FullCalendar
              :options="calendarOptions"
              ref="fullCalendar"
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Add Event Dialog -->
    <v-dialog v-model="showAddEventDialog" max-width="600px">
      <v-card>
        <v-card-title>Add New Event</v-card-title>
        <v-card-text>
          <v-form ref="eventForm" v-model="eventFormValid">
            <v-text-field
              v-model="newEvent.title"
              label="Event Title"
              :rules="[v => !!v || 'Title is required']"
              required
            />
            <v-textarea
              v-model="newEvent.description"
              label="Description"
              rows="3"
            />
            <v-row>
              <v-col cols="6">
                <v-text-field
                  v-model="newEvent.start"
                  label="Start Date & Time"
                  type="datetime-local"
                  :rules="[v => !!v || 'Start date is required']"
                  required
                />
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="newEvent.end"
                  label="End Date & Time"
                  type="datetime-local"
                />
              </v-col>
            </v-row>
            <v-select
              v-model="newEvent.category"
              :items="eventCategories"
              item-title="name"
              item-value="value"
              label="Category"
              :rules="[v => !!v || 'Category is required']"
              required
            />
            <v-switch
              v-model="newEvent.allDay"
              label="All Day Event"
              color="primary"
            />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn @click="closeAddEventDialog">Cancel</v-btn>
          <v-btn
            color="primary"
            :disabled="!eventFormValid"
            @click="addEvent"
          >
            Add Event
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Event Details Dialog -->
    <v-dialog v-model="showEventDetailsDialog" max-width="500px">
      <v-card v-if="selectedEvent">
        <v-card-title class="d-flex align-center justify-space-between">
          {{ selectedEvent.title }}
          <v-menu>
            <template #activator="{ props }">
              <v-btn
                icon="mdi-dots-vertical"
                variant="text"
                v-bind="props"
              />
            </template>
            <v-list>
              <v-list-item @click="editEvent">
                <v-list-item-title>Edit</v-list-item-title>
              </v-list-item>
              <v-list-item @click="deleteEvent">
                <v-list-item-title>Delete</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-card-title>
        <v-card-text>
          <p v-if="selectedEvent.extendedProps?.description">
            {{ selectedEvent.extendedProps.description }}
          </p>
          <v-chip
            :color="selectedEvent.backgroundColor"
            size="small"
            class="mb-3"
          >
            {{ selectedEvent.extendedProps?.category || 'General' }}
          </v-chip>
          <p><strong>Start:</strong> {{ formatDateTime(selectedEvent.start) }}</p>
          <p v-if="selectedEvent.end"><strong>End:</strong> {{ formatDateTime(selectedEvent.end) }}</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn @click="showEventDetailsDialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
definePageMeta({
  title: 'Project Calendar',
  layout: 'dashboard'
})

import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

// Reactive data
const fullCalendar = ref(null)
const showAddEventDialog = ref(false)
const showEventDetailsDialog = ref(false)
const eventFormValid = ref(false)
const selectedEvent = ref(null)
const selectedDate = ref(null)

// New event form data
const newEvent = reactive({
  title: '',
  description: '',
  start: '',
  end: '',
  category: '',
  allDay: false
})

// Event categories
const eventCategories = [
  { name: 'Meeting', value: 'meeting', color: '#2196F3' },
  { name: 'Deadline', value: 'deadline', color: '#F44336' },
  { name: 'Review', value: 'review', color: '#FF9800' },
  { name: 'Development', value: 'development', color: '#4CAF50' },
  { name: 'Testing', value: 'testing', color: '#9C27B0' },
  { name: 'General', value: 'general', color: '#607D8B' }
]

// Sample events data
const events = ref([
  {
    id: '1',
    title: 'Team Meeting',
    start: '2025-06-11T09:00:00',
    end: '2025-06-11T10:00:00',
    backgroundColor: '#2196F3',
    borderColor: '#2196F3',
    extendedProps: {
      description: 'Weekly team sync meeting',
      category: 'meeting'
    }
  },
  {
    id: '2',
    title: 'Project Deadline',
    start: '2025-06-15',
    allDay: true,
    backgroundColor: '#F44336',
    borderColor: '#F44336',
    extendedProps: {
      description: 'Final delivery for client project',
      category: 'deadline'
    }
  },
  {
    id: '3',
    title: 'Code Review',
    start: '2025-06-13T14:00:00',
    end: '2025-06-13T15:30:00',
    backgroundColor: '#FF9800',
    borderColor: '#FF9800',
    extendedProps: {
      description: 'Review pull requests from team',
      category: 'review'
    }
  },
  {
    id: '4',
    title: 'Coding',
    start: '2025-06-11T09:00:00',
    end: '2025-06-13T06:00:00',
    backgroundColor: '#2196F3',
    borderColor: '#2196F3',
    extendedProps: {
      description: 'Implement new features for the project',
      category: 'development'
    }
  },
])

// FullCalendar options
const calendarOptions = reactive({
  plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay'
  },
  initialView: 'dayGridMonth',
  selectable: true,
  selectMirror: true,
  dayMaxEvents: true,
  weekends: true,
  events: events.value,
  height: 'auto',
  eventClick: handleEventClick,
  dateClick: handleDateClick,
  select: handleDateSelect,
  eventDrop: handleEventDrop,
  eventResize: handleEventResize,
  // Vuetify theme integration
  themeSystem: 'standard',
  eventColor: '#1976D2',
  eventTextColor: '#FFFFFF'
})

// Helper function to format datetime for datetime-local input
function formatDateTimeLocal(dateStr) {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  return `${year}-${month}-${day}T${hours}:${minutes}`
}

// Helper function to convert datetime-local to ISO string
function convertToISOString(dateTimeLocal) {
  if (!dateTimeLocal) return null
  return new Date(dateTimeLocal).toISOString()
}

// Event handlers
function handleEventClick(clickInfo) {
  selectedEvent.value = clickInfo.event
  showEventDetailsDialog.value = true
}

function handleDateClick(dateClickInfo) {
  selectedDate.value = dateClickInfo.dateStr
  // Format datetime for datetime-local input
  const startDate = new Date(dateClickInfo.date)
  startDate.setHours(9, 0, 0, 0)
  const endDate = new Date(dateClickInfo.date)
  endDate.setHours(10, 0, 0, 0)
  
  newEvent.start = formatDateTimeLocal(startDate.toISOString())
  newEvent.end = formatDateTimeLocal(endDate.toISOString())
  showAddEventDialog.value = true
}

function handleDateSelect(selectInfo) {
  selectedDate.value = selectInfo.startStr
  newEvent.start = formatDateTimeLocal(selectInfo.start)
  newEvent.end = formatDateTimeLocal(selectInfo.end)
  newEvent.allDay = selectInfo.allDay
  showAddEventDialog.value = true
}

function handleEventDrop(dropInfo) {
  // Handle drag and drop
  updateEvent(dropInfo.event)
}

function handleEventResize(resizeInfo) {
  // Handle event resize
  updateEvent(resizeInfo.event)
}

function updateEvent(event) {
  const index = events.value.findIndex(e => e.id === event.id)
  if (index !== -1) {
    events.value[index] = {
      ...events.value[index],
      start: event.startStr,
      end: event.endStr,
      allDay: event.allDay
    }
  }
}

function addEvent() {
  if (!eventFormValid.value) return

  const category = eventCategories.find(cat => cat.value === newEvent.category)
  const eventId = Date.now().toString()

  const newEventData = {
    id: eventId,
    title: newEvent.title,
    start: convertToISOString(newEvent.start),
    end: newEvent.end ? convertToISOString(newEvent.end) : null,
    allDay: newEvent.allDay,
    backgroundColor: category?.color || '#607D8B',
    borderColor: category?.color || '#607D8B',
    extendedProps: {
      description: newEvent.description,
      category: newEvent.category
    }
  }

  events.value.push(newEventData)
  
  // Update FullCalendar
  const calendarApi = fullCalendar.value.getApi()
  calendarApi.addEvent(newEventData)

  closeAddEventDialog()
}

function editEvent() {
  if (!selectedEvent.value) return
  
  // Pre-fill form with existing event data, format for datetime-local
  newEvent.title = selectedEvent.value.title
  newEvent.description = selectedEvent.value.extendedProps?.description || ''
  newEvent.start = formatDateTimeLocal(selectedEvent.value.start)
  newEvent.end = selectedEvent.value.end ? formatDateTimeLocal(selectedEvent.value.end) : ''
  newEvent.category = selectedEvent.value.extendedProps?.category || ''
  newEvent.allDay = selectedEvent.value.allDay

  showEventDetailsDialog.value = false
  showAddEventDialog.value = true
}

function deleteEvent() {
  if (!selectedEvent.value) return

  const eventId = selectedEvent.value.id
  
  // Remove from events array
  const index = events.value.findIndex(e => e.id === eventId)
  if (index !== -1) {
    events.value.splice(index, 1)
  }

  // Remove from FullCalendar
  selectedEvent.value.remove()
  
  showEventDetailsDialog.value = false
  selectedEvent.value = null
}

function closeAddEventDialog() {
  showAddEventDialog.value = false
  resetNewEventForm()
}

function resetNewEventForm() {
  newEvent.title = ''
  newEvent.description = ''
  newEvent.start = ''
  newEvent.end = ''
  newEvent.category = ''
  newEvent.allDay = false
}

function formatDateTime(dateStr) {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  return date.toLocaleString()
}
</script>