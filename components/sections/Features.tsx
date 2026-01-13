"use client";

import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      title: "Smart Job Scheduling",
      icon: "📅",
      description: [
        "Create and assign jobs in seconds",
        "Everyone involved can see dates, notes, and status updates",
        "Calendar view shows what's coming up, what's in progress, and what's been completed",
        "Drag and drop to reschedule",
        "Add notes for specific instructions",
        "Attach photos or documents that everyone needs to see",
      ],
    },
    {
      title: "PO & Payment Control",
      icon: "💰",
      description: [
        "Keep payments consistent by requesting or requiring POs before work begins",
        "Set rules that work for your business",
        "Require POs for certain dollar amounts, certain types of work, or certain contractors",
        "Admins can override when needed",
        "Default process keeps everyone aligned on what's approved and what's not",
      ],
    },
    {
      title: "Shared Job Information",
      icon: "📋",
      description: [
        "Job details, homeowner info, and updates all live in one record",
        "Builders and contractors stay aligned",
        "Contractors see: address, access instructions, homeowner contact preferences, full job history",
        "Builders see: same information, plus notes and photos from the field",
      ],
    },
    {
      title: "Mobile-Friendly Access",
      icon: "📱",
      description: [
        "Manage everything from the field or office",
        "Works just as well on a phone as on a computer",
        "Contractors can update job status, upload photos, and communicate from job site",
        "Builders can assign new work, check progress, and respond without being tied to a desk",
      ],
    },
  ];

  return (
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
            All the Tools You Need to Keep Jobs Moving
          </h2>
          <p className="text-lg text-neutral-medium max-w-3xl mx-auto">
            Whether you&apos;re managing warranty work, scheduling trades, or
            keeping track of POs, BlueClerk keeps everything in one place.
            Builders and service providers both see the same information -
            clear, current, and easy to use. No special training required, no
            complicated setup, and no ongoing IT headaches.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
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
              <h3 className="text-2xl font-bold text-neutral-dark mb-4">
                {feature.title}
              </h3>
              <ul className="space-y-3">
                {feature.description.map((item, idx) => (
                  <li key={idx} className="flex items-start text-neutral-medium">
                    <span className="text-primary mr-2 mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl font-semibold text-primary mt-16 text-center"
        >
          Built for how builders and contractors actually work - not how
          software companies think they should work.
        </motion.p>
      </div>
    </section>
  );
};

export default Features;
