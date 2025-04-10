import React from 'react';
import styled from 'styled-components';
import MyCards from '../components/MyCards/MyCards';
import RecentTransactions from '../components/RecentTransactions';
import WeeklyActivityChart from '../components/WeeklyActivityChart';
import ExpenseStatistics from '../components/ExpenseStatistics';
import QuickTransfer from '../components/QuickTransfer';
import BalanceHistoryChart from '../components/BalanceHistoryChart';
import TransactionIcon1 from "../assets/icon/Group313.svg";
import TransactionIcon2 from "../assets/icon/Group314.svg";
import TransactionIcon3 from "../assets/icon/Group315.svg";

const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 24px 16px;
  font-family: 'Inter', sans-serif;
  background-color: #f9fafb;
  min-height: 100vh;

  @media (min-width: 1024px) {
    padding: 32px 40px;
    gap: 48px;
  }
`;

const GridTwoColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1.2fr;
  }
`;

const mockTransactions = [
  { 
    description: 'Grocery Shopping', 
    amount: -1200, 
    icon: TransactionIcon1,
    date: 'Today, 10:45 AM'
  },
  { 
    description: 'Salary Deposit', 
    amount: 50000, 
    icon: TransactionIcon2,
    date: 'Yesterday, 2:30 PM' 
  },
  { 
    description: 'Electric Bill', 
    amount: -2500, 
    icon: TransactionIcon3,
    date: 'Mar 15, 9:00 AM'
  }
];

const mockActivityData = [
  { day: 'Mon', value: 45, baseline: 30 },
  { day: 'Tue', value: 60, baseline: 30 },
  { day: 'Wed', value: 30, baseline: 30 },
  { day: 'Thu', value: 70, baseline: 30 },
  { day: 'Fri', value: 50, baseline: 30 },
  { day: 'Sat', value: 20, baseline: 30 },
  { day: 'Sun', value: 40, baseline: 30 }
];

const mockExpenseData = [
  { category: 'Food', value: 1200, color: '#FF6384' },
  { category: 'Transport', value: 800, color: '#36A2EB' },
  { category: 'Entertainment', value: 500, color: '#FFCE56' },
  { category: 'Utilities', value: 1000, color: '#4BC0C0' }
];

export default function Dashboard() {
  return (
    <DashboardWrapper>
      <MyCards />
      <GridTwoColumns>
        <RecentTransactions transactions={mockTransactions} />
        <WeeklyActivityChart data={mockActivityData} />
      </GridTwoColumns>
      <GridTwoColumns>
        <ExpenseStatistics data={mockExpenseData} />
        <QuickTransfer />
      </GridTwoColumns>
      <BalanceHistoryChart />
    </DashboardWrapper>
  );
}
