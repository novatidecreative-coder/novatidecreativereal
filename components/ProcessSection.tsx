"use client";

import { Phone, Palette, Settings, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const aiProcess = [
  {
    icon: Phone,
    title: "Book a demo call",
    description: "Schedule a quick consultation to discuss your needs"
  },
  {
    icon: Settings,
    title: "We customize your AI",
    description: "Tailor the AI to match your business and brand voice"
  },
  {
    icon: Palette,
    title: "Test and refine",
    description: "We perfect the experience together"
  },
  {
    icon: Rocket,
    title: "Go live in 48-72 hours",
    description: "Start capturing every lead immediately"
  }
];

const websiteProcess = [
  {
    icon: Phone,
    title: "Discovery call",
    description: "Understand your goals, audience, and requirements"
  },
  {
    icon: Palette,
    title: "Design mockups",
    description: "2 rounds of revisions included"
  },
  {
    icon: Settings,
    title: "Development & optimization",
    description: "Build, test, and optimize for speed and SEO"
  },
  {
    icon: Rocket,
    title: "Launch and training",
    description: "Go live with full training and support"
  }
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How We Get You Started
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* AI Receptionist Process */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glassmorphism border border-gray-800 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              For AI Receptionist
            </h3>
            <div className="space-y-6">
              {aiProcess.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {step.title}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Website Design Process */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glassmorphism border border-gray-800 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              For Website Design
            </h3>
            <div className="space-y-6">
              {websiteProcess.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {step.title}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
