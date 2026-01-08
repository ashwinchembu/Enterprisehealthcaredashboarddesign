<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
}>()
</script>

<template>
  <div class="bg-white rounded-xl shadow-sm border border-slate-100 p-6 transition-all duration-300 hover:shadow-md">
    <h3 class="text-lg font-semibold text-slate-900 mb-1">{{ title }}</h3>
    <p v-if="subtitle" class="text-sm text-slate-500 mb-4">{{ subtitle }}</p>
    <slot />
  </div>
</template>

