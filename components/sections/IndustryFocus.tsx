"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const IndustryFocus = () => {
  const comparisons = [
    {
      name: "BlueClerk",
      features: [
        "Connects builders and contractors with shared job data and PO tracking",
        "Both sides see the same information in real time",
      ],
      highlight: true,
    },
    {
      name: "Generic CRMs",
      features: [
        "Built for sales, not field operations",
        "Great for tracking leads, terrible for managing actual work",
      ],
      highlight: false,
    },
    {
      name: "Enterprise Software",
      features: [
        "Focused only on builders, not service providers",
        "Contractors are left using texts, emails, and guesswork",
      ],
      highlight: false,
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-dark mb-6">
              Built for the Housing Industry — Not Generic Construction Software
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-neutral-medium leading-relaxed mb-12"
          >
            <p>
              Most job management tools are made for general construction or
              sales teams. BlueClerk was built specifically for the new-home
              industry - connecting builders and contractors directly on one
              platform. It&apos;s focused on clarity, accountability, and
              keeping information consistent across every job.
            </p>
            <p>
              The housing industry has unique needs. You&apos;re not managing one
              big project with one GC and a bunch of subs. You&apos;re managing
              dozens or hundreds of homes, each at a different stage, each with
              different trades involved, and you need to keep warranty work
              separate from new construction while using the same contractors for
              both.
            </p>
            <p>
              Generic construction software doesn&apos;t handle this well. CRM
              systems are built for sales teams, not for coordinating field
              work. Enterprise platforms only work from the builder&apos;s
              perspective and leave contractors in the dark. BlueClerk connects
              both sides because that&apos;s what actually makes jobs run
              smoothly.
            </p>
            <p>
              BlueClerk also connects with systems you already use, like
              QuickBooks Online, so your accounting data stays organized without
              manual entry. Your financial team doesn&apos;t need to learn a
              new system - the integration handles it automatically.
            </p>
          </motion.div>

          {/* Comparison Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {comparisons.map((comparison, index) => (
              <motion.div
                key={comparison.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-6 rounded-xl border-2 ${
                  comparison.highlight
                    ? "border-primary bg-primary-light/30 shadow-lg"
                    : "border-neutral-light bg-white"
                }`}
              >
                <h3
                  className={`text-xl font-bold mb-4 ${
                    comparison.highlight ? "text-primary" : "text-neutral-dark"
                  }`}
                >
                  {comparison.name}
                </h3>
                <ul className="space-y-2">
                  {comparison.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-sm text-neutral-medium"
                    >
                      <span
                        className={`mr-2 mt-1 ${
                          comparison.highlight ? "text-primary" : "text-neutral-medium"
                        }`}
                      >
                        {comparison.highlight ? "✓" : "•"}
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
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
              Software that works for everyone involved, not just one side of
              the relationship.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IndustryFocus;
