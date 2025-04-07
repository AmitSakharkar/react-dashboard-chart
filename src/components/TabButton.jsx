import React from "react";

const TabButton = ({ isActive, onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-xl focus:outline-none ${
        isActive
          ? "bg-primary text-white shadow-md"
          : "bg-muted text-muted-foreground hover:bg-primary hover:text-white"
      }`}
      aria-pressed={isActive}
      aria-label={`Tab: ${label}`}
    >
      {label}
    </button>
  );
};

export default React.memo(TabButton);
