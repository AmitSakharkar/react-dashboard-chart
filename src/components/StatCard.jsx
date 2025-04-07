import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const StatCard = ({ icon: Icon, title, value, color }) => {
  return (
    <Card
      className="flex items-center gap-4 px-4 py-3 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
      role="group"
      tabIndex={0}
      aria-label={`${title}: ${value}`}
    >
      <div
        className={`p-2 rounded-xl ${color} text-white text-xl`}
        aria-hidden="true"
      >
        <Icon />
      </div>
      <CardContent className="p-0">
        <p className="text-sm text-muted-foreground">{title}</p>
        <h3 className="text-lg font-semibold">{value}</h3>
      </CardContent>
    </Card>
  );
};

export default React.memo(StatCard);
