import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    // Add forgot password logic here
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 ">Forgot Password</h1>
      <form onSubmit={handleForgotPassword}>
        <div className="mb-4  text-white">
          <label className="block  text-white text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="hover:text-green-500"
          >
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;