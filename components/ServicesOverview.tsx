"use client";

import Link from "next/link";
import { Phone, Monitor, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Phone,
    title: "AI Receptionist & Lead Qualification",
    description: "Never miss a call again. Our AI answers 24/7, qualifies leads, collects estimates via text and photos, and books appointments automatically.",
    features: [
      "24/7 call answering",
      "Smart lead qualification",
      "Text & photo estimate collection",
      "Automatic appointment booking",
      "CRM integration"
    ],
    link: "/ai-receptionist",
    gradient: "from-blue-600 to-purple-600"
  },
  {
    icon: Monitor,
    title: "Modern Website Design",
    description: "Clean, fast, conversion-focused websites built for service businesses. We handle everything from design to hosting.",
    features: [
      "Custom responsive design",
      "SEO optimized",
      "Fast loading speeds",
      "Mobile-first approach",
      "Optional hosting & maintenance"
    ],
    link: "/website-design",
    gradient: "from-green-600 to-teal-600"
  }
];

export default function ServicesOverview() {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What We Do
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We help service businesses grow through two core offerings
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glassmorphism border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400 mb-6">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={service.link}
                className="inline-block bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
