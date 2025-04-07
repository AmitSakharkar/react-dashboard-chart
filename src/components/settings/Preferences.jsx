import { useState } from "react";

export default function Preference() {
  const [preferences, setPreferences] = useState({
    language: "en",
    theme: "light",
    notifications: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setPreferences({ ...preferences, [name]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Preferences saved:", preferences);
    // Submit preferences to backend
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl space-y-6 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-md"
    >
      <div>
        <label className="block text-sm font-medium mb-1">Language</label>
        <select
          name="language"
          value={preferences.language}
          onChange={handleChange}
          className="w-full p-2 border rounded-md bg-gray-100 dark:bg-gray-800"
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Theme</label>
        <select
          name="theme"
          value={preferences.theme}
          onChange={handleChange}
          className="w-full p-2 border rounded-md bg-gray-100 dark:bg-gray-800"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="system">System Default</option>
        </select>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="notifications"
          checked={preferences.notifications}
          onChange={handleChange}
          id="notifications"
        />
        <label htmlFor="notifications" className="text-sm">
          Enable Notifications
        </label>
      </div>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
      >
        Save Preferences
      </button>
    </form>
  );
}
