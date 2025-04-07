// File: src/components/dashboard/QuickTransfer.jsx
import React, { useState } from 'react';
import { users } from '@/mock/users';

const QuickTransfer = () => {
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [amount, setAmount] = useState('');

  const handleTransfer = (e) => {
    e.preventDefault();
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      alert('Please enter a valid amount');
      return;
    }
    alert(`Transferred ₹${amount} to ${selectedUser.name}`);
    setAmount('');
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Quick Transfer</h2>

      {/* Scrollable Avatars */}
      <div className="flex overflow-x-auto gap-4 pb-2 mb-4">
        {users.map((user) => (
          <div
            key={user.id}
            className={`flex flex-col items-center cursor-pointer ${
              selectedUser.id === user.id ? 'text-indigo-600' : 'text-gray-600'
            }`}
            onClick={() => setSelectedUser(user)}
          >
            <img
              src={user.avatar}
              alt={user.name}
              className={`w-14 h-14 rounded-full object-cover border-2 ${
                selectedUser.id === user.id
                  ? 'border-indigo-500'
                  : 'border-transparent'
              }`}
            />
            <span className="mt-1 text-sm">{user.name}</span>
          </div>
        ))}
      </div>

      {/* Transfer Form */}
      <form onSubmit={handleTransfer} className="space-y-4">
        <div>
          <label htmlFor="amount" className="block text-sm text-gray-600">
            Amount (₹)
          </label>
          <input
            id="amount"
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-1 w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-200"
        >
          Send Money
        </button>
      </form>
    </div>
  );
};

export default QuickTransfer;
