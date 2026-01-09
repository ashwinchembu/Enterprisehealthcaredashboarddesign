import { FileText } from 'lucide-react';

interface Trial {
  name: string;
  phase: string;
  status: 'recruiting' | 'on-hold' | 'active';
  protocol: string;
}

export function OngoingTrials() {
  const trials: Trial[] = [
    {
      name: 'Cardiovascular Outcomes Study',
      phase: 'Phase III',
      status: 'recruiting',
      protocol: 'CARD-2024-001',
    },
    {
      name: 'Diabetes Prevention Trial',
      phase: 'Phase II',
      status: 'on-hold',
      protocol: 'DIAB-2024-015',
    },
    {
      name: 'Hypertension Management Study',
      phase: 'Phase III',
      status: 'recruiting',
      protocol: 'HTN-2023-089',
    },
    {
      name: 'Chronic Pain Relief Trial',
      phase: 'Phase II',
      status: 'active',
      protocol: 'PAIN-2024-032',
    },
  ];

  const getStatusBadge = (status: Trial['status']) => {
    const styles = {
      recruiting: 'bg-blue-100 text-blue-800',
      'on-hold': 'bg-yellow-100 text-yellow-800',
      active: 'bg-green-100 text-green-800',
    };

    const labels = {
      recruiting: 'Recruiting',
      'on-hold': 'On Hold',
      active: 'Active',
    };

    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[status]}`}>
        {labels[status]}
      </span>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Ongoing Clinical Trials</h3>
      
      <div className="space-y-4">
        {trials.map((trial, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-purple-50 rounded-lg">
                <FileText className="w-5 h-5 text-purple-600" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-gray-900 mb-1">{trial.name}</div>
                <div className="text-sm text-gray-600 mb-2">Protocol: {trial.protocol}</div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {trial.phase}
                  </span>
                  {getStatusBadge(trial.status)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
