"use client";

import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Book a free consultation to see which solution is right for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/book-demo"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2 shadow-xl shadow-blue-500/20"
            >
              <Calendar className="w-6 h-6" />
              <span>Request a Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/pricing"
              className="group border-2 border-blue-600 text-white hover:bg-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <span>View Pricing</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-400">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-white mb-1">48hrs</div>
              <div className="text-sm">Setup Time</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm">Support</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-white mb-1">100%</div>
              <div className="text-sm">Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
