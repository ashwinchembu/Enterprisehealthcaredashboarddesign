<template>
  <div class="kpi-card">
    <div class="kpi-top">
      <div class="kpi-icon">
        <!-- Simple inline SVG icons (no extra libs needed) -->
        <svg v-if="icon === 'pulse'" viewBox="0 0 24 24" class="kpi-svg" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M3 12h4l2-6 4 12 2-6h6" />
        </svg>

        <svg v-else-if="icon === 'users'" viewBox="0 0 24 24" class="kpi-svg" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M16 11a4 4 0 1 0-8 0" />
          <path d="M3 21a7 7 0 0 1 18 0" />
          <path d="M20 8a3 3 0 1 1-6 0" opacity="0.6" />
        </svg>

        <svg v-else-if="icon === 'trend'" viewBox="0 0 24 24" class="kpi-svg" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M3 17l6-6 4 4 8-8" />
          <path d="M21 7v6h-6" />
        </svg>

        <svg v-else-if="icon === 'clock'" viewBox="0 0 24 24" class="kpi-svg" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10Z" />
          <path d="M12 6v6l4 2" />
        </svg>

        <svg v-else-if="icon === 'alert'" viewBox="0 0 24 24" class="kpi-svg" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 9v5" />
          <path d="M12 17h.01" />
          <path d="M10.3 4.2 2.7 18.2A2 2 0 0 0 4.4 21h15.2a2 2 0 0 0 1.7-2.8l-7.6-14a2 2 0 0 0-3.4 0Z" />
        </svg>
      </div>

      <div v-if="deltaText" class="kpi-delta" :class="deltaClass">
        {{ deltaText }}
      </div>
    </div>

    <div class="kpi-value">{{ value }}</div>
    <div class="kpi-label">{{ label }}</div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  icon: { type: String, default: "pulse" }, // pulse | users | trend | clock | alert
  value: { type: [String, Number], required: true },
  label: { type: String, required: true },

  // Optional: pass either "+18%" or "-3 days"
  deltaText: { type: String, default: "" },

  // "up" -> green, "down" -> red, "" -> neutral
  deltaType: { type: String, default: "" }, // up | down | neutral
});

const deltaClass = computed(() => {
  if (props.deltaType === "down") return "is-down";
  if (props.deltaType === "up") return "is-up";
  return "is-neutral";
});
</script>

<style scoped>
.kpi-card {
  background: #fff;
  border: 1px solid #eef1f6;
  border-radius: 18px;
  padding: 18px 18px 16px;
  box-shadow: 0 10px 18px rgba(16, 24, 40, 0.08);
  min-width: 220px;
}

.kpi-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 14px;
}

.kpi-icon {
  width: 46px;
  height: 46px;
  border-radius: 14px;
  background: #eef5ff;
  display: grid;
  place-items: center;
  color: #2b6cff;
}

.kpi-svg {
  width: 22px;
  height: 22px;
}

.kpi-delta {
  font-size: 14px;
  font-weight: 600;
  margin-top: 6px;
}

.kpi-delta.is-up { color: #12b76a; }
.kpi-delta.is-down { color: #f04438; }
.kpi-delta.is-neutral { color: #667085; }

.kpi-value {
  font-size: 44px;
  line-height: 1;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #101828;
  margin-bottom: 6px;
}

.kpi-label {
  font-size: 16px;
  color: #667085;
  font-weight: 500;
}
</style>
