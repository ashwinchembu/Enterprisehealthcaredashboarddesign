<template>
  <div class="relative overflow-hidden rounded-xl border border-amber-200 bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-50 p-4 sm:p-5 shadow-sm">
    <!-- Decorative background blurs -->
    <div class="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-amber-200 opacity-10 blur-3xl"></div>
    <div class="absolute -bottom-16 -left-16 h-36 w-36 rounded-full bg-yellow-200 opacity-10 blur-3xl"></div>

    <div class="relative z-10">
      <!-- Header -->
      <div class="mb-4 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        <div class="flex items-start gap-2">
          <div class="rounded-lg bg-amber-500 p-2 shadow-lg shrink-0">
            <span class="text-base">⚠️</span>
          </div>
          <div>
            <h3 class="mb-0.5 text-base font-bold text-slate-900">AI-Identified Potential Barriers</h3>
            <p class="text-xs font-medium text-amber-700">3 issues detected requiring attention</p>
          </div>
        </div>
        <button class="flex items-center justify-center gap-1 rounded-lg border border-amber-300 bg-white px-2.5 py-1 text-xs font-medium text-amber-700 transition-all hover:bg-amber-50 shrink-0">
          <span>💡</span>
          View Insights
        </button>
      </div>

      <!-- Barriers Grid - 3 columns on tablet+ -->
      <div class="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div
          v-for="(barrier, index) in barriers"
          :key="index"
          class="group cursor-pointer rounded-lg border border-amber-200 bg-white p-3 transition-all duration-200 hover:border-amber-300 hover:shadow-md"
        >
          <div class="mb-2 flex items-start justify-between">
            <div
              :class="[
                'rounded-lg p-1.5',
                barrier.severity === 'high' ? 'bg-red-100' : 'bg-amber-100'
              ]"
            >
              <span class="text-sm">{{ barrier.icon }}</span>
            </div>
            <span class="text-amber-400 transition-all group-hover:translate-x-1 group-hover:text-amber-600">→</span>
          </div>

          <h4 class="mb-1 text-xs font-semibold leading-tight text-slate-900">
            {{ barrier.title }}
          </h4>

          <p class="text-[11px] leading-relaxed text-slate-600">
            {{ barrier.description }}
          </p>

          <div class="mt-2 border-t border-slate-100 pt-2">
            <span
              :class="[
                'inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium whitespace-nowrap',
                barrier.severity === 'high'
                  ? 'bg-red-100 text-red-700'
                  : 'bg-amber-100 text-amber-700'
              ]"
            >
              <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-current"></span>
              {{ barrier.severity === 'high' ? 'High Priority' : 'Medium Priority' }}
            </span>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="mt-4 border-t border-amber-200 pt-3">
        <p class="text-[11px] text-amber-800">
          <span class="font-semibold">AI Analysis:</span> Last updated 2 hours ago • Next scan in 4 hours
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const barriers = [
  {
    title: 'Low patient enrollment',
    description: 'Current enrollment rate is 23% below target',
    icon: '📉',
    severity: 'high',
  },
  {
    title: 'HCPs lack time to participate',
    description: 'Average response time increased by 4 days',
    icon: '⏱️',
    severity: 'medium',
  },
  {
    title: 'Limited bandwidth to reach patients',
    description: 'Screening capacity at 67% utilization',
    icon: '👥',
    severity: 'medium',
  },
]
</script>
