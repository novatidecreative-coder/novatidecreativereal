"use client";

import Link from "next/link";
import { Phone, Star, CheckCircle, ArrowRight, Zap, Shield, Clock, BarChart } from "lucide-react";
import { motion } from "framer-motion";

const packages = [
  {
    name: "Standard",
    price: "$100",
    setup: "$50",
    icon: Phone,
    description: "Perfect for businesses that need reliable 24/7 call coverage",
    features: [
      "24/7 call answering",
      "Basic lead information collection",
      "Appointment scheduling",
      "Call transcripts & summaries",
      "Email notifications",
      "Calendar integration"
    ],
    idealFor: "Salons, retail shops, small offices"
  },
  {
    name: "Pro",
    price: "$295",
    setup: "$75",
    icon: Star,
    description: "Advanced qualification system that screens leads and collects everything you need before booking",
    features: [
      "Everything in Standard, plus:",
      "Advanced multi-step qualification process",
      "Text message follow-up automation",
      "Photo & document collection for estimates",
      "Smart routing based on job type/urgency",
      "Custom qualification questions",
      "Lead scoring & prioritization",
      "CRM integration with detailed notes",
      "SMS appointment reminders"
    ],
    idealFor: "Contractors, home services, medical practices, legal firms",
    highlight: true
  }
];

const benefits = [
  {
    icon: Clock,
    title: "Never Miss a Lead",
    description: "Answer every call, 24/7, even during busy times or after hours"
  },
  {
    icon: Shield,
    title: "Qualify Before You Drive",
    description: "Get all the details upfront so you know exactly what you're walking into"
  },
  {
    icon: Zap,
    title: "Instant Response",
    description: "Customers get immediate answers, no more waiting or leaving voicemails"
  },
  {
    icon: BarChart,
    title: "Increase Conversion",
    description: "Qualified leads are 3x more likely to convert into paying customers"
  }
];

const useCases = [
  {
    industry: "Home Services",
    scenario: "Customer calls about water heater repair",
    aiAction: "AI collects issue details, requests photos via text, checks urgency, books appointment with full context"
  },
  {
    industry: "Medical Practice",
    scenario: "Patient calls for appointment",
    aiAction: "AI verifies insurance, collects symptoms, schedules with appropriate provider, sends confirmation SMS"
  },
  {
    industry: "Legal Firm",
    scenario: "Potential client inquiry",
    aiAction: "AI screens case type, conflict check, collects initial details, schedules consultation"
  }
];

const integrations = [
  "Google Calendar",
  "Outlook Calendar",
  "Salesforce",
  "HubSpot",
  "Zapier",
  "Custom CRM"
];

export default function AIReceptionistPage() {
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
            Your AI Receptionist That
            <br />
            <span className="text-blue-500">Never Sleeps</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Transform missed calls into qualified leads with AI that answers, qualifies, and books appointments 24/7
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/book-demo"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <span>Book Your Demo</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Why Businesses Love Our AI Receptionist
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
                <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
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
            Choose Your Plan
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
                  pkg.highlight ? "border-purple-500 shadow-xl shadow-purple-500/20" : "border-gray-800"
                } rounded-2xl p-8`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 ${pkg.highlight ? "bg-gradient-to-br from-purple-600 to-pink-600" : "bg-gray-800"} rounded-xl flex items-center justify-center`}>
                    <pkg.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-white">{pkg.price}</div>
                    <div className="text-sm text-gray-400">per month</div>
                    <div className="text-sm text-gray-500">{pkg.setup} setup</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  AI Receptionist {pkg.name}
                </h3>
                <p className="text-gray-400 mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <CheckCircle className={`w-5 h-5 ${pkg.highlight ? "text-purple-500" : "text-green-500"} flex-shrink-0 mt-0.5`} />
                      <span className={feature.includes("Everything") ? "text-gray-300 font-semibold" : "text-gray-300"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="bg-gray-900 rounded-lg p-4 mb-6">
                  <div className="text-sm text-gray-400 mb-1">Ideal for:</div>
                  <div className="text-white">{pkg.idealFor}</div>
                </div>
                <Link
                  href="/book-demo"
                  className={`block text-center ${
                    pkg.highlight
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
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

      {/* Use Cases */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Industry-Specific Use Cases
          </h2>
          <div className="space-y-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glassmorphism border border-gray-800 rounded-xl p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
                  <div className="md:w-1/4 mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-blue-400">{useCase.industry}</h3>
                    <p className="text-gray-400 text-sm">{useCase.scenario}</p>
                  </div>
                  <div className="md:w-3/4">
                    <div className="bg-gray-900 rounded-lg p-4">
                      <p className="text-gray-300">{useCase.aiAction}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Integrates With Your Tools
          </h2>
          <p className="text-gray-400 mb-12">
            Seamlessly connects with the platforms you already use
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {integrations.map((integration) => (
              <div
                key={integration}
                className="glassmorphism border border-gray-800 rounded-lg px-6 py-3 text-gray-300"
              >
                {integration}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How quickly can I get started?",
                a: "Most clients are live within 48-72 hours after the initial setup call."
              },
              {
                q: "Can the AI handle my specific industry?",
                a: "Yes! We customize the AI to understand your industry terminology and typical customer questions."
              },
              {
                q: "What happens if the AI can't answer a question?",
                a: "The AI will collect the caller's information and notify you immediately for a callback."
              },
              {
                q: "Can I cancel anytime?",
                a: "Yes, there are no long-term contracts. Cancel anytime with 30 days notice."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glassmorphism border border-gray-800 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold text-white mb-3">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Never Miss Another Lead?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Book a demo and see how our AI can transform your business
          </p>
          <Link
            href="/book-demo"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            <span>Schedule Your Demo</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
