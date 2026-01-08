import {
  Building2,
  Activity,
  Users,
  TrendingUp,
  Clock,
  AlertCircle,
} from "lucide-react";
import { MetricCard } from "./components/MetricCard";
import { SiteProgressStepper } from "./components/SiteProgressStepper";
import { AIBarriers } from "./components/AIBarriers";
import { AccountHierarchy } from "./components/AccountHierarchy";
import { OngoingTrials } from "./components/OngoingTrials";
import { PendingFollowUp } from "./components/PendingFollowUp";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-8 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-blue-100 rounded-xl">
              <Building2 className="w-8 h-8 text-blue-600" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-semibold text-gray-900 mb-2">
                City General Hospital
              </h1>
              <p className="text-base text-gray-600 mb-1">
                456 Health Ave, MedCity, USA
              </p>
              <p className="text-sm text-gray-600">
                Part of:{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-medium hover:underline"
                >
                  Dr. Lisa Ray
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Site Progression Section */}
        <div className="mb-6">
          <SiteProgressStepper />
        </div>

        {/* Metrics Section */}
        <div className="mb-8">
          <div className="flex gap-4 flex-wrap">
            <MetricCard
              icon={Activity}
              label="Active Trials"
              value={12}
              trend={{ direction: "up", value: "+2" }}
            />
            <MetricCard
              icon={Users}
              label="Enrolled Patients"
              value={247}
              trend={{ direction: "up", value: "+18%" }}
            />
            <MetricCard
              icon={TrendingUp}
              label="Enrollment Rate"
              value="87%"
              trend={{ direction: "up", value: "+5%" }}
            />
            <MetricCard
              icon={Clock}
              label="Avg. Time to Enroll"
              value="12 days"
              trend={{ direction: "down", value: "-3 days" }}
            />
            <MetricCard
              icon={AlertCircle}
              label="Screening Failures"
              value={34}
            />
          </div>
        </div>

        {/* AI-Identified Potential Barriers */}
        <div className="mb-6">
          <AIBarriers />
        </div>

        {/* Bottom Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <OngoingTrials />
            {/* <AccountHierarchy /> */}
          </div>
          <PendingFollowUp />
        </div>
      </div>
    </div>
  );
}