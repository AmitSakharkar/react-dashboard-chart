import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <div className="w-64 bg-gray-900 text-white p-4 hidden md:block">
      <h2 className="text-2xl font-bold mb-6">Soar App</h2>
      <nav className="space-y-4">
        <Link
          to="/"
          className={`block px-3 py-2 rounded hover:bg-gray-700 ${
            pathname === '/' ? 'bg-gray-800' : ''
          }`}
        >
          Dashboard
        </Link>
        <Link
          to="/settings"
          className={`block px-3 py-2 rounded hover:bg-gray-700 ${
            pathname === '/settings' ? 'bg-gray-800' : ''
          }`}
        >
          Settings
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;