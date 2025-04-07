import { CreditCard } from "lucide-react";
import cards from "../../data/cards";
const mockCards = cards

export default function MyCards() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">My Cards</h2>
        <button className="text-sm text-blue-600 hover:underline">See all</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {mockCards.map((card) => (
          <div
            key={card.id}
            className={`rounded-2xl p-5 text-white shadow-lg ${card.bgColor}`}
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm opacity-80">Balance</p>
                <p className="text-2xl font-bold">{card.balance}</p>
              </div>
              <CreditCard size={32} />
            </div>
            <div className="mt-6">
              <p className="text-sm opacity-80">{card.type}</p>
              <p className="text-lg tracking-widest">{card.number}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
