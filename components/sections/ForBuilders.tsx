"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ForBuilders = () => {
  const benefits = [
    {
      title: "Track open and completed jobs in real time",
      description:
        "Dashboard gives you a live view of every job, with status updates that happen the moment contractors make changes",
    },
    {
      title: "Filter by community, phase, or trade",
      description:
        "Find exactly what you're looking for fast, whether you're checking on a specific home or reviewing all electrical work",
    },
    {
      title: "View provider performance and response times",
      description:
        "See which contractors are consistently reliable and which ones need follow-up, helping you make better decisions about who to assign",
    },
    {
      title: "Keep warranty and service work organized",
      description:
        "Warranty requests, service calls, and new construction all live in the same system, making it easy to manage everything without switching platforms",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-primary-light/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-dark mb-6">
              For Builders: Clear Visibility and Fewer Delays
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary-light to-primary/20 rounded-xl p-8 aspect-square flex items-center justify-center order-2 lg:order-1"
            >
              <p className="text-neutral-medium text-sm text-center">
                BlueClerk builder job tracking dashboard
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 text-neutral-medium leading-relaxed order-1 lg:order-2"
            >
              <p>
                Builders use BlueClerk to assign jobs to trusted service
                providers and track progress from one dashboard. You&apos;ll see
                job status, PO information, and updates as they happen - no
                follow-up calls or missing details.
              </p>
              <p>
                Managing a dozen contractors across multiple job sites means a
                lot of moving parts. BlueClerk helps you keep track of it all
                without the usual chaos. You can see which jobs are scheduled,
                which are in progress, which are waiting on materials or
                approval, and which are complete.
              </p>
              <p>
                The platform works for new construction, warranty service, and
                everything in between. Filter by community, by phase, by trade,
                or by contractor to get exactly the view you need. When
                homeowners call with questions, you can pull up the job history
                instantly and see what&apos;s been done, who did it, and when.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg border border-primary/20 shadow-md"
              >
                <h3 className="font-bold text-neutral-dark mb-2 text-lg">
                  {benefit.title}
                </h3>
                <p className="text-neutral-medium">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-xl font-semibold text-primary">
              One platform for new construction, warranty work, and everything
              in between.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ForBuilders;
