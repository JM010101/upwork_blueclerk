"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  const values = [
    {
      title: "Simplicity",
      description:
        "Developing tools that are intuitive and allow users to concentrate on building quality homes.",
      icon: "✨",
    },
    {
      title: "Collaboration",
      description:
        "Strengthening partnerships among teams to facilitate the construction of great homes.",
      icon: "🤝",
    },
    {
      title: "Efficiency",
      description:
        "Designing features that expedite project completion with fewer errors and improved outcomes.",
      icon: "⚡",
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
                About <span className="text-primary">BlueClerk</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-neutral-medium mb-8 leading-relaxed"
              >
                Enhancing collaboration between builders and contractors in
                new-home construction projects.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="prose prose-lg max-w-none"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-neutral-dark mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-neutral-medium leading-relaxed mb-6">
                  BlueClerk is dedicated to enhancing collaboration between
                  builders and contractors in new-home construction projects.
                  Our mission is to eliminate common project delays caused by
                  miscommunication, missing details, or unclear expectations by
                  providing a straightforward platform that ensures alignment
                  from job assignment to completion.
                </p>
                <p className="text-lg text-neutral-medium leading-relaxed">
                  Founded by a team with extensive experience in construction,
                  software, and project management, BlueClerk understands the
                  unique challenges of coordinating new-home construction. Our
                  platform is tailored to reflect real-world workflows and
                  address the daily pain points faced by builders and
                  contractors striving for efficient collaboration.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-primary-light/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-dark mb-6">
                Our Core Values
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-lg text-center border border-neutral-light/50"
                >
                  <div className="text-6xl mb-6">{value.icon}</div>
                  <h3 className="text-2xl font-bold text-neutral-dark mb-4">
                    {value.title}
                  </h3>
                  <p className="text-neutral-medium leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why BlueClerk Section */}
        <section className="py-20 lg:py-32 bg-white">
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
                  Why BlueClerk?
                </h2>
              </motion.div>

              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-primary-light/30 p-6 rounded-lg border border-primary/20"
                >
                  <h3 className="text-xl font-bold text-neutral-dark mb-3">
                    Built by Industry Experts
                  </h3>
                  <p className="text-neutral-medium">
                    Our team combines deep experience in construction, software
                    development, and project management to create solutions
                    that actually work in the real world.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-primary-light/30 p-6 rounded-lg border border-primary/20"
                >
                  <h3 className="text-xl font-bold text-neutral-dark mb-3">
                    Designed for Real Workflows
                  </h3>
                  <p className="text-neutral-medium">
                    We understand the daily challenges builders and contractors
                    face. Our platform is designed to fit into existing
                    workflows, not replace them entirely.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-primary-light/30 p-6 rounded-lg border border-primary/20"
                >
                  <h3 className="text-xl font-bold text-neutral-dark mb-3">
                    Focused on Results
                  </h3>
                  <p className="text-neutral-medium">
                    Every feature we build is focused on reducing delays,
                    improving communication, and helping teams build better
                    homes faster.
                  </p>
                </motion.div>
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
                Join Us in Building Better
              </h2>
              <p className="text-lg text-white/90">
                Experience the difference that comes from better collaboration
                and communication.
              </p>
              <Link
                href="/signup"
                className="inline-block bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-light transition-all transform hover:scale-105 shadow-lg"
              >
                Get Started Free
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
