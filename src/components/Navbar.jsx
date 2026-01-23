
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

const navItems = ["About", "Skills", "Projects", "Blog", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      navItems.forEach(item => {
        const section = document.getElementById(item.toLowerCase());
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(item);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a href="#" className="text-xl font-bold text-cyan-400 gold-shimmer">
          Promise<span className="text-white">.dev</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`transition hover:text-cyan-400 ${
                active === item ? "text-cyan-400" : "text-gray-300"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="md:hidden bg-black/90 px-6 pb-6"
        >
          {navItems.map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className={`block py-3 border-b border-white/10 ${
                active === item ? "text-cyan-400" : "text-gray-300"
              }`}
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
