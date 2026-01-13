"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Shared Builder–Contractor Data: Fewer Mistakes, Fewer Delays",
      description:
        "Discusses how shared data systems can reduce errors and delays in new-home construction.",
      category: "Project Management",
    },
    {
      title: "Warranty Work Without Chaos: Standardize Data, Close Tickets Faster",
      description:
        "Explores strategies for standardizing data to streamline warranty work processes.",
      category: "Warranty",
    },
    {
      title: "Purchase Orders that Actually Get You Paid",
      description:
        "Provides insights into effective purchase order management to ensure timely payments.",
      category: "Finance",
    },
    {
      title: "Punch Lists for New-Home Contractors: A Faster, Photo-First Workflow",
      description:
        "Introduces a photo-first approach to punch lists for improved efficiency.",
      category: "Contractors",
    },
    {
      title: "Contractor Scheduling Software for New Builds: Less Back-and-Forth",
      description:
        "Highlights the benefits of centralized scheduling software in reducing communication issues.",
      category: "Scheduling",
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
                BlueClerk <span className="text-primary">Blog</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-neutral-medium mb-8 leading-relaxed"
              >
                Expert tips and insights for builders and contractors on project
                coordination, communication, and growing construction
                businesses.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-neutral-light/50 overflow-hidden"
                >
                  <div className="p-6">
                    <span className="inline-block bg-primary-light text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">
                      {post.category}
                    </span>
                    <h2 className="text-xl font-bold text-neutral-dark mb-3">
                      {post.title}
                    </h2>
                    <p className="text-neutral-medium mb-4 leading-relaxed">
                      {post.description}
                    </p>
                    <Link
                      href="#"
                      className="text-primary font-semibold hover:text-primary-dark transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-primary-light/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto bg-white rounded-xl p-8 shadow-lg text-center"
            >
              <h2 className="text-2xl font-bold text-neutral-dark mb-4">
                Stay Updated
              </h2>
              <p className="text-neutral-medium mb-6">
                Get the latest tips and insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-neutral-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
