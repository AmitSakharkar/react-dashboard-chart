import React from 'react';

const TransactionList = ({ transactions }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
      <ul className="space-y-3">
        {transactions.map((tx, idx) => (
          <li
            key={idx}
            className="flex justify-between border-b pb-2 border-gray-200 text-sm"
          >
            <span>{tx.title}</span>
            <span className="text-gray-600">{tx.date}</span>
            <span className="font-medium">₹{tx.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
