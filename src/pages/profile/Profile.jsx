import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router";
import { FaUsers, FaEdit, FaSignOutAlt, FaClock, FaCalendarAlt, FaEnvelope } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { FaMedal } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../provider/AuthProvider";
import { motion } from "framer-motion";

const Profile = () => {
  const { user, logOut } = useContext(AuthContext);
  const [groupCount, setGroupCount] = useState(0);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/user-groups-count?email=${user.email}`)
        .then((res) => {
          setGroupCount(res.data.count || 0);
        })
        .catch((err) => {
          console.error("Error fetching group count:", err);
        });
    }
  }, [user?.email, axiosSecure]);

  if (!user) {
    return <p className="text-center mt-10 text-lg">Loading profile...</p>;
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen bg-base-100 p-6">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-3xl font-bold text-accent mb-8 text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Your Profile
        </motion.h1>

        <motion.div 
          className="lg:grid lg:grid-cols-3 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Sidebar-like Section for Profile Image and Quick Links */}
          <motion.div 
            className="lg:col-span-1 mb-8 lg:mb-0"
            variants={itemVariants}
          >
            <div className="p-6 rounded-2xl shadow-xl bg-base-300 text-center">
              <div className="relative inline-block mb-4">
                <img
                  src={user.photoURL || "https://via.placeholder.com/150"}
                  alt="Profile"
                  className="w-32 h-32 rounded-full border-4 border-base-100 shadow-lg mx-auto"
                />
              </div>
              <h2 className="text-2xl font-bold text-accent">{user.displayName || "No Name"}</h2>
              <p className="text-sm text-secondary">Standard User</p>
              
              <div className="mt-6 border-t border-base-200 pt-6">
                <h3 className="text-lg font-semibold text-accent mb-2">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/edit-profile"
                      className="flex items-center justify-center gap-3 text-accent hover:text-primary transition-colors duration-300"
                    >
                      <FaEdit className="text-xl" />
                      <span className="text-sm font-medium">Edit Profile</span>
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={logOut}
                      className="flex items-center justify-center gap-3 text-accent hover:text-error transition-colors duration-300 w-full"
                    >
                      <FaSignOutAlt className="text-xl" />
                      <span className="text-sm font-medium">Logout</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Main Content Area */}
          <motion.div 
            className="lg:col-span-2 space-y-8"
            variants={containerVariants}
          >
            {/* Account Details Card */}
            <motion.div 
              className="p-8 rounded-2xl shadow-xl bg-base-200"
              variants={itemVariants}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-accent">Account Details</h3>
                <Link
                  to="/edit-profile"
                  className="btn btn-sm btn-primary text-primary-content normal-case"
                >
                  <FaEdit /> Edit Profile
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-accent">
                <div className="flex items-center gap-3 p-4 bg-base-100 rounded-lg shadow-sm">
                  <FaEnvelope className="text-primary text-2xl" />
                  <div>
                    <p className="text-xs font-medium text-secondary">Email Address</p>
                    <p className="text-sm font-semibold">{user.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-base-100 rounded-lg shadow-sm">
                  <FaUsers className="text-primary text-2xl" />
                  <div>
                    <p className="text-xs font-medium text-secondary">Groups Joined</p>
                    <p className="text-sm font-semibold">{groupCount}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-base-100 rounded-lg shadow-sm">
                  <FaClock className="text-primary text-2xl" />
                  <div>
                    <p className="text-xs font-medium text-secondary">Last Login</p>
                    <p className="text-sm font-semibold">
                      {user.metadata?.lastSignInTime
                        ? new Date(user.metadata.lastSignInTime).toLocaleString()
                        : "Unknown"}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-base-100 rounded-lg shadow-sm">
                  <FaCalendarAlt className="text-primary text-2xl" />
                  <div>
                    <p className="text-xs font-medium text-secondary">Member Since</p>
                    <p className="text-sm font-semibold">
                      {user.metadata?.creationTime
                        ? new Date(user.metadata.creationTime).toLocaleDateString()
                        : "Unknown"}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Profile Status/Achievements Card (Optional) */}
            <motion.div 
              className="p-8 rounded-2xl shadow-xl bg-base-200"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold text-accent mb-6">Profile Status</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-base-100 rounded-lg shadow-sm">
                  <div className="w-16 h-16 rounded-full flex-shrink-0 bg-base-200 shadow-md flex items-center justify-center text-primary text-2xl">
                   <GrCertificate />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-accent">Verified Member</p>
                    <p className="text-sm text-secondary">Your account details have been verified.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-base-100 rounded-lg shadow-sm">
                  <div className="w-16 h-16 rounded-full flex-shrink-0 bg-base-200 shadow-md flex items-center justify-center text-primary text-2xl">
                    <FaMedal />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-accent">Top Contributor</p>
                    <p className="text-sm text-secondary">You are in the top 10% of active members.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;