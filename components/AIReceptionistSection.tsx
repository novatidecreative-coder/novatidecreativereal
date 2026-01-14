"use client";

import Link from "next/link";
import { Phone, Star, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const packages = [
  {
    name: "Standard",
    price: "$100",
    setup: "$50",
    icon: Phone,
    description: "Perfect for businesses that need reliable 24/7 call coverage",
    features: [
      "24/7 call answering",
      "Basic lead information collection",
      "Appointment scheduling",
      "Call transcripts & summaries",
      "Email notifications",
      "Calendar integration"
    ],
    idealFor: "Salons, retail shops, small offices",
    cta: "Get Started",
    link: "/book-demo",
    highlight: false
  },
  {
    name: "Pro",
    price: "$295",
    setup: "$75",
    icon: Star,
    description: "Advanced qualification system that screens leads and collects everything you need before booking",
    features: [
      "Everything in Standard, plus:",
      "Advanced multi-step qualification process",
      "Text message follow-up automation",
      "Photo & document collection for estimates",
      "Smart routing based on job type/urgency",
      "Custom qualification questions",
      "Lead scoring & prioritization",
      "CRM integration with detailed notes",
      "SMS appointment reminders"
    ],
    idealFor: "Contractors, home services, medical practices, legal firms",
    cta: "Book a Demo",
    link: "/book-demo",
    highlight: true
  }
];

const proWorkflow = [
  { step: "1", title: "Customer calls", description: "AI answers instantly" },
  { step: "2", title: "AI qualifies the lead", description: "Asks custom questions about the job" },
  { step: "3", title: "Requests photos via text", description: "Sends automated SMS requesting photos/documents" },
  { step: "4", title: "Customer sends details", description: "Photos, measurements, damage photos, etc." },
  { step: "5", title: "AI books appointment", description: "Schedules with full context and all materials ready" },
  { step: "6", title: "You receive complete lead package", description: "All info, photos, and qualification notes in your CRM" }
];

export default function AIReceptionistSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Two Ways to Capture Every Lead
          </h2>
        </motion.div>

        {/* Packages */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative glassmorphism border ${
                pkg.highlight ? "border-purple-500 shadow-xl shadow-purple-500/20" : "border-gray-800"
              } rounded-2xl p-8 hover:scale-[1.02] transition-transform duration-300`}
            >
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="flex items-center justify-between mb-6">
                <div className={`w-14 h-14 ${pkg.highlight ? "bg-gradient-to-br from-purple-600 to-pink-600" : "bg-gray-800"} rounded-xl flex items-center justify-center`}>
                  <pkg.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-white">{pkg.price}</div>
                  <div className="text-sm text-gray-400">per month</div>
                  <div className="text-sm text-gray-500">{pkg.setup} setup</div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                AI Receptionist {pkg.name}
              </h3>

              <p className="text-gray-400 mb-6">
                {pkg.description}
              </p>

              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle className={`w-5 h-5 ${pkg.highlight ? "text-purple-500" : "text-green-500"} flex-shrink-0 mt-0.5`} />
                    <span className={feature.includes("Everything") ? "text-gray-300 font-semibold" : "text-gray-300"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="bg-gray-900 rounded-lg p-4 mb-6">
                <div className="text-sm text-gray-400 mb-1">Ideal for:</div>
                <div className="text-white">{pkg.idealFor}</div>
              </div>

              <Link
                href={pkg.link}
                className={`block text-center ${
                  pkg.highlight
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    : "bg-blue-600 hover:bg-blue-700"
                } text-white px-6 py-3 rounded-lg font-semibold transition-colors`}
              >
                {pkg.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* How Pro Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glassmorphism border border-gray-800 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            How Pro Works
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {proWorkflow.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mb-4">
                  {item.step}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm">
                  {item.description}
                </p>
                {index < proWorkflow.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-8 top-4 text-purple-500 w-6 h-6" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
