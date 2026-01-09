import {
  AlertTriangle,
  TrendingDown,
  Clock,
  Users,
  Lightbulb,
  ChevronRight,
} from "lucide-react";

export function AIBarriers() {
  const barriers = [
    {
      title: "Low patient enrollment",
      description:
        "Current enrollment rate is 23% below target",
      icon: TrendingDown,
      severity: "high",
    },
    {
      title: "HCPs lack time to participate",
      description: "Average response time increased by 4 days",
      icon: Clock,
      severity: "medium",
    },
    {
      title: "Limited bandwidth to reach patients",
      description: "Screening capacity at 67% utilization",
      icon: Users,
      severity: "medium",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-50 border-2 border-amber-300 rounded-xl shadow-lg p-6 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200 rounded-full opacity-10 blur-3xl -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-200 rounded-full opacity-10 blur-3xl -ml-24 -mb-24" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-start gap-3">
            <div className="p-3 bg-amber-500 rounded-xl shadow-lg">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                AI-Identified Potential Barriers
              </h3>
              <p className="text-sm text-amber-700 font-medium">
                3 issues detected requiring attention
              </p>
            </div>
          </div>
          <button className="flex items-center gap-1 px-3 py-1.5 bg-white border border-amber-300 rounded-lg hover:bg-amber-50 transition-colors text-sm font-medium text-amber-700">
            <Lightbulb className="w-4 h-4" />
            View Insights
          </button>
        </div>

        {/* Barriers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {barriers.map((barrier, index) => {
            const Icon = barrier.icon;
            return (
              <div
                key={index}
                className="bg-white border-2 border-amber-200 rounded-lg p-4 hover:shadow-md hover:border-amber-300 transition-all duration-200 group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <div
                    className={`
                    p-2 rounded-lg
                    ${barrier.severity === "high" ? "bg-red-100" : "bg-amber-100"}
                  `}
                  >
                    <Icon
                      className={`
                      w-5 h-5
                      ${barrier.severity === "high" ? "text-red-600" : "text-amber-600"}
                    `}
                    />
                  </div>
                  <ChevronRight className="w-4 h-4 text-amber-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
                </div>

                <h4 className="font-semibold text-gray-900 text-sm mb-2 leading-tight">
                  {barrier.title}
                </h4>

                <p className="text-xs text-gray-600 leading-relaxed">
                  {barrier.description}
                </p>

                <div className="mt-3 pt-3 border-t border-gray-100">
                  <span
                    className={`
                    inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full
                    ${
                      barrier.severity === "high"
                        ? "bg-red-100 text-red-700"
                        : "bg-amber-100 text-amber-700"
                    }
                  `}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                    {barrier.severity === "high"
                      ? "High Priority"
                      : "Medium Priority"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Footer */}
        <div className="mt-4 pt-4 border-t-2 border-amber-200">
          <div className="flex items-center justify-between">
            <p className="text-xs text-amber-800">
              <span className="font-semibold">
                AI Analysis:
              </span>{" "}
              Last updated 2 hours ago • Next scan in 4 hours
            </p>
            {/* <button className="text-xs font-medium text-amber-700 hover:text-amber-900 hover:underline">
              Configure AI Settings →
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}