import { motion } from "framer-motion";

const features = [
    { title: "Conversion-focused layout", icon: "🎯", desc: "Optimized for maximum user engagement and conversions." },
    { title: "Lightning-fast performance", icon: "⚡", desc: "Built with performance as priority, sub-second load times." },
    { title: "Responsive on all devices", icon: "📱", desc: "Perfect experience on mobile, tablet, and desktop." },
    { title: "Clean & scalable codebase", icon: "🏗️", desc: "Well-organized code structure for easy customization." },
];

export default function Features() {
    return (
        <section className="py-24 max-w-6xl mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h1 className="text-5xl font-bold mb-4 text-gray-900">
                    Powerful Features
                </h1>
                <p className="text-xl text-gray-600">Everything you need to launch a successful SaaS</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
                {features.map((f, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" }}
                        className="card bg-white shadow-lg hover:shadow-xl transition-shadow rounded-xl border border-gray-100"
                    >
                        <div className="card-body">
                            <div className="text-4xl mb-4">{f.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900">
                                {f.title}
                            </h3>
                            <p className="text-gray-600 mt-2">
                                {f.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
