"use client";

import { motion } from "framer-motion";

const SocialProof = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-primary-light/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-dark mb-6">
            Trusted by Builders and Contractors Who Want Better Results
          </h2>
          <p className="text-lg text-neutral-medium leading-relaxed">
            Real builders and service providers use BlueClerk every day to stay
            organized and keep jobs moving. It&apos;s practical, easy to learn,
            and designed for the real world of housing construction - where clear
            communication makes the difference between delays and on-time
            completion.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
