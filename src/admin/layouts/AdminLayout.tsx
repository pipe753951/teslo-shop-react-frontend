import { useState } from "react";
import { Outlet } from "react-router";

import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";

const AdminLayout = function () {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div>
      <div className="h-screen bg-gray-50 flex">
        <AdminSidebar
          isCollapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        />

        <div className="flex-1 flex flex-col">
          <AdminHeader />

          <main className="flex-1 overflow-scroll">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
