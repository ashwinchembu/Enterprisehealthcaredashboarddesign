<script setup lang="ts">
</script>

<template>
  <div class="rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
    <h3 class="mb-1 text-lg font-semibold text-slate-900">Pending Follow-up's</h3>
    <p class="mb-6 text-sm text-slate-500">Tasks that require your attention for this account.</p>

    <!-- Table Header -->
    <div class="mb-3 border-b border-slate-200 pb-3">
      <div class="grid grid-cols-12 gap-4 text-xs font-medium text-slate-600">
        <div class="col-span-4">Title</div>
        <div class="col-span-2">Status</div>
        <div class="col-span-2">Due Date</div>
        <div class="col-span-2">Priority</div>
        <div class="col-span-1">Assigned To</div>
        <div class="col-span-1">Actions</div>
      </div>
    </div>

    <!-- Task Row -->
    <div class="border-b border-slate-100 py-3">
      <div class="grid grid-cols-12 items-center gap-4">
        <div class="col-span-4">
          <div class="mb-1 text-sm font-medium text-slate-900">
            Follow up with City General re: enrollment numbers
          </div>
          <div class="text-xs text-slate-500">
            Discuss current enrollment figures for Study X and id...
          </div>
        </div>
        <div class="col-span-2">
          <span class="inline-flex items-center rounded-full border border-orange-300 bg-white px-2.5 py-1 text-xs font-medium text-orange-700">
            To Do
          </span>
        </div>
        <div class="col-span-2">
          <div class="flex items-center gap-2 text-sm text-slate-700">
            <span>📅</span>
            06/27/2025
          </div>
        </div>
        <div class="col-span-2">
          <span class="inline-flex items-center rounded-full bg-red-100 px-2.5 py-1 text-xs font-medium text-red-700">
            High
          </span>
        </div>
        <div class="col-span-1">
          <span class="text-sm text-slate-700">N/A</span>
        </div>
        <div class="col-span-1 flex justify-end">
          <button class="rounded p-1 hover:bg-slate-100">
            <span class="text-slate-400">⋯</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

