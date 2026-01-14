"use client";

import Link from "next/link";
import { Rocket, Shield, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const packages = [
  {
    name: "Starter",
    price: "$495",
    priceType: "one-time",
    setup: null,
    icon: Rocket,
    description: "Complete custom website, delivered and ready to launch on your own hosting",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
    features: [
      "Custom responsive design (up to 5 pages)",
      "Mobile-optimized",
      "SEO foundation",
      "Contact forms",
      "Google Analytics setup",
      "Website files delivered to you",
      "30-day support after launch"
    ],
    youHandle: "Hosting and domain",
    cta: "Get Your Website",
    link: "/book-demo",
    highlight: false
  },
  {
    name: "Managed",
    price: "$199",
    priceType: "per month",
    setup: "$150",
    icon: Shield,
    description: "Everything in Starter plus hosting, security, and ongoing support",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    features: [
      "Everything in Starter, plus:",
      "Premium hosting included",
      "SSL certificate & security",
      "Daily backups",
      "Unlimited edits & updates",
      "99.9% uptime guarantee",
      "Monthly performance reports",
      "Ongoing SEO optimization",
      "Priority support"
    ],
    weHandle: "Everything - you focus on your business",
    cta: "Start Your Website",
    link: "/book-demo",
    highlight: true
  }
];

const portfolioImages = [
  {
    src: "/images/portfolio/project1.jpg",
    alt: "Modern business website design"
  },
  {
    src: "/images/portfolio/project2.jpg",
    alt: "Responsive web design showcase"
  },
  {
    src: "/images/portfolio/project3.jpg",
    alt: "Professional website portfolio"
  }
];

export default function WebsiteDesignSection() {
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
            Professional Websites That Work As Hard As You Do
          </h2>
        </motion.div>

        {/* Portfolio Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16"
        >
          {portfolioImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:scale-105"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative glassmorphism border ${
                pkg.highlight ? "border-green-500 shadow-xl shadow-green-500/20" : "border-gray-800"
              } rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300`}
            >
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-1 rounded-full text-sm font-semibold z-10">
                  Best Value
                </div>
              )}

              {/* Package Image Header */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={`${pkg.name} package preview`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div className={`w-14 h-14 ${pkg.highlight ? "bg-gradient-to-br from-green-600 to-teal-600" : "bg-gray-800"} rounded-xl flex items-center justify-center`}>
                    <pkg.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-white">{pkg.price}</div>
                    <div className="text-sm text-gray-300">{pkg.priceType}</div>
                    {pkg.setup && <div className="text-sm text-gray-400">{pkg.setup} setup</div>}
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Website {pkg.name}
                </h3>

                <p className="text-gray-400 mb-6">
                  {pkg.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">What's Included:</h4>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <CheckCircle className={`w-5 h-5 ${pkg.highlight ? "text-green-500" : "text-blue-500"} flex-shrink-0 mt-0.5`} />
                        <span className={feature.includes("Everything") ? "text-gray-300 font-semibold" : "text-gray-300"}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-900 rounded-lg p-4 mb-6">
                  <div className="text-sm text-gray-400 mb-1">
                    {pkg.youHandle ? "You handle:" : "We handle:"}
                  </div>
                  <div className="text-white">
                    {pkg.youHandle || pkg.weHandle}
                  </div>
                </div>

                <Link
                  href={pkg.link}
                  className={`block text-center ${
                    pkg.highlight
                      ? "bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700"
                      : "bg-blue-600 hover:bg-blue-700"
                  } text-white px-6 py-3 rounded-lg font-semibold transition-colors`}
                >
                  {pkg.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bundle Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="glassmorphism border border-yellow-600/50 rounded-xl p-6 inline-block">
            <p className="text-yellow-400 font-semibold">
              <span className="text-xl">💡</span> Bundle & Save: Combine AI Receptionist + Website for 10% off. Ask us about custom packages.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}