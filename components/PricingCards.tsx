"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const pricingData = [
  {
    name: "AI Receptionist Standard",
    price: "$100",
    period: "month",
    setup: "$50 setup",
    features: [
      "24/7 call answering",
      "Basic lead information collection",
      "Appointment scheduling",
      "Call transcripts & summaries",
      "Email notifications",
      "Calendar integration"
    ],
    cta: "Get Started",
    link: "/book-demo",
    popular: false
  },
  {
    name: "AI Receptionist Pro",
    price: "$295",
    period: "month",
    setup: "$75 setup",
    features: [
      "Everything in Standard",
      "Advanced multi-step qualification",
      "Text message follow-up automation",
      "Photo & document collection",
      "Smart routing & prioritization",
      "CRM integration with detailed notes",
      "SMS appointment reminders"
    ],
    cta: "Book Demo",
    link: "/book-demo",
    popular: true
  },
  {
    name: "Website Starter",
    price: "$495",
    period: "one-time",
    setup: "No monthly fee",
    features: [
      "Custom responsive design (5 pages)",
      "Mobile-optimized",
      "SEO foundation",
      "Contact forms",
      "Google Analytics",
      "30-day support after launch"
    ],
    cta: "Start Your Site",
    link: "/book-demo",
    popular: false
  },
  {
    name: "Website Managed",
    price: "$199",
    period: "month",
    setup: "$150 setup",
    features: [
      "Everything in Starter",
      "Premium hosting included",
      "SSL & security",
      "Daily backups",
      "Unlimited edits & updates",
      "99.9% uptime guarantee",
      "Ongoing SEO optimization"
    ],
    cta: "Get Managed Site",
    link: "/book-demo",
    popular: true
  }
];

export default function PricingCards() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-400">
            Choose the package that fits your business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingData.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative glassmorphism border ${
                plan.popular ? "border-blue-500 shadow-xl shadow-blue-500/20" : "border-gray-800"
              } rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-semibold">
                  Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">/{plan.period}</span>
                </div>
                <div className="text-sm text-gray-500 mt-1">{plan.setup}</div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.link}
                className={`block text-center ${
                  plan.popular
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-gray-800 hover:bg-gray-700"
                } text-white px-6 py-3 rounded-lg font-semibold transition-colors`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="glassmorphism border border-yellow-600/50 rounded-xl p-6 inline-block">
            <p className="text-yellow-400 font-semibold">
              <span className="text-xl">💰</span> Bundle & Save: Combine AI Receptionist + Website for 10% off. Ask us about custom packages.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-8 text-center"
        >
          <div className="flex items-center space-x-2 text-gray-400">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span>30-day money-back guarantee</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span>No long-term contracts</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span>Cancel anytime</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
