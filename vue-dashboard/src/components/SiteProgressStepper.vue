<script setup lang="ts">
const steps = [
  { label: 'Site Identified', status: 'completed' },
  { label: 'Initial Contact', status: 'completed' },
  { label: 'Feasibility', status: 'completed' },
  { label: 'Site Selected', status: 'current' },
  { label: 'Contracting', status: 'upcoming' },
  { label: 'Active', status: 'upcoming' },
]
</script>

<template>
  <div class="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
    <h3 class="text-lg font-semibold text-slate-900 mb-6">Site Progression</h3>
    <div class="flex items-center justify-between">
      <template v-for="(step, index) in steps" :key="step.label">
        <div class="flex flex-col items-center">
          <div
            :class="[
              'w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all',
              step.status === 'completed' ? 'bg-gradient-to-br from-green-400 to-green-500 text-white shadow-lg shadow-green-200' :
              step.status === 'current' ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-200 ring-4 ring-blue-100' :
              'bg-slate-100 text-slate-400'
            ]"
          >
            <span v-if="step.status === 'completed'">✓</span>
            <span v-else>{{ index + 1 }}</span>
          </div>
          <span
            :class="[
              'mt-2 text-xs font-medium text-center max-w-[80px]',
              step.status === 'current' ? 'text-blue-600' : 
              step.status === 'completed' ? 'text-slate-700' : 'text-slate-400'
            ]"
          >
            {{ step.label }}
          </span>
        </div>
        <div
          v-if="index < steps.length - 1"
          :class="[
            'flex-1 h-1 mx-2 rounded-full transition-all',
            step.status === 'completed' ? 'bg-gradient-to-r from-green-400 to-green-500' : 'bg-slate-200'
          ]"
        />
      </template>
    </div>
  </div>
</template>

