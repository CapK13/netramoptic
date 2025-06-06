import React, { useState } from 'react';
import axios from 'axios';

const API = 'https://netramoptics.onrender.com'; // Change to Railway domain when deployed

export const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`https://netramoptics.onrender.com/api/auth/login`, {
        email,
        password,
      });

      const { token, user } = res.data;
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', token);

      setMessage('Login successful.');
      onLogin && onLogin(user);
      window.location.href = '/profile';
    } catch (err) {
      setMessage(err.response?.data?.message || 'Login failed.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-900 text-black dark:text-white shadow-2xl rounded-2xl mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">
          Login
        </button>
        {message && <p className="text-center text-sm text-red-500">{message}</p>}
      </form>
    </div>
  );
};

export const Register = ({ onRegister }) => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`https://netramoptics.onrender.com/api/auth/register`, formData);
      setMessage('Registration successful.');
      onRegister && onRegister(res.data);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Registration failed.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-900 text-black dark:text-white shadow-2xl rounded-2xl mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="w-full px-4 py-2 border rounded-md"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-md"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-md"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">
          Register
        </button>
        {message && <p className="text-center text-sm text-red-500">{message}</p>}
      </form>
    </div>
  );
};
