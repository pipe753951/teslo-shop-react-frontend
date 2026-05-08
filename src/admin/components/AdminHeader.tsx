import React from "react";

import { Search, Bell, MessageSquare, Settings } from "lucide-react";

import useAuthStore from "@/auth/store/auth.store";

import getUsernameInitials from "@/lib/app_helpers/getUsernameInitials.helper";

import UserProfileCircle from "@/components/shared/UserProfileCircle";

const AdminHeader: React.FC = function () {
  const { user } = useAuthStore();

  return (
    <header className="h-18 px-6 flex items-center justify-between bg-white border-b border-gray-200">
      {/* Actions */}
      <div className="flex-1 flex items-center justify-end space-x-4">
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
