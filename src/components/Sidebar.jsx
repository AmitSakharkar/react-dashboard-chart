// File: src/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Settings } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-lg hidden md:block">
      <div className="h-full p-6 flex flex-col">
        <h1 className="text-2xl font-bold text-blue-600 mb-10">MyFinance</h1>
        <nav className="space-y-4">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-100 ${
                isActive ? 'bg-blue-100 text-blue-600 font-semibold' : 'text-gray-700'
              }`
            }
          >
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-100 ${
                isActive ? 'bg-blue-100 text-blue-600 font-semibold' : 'text-gray-700'
              }`
            }
          >
            <Settings size={20} />
            <span>Settings</span>
          </NavLink>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
