"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    accountType: "contractor",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-primary-light via-white to-primary-light/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-xl p-8 border border-neutral-light/50"
              >
                <h1 className="text-3xl font-bold text-neutral-dark mb-2 text-center">
                  Create Your Account
                </h1>
                <p className="text-neutral-medium text-center mb-8">
                  Start your free trial today. No credit card required.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="accountType"
                      className="block text-sm font-medium text-neutral-dark mb-2"
                    >
                      I am a...
                    </label>
                    <select
                      id="accountType"
                      name="accountType"
                      value={formData.accountType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="contractor">Contractor</option>
                      <option value="builder">Builder</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-neutral-dark mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-neutral-dark mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-neutral-dark mb-2"
                    >
                      Password *
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg"
                  >
                    Start Free Trial
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-neutral-medium">
                    Already have an account?{" "}
                    <Link
                      href="/login"
                      className="text-primary font-semibold hover:text-primary-dark"
                    >
                      Sign in
                    </Link>
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-neutral-light">
                  <p className="text-xs text-neutral-medium text-center">
                    By signing up, you agree to our{" "}
                    <Link href="/terms" className="text-primary hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      className="text-primary hover:underline"
                    >
                      Privacy Policy
                    </Link>
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 text-center"
              >
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="font-semibold text-neutral-dark mb-2">
                    What&apos;s included:
                  </h3>
                  <ul className="text-sm text-neutral-medium space-y-2">
                    <li className="flex items-center justify-center space-x-2">
                      <span className="text-primary">✓</span>
                      <span>No setup fees</span>
                    </li>
                    <li className="flex items-center justify-center space-x-2">
                      <span className="text-primary">✓</span>
                      <span>Cancel anytime</span>
                    </li>
                    <li className="flex items-center justify-center space-x-2">
                      <span className="text-primary">✓</span>
                      <span>Free setup assistance</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
