import { useState } from "react";

const tabs = ["Edit Profile", "Preference", "Security"];

export default function SettingsTabs({ children }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      <div className="flex border-b border-gray-200 dark:border-gray-700 mb-4">
        {tabs.map((tab, idx) => (
          <button
            key={tab}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === idx
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-600 hover:text-blue-500"
            }`}
            onClick={() => setActiveTab(idx)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div>
        {children[activeTab]}
      </div>
    </div>
  );
}
