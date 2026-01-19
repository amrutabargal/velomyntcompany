import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button.jsx";
import { motion, AnimatePresence } from "motion/react";

export function Header({ currentPage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Services", id: "services" },
    { name: "Technologies", id: "technologies" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Why Choose Us", id: "why-choose-us" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-emerald-800/60 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center cursor-pointer"
            onClick={() => onNavigate("home")}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-emerald-400 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/40">
              <span className="text-white font-bold text-xl">VD</span>
            </div>
            <span className="ml-2 text-xl font-bold text-white">Velomynt Digital</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                  currentPage === item.id
                    ? "text-black bg-emerald-400 shadow-lg shadow-emerald-500/40"
                    : "text-gray-300 hover:text-white hover:bg-emerald-900/40"
                }`}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button
              onClick={() => onNavigate("contact")}
              className="bg-gradient-to-r from-emerald-500 to-lime-300 text-black hover:from-emerald-400 hover:to-lime-200 shadow-lg shadow-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/60 transition-all"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-300 hover:bg-slate-800 hover:text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-slate-700/50 bg-slate-900/98 backdrop-blur-md"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                    currentPage === item.id
                      ? "text-black bg-emerald-400"
                      : "text-gray-300 hover:text-white hover:bg-emerald-900/40"
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
              <Button
                onClick={() => {
                  onNavigate("contact");
                  setMobileMenuOpen(false);
                }}
                className="w-full mt-4 bg-gradient-to-r from-emerald-500 to-lime-300 text-black hover:from-emerald-400 hover:to-lime-200"
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

