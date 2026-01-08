<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="bg-white rounded-xl shadow-sm border border-slate-100 p-6 transition-all duration-300 hover:shadow-md min-h-[120px]">
    <h3 class="text-lg font-semibold text-slate-900">{{ title }}</h3>
  </div>
</template>
