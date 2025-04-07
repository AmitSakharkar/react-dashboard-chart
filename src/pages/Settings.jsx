// File: src/pages/Settings.jsx
import React, { useState } from 'react';
import EditProfile from '../components/settings/EditProfile';
import Preferences from '../components/settings/Preferences';
import Security from '../components/settings/Security';

const TABS = [
  { key: 'edit-profile', label: 'Edit Profile' },
  { key: 'preferences', label: 'Preferences' },
  { key: 'security', label: 'Security' },
];

const Settings = () => {
  const [activeTab, setActiveTab] = useState('edit-profile');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'edit-profile':
        return <EditProfile />;
      case 'preferences':
        return <Preferences />;
      case 'security':
        return <Security />;
      default:
        return null;
    }
  };

  return (
    <div className="p-4 md:p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6 border-b">
        {TABS.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`pb-2 px-4 border-b-2 transition-all duration-300 ${
              activeTab === tab.key
                ? 'border-blue-600 text-blue-600 font-medium'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Settings;
