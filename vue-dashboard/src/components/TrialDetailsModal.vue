<script setup lang="ts">
import { computed } from 'vue'

interface Contact {
  name: string
  role: string
  email: string
  phone: string
}

interface TrialDetails {
  name: string
  phase: string
  status: 'recruiting' | 'on-hold' | 'active'
  protocol: string
  enrolled: number
  siteTarget: string
  targetPercentage: string
  activationDate: string
  lastMonitoringVisit: string
  contacts: Contact[]
}

const props = defineProps<{
  trial: TrialDetails | null
  hospitalName: string
  hospitalAddress: string
  isOpen: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const statusStyles = {
  recruiting: 'bg-blue-100 text-blue-800',
  'on-hold': 'bg-yellow-100 text-yellow-800',
  active: 'bg-green-100 text-green-800',
}

const statusLabels = {
  recruiting: 'Recruiting',
  'on-hold': 'On Hold',
  active: 'Active',
}

const statusClass = computed(() => {
  if (!props.trial) return ''
  return statusStyles[props.trial.status]
})

const statusLabel = computed(() => {
  if (!props.trial) return ''
  return statusLabels[props.trial.status]
})
</script>

<template>
  <Teleport to="body">
    <div v-if="isOpen && trial">
      <!-- Backdrop -->
      <div
        class="fixed inset-0 bg-black/60 z-40 transition-opacity"
        @click="emit('close')"
      />

      <!-- Modal -->
      <div class="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          class="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          @click.stop
        >
          <!-- Header -->
          <div class="border-b border-gray-200 p-6">
            <div class="flex items-start justify-between mb-4">
              <div class="flex items-center gap-3">
                <div class="p-2 bg-blue-50 rounded-lg">
                  <svg class="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                </div>
                <div>
                  <h2 class="text-lg font-medium text-gray-800">
                    Site-Specific Trial View
                  </h2>
                  <p class="text-sm text-gray-500 mt-1">
                    Viewing "{{ trial.name }}" details specifically for {{ hospitalName }}.
                  </p>
                </div>
              </div>
              <button
                @click="emit('close')"
                class="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <!-- Trial Name and Hospital Section -->
            <div class="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 class="text-xl font-medium text-gray-800 mb-2">
                  {{ trial.name }}
                </h3>
                <span :class="['inline-flex items-center px-3 py-1 rounded-full text-xs font-medium', statusClass]">
                  {{ statusLabel }}
                </span>
              </div>
              <div class="text-right">
                <h3 class="text-xl font-medium text-gray-800 mb-1">
                  {{ hospitalName }}
                </h3>
                <p class="text-sm text-gray-500">
                  {{ hospitalAddress }}
                </p>
              </div>
            </div>

            <!-- Stats Grid -->
            <div class="grid grid-cols-2 gap-6 mb-6">
              <!-- Left Column - Enrollment -->
              <div class="bg-gray-50 rounded-lg p-5 border border-gray-200">
                <div class="flex items-start gap-3 mb-4">
                  <svg class="w-5 h-5 text-gray-500 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                  <div class="flex-1">
                    <h4 class="font-medium text-gray-700 mb-3">
                      Enrollment at this Site:
                    </h4>
                    <div class="space-y-2">
                      <div class="flex justify-between items-center">
                        <span class="text-sm text-gray-600">
                          {{ trial.enrolled }} Enrolled
                        </span>
                        <span class="text-sm text-gray-600">
                          Site Target: {{ trial.siteTarget }}
                        </span>
                      </div>
                      <div class="w-full bg-gray-200 rounded-full h-2">
                        <div
                          class="bg-blue-600 h-2 rounded-full transition-all"
                          :style="{ width: trial.targetPercentage }"
                        />
                      </div>
                      <div class="text-center">
                        <span class="text-lg font-semibold text-blue-600">
                          {{ trial.targetPercentage }}
                        </span>
                        <span class="text-sm text-gray-600"> of Site Target</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Right Column - Key Contacts -->
              <div class="bg-gray-50 rounded-lg p-5 border border-gray-200">
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-gray-500 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <div class="flex-1">
                    <h4 class="font-medium text-gray-700 mb-3">
                      Key Site Contacts:
                    </h4>
                    <div class="space-y-3">
                      <div
                        v-for="(contact, index) in trial.contacts"
                        :key="index"
                        class="bg-white rounded-lg p-3 border border-gray-200"
                      >
                        <div class="font-medium text-gray-800 mb-1">
                          {{ contact.name }}
                          <span class="text-xs text-gray-500 font-normal">({{ contact.role }})</span>
                        </div>
                        <div class="flex items-center gap-2 text-xs text-gray-600 mb-1">
                          <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                          </svg>
                          <span>{{ contact.email }}</span>
                        </div>
                        <div class="flex items-center gap-2 text-xs text-gray-600">
                          <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                          </svg>
                          <span>{{ contact.phone }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Dates Section -->
            <div class="grid grid-cols-2 gap-6">
              <div class="flex items-start gap-3">
                <svg class="w-5 h-5 text-gray-500 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <div>
                  <h4 class="font-medium text-gray-700 mb-1">
                    Site Activation Date:
                  </h4>
                  <p class="text-sm text-gray-600">
                    {{ trial.activationDate }}
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <svg class="w-5 h-5 text-gray-500 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="9 11 12 14 22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
                <div>
                  <h4 class="font-medium text-gray-700 mb-1">
                    Last Monitoring Visit:
                  </h4>
                  <p class="text-sm text-gray-600">
                    {{ trial.lastMonitoringVisit }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

