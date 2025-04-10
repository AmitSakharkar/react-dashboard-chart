import React from 'react';
import styled from 'styled-components';

const TransactionsWrapper = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  font-family: 'Inter', sans-serif;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: #1a1a1a;
  }
`;

const Transaction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f0f0f0;
  font-size: 0.875rem;
  color: #4d4d4d;

  &:last-child {
    border-bottom: none;
  }

  span:last-child {
    font-weight: 500;
  }
`;

const RecentTransactions = ({ transactions }) => (
  <TransactionsWrapper>
    <h3>Recent Transactions</h3>
    {transactions?.map((tx, index) => (
      <Transaction key={index}>
        <div style={{
          width: '32px',
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '4px',
          marginRight: '12px'
        }}>
            <img src={tx?.icon} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>
        <div style={{ flex: 1 }}>
          <div>{tx?.description}</div>
          <div style={{ 
            fontSize: '0.75rem',
            color: '#999',
            marginTop: '2px',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5 2H2.5C2.22386 2 2 2.22386 2 2.5V9.5C2 9.77614 2.22386 10 2.5 10H9.5C9.77614 10 10 9.77614 10 9.5V2.5C10 2.22386 9.77614 2 9.5 2Z" stroke="#999" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 1V3" stroke="#999" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 1V3" stroke="#999" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 5H10" stroke="#999" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {tx?.date}
          </div>
        </div>
        <span style={{ 
          color: tx?.amount < 0 ? '#FF3B30' : '#34C759',
          minWidth: '80px',
          textAlign: 'right'
        }}>{tx?.amount < 0 ? '-' : '+'}${Math.abs(tx?.amount)}</span>
      </Transaction>
    ))}
  </TransactionsWrapper>
);

export default RecentTransactions;
