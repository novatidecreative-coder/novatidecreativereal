"use client";

import { Wrench, Building, Heart, Scale, Sparkles, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const industries = [
  {
    icon: Wrench,
    title: "Home Services",
    subtitle: "Plumbers, HVAC, Electricians",
    description: "Collect job photos before you even arrive"
  },
  {
    icon: Building,
    title: "Contractors & Construction",
    subtitle: "General Contractors",
    description: "Qualify projects and get site photos automatically"
  },
  {
    icon: Heart,
    title: "Medical & Dental",
    subtitle: "Practices & Clinics",
    description: "Professional intake and appointment scheduling"
  },
  {
    icon: Scale,
    title: "Legal Services",
    subtitle: "Law Firms",
    description: "Screen potential clients 24/7"
  },
  {
    icon: Sparkles,
    title: "Salons & Wellness",
    subtitle: "Beauty & Health",
    description: "Book appointments while you focus on clients"
  },
  {
    icon: Briefcase,
    title: "Small Business",
    subtitle: "Any Service Business",
    description: "Professional presence without the overhead"
  }
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Who We Serve
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Trusted by service businesses across industries
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glassmorphism border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition-all duration-300 group"
            >
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <industry.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                {industry.title}
              </h3>
              <p className="text-sm text-gray-400 mb-3">
                {industry.subtitle}
              </p>
              <p className="text-gray-300">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
