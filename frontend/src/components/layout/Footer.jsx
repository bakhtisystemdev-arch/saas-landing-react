import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="border-t border-gray-200 bg-white mt-24">
            <div className="max-w-7xl mx-auto px-6 py-16 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <p className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">SaaSify</p>
                    <p className="text-sm text-gray-500 mt-4">
                        © {new Date().getFullYear()} SaaSify. All rights reserved.
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                        Built with React, Tailwind CSS & Framer Motion
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
