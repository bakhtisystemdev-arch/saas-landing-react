import { motion } from "framer-motion";

export default function Pricing() {
    const plans = [
        { name: "Starter", price: 99, features: ["Custom UI", "Responsive", "SEO Ready"] },
        { name: "Professional", price: 199, features: ["All Starter", "Analytics", "Priority Support"] },
        { name: "Enterprise", price: 399, features: ["All Professional", "Custom Domain", "24/7 Support"] }
    ];

    return (
        <section className="py-24 px-6 bg-gradient-to-b from-white to-slate-50">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16 max-w-2xl mx-auto"
            >
                <h1 className="text-5xl font-bold mb-4 text-gray-900">Simple, Transparent Pricing</h1>
                <p className="text-xl text-gray-600">Choose the perfect plan for your needs</p>
            </motion.div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                {plans.map((plan, i) => (
                    <motion.div
                        key={plan.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -12, boxShadow: plan.name === "Professional" ? "0 25px 50px rgba(37, 99, 235, 0.3)" : "0 20px 40px rgba(0, 0, 0, 0.1)" }}
                        className={`card rounded-2xl transition-all ${
                            plan.name === "Professional"
                                ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-2xl ring-2 ring-blue-600 scale-105"
                                : "bg-white text-gray-900 shadow-lg border border-gray-100"
                        }`}
                    >
                        <div className="card-body">
                            {plan.name === "Professional" && (
                                <div className="badge badge-lg mb-2 w-fit bg-white text-blue-600 font-bold">⭐ Popular</div>
                            )}
                            <h3 className={`text-2xl font-bold ${
                                plan.name === "Professional" ? "text-white" : "text-gray-900"
                            }`}>{plan.name}</h3>
                            <div className="my-6">
                                <span className={`text-5xl font-extrabold ${
                                    plan.name === "Professional" ? "text-white" : "text-gray-900"
                                }`}>${plan.price}</span>
                                <span className={`text-sm ml-2 ${
                                    plan.name === "Professional" ? "text-blue-100" : "text-gray-500"
                                }`}>/month</span>
                            </div>
                            <ul className="space-y-3 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <span className={`text-lg font-bold ${
                                            plan.name === "Professional" ? "text-blue-100" : "text-blue-600"
                                        }`}>✓</span>
                                        <span className={plan.name === "Professional" ? "text-blue-500" : "text-gray-700"}>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`btn font-bold rounded-lg ${
                                    plan.name === "Professional"
                                        ? "bg-white text-blue-600 hover:bg-gray-100 border-white"
                                        : "btn-primary text-black"
                                }`}
                            >
                                Get Started
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
