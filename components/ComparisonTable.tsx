"use client";

import { CheckCircle, X } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { name: "24/7 Call Answering", standard: true, pro: true, starter: false, managed: false },
  { name: "Lead Qualification", standard: "Basic", pro: "Advanced", starter: false, managed: false },
  { name: "Appointment Scheduling", standard: true, pro: true, starter: false, managed: false },
  { name: "Text Message Automation", standard: false, pro: true, starter: false, managed: false },
  { name: "Photo Collection", standard: false, pro: true, starter: false, managed: false },
  { name: "CRM Integration", standard: "Basic", pro: "Advanced", starter: false, managed: false },
  { name: "Custom Website Design", standard: false, pro: false, starter: true, managed: true },
  { name: "SEO Optimization", standard: false, pro: false, starter: "Basic", managed: "Ongoing" },
  { name: "Hosting Included", standard: false, pro: false, starter: false, managed: true },
  { name: "Unlimited Updates", standard: false, pro: false, starter: false, managed: true },
  { name: "Priority Support", standard: false, pro: true, starter: false, managed: true },
  { name: "Monthly Reporting", standard: false, pro: true, starter: false, managed: true }
];

const packages = [
  { name: "AI Standard", key: "standard" },
  { name: "AI Pro", key: "pro" },
  { name: "Web Starter", key: "starter" },
  { name: "Web Managed", key: "managed" }
];

export default function ComparisonTable() {
  const renderCell = (value: boolean | string) => {
    if (value === true) {
      return <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />;
    } else if (value === false) {
      return <X className="w-5 h-5 text-gray-600 mx-auto" />;
    } else {
      return <span className="text-sm text-gray-300">{value}</span>;
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black overflow-x-auto">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Compare All Packages
          </h2>
          <p className="text-xl text-gray-400">
            See what's included in each tier
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glassmorphism border border-gray-800 rounded-2xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left p-4 text-white font-semibold">
                    Features
                  </th>
                  {packages.map((pkg) => (
                    <th key={pkg.key} className="p-4 text-center">
                      <div className="text-white font-semibold">{pkg.name}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr
                    key={feature.name}
                    className={`${
                      index !== features.length - 1 ? "border-b border-gray-800" : ""
                    } hover:bg-gray-900/50 transition-colors`}
                  >
                    <td className="p-4 text-gray-300">{feature.name}</td>
                    <td className="p-4 text-center">
                      {renderCell(feature.standard)}
                    </td>
                    <td className="p-4 text-center">
                      {renderCell(feature.pro)}
                    </td>
                    <td className="p-4 text-center">
                      {renderCell(feature.starter)}
                    </td>
                    <td className="p-4 text-center">
                      {renderCell(feature.managed)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
