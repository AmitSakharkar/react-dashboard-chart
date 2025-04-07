import { useState } from "react";
import EditProfile from "@/components/settings/EditProfile";
import Preferences from "@/components/settings/Preferences";
import Security from "@/components/settings/Security";

const tabs = [
  { label: "Edit Profile", value: "profile" },
  { label: "Preferences", value: "preferences" },
  { label: "Security", value: "security" },
];

export default function Settings() {
  const [activeTab, setActiveTab] = useState("profile");

  const renderTabContent = () => {
    switch (activeTab) {
      case "preferences":
        return <Preferences />;
      case "security":
        return <Security />;
      case "profile":
      default:
        return <EditProfile />;
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Settings</h2>
      <div className="flex space-x-4 border-b mb-4 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`pb-2 px-4 font-medium border-b-2 transition ${
              activeTab === tab.value
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-600 hover:text-blue-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="bg-white p-4 rounded-xl shadow-md">{renderTabContent()}</div>
    </div>
  );
}
