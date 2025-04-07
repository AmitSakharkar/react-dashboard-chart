// File: src/components/settings/Preference.jsx
import React, { useState } from 'react';
import { Switch } from '@headlessui/react';

const Preference = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');
  const [emailNotif, setEmailNotif] = useState(true);
  const [smsNotif, setSmsNotif] = useState(false);

  return (
    <div className="space-y-6 mt-4 max-w-xl">
      {/* Theme Switch */}
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">Dark Mode</label>
        <Switch
          checked={darkMode}
          onChange={setDarkMode}
          className={`${
            darkMode ? 'bg-blue-600' : 'bg-gray-300'
          } relative inline-flex h-6 w-11 items-center rounded-full transition`}
        >
          <span
            className={`${
              darkMode ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
          />
        </Switch>
      </div>

      {/* Language Select */}
      <div className="space-y-2">
        <label htmlFor="language" className="block text-sm font-medium">
          Language
        </label>
        <select
          id="language"
          name="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:text-white"
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="hi">Hindi</option>
          <option value="fr">French</option>
        </select>
      </div>

      {/* Notification Preferences */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">Email Notifications</label>
          <Switch
            checked={emailNotif}
            onChange={setEmailNotif}
            className={`${
              emailNotif ? 'bg-blue-600' : 'bg-gray-300'
            } relative inline-flex h-6 w-11 items-center rounded-full transition`}
          >
            <span
              className={`${
                emailNotif ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
        </div>

        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">SMS Notifications</label>
          <Switch
            checked={smsNotif}
            onChange={setSmsNotif}
            className={`${
              smsNotif ? 'bg-blue-600' : 'bg-gray-300'
            } relative inline-flex h-6 w-11 items-center rounded-full transition`}
          >
            <span
              className={`${
                smsNotif ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Preference;
