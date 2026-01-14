<template>
  <div
    class="w-full min-w-0 rounded-2xl border border-slate-100 bg-white
           p-3.5 md:p-4 shadow-[0_10px_18px_rgba(16,24,40,0.08)]"
  >
    <div class="flex items-start justify-between gap-2 mb-3.5 md:mb-4">
      <!-- Icon -->
      <div
        class="flex items-center justify-center rounded-xl
               w-10 h-10 md:w-11 md:h-11
               bg-blue-50 text-blue-600"
      >
        <!-- Pulse -->
        <svg
          v-if="icon === 'pulse'"
          viewBox="0 0 24 24"
          class="h-5 w-5 md:h-6 md:w-6"
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
          class="h-5 w-5 md:h-6 md:w-6"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M16 11a4 4 0 1 0-8 0" />
          <path d="M3 21a7 7 0 0 1 18 0" />
        </svg>

        <!-- Trend -->
        <svg
          v-else-if="icon === 'trend'"
          viewBox="0 0 24 24"
          class="h-5 w-5 md:h-6 md:w-6 translate-x-[0.5px] translate-y-[0.5px]"
          fill="none"
          stroke="currentColor"
          stroke-width="1.75"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M3 17l6-6 4 4 7-7" />
        </svg>

        <!-- Clock -->
        <svg
          v-else-if="icon === 'clock'"
          viewBox="0 0 24 24"
          class="h-5 w-5 md:h-6 md:w-6"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10Z" />
          <path d="M12 6v6l4 2" />
        </svg>

        <!-- Alert -->
        <svg
          v-else-if="icon === 'alert'"
          viewBox="0 0 24 24"
          class="h-5 w-5 md:h-6 md:w-6"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M12 9v5" />
          <path d="M12 17h.01" />
          <path
            d="M10.3 4.2 2.7 18.2A2 2 0 0 0 4.4 21h15.2a2 2 0 0 0 1.7-2.8l-7.6-14a2 2 0 0 0-3.4 0Z"
          />
        </svg>
      </div>

      <!-- Delta -->
      <div
        v-if="deltaText"
        class="mt-1 text-[11px] md:text-xs font-semibold"
        :class="deltaClass"
      >
        {{ deltaText }}
      </div>
    </div>

    <div class="text-slate-900 font-bold tracking-tight leading-none
                text-2xl md:text-[28px] lg:text-3xl mb-1">
      {{ value }}
    </div>

    <div class="text-slate-500 font-medium
                text-[11px] md:text-xs lg:text-sm leading-snug">
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
