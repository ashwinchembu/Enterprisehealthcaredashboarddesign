<script setup lang="ts">
interface Trial {
  name: string
  phase: string
  status: 'recruiting' | 'on-hold' | 'active'
  protocol: string
}

const trials: Trial[] = [
  {
    name: 'Cardiovascular Outcomes Study',
    phase: 'Phase III',
    status: 'recruiting',
    protocol: 'CARD-2024-001',
  },
  {
    name: 'Diabetes Prevention Trial',
    phase: 'Phase II',
    status: 'on-hold',
    protocol: 'DIAB-2024-015',
  },
  {
    name: 'Hypertension Management Study',
    phase: 'Phase III',
    status: 'recruiting',
    protocol: 'HTN-2023-089',
  },
  {
    name: 'Chronic Pain Relief Trial',
    phase: 'Phase II',
    status: 'active',
    protocol: 'PAIN-2024-032',
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
</script>

<template>
  <div class="rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
    <h3 class="mb-6 text-lg font-semibold text-slate-900">Ongoing Clinical Trials</h3>

    <div class="space-y-4">
      <div
        v-for="(trial, index) in trials"
        :key="index"
        class="rounded-lg border border-slate-200 p-4 transition-colors hover:border-blue-300"
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
  </div>
</template>

