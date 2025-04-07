import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const QuickTransferCard = ({ user, onTransfer }) => {
  return (
    <div className="bg-card p-4 rounded-2xl shadow-sm flex items-center justify-between mb-4">
      <div className="flex items-center gap-4">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="text-sm text-muted-foreground">{user.name}</p>
          <p className="text-sm font-medium text-foreground">{user.account}</p>
        </div>
      </div>
      <Button
        size="icon"
        variant="ghost"
        onClick={() => onTransfer(user)}
        aria-label={`Quick transfer to ${user.name}`}
      >
        <ArrowUpRight className="w-5 h-5 text-primary" />
      </Button>
    </div>
  );
};

export default QuickTransferCard;
