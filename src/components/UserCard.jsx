import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="bg-white rounded-xl shadow p-6 w-full max-w-2xl">
      <h2 className="text-xl font-semibold mb-2">Welcome, {user.name}</h2>
      <p className="text-gray-600">{user.email}</p>
    </div>
  );
};

export default UserCard;