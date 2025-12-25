import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="
        fixed top-0 inset-x-0 z-50
        backdrop-blur-xl
        bg-white/95
        border-b border-gray-200
      "
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* LOGO */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent"
                >
                    SaaSify
                </motion.div>

                {/* LINKS */}
                <div className="hidden md:flex items-center gap-8">
                    <NavItem to="/features">Features</NavItem>
                    <NavItem to="/pricing">Pricing</NavItem>
                    <NavItem to="/contact">Contact</NavItem>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-gray-900 font-semibold text-sm transition-all opacity-100" 
                    >
                        Get Started
                    </motion.button>
                </div>

                {/* MOBILE MENU BUTTON */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden flex flex-col gap-1.5"
                >
                    <div className={`w-6 h-0.5 bg-gray-900 transition-all ${
                        mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                    }`}></div>
                    <div className={`w-6 h-0.5 bg-gray-900 transition-all ${
                        mobileMenuOpen ? "opacity-0" : ""
                    }`}></div>
                    <div className={`w-6 h-0.5 bg-gray-900 transition-all ${
                        mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}></div>
                </button>
            </div>

            {/* MOBILE MENU */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden border-t border-gray-200 bg-white"
                >
                    <div className="flex flex-col gap-2 px-6 py-4">
                        <NavItem to="/features">Features</NavItem>
                        <NavItem to="/pricing">Pricing</NavItem>
                        <NavItem to="/contact">Contact</NavItem>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all mt-2"
                        >
                            Get Started
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}

function NavItem({ to, children }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `text-sm font-medium transition ${isActive
                    ? "text-primary"
                    : "text-gray-600 hover:text-gray-900"
                }`
            }
        >
            {children}
        </NavLink>
    );
}
