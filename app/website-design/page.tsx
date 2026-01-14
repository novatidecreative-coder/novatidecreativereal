"use client";

import Link from "next/link";
import { Rocket, Shield, CheckCircle, ArrowRight, Zap, Globe, Search, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

const packages = [
  {
    name: "Starter",
    price: "$495",
    priceType: "one-time",
    setup: null,
    icon: Rocket,
    description: "Complete custom website, delivered and ready to launch on your own hosting",
    features: [
      "Custom responsive design (up to 5 pages)",
      "Mobile-optimized",
      "SEO foundation",
      "Contact forms",
      "Google Analytics setup",
      "Website files delivered to you",
      "30-day support after launch"
    ],
    youHandle: "Hosting and domain"
  },
  {
    name: "Managed",
    price: "$199",
    priceType: "per month",
    setup: "$150",
    icon: Shield,
    description: "Everything in Starter plus hosting, security, and ongoing support",
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
    highlight: true
  }
];

const benefits = [
  {
    icon: Globe,
    title: "Modern Design",
    description: "Beautiful, professional websites that reflect your brand"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for speed to keep visitors engaged and improve SEO"
  },
  {
    icon: Smartphone,
    title: "Mobile-First",
    description: "Perfect experience on any device, from phone to desktop"
  },
  {
    icon: Search,
    title: "SEO Optimized",
    description: "Built from the ground up to rank well in search engines"
  }
];

const designProcess = [
  {
    step: "1",
    title: "Discovery Call",
    description: "We learn about your business, goals, target audience, and brand identity"
  },
  {
    step: "2",
    title: "Design Mockups",
    description: "You'll receive professional designs with 2 rounds of revisions included"
  },
  {
    step: "3",
    title: "Development",
    description: "We build your site using modern tech, optimized for speed and SEO"
  },
  {
    step: "4",
    title: "Review & Refine",
    description: "You test everything, we make final adjustments"
  },
  {
    step: "5",
    title: "Launch",
    description: "Your site goes live with full training and documentation"
  }
];

const techStack = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "TypeScript",
  "Vercel/Netlify",
  "Responsive Design"
];

const seoFeatures = [
  "Fast page load times (90+ PageSpeed score)",
  "Mobile-responsive design",
  "Semantic HTML structure",
  "Optimized images and assets",
  "Meta tags and descriptions",
  "XML sitemap generation",
  "Schema markup",
  "Clean, crawlable URLs"
];

export default function WebsiteDesignPage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Websites That Work
            <br />
            <span className="text-green-500">As Hard As You Do</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Fast, beautiful, conversion-focused websites built for service businesses
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/book-demo"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <span>Start Your Website</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Why Our Websites Stand Out
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glassmorphism border border-gray-800 rounded-xl p-6"
              >
                <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Choose Your Package
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative glassmorphism border ${
                  pkg.highlight ? "border-green-500 shadow-xl shadow-green-500/20" : "border-gray-800"
                } rounded-2xl p-8`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-1 rounded-full text-sm font-semibold">
                    Best Value
                  </div>
                )}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 ${pkg.highlight ? "bg-gradient-to-br from-green-600 to-teal-600" : "bg-gray-800"} rounded-xl flex items-center justify-center`}>
                    <pkg.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-white">{pkg.price}</div>
                    <div className="text-sm text-gray-400">{pkg.priceType}</div>
                    {pkg.setup && <div className="text-sm text-gray-500">{pkg.setup} setup</div>}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Website {pkg.name}
                </h3>
                <p className="text-gray-400 mb-6">{pkg.description}</p>
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
                  href="/book-demo"
                  className={`block text-center ${
                    pkg.highlight
                      ? "bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700"
                      : "bg-blue-600 hover:bg-blue-700"
                  } text-white px-6 py-3 rounded-lg font-semibold transition-colors`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Our Design Process
          </h2>
          <div className="grid md:grid-cols-5 gap-6">
            {designProcess.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glassmorphism border border-gray-800 rounded-xl p-6 text-center"
              >
                <div className="bg-gradient-to-br from-green-600 to-teal-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mb-4 mx-auto">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Built With Modern Technology
          </h2>
          <p className="text-gray-400 mb-12">
            We use cutting-edge tools to ensure your website is fast, secure, and scalable
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech) => (
              <div
                key={tech}
                className="glassmorphism border border-gray-800 rounded-lg px-6 py-3 text-gray-300 font-semibold"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Benefits */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6 text-center">
            Built for Search Engines
          </h2>
          <p className="text-gray-400 mb-12 text-center">
            Every website we build is optimized to rank well in Google and drive organic traffic
          </p>
          <div className="glassmorphism border border-gray-800 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-4">
              {seoFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Recent Work
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: 1, alt: "Modern business website design" },
              { num: 2, alt: "Responsive web design showcase" },
              { num: 3, alt: "Professional website portfolio" }
            ].map((project, i) => (
              <motion.div
                key={project.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glassmorphism border border-gray-800 rounded-xl overflow-hidden group hover:border-green-500 transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                  <img
                    src={`/images/portfolio/project${project.num}.jpg`}
                    alt={project.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2">Project {project.num}</h3>
                  <p className="text-gray-400 text-sm">Modern website design for service business</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Launch Your Website?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Let's discuss your project and create something amazing together
          </p>
          <Link
            href="/book-demo"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            <span>Get Started Today</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
