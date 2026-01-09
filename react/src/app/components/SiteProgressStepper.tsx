import { Check } from "lucide-react";

interface ChevronStepProps {
  label: string;
  status: "completed" | "active" | "pending";
  isFirst?: boolean;
}

const ChevronStep = ({
  label,
  status,
  isFirst,
}: ChevronStepProps) => {
  const getColors = () => {
    switch (status) {
      case "active":
        return "bg-green-600 text-white";
      case "completed":
        return "bg-gray-300 text-gray-700";
      case "pending":
        return "bg-gray-200 text-gray-500";
      default:
        return "bg-gray-200 text-gray-500";
    }
  };

  const getClipPath = () => {
    if (isFirst) {
      // First item: rounded left, arrow right
      return "polygon(8px 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 8px 100%, 0 100%, 0 0)";
    } else {
      // Other items: arrow left, arrow right
      return "polygon(12px 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 0 100%, 12px 50%)";
    }
  };

  return (
    <div
      className={`
        relative h-11 flex items-center justify-center
        ${getColors()}
        transition-all duration-200
      `}
      style={{
        clipPath: getClipPath(),
        paddingLeft: isFirst ? "20px" : "28px",
        paddingRight: "28px",
        minWidth: "150px",
      }}
    >
      <div className="flex items-center gap-2">
        {status === "active" && (
          <Check className="w-4 h-4 flex-shrink-0" />
        )}
        {status === "completed" && (
          <span className="text-sm">•</span>
        )}
        <span className="text-sm font-medium whitespace-nowrap">
          {label}
        </span>
      </div>
    </div>
  );
};

export function SiteProgressStepper() {
  const steps = [
    { label: "CDA In Place", status: "completed" as const },
    { label: "Feasibility", status: "completed" as const },
    {
      label: "Pre-Selection Visit",
      status: "completed" as const,
    },
    { label: "Site Selected", status: "completed" as const },
    { label: "1572 Form", status: "completed" as const },
    { label: "Site Initiated", status: "active" as const },
    { label: "Site Active", status: "active" as const },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-1">
          Site Progression
        </h2>
        <p className="text-sm text-gray-500">
          Overview of the site's activation and onboarding
          status.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {steps.map((step, index) => (
          <ChevronStep
            key={index}
            label={step.label}
            status={step.status}
            isFirst={index === 0}
          />
        ))}
      </div>
    </div>
  );
}