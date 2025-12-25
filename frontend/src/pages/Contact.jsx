import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.message) {
            setSubmitted(true);
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setSubmitted(false), 3000);
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-slate-50 to-white">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-xl ml-100"
            >
                <div className="card bg-white shadow-2xl rounded-2xl border border-gray-100">
                    <div className="card-body">
                        <h2 className="text-4xl font-bold mb-2 text-gray-900">
                            Get in Touch
                        </h2>
                        <p className="text-gray-600 mb-8">We'd love to hear from you. Send us a message!</p>

                        {submitted && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="alert alert-success mb-6 rounded-lg bg-green-100 border border-green-300"
                            >
                                <span className="text-green-800 font-semibold">✓ Message sent successfully!</span>
                            </motion.div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-gray-700">Name</span>
                                </label>
                                <input
                                    type="text"
                                    className="input input-bordered rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 bg-white"
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-gray-700">Email</span>
                                </label>
                                <input
                                    type="email"
                                    className="input input-bordered rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 bg-white"
                                    placeholder="your@email.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-gray-700">Message</span>
                                </label>
                                <textarea
                                    className="textarea textarea-bordered rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 resize-none bg-white"
                                    placeholder="Your message here..."
                                    rows="5"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                ></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="btn btn-primary btn-block rounded-lg font-semibold mt-6 text-blue-600"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
