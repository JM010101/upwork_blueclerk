"use client";

import { motion } from "framer-motion";

const ValueProposition = () => {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-dark mb-8 text-center"
          >
            Keeping Builders and Contractors Aligned Every Step of the Way
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none space-y-6 text-neutral-medium leading-relaxed"
          >
            <p>
              BlueClerk removes the extra steps that slow down communication
              between builders and contractors. Instead of sorting through
              calls, emails, and spreadsheets, both sides can log in and see
              what&apos;s scheduled, what&apos;s finished, and what&apos;s
              waiting on approval.
            </p>

            <p>
              When you&apos;re managing multiple job sites, dealing with
              warranty work, coordinating trades, and tracking purchase orders,
              communication gets complicated fast. Text threads get buried,
              emails are missed, and spreadsheets become outdated the moment
              someone makes a change. BlueClerk solves this by giving everyone a
              single place to work from.
            </p>

            <p>
              Builders know exactly which jobs are assigned, who&apos;s working
              on them, and when they&apos;ll be complete. Contractors see all
              their work across every builder they serve, with complete job
              details and homeowner information in one view. No more playing
              phone tag or wondering if a message was received.
            </p>

            <p>
              It&apos;s a simple way to stay connected and make sure jobs move
              from start to finish without delays or confusion. The system works
              for both new construction and warranty service, keeping your team
              organized whether you&apos;re building a single home or managing
              an entire community.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl font-semibold text-primary mt-10 text-center"
          >
            Less chasing, fewer mistakes, and one shared view of the work.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
