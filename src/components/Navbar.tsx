import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@/assets/unitex-logo.png"; // single transparent PNG
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { useGlitter } from "@/hooks/useglitter";

interface NavbarProps {
  onGetStarted: () => void;
}

const Navbar = ({ onGetStarted }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { enabled: glitterEnabled, toggleGlitter } = useGlitter();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border dark:bg-slate-900/80"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.45 }}
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.18 }}
          >
            <img
              src={logo}
              alt="Unitex"
              className={`h-10 w-auto transition-all duration-300 ${
                theme === "dark"
                  ? "invert brightness-0" // white logo for dark mode
                  : "invert-0 brightness-0" // black logo for light mode
              }`}
            />
            <span className="text-lg font-display font-bold text-foreground dark:text-white">
              UNITEX
            </span>
          </motion.div>

          {/* Desktop Links + toggles */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-6">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground dark:text-white hover:text-primary transition"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-foreground dark:text-white hover:text-primary transition"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("communities")}
                className="text-foreground dark:text-white hover:text-primary transition"
              >
                Communities
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground dark:text-white hover:text-primary transition"
              >
                Contact
              </button>
            </div>

            {/* Toggles */}
            <div className="flex items-center space-x-3">
              <Button
                onClick={onGetStarted}
                className="ml-2 bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity font-semibold px-4 py-2 glow-primary"
              >
                Login
              </Button>

              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                title={theme === "dark" ? "Switch to light" : "Switch to dark"}
                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                {theme === "dark" ? (
                  <Sun size={18} className="text-yellow-400" />
                ) : (
                  <Moon size={18} className="text-slate-700" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {theme === "dark" ? (
                <Sun size={18} className="text-yellow-400" />
              ) : (
                <Moon size={18} className="text-slate-700" />
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
              className="relative z-50 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {isMenuOpen ? (
                <X className="text-slate-800 dark:text-slate-200" size={24} />
              ) : (
                <Menu className="text-slate-800 dark:text-slate-200" size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Items */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden flex flex-col mt-4 space-y-3
                bg-white dark:bg-slate-900 rounded-xl p-4 border border-border
                text-foreground dark:text-white transition-colors duration-300"
            >
              <button
                onClick={() => scrollToSection("home")}
                className="text-left hover:text-primary dark:hover:text-primary transition"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-left hover:text-primary dark:hover:text-primary transition"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("communities")}
                className="text-left hover:text-primary dark:hover:text-primary transition"
              >
                Communities
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left hover:text-primary dark:hover:text-primary transition"
              >
                Contact
              </button>

              <div className="flex items-center gap-3 mt-2">
                <Button
                  onClick={onGetStarted}
                  className="w-full bg-gradient-primary text-primary-foreground"
                >
                  Login
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
