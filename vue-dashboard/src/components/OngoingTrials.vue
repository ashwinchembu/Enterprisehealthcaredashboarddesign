<script setup lang="ts">
import { ref } from 'vue'
import TrialDetailsModal from './TrialDetailsModal.vue'

interface Contact {
  name: string
  role: string
  email: string
  phone: string
}

interface Trial {
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

const selectedTrial = ref<Trial | null>(null)
const isModalOpen = ref(false)

const hospitalName = "City General Hospital"
const hospitalAddress = "456 Health Ave, MedCity, USA"

const trials: Trial[] = [
  {
    name: 'Cardiovascular Outcomes Study',
    phase: 'Phase III',
    status: 'recruiting',
    protocol: 'CARD-2024-001',
    enrolled: 15,
    siteTarget: '25',
    targetPercentage: '60%',
    activationDate: '03/12/2024',
    lastMonitoringVisit: '12/18/2024',
    contacts: [
      {
        name: 'Dr. Sarah Johnson',
        role: 'Principal Investigator',
        email: 'sjohnson@site.com',
        phone: '555-123-4567',
      },
      {
        name: 'Michael Roberts',
        role: 'Study Coordinator',
        email: 'mroberts@site.com',
        phone: '555-123-4568',
      },
    ],
  },
  {
    name: 'Diabetes Prevention Trial',
    phase: 'Phase II',
    status: 'on-hold',
    protocol: 'DIAB-2024-015',
    enrolled: 0,
    siteTarget: 'N/A',
    targetPercentage: '0%',
    activationDate: '05/15/2023',
    lastMonitoringVisit: '03/20/2024',
    contacts: [
      {
        name: 'Dr. Emily Tran',
        role: 'Principal Investigator',
        email: 'etran@site.com',
        phone: '555-123-4567',
      },
      {
        name: 'David Chen',
        role: 'Study Coordinator',
        email: 'dchen@site.com',
        phone: '555-123-4568',
      },
    ],
  },
  {
    name: 'Hypertension Management Study',
    phase: 'Phase III',
    status: 'recruiting',
    protocol: 'HTN-2023-089',
    enrolled: 32,
    siteTarget: '40',
    targetPercentage: '80%',
    activationDate: '01/08/2024',
    lastMonitoringVisit: '01/02/2025',
    contacts: [
      {
        name: 'Dr. James Martinez',
        role: 'Principal Investigator',
        email: 'jmartinez@site.com',
        phone: '555-123-4569',
      },
      {
        name: 'Lisa Wang',
        role: 'Study Coordinator',
        email: 'lwang@site.com',
        phone: '555-123-4570',
      },
    ],
  },
  {
    name: 'Chronic Pain Relief Trial',
    phase: 'Phase II',
    status: 'active',
    protocol: 'PAIN-2024-032',
    enrolled: 8,
    siteTarget: '20',
    targetPercentage: '40%',
    activationDate: '06/22/2024',
    lastMonitoringVisit: '12/30/2024',
    contacts: [
      {
        name: 'Dr. Patricia Lee',
        role: 'Principal Investigator',
        email: 'plee@site.com',
        phone: '555-123-4571',
      },
      {
        name: 'Robert Kim',
        role: 'Study Coordinator',
        email: 'rkim@site.com',
        phone: '555-123-4572',
      },
    ],
  },
]

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

function handleTrialClick(trial: Trial) {
  selectedTrial.value = trial
  isModalOpen.value = true
}

function handleCloseModal() {
  isModalOpen.value = false
  selectedTrial.value = null
}
</script>

<template>
  <div class="rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
    <h3 class="mb-6 text-lg font-semibold text-slate-900">Ongoing Clinical Trials</h3>

    <div class="space-y-4">
      <div
        v-for="(trial, index) in trials"
        :key="index"
        class="rounded-lg border border-slate-200 p-4 transition-all hover:border-blue-300 hover:shadow-md cursor-pointer"
        @click="handleTrialClick(trial)"
      >
        <div class="flex items-start gap-3">
          <div class="rounded-lg bg-purple-50 p-2">
            <span class="text-lg">📄</span>
          </div>
          <div class="min-w-0 flex-1">
            <div class="mb-1 font-semibold text-slate-900">{{ trial.name }}</div>
            <div class="mb-2 text-sm text-slate-600">Protocol: {{ trial.protocol }}</div>
            <div class="flex flex-wrap items-center gap-2">
              <span class="rounded bg-slate-100 px-2 py-1 text-xs text-slate-500">
                {{ trial.phase }}
              </span>
              <span
                :class="[
                  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
                  statusStyles[trial.status]
                ]"
              >
                {{ statusLabels[trial.status] }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <TrialDetailsModal
      :trial="selectedTrial"
      :hospital-name="hospitalName"
      :hospital-address="hospitalAddress"
      :is-open="isModalOpen"
      @close="handleCloseModal"
    />
  </div>
</template>
