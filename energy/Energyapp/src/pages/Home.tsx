import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

const CREATE_USER = gql`
  mutation CreateUser($name: String!, $email: String!) {
    createUser(name: $name, email: $email) {
      id
      name
      email
    }
  }
`;

const Home = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [createUser] = useMutation(CREATE_USER);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createUser({ variables: { name, email } });
      // Optionally reset the form or show a success message
      setName('');
      setEmail('');
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-4">Profile</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mr-2"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mr-2"
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create User
        </button>
      </form>
      {/* Existing content */}
      <div className="mt-4 text-white">
        <h2 className="text-xl font-bold mb-2">Profile Details</h2>
        <p>Name: Shaik Nagur Sharif</p>
        <p>Email: shaik.Nagur_sharif@example.com</p>
        {/* Other profile details */}
      </div>
    </div>
  );
};

export default Home;
