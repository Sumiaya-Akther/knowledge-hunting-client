import React, { useContext } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router';
import Lottie from 'lottie-react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';
import loginLottie from "../../assets/lotties/animation.json";

const Login = () => {
  const navigate = useNavigate();
  const { handleLogin, googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state || '/';

  const handleSubmit = (e) => {
    e.preventDefault();
    const userEmail = e.target.userEmail.value;
    const password = e.target.password.value;

    handleLogin(userEmail, password)
      .then((userCredential) => {
        const currentUser = userCredential.user;
        if (currentUser) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Login Successfully",
            showConfirmButton: false,
            timer: 1500
          });
          navigate(from);
        }
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please try again.",
        });
      });
  };

  const handleGoogleLogin = async () => {
    try {
      const user = await googleLogin();
      if (user) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "User Login Successfully",
          showConfirmButton: false,
          timer: 1500
        });
        navigate(from);
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
      });
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 my-8 md:my-2">
      {/* Animation Section */}
      <div className="p-2 w-full md:w-1/2 flex justify-center">
        <Lottie animationData={loginLottie} loop />
      </div>

      {/* Login Form */}
      <div className="p-2 md:py-1 my-5 md:my-1 w-full max-w-md">
        <div className="w-full p-6 rounded-xl shadow-lg bg-base-100 border border-gray-200">
          <h2 className="mb-3 text-3xl font-bold text-center text-secondary">
            Login to your account
          </h2>
          <p className="text-sm text-center text-accent">
            Don’t have an account?{" "}
            <NavLink to="/register" className="font-semibold text-primary hover:underline">
              Register here
            </NavLink>
          </p>

          {/* Google Login */}
          <div className="my-6">
            <button
              onClick={handleGoogleLogin}
              type="button"
              className="btn btn-outline w-full flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z" />
              </svg>
              Login with Google
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center w-full my-4">
            <hr className="w-full" />
            <p className="px-3 text-sm text-accent">OR</p>
            <hr className="w-full" />
          </div>

          {/* Email & Password Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2 text-sm font-semibold text-secondary">
                Email address
              </label>
              <input
                type="email"
                name="userEmail"
                required
                placeholder="example@email.com"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-secondary">
                  Password
                </label>
                <Link to="/forgotPass" className="text-xs hover:underline text-primary">
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                name="password"
                required
                placeholder="******"
                className="input input-bordered w-full"
              />
            </div>

            <button type="submit" className="btn btn-primary w-full text-white">
              Log in
            </button>
            <Link to="/" className="block text-center text-sm font-semibold text-accent hover:underline">
              Back To Home
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
