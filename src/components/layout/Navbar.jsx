import { useState, useEffect, useRef } from "react";
import { FiMoon, FiSun, FiSearch, FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import AuthModal from "../ui/AuthModal";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [authOpen, setAuthOpen] = useState(false);
  const [authType, setAuthType] = useState("login");

  const searchRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  const suggestions = [
    "Zoom Art Tours",
    "Women Artists 2026",
    "Studio Visit Vol 7",
    "Digital Templates",
    "Art History Articles"
  ];

  const menuItems = [
    {
      name: "BOOKS",
      dropdown: true,
      items: [
        {
          label: "Artists To Watch",
          sub: ["Emerging 2026", "Rising Women Artists"]
        },
        {
          label: "100 Artwork Series",
          sub: ["2024 Edition", "2023 Edition"]
        },
        {
          label: "Studio Visit Books",
          sub: ["Vol 6", "Vol 7"]
        }
      ]
    },
    {
      name: "SHOP",
      dropdown: true,
      items: [
        {
          label: "Digital Templates",
          sub: ["Catalog Template", "Expense Tracker"]
        },
        {
          label: "Artist Tools",
          sub: ["Branding Kit", "Portfolio Builder"]
        }
      ]
    },
    {
      name: "READ",
      dropdown: true,
      items: [
        { label: "Artist Interviews", sub: ["Featured", "Trending"] },
        { label: "Art History", sub: ["Modern", "Contemporary"] }
      ]
    },
    {
      name: "EXHIBITIONS",
      dropdown: true,
      items: [
        { label: "Current Exhibitions", sub: ["Live Shows", "Virtual"] },
        { label: "Past Exhibitions", sub: ["2024", "2023"] }
      ]
    },
    { name: "PODCAST", dropdown: false },
    { name: "ART STAR", dropdown: false }
  ];

  return (
    <>
      <nav
        className={`sticky top-0 z-50 bg-white dark:bg-[#111] transition-all duration-300 ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="container-custom flex justify-between items-center h-[88px]">

          {/* Logo */}
          <div className="text-2xl font-semibold tracking-tight">
            arts <span className="italic">to</span> hearts
          </div>

          {/* Center Menu */}
          <ul className="hidden lg:flex gap-8 items-center text-sm uppercase tracking-wide">
            {menuItems.map((menu, index) => (
              <li
                key={index}
                onMouseEnter={() => setActiveMenu(menu.name)}
                onMouseLeave={() => {
                  setActiveMenu(null);
                  setActiveSubMenu(null);
                }}
                className={`relative flex items-center gap-1 cursor-pointer transition ${
                  activeMenu && activeMenu !== menu.name
                    ? "opacity-40"
                    : "opacity-100"
                }`}
              >
                {menu.name}
                {menu.dropdown && (
                  <FiChevronDown className="text-[14px] mt-[2px]" />
                )}

                {/* Dropdown */}
                <AnimatePresence>
                  {menu.dropdown && activeMenu === menu.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 12 }}
                      transition={{ duration: 0.25 }}
                      className="absolute top-12 left-0 bg-white dark:bg-[#1a1a1a] shadow-xl rounded-md p-6 w-[280px]"
                    >
                      <ul className="space-y-4 text-gray-700 dark:text-gray-200">
                        {menu.items.map((item, i) => (
                          <li key={i}>
                            <div
                              onMouseEnter={() =>
                                setActiveSubMenu(item.label)
                              }
                              className="flex justify-between items-center hover:text-red-600"
                            >
                              {item.label}
                              <FiChevronDown size={14} />
                            </div>

                            {activeSubMenu === item.label && (
                              <ul className="mt-2 ml-4 space-y-2 text-sm text-gray-500 dark:text-gray-400">
                                {item.sub.map((subItem, j) => (
                                  <li
                                    key={j}
                                    className="hover:text-red-600 cursor-pointer"
                                  >
                                    {subItem}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}

            <li>
              <button className="bg-red-600 text-white px-5 py-2.5 rounded-sm text-sm font-medium hover:bg-red-700 transition">
                SUBMIT YOUR ART
              </button>
            </li>
          </ul>

          {/* Right Section */}
          <div className="flex items-center gap-6">

            {/* Search */}
            <div ref={searchRef} className="relative">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-xl hover:scale-110 transition"
              >
                <FiSearch />
              </button>

              <AnimatePresence>
                {searchOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute right-0 mt-4 w-[320px] bg-white dark:bg-[#1a1a1a] shadow-xl rounded-lg p-4 z-50"
                  >
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full p-3 border rounded-md dark:bg-[#111]"
                    />

                    <ul className="mt-3 space-y-2 text-sm">
                      {suggestions
                        .filter((s) =>
                          s.toLowerCase().includes(searchTerm.toLowerCase())
                        )
                        .map((s, i) => (
                          <li
                            key={i}
                            className="hover:text-red-600 cursor-pointer"
                          >
                            {s}
                          </li>
                        ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={toggleDark}
              className="text-xl hover:scale-110 transition"
            >
              {dark ? <FiSun /> : <FiMoon />}
            </button>

            <button
              onClick={() => {
                setAuthType("login");
                setAuthOpen(true);
              }}
              className="text-sm hover:text-red-600 transition"
            >
              Login
            </button>

            <button
              onClick={() => {
                setAuthType("signup");
                setAuthOpen(true);
              }}
              className="border border-black dark:border-white px-4 py-2 text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
            >
              Sign Up
            </button>
          </div>
        </div>

        <div className="border-b border-gray-200 dark:border-gray-800"></div>
      </nav>

      <AuthModal
        isOpen={authOpen}
        onClose={() => setAuthOpen(false)}
        type={authType}
      />
    </>
  );
};

export default Navbar;