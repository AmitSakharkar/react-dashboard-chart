// src/pages/Dashboard.jsx
import React from 'react';
import styled from 'styled-components';
import MyCards from '../components/MyCards/MyCards';
import RecentTransactions from '../components/RecentTransactions';
import WeeklyActivityChart from '../components/WeeklyActivityChart';
import ExpenseStatistics from '../components/ExpenseStatistics';
import QuickTransfer from '../components/QuickTransfer';
import BalanceHistoryChart from '../components/BalanceHistoryChart';

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

export default function Dashboard() {
  return (
    <DashboardWrapper>
      <MyCards />
      <GridTwoColumns>
        <RecentTransactions />
        <WeeklyActivityChart />
      </GridTwoColumns>
      <GridTwoColumns>
        <ExpenseStatistics />
        <QuickTransfer />
      </GridTwoColumns>
      <BalanceHistoryChart />
    </DashboardWrapper>
  );
}
