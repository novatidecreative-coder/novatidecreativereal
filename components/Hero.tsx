"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const heroImages = [
    { 
      src: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80", 
      alt: "Professional businesswoman on phone call" 
    },
    { 
      src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80", 
      alt: "Business team collaboration meeting" 
    },
    { 
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80", 
      alt: "Modern office workspace with laptop" 
    },
    { 
      src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80", 
      alt: "Customer service representative with headset" 
    }
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-16 pb-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
        >
          Grow Your Business with
          <br />
          <span className="text-blue-500">AI Automation & Web Design</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto"
        >
          AI-powered call answering, lead qualification, and stunning websites that convert.
          Everything you need to capture more leads and scale your business.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/ai-receptionist"
            className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2"
          >
            <span>View AI Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/website-design"
            className="group border-2 border-blue-600 text-white hover:bg-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2"
          >
            <span>Website Design</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Image Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto"
        >
          {heroImages.map((image, i) => (
            <div
              key={i}
              className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 overflow-hidden hover:scale-105 transition-transform duration-300 hover:border-blue-500"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={400}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
