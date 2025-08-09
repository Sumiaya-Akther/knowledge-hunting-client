import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import registerLotti from "../../assets/lotties/animation.json";

const Register = () => {
  const navigate = useNavigate();
  const { handleregister, setUser, updateUser } = useContext(AuthContext);
  const [nameError, setNameError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const fullname = e.target.userName.value;
    const photo = e.target.photo.value;
    const userEmail = e.target.userEmail.value;
    const password = e.target.password.value;

    // Password validation
    if (password.length < 6) {
      setNameError("Password should be more than 6 characters");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setNameError("Password must contain at least one lowercase letter");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setNameError("Password must contain at least one uppercase letter");
      return;
    }

    setNameError("");

    // Register new user
    handleregister(userEmail, password).then((userCredential) => {
      const currentUser = userCredential.user;

      updateUser({ displayName: fullname, photoURL: photo });
      setUser({ ...currentUser, displayName: fullname, photoURL: photo });

      if (currentUser) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "User Created Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      }
    });
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 my-8 md:my-2">
      {/* Form Section */}
      <div className="p-2 md:py-1 my-5 md:my-1">
        <div className="flex flex-col w-full p-6 rounded-md sm:p-10 bg-cyan-500">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Register Now</h1>
            <p className="text-sm dark:text-gray-600">
              Register a new account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-12">
            <div className="space-y-4">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm text-black font-semibold"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="userName"
                  id="name"
                  required
                  placeholder="John Henry"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                />
              </div>

              {/* Photo URL */}
              <div>
                <label
                  htmlFor="photo"
                  className="block mb-2 text-sm text-black font-semibold"
                >
                  User Picture
                </label>
                <input
                  type="url"
                  name="photo"
                  id="photo"
                  required
                  placeholder="Photo URL..."
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm text-black font-semibold"
                >
                  Email address
                </label>
                <input
                  type="email"
                  name="userEmail"
                  id="email"
                  placeholder="leroy@jenkins.com"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                />
              </div>

              {/* Password */}
              <div>
                <div className="flex justify-between mb-2">
                  <label
                    htmlFor="password"
                    className="text-sm text-black font-semibold"
                  >
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  required
                  id="password"
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                />
                {nameError && (
                  <p className="text-sm text-error mt-1">{nameError}</p>
                )}
              </div>
            </div>

            {/* Buttons */}
            <div className="space-y-2">
              <button
                type="submit"
                className="w-full btn bg-black text-white px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
              >
                Register Now
              </button>
              <p className="px-6 text-sm text-center dark:text-gray-600 text-black">
                Already have an account?{" "}
                <NavLink
                  to="/login"
                  className="hover:underline font-semibold dark:text-violet-600"
                >
                  Login
                </NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Animation Section */}
      <div className="p-2">
        <Lottie animationData={registerLotti} loop={true} />
      </div>
    </div>
  );
};

export default Register;
