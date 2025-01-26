import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Add login logic here
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4  text-white ">Login</h1>
      <form onSubmit={handleLogin}>
        <div className="mb-4  text-white">
          <label className="block text-sm font-bold mb-2" htmlFor="email">
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
        <div className="mb-4  text-white">
          <label className="block text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="hover:text-green-500"
          >
            Login
          </button>
          <Link to="/forgot-password" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
            Forgot Password?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;