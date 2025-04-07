import React from 'react';

const Settings = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-semibold mb-4">Settings</h2>
      <div className="bg-white p-6 rounded-xl shadow w-full max-w-2xl">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="mt-1 block w-full rounded-md ring-1 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="mt-1 block w-full rounded-md ring-1 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="********"
              className="mt-1 block w-full rounded-md ring-1 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 px-3 py-2"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
