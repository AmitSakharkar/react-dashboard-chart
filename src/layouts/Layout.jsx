import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Topbar />
        <main className="p-4 sm:p-6 overflow-y-auto bg-gray-50 min-h-0">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
