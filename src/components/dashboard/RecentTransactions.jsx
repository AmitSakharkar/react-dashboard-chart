import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const transactions = [
  {
    id: 1,
    name: "Netflix Subscription",
    date: "Apr 1, 2025",
    amount: "- ₹499",
    type: "debit",
  },
  {
    id: 2,
    name: "Salary Credited",
    date: "Apr 1, 2025",
    amount: "+ ₹91,000",
    type: "credit",
  },
  {
    id: 3,
    name: "Zomato Order",
    date: "Mar 30, 2025",
    amount: "- ₹1,250",
    type: "debit",
  },
  {
    id: 4,
    name: "Grocery Shopping",
    date: "Mar 29, 2025",
    amount: "- ₹3,200",
    type: "debit",
  },
  {
    id: 5,
    name: "Investment Return",
    date: "Mar 28, 2025",
    amount: "+ ₹2,500",
    type: "credit",
  },
];

export default function RecentTransactions() {
  return (
    <div className="bg-white rounded-2xl shadow p-6 h-full flex flex-col">
      <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
      <div className="flex-1 overflow-y-auto space-y-4 pr-1">
        {transactions.map((tx) => (
          <div key={tx.id} className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div
                className={`p-2 rounded-full ${
                  tx.type === "credit" ? "bg-green-100" : "bg-red-100"
                }`}
              >
                {tx.type === "credit" ? (
                  <ArrowDownRight className="text-green-600 w-5 h-5" />
                ) : (
                  <ArrowUpRight className="text-red-600 w-5 h-5" />
                )}
              </div>
              <div>
                <p className="font-medium text-gray-800">{tx.name}</p>
                <p className="text-sm text-gray-500">{tx.date}</p>
              </div>
            </div>
            <div
              className={`text-sm font-medium ${
                tx.type === "credit" ? "text-green-600" : "text-red-600"
              }`}
            >
              {tx.amount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
