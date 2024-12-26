import { useState, useRef, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import Link from 'next/link';

const Header = ({ isLoggedIn, user }) => {
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isSellerOpen, setIsSellerOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false); // State for profile dropdown

  const exploreRef = useRef(null);
  const sellerRef = useRef(null);
  const profileRef = useRef(null); // Ref for profile dropdown

  const toggleExploreMenu = () => {
    setIsExploreOpen(!isExploreOpen);
    if (isSellerOpen || isProfileOpen) {
      setIsSellerOpen(false);
      setIsProfileOpen(false);
    }
  };

  const toggleSellerMenu = () => {
    setIsSellerOpen(!isSellerOpen);
    if (isExploreOpen || isProfileOpen) {
      setIsExploreOpen(false);
      setIsProfileOpen(false);
    }
  };

  // Define toggleProfileMenu function here
  const toggleProfileMenu = () => {
    if (isLoggedIn) {
      setIsExploreOpen(false);
      setIsSellerOpen(false);
      setIsProfileOpen(!isProfileOpen); // Toggle the profile dropdown
      profileRef.current?.focus(); // Optional: Set focus on profile for keyboard navigation
    }
  };

  const handleClickOutside = (event) => {
    if (exploreRef.current && !exploreRef.current.contains(event.target)) {
      setIsExploreOpen(false);
    }
    if (sellerRef.current && !sellerRef.current.contains(event.target)) {
      setIsSellerOpen(false);
    }
    if (profileRef.current && !profileRef.current.contains(event.target) && isLoggedIn) {
      setIsProfileOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="text-gray-100 body-font bg-transparent transition-colors border-b-0">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <span className="ml-3 text-xl hover:text-indigo-600 transition-colors duration-300">REV</span>
        </a>

        {/* Navigation */}
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center space-x-6">
          <Link href="./components/Pricing">
            <button className="hover:text-indigo-600 text-xl transition-colors duration-300">Rev Pro</button>
          </Link>

          <div className="relative z-10" ref={exploreRef}>
            <Link href='./components/Explore'>
              <button
                className="hover:text-indigo-600 text-xl focus:outline-none transition-colors duration-300"
              >
                Explore
              </button>
            </Link>
          </div>

          <div className="relative z-10" ref={sellerRef}>
            <button
              className="hover:text-indigo-600 text-xl focus:outline-none transition-colors duration-300"
              onClick={toggleSellerMenu}
            >
              Become a Seller
            </button>
            {isSellerOpen && (
              <div className="absolute mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-xl transform transition-all duration-300 ease-in-out scale-95 origin-top-left">
                <Link href="/seller/register" className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600">
                  Register
                </Link>
                <Link href="/seller/how-it-works" className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600">
                  How It Works
                </Link>
                <Link href="/seller/support" className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600">
                  Support
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Join Button or Profile Button (Right-Aligned) */}
        <div className="relative z-10 flex items-center" ref={profileRef}>
          <Link href={isLoggedIn ? "#" : "./components/Login"}>
            <button
              className="inline-flex items-center bg-indigo-600 text-white border-0 py-1 px-4 focus:outline-none hover:text-black rounded-lg text-base mt-4 md:mt-0"
              onClick={toggleProfileMenu}
            >
              {isLoggedIn ? 'Profile' : 'JOIN'}
            </button>
          </Link>
          {isProfileOpen && isLoggedIn && (
            <div className="absolute mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-xl transform transition-all duration-300 ease-in-out scale-95 origin-top-right">
              <Link href="/profile/dashboard" className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600">
                Dashboard
              </Link>
              <Link href="/profile/settings" className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600">
                Settings
              </Link>
              <Link href="/logout" className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600">
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
