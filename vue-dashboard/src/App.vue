<script setup lang="ts">
import MetricCard from './components/MetricCard.vue'
import Card from './components/Card.vue'
import AIBarriersCard from './components/AIBarriersCard.vue'
import SiteProgressStepper from './components/SiteProgressStepper.vue'
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
        <SiteProgressStepper />
      </section>

      <!-- Metrics Section -->
      <section class="mb-8">
        <div class="flex gap-4 flex-wrap">
          <MetricCard icon="📊" label="Active Trials" />
          <MetricCard icon="👥" label="Enrolled Patients" />
          <MetricCard icon="📈" label="Enrollment Rate" />
          <MetricCard icon="⏱️" label="Avg. Time to Enroll" />
          <MetricCard icon="⚡" label="Screening Failures" />
        </div>
      </section>

      <!-- AI-Identified Potential Barriers -->
      <section class="mb-6">
        <AIBarriersCard />
      </section>

      <!-- Bottom Two-Column Layout -->
      <section class="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div class="space-y-6">
          <Card title="Ongoing Clinical Trials">
            <div class="space-y-4">
              <div v-for="i in 4" :key="i" class="rounded-xl border border-slate-200 p-4 transition-all hover:border-blue-300 hover:shadow-sm">
                <div class="flex items-start gap-3">
                  <div class="rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 p-2.5">
                    <span class="text-lg">📄</span>
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="font-semibold text-slate-900 mb-1">Trial {{ i }}</div>
                    <div class="text-sm text-slate-500 mb-2">Protocol: ---</div>
                    <div class="flex items-center gap-2 flex-wrap">
                      <span class="text-xs text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full font-medium">
                        Phase --
                      </span>
                      <span class="text-xs text-blue-700 bg-blue-100 px-2.5 py-1 rounded-full font-medium">
                        Status
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <Card title="Pending Follow-up's" subtitle="Tasks that require your attention for this account.">
          <!-- Table Header -->
          <div class="border-b border-slate-200 pb-3 mb-3">
            <div class="grid grid-cols-12 gap-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              <div class="col-span-4">Title</div>
              <div class="col-span-2">Status</div>
              <div class="col-span-2">Due Date</div>
              <div class="col-span-2">Priority</div>
              <div class="col-span-2">Assigned</div>
            </div>
          </div>

          <!-- Empty Task Rows -->
          <div v-for="i in 3" :key="i" class="py-3 border-b border-slate-100 last:border-b-0">
            <div class="grid grid-cols-12 gap-4 items-center">
              <div class="col-span-4">
                <div class="font-medium text-slate-900 text-sm mb-1">Task {{ i }}</div>
                <div class="text-xs text-slate-500">Description placeholder...</div>
              </div>
              <div class="col-span-2">
                <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border border-orange-300 text-orange-700 bg-orange-50">
                  To Do
                </span>
              </div>
              <div class="col-span-2">
                <div class="flex items-center gap-2 text-sm text-slate-600">
                  <span>📅</span>
                  --/--/----
                </div>
              </div>
              <div class="col-span-2">
                <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700">
                  High
                </span>
              </div>
              <div class="col-span-2 text-sm text-slate-500">
                N/A
              </div>
            </div>
          </div>
        </Card>
      </section>
    </div>
  </div>
</template>
