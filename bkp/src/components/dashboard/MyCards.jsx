// File: src/components/dashboard/MyCards.jsx
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const cards = [
  {
    id: 1,
    name: 'Mastercard',
    number: '**** **** **** 1234',
    expiry: '12/26',
    balance: '₹84,350',
    bg: 'bg-gradient-to-r from-indigo-500 to-purple-500',
  },
  {
    id: 2,
    name: 'Visa',
    number: '**** **** **** 5678',
    expiry: '06/25',
    balance: '₹32,400',
    bg: 'bg-gradient-to-r from-emerald-500 to-teal-500',
  },
];

const MyCards = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">My Cards</h2>
        <button className="text-sm text-indigo-600 hover:underline flex items-center gap-1">
          See All <ArrowRight size={14} />
        </button>
      </div>
      <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-1">
        {cards.map((card) => (
          <Card
            key={card.id}
            className={`min-w-[280px] max-w-sm text-white ${card.bg} rounded-2xl p-4 shadow-md`}
          >
            <CardContent className="p-0 flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">{card.name}</span>
                <span className="text-sm">{card.expiry}</span>
              </div>
              <div className="text-2xl font-bold">{card.balance}</div>
              <div className="text-sm tracking-widest">{card.number}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyCards;
