"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const FinalCTA = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Connect Builders and Contractors with BlueClerk
          </h2>
          <p className="text-lg text-white/90 leading-relaxed">
            BlueClerk keeps builders and contractors connected, organized, and
            on the same page - from the first work order to the last job
            completed. It&apos;s simple, reliable, and built to make daily work
            easier for everyone involved.
          </p>
          <Link
            href="/signup"
            className="inline-block bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-light transition-all transform hover:scale-105 shadow-lg"
          >
            Try BlueClerk Free
          </Link>
          <p className="text-white/80 text-sm">
            BlueClerk - Connecting Builders and Contractors in the Housing
            Industry.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
