// File: src/components/settings/EditProfile.jsx
import React, { useState } from 'react';

const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    profilePic: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call or validation
    console.log('Updated profile data:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mt-4">
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:text-white"
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="john@example.com"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:text-white"
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="block text-sm font-medium">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="+1 234 567 890"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:text-white"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="profilePic" className="block text-sm font-medium">
          Profile Picture
        </label>
        <input
          type="file"
          name="profilePic"
          id="profilePic"
          accept="image/*"
          onChange={handleChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition"
      >
        Save Changes
      </button>
    </form>
  );
};

export default EditProfile;
