import React from 'react';
import MyCards from '../components/MyCards';
import RecentTransactions from '../components/RecentTransactions';
import WeeklyActivityChart from '../components/WeeklyActivityChart';
import ExpenseStatistics from '../components/ExpenseStatistics';
import QuickTransfer from '../components/QuickTransfer';
import BalanceHistoryChart from '../components/BalanceHistoryChart';

const DashboardPage = () => {
  const cards = [
    { cardHolder: 'John Doe', cardNumber: '1234567812345678', balance: 15000 },
    { cardHolder: 'Jane Smith', cardNumber: '8765432187654321', balance: 23000 },
  ];

  const transactions = [
    { description: 'Groceries', amount: -450 },
    { description: 'Salary', amount: 50000 },
    { description: 'Netflix', amount: -499 },
  ];

  const weeklyData = [
    { day: 'Mon', deposit: 1000, withdrawal: 200 },
    { day: 'Tue', deposit: 800, withdrawal: 300 },
    { day: 'Wed', deposit: 1200, withdrawal: 400 },
    { day: 'Thu', deposit: 1500, withdrawal: 600 },
    { day: 'Fri', deposit: 700, withdrawal: 500 },
    { day: 'Sat', deposit: 900, withdrawal: 300 },
    { day: 'Sun', deposit: 1100, withdrawal: 200 },
  ];

  const expenseData = [
    { category: 'Bill Expense', value: 15, color: '#FC7900'},
    { category: 'Others', value: 35, color: '#232323'},
    { category: 'Investment', value: 20, color: '#396AFF' },
    { category: 'Entertainment', value: 30, color: '#343C6A'},
  ];

  const contacts = [
    { name: 'Alice', avatar: 'https://i.pravatar.cc/50?img=1' },
    { name: 'Bob', avatar: 'https://i.pravatar.cc/50?img=2' },
    { name: 'Charlie', avatar: 'https://i.pravatar.cc/50?img=3' },
  ];

  const balanceHistory = [
    { month: 'Jan', balance: 20000 },
    { month: 'Feb', balance: 25000 },
    { month: 'Mar', balance: 23000 },
    { month: 'Apr', balance: 27000 },
  ];

  return (
    <div style={{ display: 'grid', gap: '1rem' }}>
      <MyCards cards={cards} />
      <RecentTransactions transactions={transactions} />
      <WeeklyActivityChart data={weeklyData} />
      <ExpenseStatistics data={expenseData} />
      <QuickTransfer contacts={contacts} />
      <BalanceHistoryChart data={balanceHistory} />
    </div>
  );
};

export default DashboardPage;
