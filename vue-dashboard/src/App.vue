<script setup lang="ts">
import Card from './components/Card.vue'
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50">
    <!-- Decorative background elements -->
    <div class="fixed inset-0 -z-10 overflow-hidden">
      <div class="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>
      <div class="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-purple-200 opacity-20 blur-3xl"></div>
      <div class="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-200 opacity-10 blur-3xl"></div>
    </div>

    <div class="mx-auto max-w-[1440px] px-8 py-8">
      <!-- Header Section -->
      <header class="mb-8">
        <div class="flex items-start gap-4 mb-6">
          <div class="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg shadow-blue-200">
            <span class="text-3xl">🏥</span>
          </div>
          <div class="flex-1">
            <h1 class="text-3xl font-bold text-slate-900 mb-2 tracking-tight">
              City General Hospital
            </h1>
            <p class="text-base text-slate-600 mb-1">
              456 Health Ave, MedCity, USA
            </p>
            <p class="text-sm text-slate-500">
              Part of: 
              <a href="#" class="text-blue-600 hover:text-blue-700 font-semibold hover:underline underline-offset-2 transition-colors">
                Dr. Lisa Ray
              </a>
            </p>
          </div>
        </div>
      </header>

      <!-- Site Progression Section -->
      <section class="mb-6">
        <Card title="Site Progression" />
      </section>

      <!-- Metrics Section -->
      <section class="mb-8">
        <div class="flex gap-4 flex-wrap">
          <Card title="Active Trials" class="flex-1 min-w-[180px]" />
          <Card title="Enrolled Patients" class="flex-1 min-w-[180px]" />
          <Card title="Enrollment Rate" class="flex-1 min-w-[180px]" />
          <Card title="Avg. Time to Enroll" class="flex-1 min-w-[180px]" />
          <Card title="Screening Failures" class="flex-1 min-w-[180px]" />
        </div>
      </section>

      <!-- AI-Identified Potential Barriers -->
      <section class="mb-6">
        <Card title="AI-Identified Potential Barriers" />
      </section>

      <!-- Bottom Two-Column Layout -->
      <section class="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card title="Ongoing Clinical Trials" />
        <Card title="Pending Follow-up's" />
      </section>
    </div>
  </div>
</template>
