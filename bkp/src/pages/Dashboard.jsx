// File: src/pages/Dashboard.jsx
import React from 'react';
import MyCards from '../components/dashboard/MyCards';
import RecentTransactions from '../components/dashboard/RecentTransactions';
import WeeklyActivity from '../components/dashboard/WeeklyActivity';
import ExpenseStats from '../components/dashboard/ExpenseStats';
import QuickTransfer from '../components/dashboard/QuickTransfer';
import BalanceHistory from '../components/dashboard/BalanceHistory';

const Dashboard = () => {
  return (
    <div className="p-4 md:p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Top Row */}
        <div className="lg:col-span-2 space-y-6">
          <MyCards />
          <WeeklyActivity />
          <ExpenseStats />
        </div>

        <div className="space-y-6">
          <QuickTransfer />
          <BalanceHistory />
        </div>
      </div>

      {/* Bottom Section - Full Width */}
      <div className="mt-6">
        <RecentTransactions />
      </div>
    </div>
  );
};

export default Dashboard;
