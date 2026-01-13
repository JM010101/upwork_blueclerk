"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BuildersPage() {
  const features = [
    {
      title: "Send Detailed Work Orders",
      description:
        "Send comprehensive work orders with essential information including PO numbers, addresses, and homeowner details. Ensure contractors have everything they need to complete jobs correctly the first time.",
      icon: "📋",
    },
    {
      title: "Real-Time Project Status Tracking",
      description:
        "Get instant updates from contractors as they work. See job progress, status changes, and completion notifications in real-time, eliminating the need for follow-up calls.",
      icon: "📊",
    },
    {
      title: "Centralized Project Management",
      description:
        "Consolidate all projects, contractors, and communications into one accessible location. Manage multiple job sites, warranty work, and new construction from a single dashboard.",
      icon: "🏗️",
    },
    {
      title: "Automated Contractor Notifications",
      description:
        "Automatically notify contractors about new assignments, changes, and updates. GPS and house details ensure enhanced accuracy and reduce costly delays.",
      icon: "🔔",
    },
    {
      title: "Reduce Delays and Callbacks",
      description:
        "Work from the same accurate information as your contractors. Reduce costly delays and callbacks by ensuring all parties have access to the latest project details.",
      icon: "⚡",
    },
    {
      title: "QuickBooks Integration",
      description:
        "Seamlessly integrate with QuickBooks Online for streamlined accounting. Keep your financial data organized without manual entry.",
      icon: "💰",
    },
  ];

  const benefits = [
    "Reduce costly delays and callbacks",
    "Real-time project visibility",
    "Automated contractor notifications",
    "GPS and house details for accuracy",
    "Centralized communication",
    "Streamlined accounting with QuickBooks",
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-primary-light via-white to-primary-light/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-dark mb-6"
              >
                Streamline Home Building Projects with{" "}
                <span className="text-primary">BlueClerk</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-neutral-medium mb-8 leading-relaxed"
              >
                Enhance coordination between builders and contractors with a
                centralized platform designed to streamline your projects and
                reduce delays.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link
                  href="/signup"
                  className="inline-block bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg"
                >
                  Get Started Free
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-dark mb-6">
                Everything You Need to Manage Projects
              </h2>
              <p className="text-lg text-neutral-medium max-w-2xl mx-auto">
                BlueClerk provides builders with powerful tools to coordinate
                projects, manage contractors, and keep everything organized in
                one place.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-neutral-light/50"
                >
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-neutral-dark mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-medium leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-primary-light/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-dark mb-6">
                  Reduce Delays, Improve Efficiency
                </h2>
                <p className="text-lg text-neutral-medium">
                  By utilizing BlueClerk, builders can reduce costly delays and
                  callbacks, ensuring that all parties work from the same
                  accurate information.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-md"
                  >
                    <span className="text-primary text-2xl font-bold">✓</span>
                    <p className="text-lg text-neutral-dark font-medium">
                      {benefit}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary to-primary-dark text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center space-y-8"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Ready to Streamline Your Projects?
              </h2>
              <p className="text-lg text-white/90">
                Get started with BlueClerk and improve your project management
                efficiency today.
              </p>
              <Link
                href="/signup"
                className="inline-block bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-light transition-all transform hover:scale-105 shadow-lg"
              >
                Try BlueClerk Free
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
