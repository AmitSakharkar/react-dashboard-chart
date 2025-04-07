// File: src/components/settings/Security.jsx
import React, { useState } from 'react';
import { Switch } from '@headlessui/react';

const Security = () => {
  const [currentPwd, setCurrentPwd] = useState('');
  const [newPwd, setNewPwd] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  const [twoFA, setTwoFA] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPwd !== confirmPwd) {
      alert("New passwords don't match.");
      return;
    }
    // handle password update logic here
    alert('Password updated successfully.');
  };

  return (
    <div className="mt-4 max-w-xl space-y-8">
      {/* Password Update */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Current Password</label>
          <input
            type="password"
            value={currentPwd}
            onChange={(e) => setCurrentPwd(e.target.value)}
            required
            className="w-full mt-1 p-2 border rounded-lg dark:bg-gray-800 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">New Password</label>
          <input
            type="password"
            value={newPwd}
            onChange={(e) => setNewPwd(e.target.value)}
            required
            className="w-full mt-1 p-2 border rounded-lg dark:bg-gray-800 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Confirm Password</label>
          <input
            type="password"
            value={confirmPwd}
            onChange={(e) => setConfirmPwd(e.target.value)}
            required
            className="w-full mt-1 p-2 border rounded-lg dark:bg-gray-800 dark:text-white"
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Update Password
        </button>
      </form>

      {/* 2FA Toggle */}
      <div className="flex items-center justify-between pt-4 border-t">
        <span className="text-sm font-medium">Two-Factor Authentication</span>
        <Switch
          checked={twoFA}
          onChange={setTwoFA}
          className={`${
            twoFA ? 'bg-blue-600' : 'bg-gray-300'
          } relative inline-flex h-6 w-11 items-center rounded-full transition`}
        >
          <span
            className={`${
              twoFA ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
          />
        </Switch>
      </div>
    </div>
  );
};

export default Security;
