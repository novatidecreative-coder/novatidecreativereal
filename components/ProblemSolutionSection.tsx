"use client";

import { PhoneOff, Users, Globe, Clock } from "lucide-react";
import { motion } from "framer-motion";

const problems = [
  {
    icon: PhoneOff,
    problem: "Missed Calls",
    solution: "AI Receptionist answers 24/7",
    gradient: "from-red-600 to-orange-600"
  },
  {
    icon: Users,
    problem: "Unqualified Leads",
    solution: "Pro package screens and qualifies",
    gradient: "from-blue-600 to-purple-600"
  },
  {
    icon: Globe,
    problem: "No Online Presence",
    solution: "Website design gets you found",
    gradient: "from-green-600 to-teal-600"
  },
  {
    icon: Clock,
    problem: "Time Wasted on Admin",
    solution: "Automation handles it all",
    gradient: "from-purple-600 to-pink-600"
  }
];

export default function ProblemSolutionSection() {
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
            The Problems We Solve
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item, index) => (
            <motion.div
              key={item.problem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glassmorphism border border-gray-800 rounded-xl p-6 hover:scale-105 transition-all duration-300 group"
            >
              <div className={`bg-gradient-to-br ${item.gradient} w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-red-400 mb-3">
                {item.problem}
              </h3>
              <div className="h-px bg-gradient-to-r from-gray-800 to-transparent mb-3" />
              <p className="text-green-400 font-semibold">
                {item.solution}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
