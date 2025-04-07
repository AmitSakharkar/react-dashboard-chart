import { useState } from "react";

export default function Security() {
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errs = {};
    if (!form.currentPassword) errs.currentPassword = "Current password is required";
    if (!form.newPassword) errs.newPassword = "New password is required";
    if (form.newPassword !== form.confirmPassword)
      errs.confirmPassword = "Passwords do not match";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Security info submitted:", form);
      // Submit to backend
      setErrors({});
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl p-4 space-y-6 bg-white dark:bg-gray-900 rounded-xl shadow-md"
    >
      <div>
        <label className="block text-sm font-medium mb-1">Current Password</label>
        <input
          type="password"
          name="currentPassword"
          value={form.currentPassword}
          onChange={handleChange}
          className="w-full p-2 border rounded-md bg-gray-100 dark:bg-gray-800"
        />
        {errors.currentPassword && <p className="text-red-500 text-sm">{errors.currentPassword}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">New Password</label>
        <input
          type="password"
          name="newPassword"
          value={form.newPassword}
          onChange={handleChange}
          className="w-full p-2 border rounded-md bg-gray-100 dark:bg-gray-800"
        />
        {errors.newPassword && <p className="text-red-500 text-sm">{errors.newPassword}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Confirm New Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          className="w-full p-2 border rounded-md bg-gray-100 dark:bg-gray-800"
        />
        {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
      </div>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
      >
        Update Password
      </button>
    </form>
  );
}
