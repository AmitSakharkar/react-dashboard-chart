import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChartData } from '../redux/chartSlice';
import { fetchCards } from '../redux/cardSlice';
import { fetchTransactions } from '../redux/transactionSlice';
import SummaryCard from '../components/SummaryCard';
import LineChart from '../components/LineChart';
import TransactionList from '../components/TransactionList';

const Dashboard = () => {
  const dispatch = useDispatch();

  const chart = useSelector((state) => state.charts);
  const cards = useSelector((state) => state.cards);
  const transactions = useSelector((state) => state.transactions);

  useEffect(() => {
    dispatch(fetchChartData());
    dispatch(fetchCards());
    dispatch(fetchTransactions());
  }, [dispatch]);

  const chartData = chart?.data || [];
  const cardData = cards?.data || {};
  const transactionData = transactions?.data || [];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <SummaryCard label="Balance" value={`₹${cardData.balance || 0}`} icon={() => <span>💰</span>} />
        <SummaryCard label="Spent" value={`₹${cardData.spent || 0}`} icon={() => <span>📉</span>} />
        <SummaryCard label="Target" value={`₹${cardData.target || 0}`} icon={() => <span>🎯</span>} />
      </div>
      <div className="bg-white p-6 rounded-xl shadow">
        <LineChart data={chartData} />
      </div>
      <div className="bg-white p-6 rounded-xl shadow">
        <TransactionList transactions={transactionData} />
      </div>
    </div>
  );
};

export default Dashboard;
