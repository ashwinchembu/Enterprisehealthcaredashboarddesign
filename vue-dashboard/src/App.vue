<script setup lang="ts">
import Card from './components/Card.vue'
import AIBarriersCard from './components/AIBarriersCard.vue'
import OngoingTrials from './components/OngoingTrials.vue'
import PendingFollowUp from './components/PendingFollowUp.vue'
import SiteProgression from './components/SiteProgression.vue'
import MetricCard from './components/MetricCard.vue'
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
      <section class="mb-8">
        <SiteProgression />
      </section>

      <!-- Metrics Section -->
      <section class="mb-8">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          <MetricCard 
            icon="pulse" 
            label="Active Trials" 
            :value="12" 
            deltaText="+2" 
            deltaType="up" 
          />
          <MetricCard 
            icon="users" 
            label="Enrolled Patients" 
            :value="247" 
            deltaText="+18%" 
            deltaType="up" 
          />
          <MetricCard 
            icon="trend" 
            label="Enrollment Rate" 
            value="87%" 
            deltaText="+5%" 
            deltaType="up" 
          />
          <MetricCard 
            icon="clock" 
            label="Avg. Time to Enroll" 
            value="12 days" 
            deltaText="-3 days" 
            deltaType="down" 
          />
          <MetricCard 
            icon="alert" 
            label="Screening Failures" 
            :value="34" 
          />
        </div>
      </section>

      <!-- AI-Identified Potential Barriers -->
      <section class="mb-8">
        <AIBarriersCard />
      </section>

      <!-- Bottom Two-Column Layout -->
      <section class="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <OngoingTrials />
        <PendingFollowUp />
      </section>
    </div>
  </div>
</template>
