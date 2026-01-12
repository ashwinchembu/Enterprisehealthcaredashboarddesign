<template>
  <div class="relative overflow-hidden rounded-xl md:rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-50 p-4 md:p-6 lg:p-8 shadow-sm">
    <!-- Decorative background blurs -->
    <div class="absolute -right-24 -top-24 md:-right-32 md:-top-32 h-48 w-48 md:h-64 md:w-64 rounded-full bg-amber-200 opacity-10 blur-3xl"></div>
    <div class="absolute -bottom-16 -left-16 md:-bottom-24 md:-left-24 h-36 w-36 md:h-48 md:w-48 rounded-full bg-yellow-200 opacity-10 blur-3xl"></div>

    <div class="relative z-10">
      <!-- Header -->
      <div class="mb-4 md:mb-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        <div class="flex items-start gap-2 md:gap-3">
          <div class="rounded-lg md:rounded-xl bg-amber-500 p-2 md:p-3 shadow-lg shrink-0">
            <span class="text-base md:text-xl">⚠️</span>
          </div>
          <div>
            <h3 class="mb-0.5 md:mb-1 text-base md:text-xl font-bold text-slate-900">AI-Identified Potential Barriers</h3>
            <p class="text-xs md:text-sm font-medium text-amber-700">3 issues detected requiring attention</p>
          </div>
        </div>
        <button class="flex items-center justify-center gap-1 md:gap-1.5 rounded-lg border border-amber-300 bg-white px-2.5 py-1 md:px-3 md:py-1.5 text-xs md:text-sm font-medium text-amber-700 transition-all hover:bg-amber-50 shrink-0">
          <span>💡</span>
          View Insights
        </button>
      </div>

      <!-- Barriers Grid -->
      <div class="grid grid-cols-1 gap-3 md:gap-4 lg:gap-5 md:grid-cols-3">
        <div
          v-for="(barrier, index) in barriers"
          :key="index"
          class="group cursor-pointer rounded-lg md:rounded-xl border border-amber-200 bg-white p-3 md:p-4 lg:p-5 transition-all duration-200 hover:border-amber-300 hover:shadow-md"
        >
          <div class="mb-2 md:mb-3 flex items-start justify-between">
            <div
              :class="[
                'rounded-lg p-1.5 md:p-2',
                barrier.severity === 'high' ? 'bg-red-100' : 'bg-amber-100'
              ]"
            >
              <span class="text-sm md:text-lg">{{ barrier.icon }}</span>
            </div>
            <span class="text-amber-400 transition-all group-hover:translate-x-1 group-hover:text-amber-600">→</span>
          </div>

          <h4 class="mb-1 md:mb-2 text-xs md:text-sm font-semibold leading-tight text-slate-900">
            {{ barrier.title }}
          </h4>

          <p class="text-[10px] md:text-xs leading-relaxed text-slate-600">
            {{ barrier.description }}
          </p>

          <div class="mt-2 md:mt-3 border-t border-slate-100 pt-2 md:pt-3">
            <span
              :class="[
                'inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 md:px-2 md:py-1 text-[10px] md:text-xs font-medium',
                barrier.severity === 'high'
                  ? 'bg-red-100 text-red-700'
                  : 'bg-amber-100 text-amber-700'
              ]"
            >
              <span class="h-1 w-1 md:h-1.5 md:w-1.5 animate-pulse rounded-full bg-current"></span>
              {{ barrier.severity === 'high' ? 'High Priority' : 'Medium Priority' }}
            </span>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="mt-4 md:mt-6 border-t border-amber-200 pt-3 md:pt-4">
        <p class="text-[10px] md:text-xs text-amber-800">
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
