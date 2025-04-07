import { useState } from "react";

export default function EditProfile() {
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 234 567 8900",
    avatar: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "avatar") {
      setFormData({ ...formData, avatar: URL.createObjectURL(files[0]) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile updated:", formData);
    // Handle form submission logic
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl space-y-6 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-md"
    >
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
          {formData.avatar ? (
            <img
              src={formData.avatar}
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              Avatar
            </div>
          )}
        </div>
        <input
          type="file"
          name="avatar"
          accept="image/*"
          onChange={handleChange}
          className="text-sm text-gray-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded-md bg-gray-100 dark:bg-gray-800"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded-md bg-gray-100 dark:bg-gray-800"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Phone</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded-md bg-gray-100 dark:bg-gray-800"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
      >
        Save Changes
      </button>
    </form>
  );
}
