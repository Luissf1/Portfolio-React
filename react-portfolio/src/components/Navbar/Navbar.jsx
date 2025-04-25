import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Navbar.module.css";
import { ThemeContext } from "../../utils/ThemeContext";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const themeContext = useContext(ThemeContext);

  // Add safe default values if context is null
  const { darkMode = false, toggleTheme = () => {} } = themeContext || {};

  // Animation variants
  const navVariants = {
    hidden: { y: -100 },
    visible: { y: 0 }
  };

  return (
    <motion.nav
      className={styles.navbar}
      initial="hidden"
      animate="visible"
      variants={navVariants}
      transition={{ duration: 0.5 }}
    >
      {/* Your logo/brand */}
      <a className={styles.title} href="/">
        Portfolio
      </a>

      {/* Theme toggle button */}
      <button 
        onClick={toggleTheme}
        className={styles.themeToggle}
        aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
      >
        {darkMode ? '☀️' : '🌙'}
      </button>

      {/* Mobile menu button */}
      <button
        className={styles.menuBtn}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-expanded={menuOpen}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Menu items */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className={styles.menuItems}
          >
            {['about', 'experience', 'projects', 'contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};