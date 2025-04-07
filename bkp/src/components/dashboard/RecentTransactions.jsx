// File: src/components/dashboard/RecentTransactions.jsx
import React from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

const transactions = [
  {
    id: 1,
    name: 'Anita Sharma',
    date: 'Apr 6, 2025',
    amount: -2500,
    type: 'Sent',
    img: '/avatars/user2.png',
  },
  {
    id: 2,
    name: 'Raj Mehta',
    date: 'Apr 5, 2025',
    amount: 4500,
    type: 'Received',
    img: '/avatars/user3.png',
  },
  {
    id: 3,
    name: 'Electricity Bill',
    date: 'Apr 3, 2025',
    amount: -1700,
    type: 'Sent',
    img: '/icons/bill.png',
  },
];

const RecentTransactions = () => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
      <div className="flex flex-col gap-4">
        {transactions.map((tx) => (
          <div
            key={tx.id}
            className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm"
          >
            <div className="flex items-center gap-4">
              <img
                src={tx.img}
                alt={tx.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-medium">{tx.name}</p>
                <p className="text-xs text-gray-500">{tx.date}</p>
              </div>
            </div>
            <div className="text-right">
              <p
                className={`font-semibold ${
                  tx.amount < 0 ? 'text-red-500' : 'text-green-600'
                }`}
              >
                {tx.amount < 0 ? `-₹${Math.abs(tx.amount)}` : `+₹${tx.amount}`}
              </p>
              <p className="text-xs text-gray-500 flex items-center justify-end gap-1">
                {tx.type === 'Sent' ? (
                  <>
                    Sent <ArrowUpRight size={12} />
                  </>
                ) : (
                  <>
                    Received <ArrowDownRight size={12} />
                  </>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;
