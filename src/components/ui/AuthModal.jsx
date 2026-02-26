import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FiX, FiEye, FiEyeOff } from "react-icons/fi";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

const AuthModal = ({ isOpen, onClose, type }) => {
  const [activeTab, setActiveTab] = useState(type || "login");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  useEffect(() => {
    setActiveTab(type);
  }, [type]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black backdrop-blur-xl z-40"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            transition={{ type: "spring", stiffness: 180, damping: 18 }}
            className="fixed inset-0 flex items-center justify-end z-50"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-[480px] h-full bg-white dark:bg-[#0f0f0f] p-12 shadow-2xl overflow-y-auto"
            >
              {/* Close */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-2xl hover:rotate-90 transition"
              >
                <FiX />
              </button>

              {/* Header */}
              <h2 className="text-3xl font-semibold mb-8">
                {activeTab === "login" ? "Welcome Back" : "Create Account"}
              </h2>

              {/* Tabs */}
              <div className="flex gap-8 mb-10">
                <button
                  onClick={() => setActiveTab("login")}
                  className={`text-sm ${
                    activeTab === "login"
                      ? "border-b-2 border-red-600 font-semibold"
                      : "text-gray-400"
                  }`}
                >
                  Login
                </button>

                <button
                  onClick={() => setActiveTab("signup")}
                  className={`text-sm ${
                    activeTab === "signup"
                      ? "border-b-2 border-red-600 font-semibold"
                      : "text-gray-400"
                  }`}
                >
                  Sign Up
                </button>
              </div>

              {/* Social Buttons */}
              <div className="flex gap-4 mb-8">
                <button className="flex items-center gap-3 px-5 py-3 border rounded-xl hover:shadow-lg transition w-full justify-center">
                  <FaGoogle /> Continue with Google
                </button>
                <button className="flex items-center gap-3 px-5 py-3 border rounded-xl hover:shadow-lg transition w-full justify-center">
                  <FaFacebookF /> Facebook
                </button>
              </div>

              <div className="text-center text-sm text-gray-400 mb-6">
                or continue with email
              </div>

              {/* Form */}
              <form className="space-y-6">

                {activeTab === "signup" && (
                  <FloatingInput label="Full Name" type="text" />
                )}

                <FloatingInput label="Email Address" type="email" />

                <div className="relative">
                  <FloatingInput
                    label="Password"
                    type={showPassword ? "text" : "password"}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-4 text-gray-400"
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-4 rounded-xl text-white font-medium bg-gradient-to-r from-red-600 to-pink-600 shadow-lg hover:shadow-xl transition"
                >
                  {activeTab === "signup" ? "Create Account" : "Login"}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

/* Floating Input Component */
const FloatingInput = ({ label, type }) => {
  return (
    <div className="relative">
      <input
        type={type}
        required
        className="peer w-full border-b border-gray-400 bg-transparent py-3 focus:outline-none focus:border-red-600"
      />
      <label className="absolute left-0 top-3 text-gray-400 text-sm transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-red-600 peer-valid:-top-3 peer-valid:text-xs bg-white dark:bg-[#0f0f0f] px-1">
        {label}
      </label>
    </div>
  );
};

export default AuthModal;