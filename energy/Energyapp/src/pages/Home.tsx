// import React from 'react';

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold  text-white mb-4">Profile</h1>
      <div className="flex items-center space-x-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button">
          Login
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button">
          Sign In
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

export default Home;