import React, { useState, useContext } from 'react';

import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';
const ForgotPassword = () => {
  const { resetPassword } = useContext(AuthContext); 
  const [email, setEmail] = useState('');

  const handleReset = async (e) => {
    e.preventDefault();

    if (!email) {
      return Swal.fire('Warning', 'Please enter your email.', 'warning');
    }

    try {
      await resetPassword(email);
      Swal.fire('Success', 'Password reset link sent to your email.', 'success');
      setEmail('');
    } catch (error) {
      Swal.fire('Error', error.message, 'error');
    }
  };

  return (
    <div className="mt-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-cyan-600 dark:text-cyan-400 mb-6">
          Forgot Password?
        </h2>
        <form onSubmit={handleReset} className="space-y-4">
          <input
            type="email"
            placeholder="Your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md"
            required
          />
          <button
            type="submit"
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded-md"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
