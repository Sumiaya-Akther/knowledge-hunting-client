import React, { useState, useContext } from 'react';
import Swal from 'sweetalert2';

import { Link } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const ForgotPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const [email, setEmail] = useState('');

  const handleReset = async (e) => {
    e.preventDefault();

    if (!email) {
      Swal.fire({
        icon: 'warning',
        title: 'Email required!',
        text: 'Please enter your email address.',
      });
      return;
    }

    try {
      await resetPassword(email);
      Swal.fire({
        icon: 'success',
        title: 'Reset Link Sent!',
        text: 'Please check your inbox to reset your password.',
      });
      setEmail('');
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Something went wrong',
        text: error.message || 'Could not send reset link.',
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-cyan-600 dark:text-cyan-400 mb-6">
          Forgot Password
        </h2>

        <form onSubmit={handleReset} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-800 dark:text-white"
          />
          <button
            type="submit"
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded-md"
          >
            Send Reset Link
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
          Remembered your password?{' '}
          <Link to="/login" className="text-cyan-600 dark:text-cyan-400 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
