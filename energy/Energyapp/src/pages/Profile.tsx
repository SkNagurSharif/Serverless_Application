// import React from 'react';

const Profile = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold  text-white mb-4">Profile</h1>
      <div className="flex items-center space-x-2">
        <button className="hover:text-green-500" type="button">
          Logout
        </button>
      </div>
      <div className="mt-4  text-white">
        <h2 className="text-xl font-bold mb-2">Profile Details</h2>
        <p>Name: John Doe</p>
        <p>Email: john.doe@example.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
    </div>
  );
};

export default Profile;