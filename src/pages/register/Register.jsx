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
  <div className="p-2 md:py-1 my-5 md:my-1 w-full max-w-md">
    <div className="flex flex-col w-full p-6 rounded-xl shadow-lg bg-base-100 border border-gray-200">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold text-secondary">Register Now</h1>
        <p className="text-sm text-accent">Create your new account</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div>
          <label className="block mb-2 text-sm font-semibold text-secondary">
            Full Name
          </label>
          <input
            type="text"
            name="userName"
            required
            placeholder="John Henry"
            className={`input input-bordered w-full ${nameError && "input-error"}`}
          />
        </div>

        {/* Photo URL */}
        <div>
          <label className="block mb-2 text-sm font-semibold text-secondary">
            User Picture
          </label>
          <input
            type="url"
            name="photo"
            required
            placeholder="Photo URL..."
            className="input input-bordered w-full"
          />
        </div>

        {/* Email */}
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

        {/* Password */}
        <div>
          <label className="block mb-2 text-sm font-semibold text-secondary">
            Password
          </label>
          <input
            type="password"
            name="password"
            required
            placeholder="******"
            className={`input input-bordered w-full ${nameError && "input-error"}`}
          />
          {nameError && <p className="text-sm text-error mt-1">{nameError}</p>}
        </div>

        {/* Buttons */}
        <button
          type="submit"
          className="btn btn-primary w-full text-white"
        >
          Register Now
        </button>
        <p className="text-center text-sm text-accent">
          Already have an account?{" "}
          <NavLink
            to="/login"
            className="text-primary font-semibold hover:underline"
          >
            Login
          </NavLink>
        </p>
      </form>
    </div>
  </div>

  {/* Animation Section */}
  <div className="p-2 w-full md:w-1/2 flex justify-center">
    <Lottie animationData={registerLotti} loop />
  </div>
</div>

  );
};

export default Register;
