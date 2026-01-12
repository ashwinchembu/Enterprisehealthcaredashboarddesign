<template>
  <Teleport to="body">
    <div v-if="isOpen && trial">
      <!-- Backdrop -->
      <div
        class="fixed inset-0 bg-black/60 z-40 transition-opacity"
        @click="emit('close')"
      />

      <!-- Modal -->
      <div class="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-4">
        <div
          class="bg-white rounded-xl shadow-2xl w-full max-w-[95vw] md:max-w-3xl max-h-[90vh] overflow-y-auto"
          @click.stop
        >
          <!-- Header -->
          <div class="border-b border-gray-200 p-4 md:p-6">
            <div class="flex items-start justify-between mb-3 md:mb-4">
              <div class="flex items-center gap-2 md:gap-3">
                <div class="p-1.5 md:p-2 bg-blue-50 rounded-lg shrink-0">
                  <svg class="w-4 h-4 md:w-5 md:h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                </div>
                <div>
                  <h2 class="text-base md:text-lg font-medium text-gray-800">
                    Site-Specific Trial View
                  </h2>
                  <p class="text-xs md:text-sm text-gray-500 mt-0.5 md:mt-1">
                    Viewing "{{ trial.name }}" details for {{ hospitalName }}.
                  </p>
                </div>
              </div>
              <button
                @click="emit('close')"
                class="text-gray-400 hover:text-gray-600 transition-colors p-1"
              >
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Content -->
          <div class="p-4 md:p-6">
            <!-- Trial Name and Hospital Section -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
              <div>
                <h3 class="text-lg md:text-xl font-medium text-gray-800 mb-2">
                  {{ trial.name }}
                </h3>
                <span :class="['inline-flex items-center px-2 md:px-3 py-0.5 md:py-1 rounded-full text-[10px] md:text-xs font-medium', statusClass]">
                  {{ statusLabel }}
                </span>
              </div>
              <div class="md:text-right">
                <h3 class="text-lg md:text-xl font-medium text-gray-800 mb-1">
                  {{ hospitalName }}
                </h3>
                <p class="text-xs md:text-sm text-gray-500">
                  {{ hospitalAddress }}
                </p>
              </div>
            </div>

            <!-- Stats Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
              <!-- Enrollment -->
              <div class="bg-gray-50 rounded-lg p-4 md:p-5 border border-gray-200">
                <div class="flex items-start gap-2 md:gap-3 mb-3 md:mb-4">
                  <svg class="w-4 h-4 md:w-5 md:h-5 text-gray-500 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                  <div class="flex-1">
                    <h4 class="font-medium text-gray-700 mb-2 md:mb-3 text-sm md:text-base">
                      Enrollment at this Site:
                    </h4>
                    <div class="space-y-2">
                      <div class="flex justify-between items-center text-xs md:text-sm text-gray-600">
                        <span>{{ trial.enrolled }} Enrolled</span>
                        <span>Target: {{ trial.siteTarget }}</span>
                      </div>
                      <div class="w-full bg-gray-200 rounded-full h-1.5 md:h-2">
                        <div
                          class="bg-blue-600 h-1.5 md:h-2 rounded-full transition-all"
                          :style="{ width: trial.targetPercentage }"
                        />
                      </div>
                      <div class="text-center">
                        <span class="text-base md:text-lg font-semibold text-blue-600">
                          {{ trial.targetPercentage }}
                        </span>
                        <span class="text-xs md:text-sm text-gray-600"> of Target</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Contacts -->
              <div class="bg-gray-50 rounded-lg p-4 md:p-5 border border-gray-200">
                <div class="flex items-start gap-2 md:gap-3">
                  <svg class="w-4 h-4 md:w-5 md:h-5 text-gray-500 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <div class="flex-1">
                    <h4 class="font-medium text-gray-700 mb-2 md:mb-3 text-sm md:text-base">
                      Key Site Contacts:
                    </h4>
                    <div class="space-y-2 md:space-y-3">
                      <div
                        v-for="(contact, index) in trial.contacts"
                        :key="index"
                        class="bg-white rounded-lg p-2 md:p-3 border border-gray-200"
                      >
                        <div class="font-medium text-gray-800 mb-0.5 md:mb-1 text-xs md:text-sm">
                          {{ contact.name }}
                          <span class="text-[10px] md:text-xs text-gray-500 font-normal">({{ contact.role }})</span>
                        </div>
                        <div class="flex items-center gap-1 md:gap-2 text-[10px] md:text-xs text-gray-600 mb-0.5">
                          <span>✉️</span>
                          <span class="truncate">{{ contact.email }}</span>
                        </div>
                        <div class="flex items-center gap-1 md:gap-2 text-[10px] md:text-xs text-gray-600">
                          <span>📞</span>
                          <span>{{ contact.phone }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Dates Section -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div class="flex items-start gap-2 md:gap-3">
                <span class="text-gray-500 mt-0.5">📅</span>
                <div>
                  <h4 class="font-medium text-gray-700 mb-0.5 md:mb-1 text-sm md:text-base">
                    Site Activation Date:
                  </h4>
                  <p class="text-xs md:text-sm text-gray-600">
                    {{ trial.activationDate }}
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-2 md:gap-3">
                <span class="text-gray-500 mt-0.5">✅</span>
                <div>
                  <h4 class="font-medium text-gray-700 mb-0.5 md:mb-1 text-sm md:text-base">
                    Last Monitoring Visit:
                  </h4>
                  <p class="text-xs md:text-sm text-gray-600">
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

<script setup>
import { computed } from 'vue'

const props = defineProps({
  trial: { type: Object, default: null },
  hospitalName: { type: String, required: true },
  hospitalAddress: { type: String, required: true },
  isOpen: { type: Boolean, required: true },
})

const emit = defineEmits(['close'])

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
