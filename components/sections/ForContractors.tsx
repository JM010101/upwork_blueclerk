"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ForContractors = () => {
  const benefits = [
    {
      title: "See assigned jobs and upcoming work instantly",
      description:
        "Your dashboard shows every active job, sorted by date or builder, with complete details and priority levels",
    },
    {
      title: "Add notes and images from the field",
      description:
        "Document what you're seeing, upload before/after photos, and keep a visual record without extra paperwork",
    },
    {
      title: "Communicate with builders in one thread",
      description:
        "All conversation about a specific job lives in one place, so you can see the full history without searching",
    },
    {
      title: "Keep accurate records without extra paperwork",
      description:
        "Everything you document in BlueClerk counts as your job record, making it easy to reference later if questions come up",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
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
              For Contractors: One Place for All Builder Work
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 text-neutral-medium leading-relaxed"
            >
              <p>
                BlueClerk gives contractors a clear list of every job across
                every builder they work with. Instead of switching between
                systems or digging through messages, you can update jobs, add
                photos, and track progress in real time.
              </p>
              <p>
                If you work with multiple builders, you know the challenge. Each
                one has their own way of communicating, their own forms, their
                own process for getting paid. BlueClerk standardizes this - not
                in a way that&apos;s rigid, but in a way that makes sense. You
                log in once and see all your assigned work, regardless of which
                builder it&apos;s from.
              </p>
              <p>
                The mobile app means you can manage everything from the truck or
                the job site. Take a photo, add a note about what you found,
                update the status, and you&apos;re done. The builder sees it
                immediately. No separate email, no photo text that gets lost in
                your thread, no wondering if the message got through.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary-light to-primary/20 rounded-xl p-8 aspect-square flex items-center justify-center"
            >
              <p className="text-neutral-medium text-sm text-center">
                BlueClerk contractor job screen on mobile
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
                className="bg-primary-light/30 p-6 rounded-lg border border-primary/20"
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
            className="text-center space-y-6"
          >
            <Link
              href="/signup"
              className="inline-block bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg"
            >
              Try BlueClerk Free
            </Link>
            <p className="text-xl font-semibold text-primary">
              Less time on admin work, more time getting jobs done right.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ForContractors;
