import MyCards from "@/components/dashboard/MyCards";
import WeeklyActivityChart from "@/components/dashboard/WeeklyActivityChart";
import QuickTransfer from "@/components/dashboard/QuickTransfer";
import ExpenseStatistics from "@/components/dashboard/ExpenseStatistics";
import BalanceHistoryChart from "@/components/dashboard/BalanceHistoryChart";
import RecentTransactions from "@/components/dashboard/RecentTransactions";

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <MyCards />
          <WeeklyActivityChart />
        </div>
        <QuickTransfer />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ExpenseStatistics />
        <BalanceHistoryChart />
        <RecentTransactions />
      </div>
    </div>
  );
}
