<template>
  <div class="relative overflow-hidden rounded-xl bg-white p-6 shadow-lg">
    <div class="relative z-10">
      <!-- Top Row: Title + Overview (Left) | Legend (Right) -->
      <div class="flex justify-between items-center mb-6">
        <!-- Left: Title + Overview -->
        <div>
          <h3 class="mb-1 text-xl font-bold text-slate-900">Site Progression</h3>
          <p class="text-sm font-medium text-slate-500">
            Overview of the site's activation and onboarding status.
          </p>
        </div>

        <!-- Right: Legend -->
        <div class="flex gap-4 text-sm">
          <div class="flex items-center gap-1">
            <div class="h-4 w-4 rounded bg-[#64748b]"></div>
            <span>Completed</span>
          </div>
          <div class="flex items-center gap-1">
            <div class="h-4 w-4 rounded bg-[#0f9d58]"></div>
            <span>Active</span>
          </div>
          <div class="flex items-center gap-1">
            <div class="h-4 w-4 rounded bg-[#b0bec5]"></div>
            <span>Upcoming</span>
          </div>
        </div>
      </div>

      <!-- Chevron Progress Bar -->
      <div class="w-full">
        <div class="flex items-center w-full gap-2">
          <div
            v-for="(stage, index) in stages"
            :key="index"
            :class="[
              'relative flex-1 flex items-center justify-center h-12 px-2 font-bold text-[10px] xl:text-xs tracking-tight transition-all duration-300 min-w-0 rounded-md text-white',
              stageStatus(stage) === 'active' ? 'bg-[#0f9d58] shadow-lg scale-[1.02] z-20' :
              stageStatus(stage) === 'completed' ? 'bg-[#64748b] z-10' :
              'bg-[#b0bec5] z-10'
            ]"
            :style="{
              clipPath: 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%, 10% 50%)'
            }"
          >
            <span class="relative z-10 text-center truncate px-1">{{ stage }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const stages = [
  "CDA In Place",
  "Feasibility",
  "Pre-Selection Visit",
  "Site Selected",
  "1572 Form",
  "Site Initiated"
]

const currentStage = ref("Pre-Selection Visit")

function stageStatus(stage: string) {
  const currentIndex = stages.indexOf(currentStage.value)
  const stageIndex = stages.indexOf(stage)

  if (stageIndex < currentIndex) return 'completed'
  if (stageIndex === currentIndex) return 'active'
  return 'upcoming'
}
</script>

<style scoped>
span {
  white-space: nowrap;
}
</style>
