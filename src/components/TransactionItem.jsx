import React from "react";

const TransactionItem = ({ name, type, amount, date }) => {
  return (
    <div className="flex items-center justify-between py-2 border-b border-border">
      <div>
        <p className="text-sm font-semibold text-foreground">{name}</p>
        <p className="text-xs text-muted-foreground">{type} • {date}</p>
      </div>
      <p
        className={`text-sm font-medium ${
          amount < 0 ? "text-red-500" : "text-green-500"
        }`}
      >
        {amount < 0 ? `-₹${Math.abs(amount)}` : `+₹${amount}`}
      </p>
    </div>
  );
};

export default React.memo(TransactionItem);
