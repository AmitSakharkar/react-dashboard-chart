import { Outlet, NavLink } from 'react-router-dom';
import { LayoutDashboard, Settings } from 'lucide-react';

const AppLayout = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r hidden md:flex flex-col justify-between">
        <div>
          <div className="text-2xl font-bold text-center py-6 border-b">FinanceApp</div>
          <nav className="mt-4 px-4 flex flex-col gap-2">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 ${
                  isActive ? 'bg-gray-100 text-blue-600' : 'text-gray-700'
                }`
              }
            >
              <LayoutDashboard size={20} /> Dashboard
            </NavLink>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 ${
                  isActive ? 'bg-gray-100 text-blue-600' : 'text-gray-700'
                }`
              }
            >
              <Settings size={20} /> Settings
            </NavLink>
          </nav>
        </div>
        <div className="text-sm text-gray-400 text-center py-4">© 2025 FinanceApp</div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white h-16 shadow flex items-center px-6 justify-between">
          <h1 className="text-xl font-semibold text-gray-800">Finance Dashboard</h1>
          <div className="w-8 h-8 rounded-full bg-gray-200" />
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
