"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PricingPage() {
  const builderFeatures = [
    "Send detailed work orders to contractors",
    "Real-time project status tracking",
    "Reduction of delays and callbacks",
    "QuickBooks integration",
    "Centralized project management",
    "Automated contractor notifications",
  ];

  const contractorFeatures = [
    "Receive clear job requests with comprehensive details",
    "Update progress via mobile app",
    "Organized job and invoice tracking",
    "Compatibility across multiple builders",
    "Photo documentation",
    "Direct communication with builders",
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
                Simple, Transparent{" "}
                <span className="text-primary">Pricing</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-neutral-medium mb-8 leading-relaxed"
              >
                Tailored pricing plans for both builders and contractors. No
                hidden fees, no surprises.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Builders Pricing */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-xl border-2 border-neutral-light p-8 lg:p-12"
              >
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-neutral-dark mb-4">
                    For Builders
                  </h2>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary">
                      Per-Job
                    </span>
                    <p className="text-neutral-medium mt-2">
                      Flexible pricing that scales with your project volume
                    </p>
                  </div>
                  <p className="text-lg text-neutral-medium">
                    Specific per-job pricing available upon contact
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <h3 className="font-semibold text-neutral-dark text-lg mb-4">
                    Features Include:
                  </h3>
                  {builderFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3"
                    >
                      <span className="text-primary text-xl mt-1">✓</span>
                      <span className="text-neutral-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="block w-full bg-primary text-white text-center px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg"
                >
                  Contact for Pricing
                </Link>
              </motion.div>

              {/* Contractors Pricing */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl shadow-xl p-8 lg:p-12 text-white relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 bg-white/10 text-xs font-semibold px-4 py-2 rounded-bl-lg">
                  POPULAR
                </div>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">For Contractors</h2>
                  <div className="mb-6">
                    <span className="text-5xl font-bold">$10</span>
                    <span className="text-2xl ml-2">/month</span>
                    <p className="text-white/90 mt-2">
                      Manage jobs and expedite payments
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <h3 className="font-semibold text-lg mb-4">
                    Features Include:
                  </h3>
                  {contractorFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3"
                    >
                      <span className="text-white text-xl mt-1">✓</span>
                      <span className="text-white/90">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/signup"
                  className="block w-full bg-white text-primary text-center px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-light transition-all transform hover:scale-105 shadow-lg"
                >
                  Start Free Trial
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-primary-light/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <h2 className="text-2xl font-bold text-neutral-dark mb-6 text-center">
                  Why Choose BlueClerk?
                </h2>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-4xl mb-3">🚀</div>
                    <h3 className="font-semibold text-neutral-dark mb-2">
                      No Setup Fees
                    </h3>
                    <p className="text-sm text-neutral-medium">
                      Get started without any upfront costs
                    </p>
                  </div>
                  <div>
                    <div className="text-4xl mb-3">🔄</div>
                    <h3 className="font-semibold text-neutral-dark mb-2">
                      Cancel Anytime
                    </h3>
                    <p className="text-sm text-neutral-medium">
                      Flexible plans with no long-term commitments
                    </p>
                  </div>
                  <div>
                    <div className="text-4xl mb-3">💬</div>
                    <h3 className="font-semibold text-neutral-dark mb-2">
                      Free Setup Assistance
                    </h3>
                    <p className="text-sm text-neutral-medium">
                      We help you get started at no extra cost
                    </p>
                  </div>
                </div>
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
                Ready to Get Started?
              </h2>
              <p className="text-lg text-white/90">
                Contact us for builder pricing or start your contractor
                subscription today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-block bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-light transition-all transform hover:scale-105 shadow-lg"
                >
                  Contact Sales
                </Link>
                <Link
                  href="/signup"
                  className="inline-block bg-primary-light text-primary-dark px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white transition-all transform hover:scale-105 shadow-lg"
                >
                  Start Free Trial
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
