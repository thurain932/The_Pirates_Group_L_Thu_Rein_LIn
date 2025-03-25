import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Leaf, UserCircle, LogOut, ShoppingCart } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Cart from './Cart';
import { useCart } from '../contexts/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { user, signOut } = useAuth();
  const { cart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignOut = async () => {
    await signOut();
    navigate('/signin');
    setShowProfileMenu(false);
  };

  const navItems = [
    { name: 'Home', href: '/home' },
    { name: 'Products', href: '/products' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Consultation', href: '/consultation' },
    { name: 'AI Consultation', href: '/ai-consultation' },
    { name: 'Recycle', href: '/recycle' },
    { name: 'Contact', href: '/contact' }
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#2C8C50] shadow-md' : 'bg-[#2C8C50]/95'
      }`}>
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="flex justify-between h-14">
            <div className="flex items-center">
              <Link to="/home" className="flex items-center">
                <Leaf className="h-6 w-6 text-white" />
                <span className="ml-2 text-lg font-semibold text-white">EcoPack</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {user && navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-2 py-1 text-sm font-medium transition-colors relative ${
                    isActivePath(item.href)
                      ? 'text-white'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.name}
                  {isActivePath(item.href) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></span>
                  )}
                </Link>
              ))}
              
              {!user ? (
                <div className="flex items-center space-x-2">
                  <Link
                    to="/signin"
                    className="text-white/80 hover:text-white px-2 py-1 text-sm font-medium"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    className="bg-white text-[#2C8C50] px-3 py-1 rounded-md hover:bg-white/90 transition-colors text-sm"
                  >
                    Sign Up
                  </Link>
                </div>
              ) : (
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setShowCart(true)}
                    className="text-white/80 hover:text-white relative"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    {totalItems > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                        {totalItems}
                      </span>
                    )}
                  </button>
                  <div className="relative">
                    <button
                      onClick={() => setShowProfileMenu(!showProfileMenu)}
                      className="flex items-center space-x-2 text-white/80 hover:text-white"
                    >
                      <UserCircle className="h-5 w-5" />
                      <span className="text-sm">{user.email}</span>
                    </button>
                    
                    {showProfileMenu && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                        <button
                          onClick={handleSignOut}
                          className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          <LogOut className="h-4 w-4 mr-2" />
                          Sign Out
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              {user && (
                <button
                  onClick={() => setShowCart(true)}
                  className="text-white/80 hover:text-white mr-4 relative"
                >
                  <ShoppingCart className="h-6 w-6" />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </button>
              )}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-white/80 focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden">
              <div className="pt-2 pb-3 space-y-1">
                {user && navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-3 py-2 text-base font-medium ${
                      isActivePath(item.href)
                        ? 'text-white bg-[#247040]'
                        : 'text-white/80 hover:text-white hover:bg-[#247040]'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {!user ? (
                  <>
                    <Link
                      to="/signin"
                      className="block px-3 py-2 text-base font-medium text-white/80 hover:text-white hover:bg-[#247040]"
                      onClick={() => setIsOpen(false)}
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/signup"
                      className="block px-3 py-2 text-base font-medium bg-white text-[#2C8C50] hover:bg-white/90"
                      onClick={() => setIsOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </>
                ) : (
                  <button
                    onClick={handleSignOut}
                    className="flex items-center w-full px-3 py-2 text-base font-medium text-white/80 hover:text-white hover:bg-[#247040]"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      <Cart isOpen={showCart} onClose={() => setShowCart(false)} />
    </>
  );
};

export default Navbar;