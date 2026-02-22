import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logo from "../../assests/img.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Why TFFx", path: "/why-tffx" },
  { label: "Get A Quote", path: "/quote" },
  { label: "Track Shipment", path: "/track" },
  { label: "Support", path: "/support" },
  { label: "About Us", path: "/about" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass" style={{ fontFamily: "var(--font-heading)" }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="TFFx Logo"
            className="h-12 w-auto bg-white rounded-sm px-2 py-1"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative py-2 tracking-wider transition-colors duration-300 ${
                location.pathname === link.path
                  ? "text-[#FF5F1F]"
                  : "text-[#8A8A9A] hover:text-[#E2E8F0]"
              }`}
              style={{ fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
            >
              {link.label}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF5F1F]"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-[#E2E8F0] p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`py-3 tracking-wider transition-colors ${
                    location.pathname === link.path
                      ? "text-[#FF5F1F]"
                      : "text-[#8A8A9A] hover:text-[#E2E8F0]"
                  }`}
                  style={{ fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}