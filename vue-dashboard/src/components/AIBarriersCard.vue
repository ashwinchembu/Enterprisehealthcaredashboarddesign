<script setup lang="ts">
</script>

<template>
  <div class="relative overflow-hidden rounded-xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 p-6 shadow-lg">
    <!-- Decorative background blurs -->
    <div class="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-amber-200 opacity-20 blur-3xl"></div>
    <div class="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-yellow-200 opacity-20 blur-3xl"></div>
    
    <div class="relative z-10">
      <!-- Header -->
      <div class="mb-6 flex items-start justify-between">
        <div class="flex items-start gap-3">
          <div class="rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 p-3 shadow-lg">
            <span class="text-xl">⚠️</span>
          </div>
          <div>
            <h3 class="mb-1 text-xl font-bold text-slate-900">AI-Identified Potential Barriers</h3>
            <p class="text-sm font-medium text-amber-700">Issues detected requiring attention</p>
          </div>
        </div>
        <button class="flex items-center gap-1.5 rounded-lg border border-amber-300 bg-white/80 backdrop-blur-sm px-3 py-1.5 text-sm font-medium text-amber-700 transition-all hover:bg-amber-50 hover:border-amber-400">
          💡 View Insights
        </button>
      </div>

      <!-- Empty barriers grid -->
      <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div v-for="i in 3" :key="i" class="group cursor-pointer rounded-xl border-2 border-amber-200 bg-white/90 backdrop-blur-sm p-4 transition-all duration-200 hover:border-amber-300 hover:shadow-md">
          <div class="mb-3 flex items-start justify-between">
            <div class="rounded-lg bg-amber-100 p-2">
              <span class="text-lg">📊</span>
            </div>
            <span class="text-amber-400 transition-all group-hover:translate-x-1 group-hover:text-amber-600">→</span>
          </div>
          <h4 class="mb-2 text-sm font-semibold leading-tight text-slate-900">Barrier {{ i }}</h4>
          <p class="text-xs leading-relaxed text-slate-600">Description placeholder</p>
          <div class="mt-3 border-t border-slate-100 pt-3">
            <span class="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-700">
              <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-current"></span>
              Medium Priority
            </span>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="mt-4 border-t-2 border-amber-200 pt-4">
        <p class="text-xs text-amber-800">
          <span class="font-semibold">AI Analysis:</span> Awaiting data
        </p>
      </div>
    </div>
  </div>
</template>

