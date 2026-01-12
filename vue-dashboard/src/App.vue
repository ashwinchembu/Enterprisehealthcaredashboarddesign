<script setup>
import AIBarriersCard from './components/AIBarriersCard.vue'
import OngoingTrials from './components/OngoingTrials.vue'
import PendingFollowUp from './components/PendingFollowUp.vue'
import SiteProgression from './components/SiteProgression.vue'
import MetricCard from './components/MetricCard.vue'
</script>

<template>
  <div
    class="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50"
  >
    <!-- Decorative background -->
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <div class="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-blue-200 opacity-20 blur-2xl"></div>
      <div class="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-purple-200 opacity-20 blur-2xl"></div>
      <div class="absolute top-1/2 left-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-200 opacity-10 blur-2xl"></div>
    </div>

    <!-- HEADER: top-left of screen -->
    <header class="px-4 py-4 md:px-6 md:py-6 lg:px-8 lg:py-8">
      <div class="flex items-start gap-3 md:gap-4">
        <div
          class="shrink-0 p-3 md:p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg shadow-blue-200"
        >
          <span class="text-2xl md:text-3xl">🏥</span>
        </div>

        <div class="flex-1 min-w-0">
          <h1
            class="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-1 md:mb-2 tracking-tight"
          >
            City General Hospital
          </h1>

          <p class="text-sm md:text-base text-slate-600 mb-1">
            456 Health Ave, MedCity, USA
          </p>

          <p class="text-xs md:text-sm text-slate-500">
            Part of:
            <a class="text-blue-600 hover:underline font-semibold cursor-pointer">
              Dr. Lisa Ray
            </a>
          </p>
        </div>
      </div>
    </header>

    <!-- MAIN CONTENT: centered -->
    <main class="flex justify-center">
      <div class="w-full max-w-[1200px] px-4 pb-6 md:px-6 md:pb-8 lg:px-8 lg:pb-10">
        <!-- Site Progression -->
        <section class="mb-5 md:mb-6 lg:mb-8">
          <SiteProgression />
        </section>

        <!-- Metrics -->
        <section class="mb-5 md:mb-6 lg:mb-8">
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 lg:gap-5">
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

        <!-- AI Barriers -->
        <section class="mb-5 md:mb-6 lg:mb-8">
          <AIBarriersCard />
        </section>

        <!-- Bottom layout -->
        <section class="grid grid-cols-1 gap-4 md:gap-5 lg:gap-6 lg:grid-cols-2">
          <OngoingTrials />
          <PendingFollowUp />
        </section>
      </div>
    </main>
  </div>
</template>
