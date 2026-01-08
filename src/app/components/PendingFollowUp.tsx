import { Calendar, MoreHorizontal } from 'lucide-react';

export function PendingFollowUp() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-1">Pending Follow-up's</h3>
      <p className="text-sm text-gray-500 mb-6">Tasks that require your attention for this account.</p>
      
      {/* Table Header */}
      <div className="border-b border-gray-200 pb-3 mb-3">
        <div className="grid grid-cols-12 gap-4 text-xs font-medium text-gray-600">
          <div className="col-span-4">Title</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-2">Due Date</div>
          <div className="col-span-2">Priority</div>
          <div className="col-span-1">Assigned To</div>
          <div className="col-span-1">Actions</div>
        </div>
      </div>

      {/* Task Row */}
      <div className="py-3 border-b border-gray-100">
        <div className="grid grid-cols-12 gap-4 items-center">
          <div className="col-span-4">
            <div className="font-medium text-gray-900 text-sm mb-1">
              Follow up with City General re: enrollment numbers
            </div>
            <div className="text-xs text-gray-500">
              Discuss current enrollment figures for Study X and id...
            </div>
          </div>
          <div className="col-span-2">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border border-orange-300 text-orange-700 bg-white">
              To Do
            </span>
          </div>
          <div className="col-span-2">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Calendar className="w-4 h-4 text-gray-400" />
              06/27/2025
            </div>
          </div>
          <div className="col-span-2">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700">
              High
            </span>
          </div>
          <div className="col-span-1">
            <span className="text-sm text-gray-700">N/A</span>
          </div>
          <div className="col-span-1 flex justify-end">
            <button className="p-1 hover:bg-gray-100 rounded">
              <MoreHorizontal className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
