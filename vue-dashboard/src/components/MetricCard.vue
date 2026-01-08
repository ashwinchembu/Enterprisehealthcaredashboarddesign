<script setup lang="ts">
defineProps<{
  label: string
  icon: string
}>()
</script>

<template>
  <div class="bg-white rounded-xl shadow-sm border border-slate-100 p-6 flex-1 min-w-[200px] transition-all duration-300 hover:shadow-md hover:border-blue-200">
    <div class="flex items-start justify-between mb-4">
      <div class="p-2.5 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
        <span class="text-xl">{{ icon }}</span>
      </div>
    </div>
    <div class="text-3xl font-bold text-slate-900 mb-1 tracking-tight">--</div>
    <div class="text-sm text-slate-500 font-medium">{{ label }}</div>
  </div>
</template>

