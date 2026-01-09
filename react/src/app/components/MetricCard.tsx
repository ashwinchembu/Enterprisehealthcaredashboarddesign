import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  trend?: {
    direction: 'up' | 'down';
    value: string;
  };
}

export function MetricCard({ icon: Icon, label, value, trend }: MetricCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 flex-1 min-w-[200px]">
      <div className="flex items-start justify-between mb-4">
        <div className="p-2 bg-blue-50 rounded-lg">
          <Icon className="w-5 h-5 text-blue-600" />
        </div>
        {trend && (
          <div className={`flex items-center text-sm ${trend.direction === 'up' ? 'text-green-600' : 'text-red-600'}`}>
            <span>{trend.value}</span>
          </div>
        )}
      </div>
      <div className="text-3xl font-semibold text-gray-900 mb-1">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}
