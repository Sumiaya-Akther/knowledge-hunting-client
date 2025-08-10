import React, { useState, useContext } from 'react';
import Swal from 'sweetalert2';
import Lottie from 'lottie-react';
import forgotLottie from '../../assets/lotties/forgot.json';
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
<div className="flex flex-col md:flex-row items-center justify-center bg-base-100 p-6">
  {/* Left: Animation */}
  <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
    <Lottie animationData={forgotLottie} loop className="max-w-sm w-full" />
  </div>

  {/* Right: Form */}
  <div className="w-full md:w-1/2 max-w-md p-8 rounded-2xl shadow-md bg-base-100 border border-gray-200 dark:border-gray-700 transition-all">
    <h2 className="text-3xl font-bold text-center text-primary mb-3">
      Forgot Password?
    </h2>
    <p className="text-center text-base-content/70 mb-6">
      Enter your registered email and we’ll send you a reset link.
    </p>

    <form onSubmit={handleReset} className="space-y-5">
      <div>
        <label className="block text-sm font-semibold mb-2 text-base-content">
          Email Address
        </label>
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg 
          focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-primary hover:bg-primary-focus text-white py-3 rounded-lg font-semibold transition-all"
      >
        Send Reset Link
      </button>
    </form>

    <div className="mt-6 text-center">
      <a href="/login" className="text-primary hover:underline font-medium">
        Back to Login
      </a>
    </div>
  </div>
</div>

  );
};

export default ForgotPassword;
