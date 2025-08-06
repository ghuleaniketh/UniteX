import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import {Login}   from './login';
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoginVisible, setIsLoginVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900 shadow-lg py-3' : 'bg-transparent py-6'}`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            UniteX
          </span>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#features"
            className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
          >
            How It Works
          </a>
          <a
            href="#community"
            className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
          >
            Community
          </a>
          <a
            href="#testimonials"
            className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
          >
            Testimonials
          </a>
          <button
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium py-2 px-6 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
            onClick={() => setIsLoginVisible(true)}
          >
            Login
          </button>
        </nav>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 absolute top-full left-0 right-0 shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#features"
              className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 py-2"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 py-2"
            >
              How It Works
            </a>
            <a
              href="#community"
              className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 py-2"
            >
              Community
            </a>
            <a
              href="#testimonials"
              className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 py-2"
            >
              Testimonials
            </a>
            <button
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium py-2 px-6 rounded-full hover:shadow-lg transition-all duration-300 w-full"
              onClick={() => setIsLoginVisible(true)}
            >
              Login
            </button>
          </div>
        </div>
      )}
    </header>

    {/* Login Page */}
    {isLoginVisible && (
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
        <div className="relative">
          <button
            className="absolute top-2 right-2 text-white text-xl"
            onClick={() => setIsLoginVisible(false)}
          >
            ✖
          </button>
          <Login />
        </div>
      </div>
    )}
    </>
  )
}
