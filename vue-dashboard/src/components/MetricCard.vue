<template>
  <div
    class="w-full min-w-0 rounded-2xl border border-slate-100 bg-white
           p-4 shadow-[0_10px_18px_rgba(16,24,40,0.08)]"
  >
    <div class="flex items-start justify-between gap-2 mb-4">
      <!-- Icon -->
      <div
        class="flex items-center justify-center rounded-xl shrink-0
               w-11 h-11 bg-blue-50 text-blue-600"
      >
        <!-- Pulse -->
        <svg
          v-if="icon === 'pulse'"
          viewBox="0 0 24 24"
          class="h-5 w-5"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M3 12h4l2-6 4 12 2-6h6" />
        </svg>

        <!-- Users -->
        <svg
          v-else-if="icon === 'users'"
          viewBox="0 0 24 24"
          class="h-5 w-5"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>

        <!-- Trend -->
        <svg
          v-else-if="icon === 'trend'"
          viewBox="0 0 24 24"
          class="h-5 w-5"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>

        <!-- Clock -->
        <svg
          v-else-if="icon === 'clock'"
          viewBox="0 0 24 24"
          class="h-5 w-5"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>

        <!-- Alert -->
        <svg
          v-else-if="icon === 'alert'"
          viewBox="0 0 24 24"
          class="h-5 w-5"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      </div>

      <!-- Delta -->
      <div
        v-if="deltaText"
        class="mt-1 text-xs font-semibold"
        :class="deltaClass"
      >
        {{ deltaText }}
      </div>
    </div>

    <div class="text-slate-900 font-bold tracking-tight leading-none
                text-[28px] mb-1">
      {{ value }}
    </div>

    <div class="text-slate-500 font-medium text-xs leading-snug">
      {{ label }}
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  icon: { type: String, default: "pulse" },
  value: { type: [String, Number], required: true },
  label: { type: String, required: true },
  deltaText: { type: String, default: "" },
  deltaType: { type: String, default: "" },
});

const deltaClass = computed(() => {
  if (props.deltaType === "down") return "text-red-600";
  if (props.deltaType === "up") return "text-green-600";
  return "text-slate-500";
});
</script>
