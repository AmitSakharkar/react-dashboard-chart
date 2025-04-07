import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { CreditCard } from "lucide-react";

const UserCard = ({ card }) => {
  return (
    <Card className="w-full max-w-sm shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl">
      <CardContent className="p-4 flex flex-col gap-2" role="group" aria-label={`Card ending in ${card.last4}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CreditCard className="text-indigo-600" aria-hidden="true" />
            <span className="text-lg font-semibold">{card.name}</span>
          </div>
          <span className="text-sm text-muted-foreground">{card.type}</span>
        </div>
        <div className="text-sm text-gray-700">
          Card Number: **** **** **** {card.last4}
        </div>
        <div className="text-sm text-gray-600">
          Exp: {card.expiry}
        </div>
      </CardContent>
    </Card>
  );
};

export default React.memo(UserCard);
