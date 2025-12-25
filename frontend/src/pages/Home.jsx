import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <span className="text-sm font-semibold text-blue-600 tracking-widest uppercase">Welcome to SaaSify</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight"
                >
                    Build Legendary <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">SaaS</span> Landing Pages
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
                >
                    High-converting, modern UI built with React & Tailwind. Get started with a beautiful, responsive template.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="mt-12 flex flex-col sm:flex-row justify-center gap-4"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn btn-primary btn-lg text-blue-600 rounded-lg font-semibold"
                    >
                        Start Project
                    </motion.button>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            to="/pricing"
                            className="btn btn-outline btn-lg rounded-lg font-semibold"
                        >
                            View Pricing
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
