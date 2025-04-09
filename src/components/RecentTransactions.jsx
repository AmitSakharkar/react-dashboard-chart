import React from 'react';
import styled from 'styled-components';

const TransactionsWrapper = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 1.5rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
`;

const Transaction = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
`;

const RecentTransactions = ({ transactions }) => (
  <TransactionsWrapper>
    <h3>Recent Transactions</h3>
    {transactions?.map((tx, index) => (
      <Transaction key={index}>
        <span>{tx?.description}</span>
        <span style={{ color: tx?.amount < 0 ? 'red' : 'green' }}>₹{tx?.amount}</span>
      </Transaction>
    ))}
  </TransactionsWrapper>
);

export default RecentTransactions;