import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const QuickTransferItem = ({ user, onTransfer }) => {
  return (
    <div
      className="flex items-center justify-between px-4 py-2 hover:bg-muted/50 rounded-xl transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500"
      role="listitem"
      tabIndex={0}
      aria-label={`Quick transfer to ${user.name}`}
    >
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src={user.image} alt={user.name} />
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">{user.name}</p>
          <p className="text-xs text-muted-foreground">{user.bank}</p>
        </div>
      </div>
      <Button variant="secondary" size="sm" onClick={() => onTransfer(user)}>
        Send
      </Button>
    </div>
  );
};

export default React.memo(QuickTransferItem);
