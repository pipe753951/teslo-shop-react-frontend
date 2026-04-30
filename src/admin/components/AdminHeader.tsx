import React from "react";

import { Search, Bell, MessageSquare, Settings } from "lucide-react";

import useAuthStore from "@/auth/store/auth.store";

import getUsernameInitials from "@/lib/app_helpers/getUsernameInitials.helper";

import UserProfileCircle from "@/components/shared/UserProfileCircle";

const AdminHeader: React.FC = function () {
  const { user } = useAuthStore();

  return (
    <header className="h-18 px-6 flex items-center justify-between bg-white border-b border-gray-200">
      {/* Search */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-4">
        <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
        </button>

        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
          <MessageSquare size={20} />
        </button>

        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
          <Settings size={20} />
        </button>

        <UserProfileCircle
          usernameInitials={getUsernameInitials(user!.fullName)}
          className="size-8 text-sm"
        />
      </div>
    </header>
  );
};

export default AdminHeader;
