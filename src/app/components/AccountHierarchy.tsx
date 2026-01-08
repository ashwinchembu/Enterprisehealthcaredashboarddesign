import { User, Building2 } from "lucide-react";

export function AccountHierarchy() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">
        Account Hierarchy
      </h3>

      <div className="flex justify-center">
        <div className="space-y-3 flex flex-col w-2/3">
          {/* Investigator Card */}
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-200 rounded-full">
                <User className="w-5 h-5 text-gray-600" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900">
                  Dr. Lisa Ray
                </div>
                <div className="text-sm text-gray-600">
                  Investigator
                </div>
              </div>
            </div>
          </div>

          {/* Connector Line */}
          <div className="ml-8 h-6 border-l-2 border-gray-300"></div>

          {/* Site Card */}
          <div className="border-2 border-blue-500 rounded-lg p-4 bg-white">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 rounded">
                <Building2 className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-blue-600">
                  City General Hospital
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-600 text-white mt-1">
                  Site
                </span>
              </div>
            </div>
          </div>

          {/* No child accounts text */}
          <div className="text-center py-3">
            <p className="text-sm text-gray-500">
              No child accounts linked.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}