"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "The Pro package changed everything. We get photos of the job before we even drive out there. Our conversion rate tripled.",
    author: "Marcus Chen",
    role: "HVAC Company Owner"
  },
  {
    quote: "Best $199 a month I spend. My website brings in leads daily and I never worry about downtime or updates.",
    author: "Sarah Mitchell",
    role: "Dental Practice"
  },
  {
    quote: "From missed calls to qualified leads in 48 hours. The AI asks better questions than our old receptionist.",
    author: "James Rodriguez",
    role: "General Contractor"
  }
];

export default function TestimonialsSection() {
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
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glassmorphism border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-blue-500 mb-4" />
              <p className="text-gray-300 text-lg mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-gray-800 pt-4">
                <p className="text-white font-semibold">
                  {testimonial.author}
                </p>
                <p className="text-gray-400 text-sm">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
