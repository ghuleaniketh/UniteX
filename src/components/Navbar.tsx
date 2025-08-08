import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@/assets/unitex-logo.png";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onGetStarted: () => void;
}

const Navbar = ({ onGetStarted }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close mobile menu on link click
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img src={logo} alt="Unitex" className="h-9 w-auto" />
            <span className="text-xl font-display font-bold text-foreground">
              UNITEX
            </span>
          </motion.div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("communities")}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Communities
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Login Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block"
          >
            <Button
              onClick={onGetStarted}
              className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity duration-200 font-semibold px-6 py-2 glow-primary"
            >
              Login
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu Items */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden flex flex-col mt-4 space-y-4"
            >
              <button onClick={() => scrollToSection("home")}>Home</button>
              <button onClick={() => scrollToSection("how-it-works")}>About</button>
              <button onClick={() => scrollToSection("communities")}>Communities</button>
              <button onClick={() => scrollToSection("contact")}>Contact</button>
              <Button
                onClick={onGetStarted}
                className="w-fit bg-gradient-primary text-primary-foreground mt-2"
              >
                Login
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
