"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ContractorsPage() {
  const features = [
    {
      title: "Clear Job Requests",
      description:
        "Receive detailed work orders that include purchase order numbers, addresses, and homeowner details. Eliminate confusion about project requirements and get all the information you need upfront.",
      icon: "📋",
    },
    {
      title: "Mobile Field Updates",
      description:
        "Update job progress from any location using the mobile app. Features include one-tap status updates, photo documentation, and GPS location verification, ensuring builders are informed in real time.",
      icon: "📱",
    },
    {
      title: "Faster Payments",
      description:
        "Organize job tracking and invoice management with QuickBooks integration. Streamline accounting processes and expedite payments with seamless synchronization.",
      icon: "💰",
    },
    {
      title: "Work Across Multiple Builders",
      description:
        "Manage jobs from multiple builders in one place. Standardize your workflow regardless of which builder you're working with, all from a single platform.",
      icon: "🏗️",
    },
    {
      title: "Photo Documentation",
      description:
        "Document your work with before/after photos directly from your mobile device. Keep visual records without extra paperwork and provide builders with instant updates.",
      icon: "📸",
    },
    {
      title: "Direct Communication",
      description:
        "Communicate directly with builders via mobile devices. All conversation about a specific job lives in one place, so you can see the full history without searching.",
      icon: "💬",
    },
  ];

  const integrations = [
    {
      name: "QuickBooks",
      description: "Job data and invoicing synchronization",
    },
    {
      name: "GPS",
      description: "Automatic location tracking",
    },
    {
      name: "Email & SMS",
      description: "Automated notifications and updates",
    },
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
                Enhance Efficiency and Profitability for{" "}
                <span className="text-primary">Contractors</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-neutral-medium mb-8 leading-relaxed"
              >
                Streamline workflows and improve communication with builders.
                Reduce errors, stay organized, and receive payments more
                promptly.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Link
                  href="/signup"
                  className="inline-block bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg"
                >
                  Get Started - $10/month
                </Link>
                <p className="text-neutral-medium text-sm">
                  No setup fees • Cancel anytime
                </p>
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
                Built for Contractors Who Work on the Go
              </h2>
              <p className="text-lg text-neutral-medium max-w-2xl mx-auto">
                The platform is mobile-first, allowing for efficient job status
                updates, photo documentation, and direct communication with
                builders via mobile devices.
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

        {/* Integrations Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-primary-light/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-dark mb-6">
                Seamless Integrations
              </h2>
              <p className="text-lg text-neutral-medium">
                BlueClerk integrates with the tools you already use
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {integrations.map((integration, index) => (
                <motion.div
                  key={integration.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-lg text-center border border-primary/20"
                >
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    {integration.name}
                  </h3>
                  <p className="text-neutral-medium">
                    {integration.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Highlight */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto bg-gradient-to-br from-primary-light to-primary/20 rounded-2xl p-12 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-neutral-dark mb-4">
                  Simple, Affordable Pricing
                </h2>
                <div className="text-5xl font-bold text-primary mb-4">
                  $10<span className="text-2xl text-neutral-medium">/month</span>
                </div>
                <p className="text-lg text-neutral-medium mb-8">
                  Access all contractor features. Work with unlimited builders.
                  Cancel anytime.
                </p>
                <Link
                  href="/signup"
                  className="inline-block bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg"
                >
                  Start Your Free Trial
                </Link>
              </motion.div>
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
                Ready to Enhance Your Operations?
              </h2>
              <p className="text-lg text-white/90">
                Join contractors who are reducing errors, staying organized, and
                receiving payments more promptly with BlueClerk.
              </p>
              <Link
                href="/signup"
                className="inline-block bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-light transition-all transform hover:scale-105 shadow-lg"
              >
                Get Started Today
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
