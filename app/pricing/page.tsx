"use client";

import Link from "next/link";
import { Phone, Star, Rocket, Shield, CheckCircle, X, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

const pricingData = [
  {
    name: "AI Receptionist Standard",
    price: "$100",
    period: "month",
    setup: "$50 setup",
    icon: Phone,
    features: [
      "24/7 call answering",
      "Basic lead information collection",
      "Appointment scheduling",
      "Call transcripts & summaries",
      "Email notifications",
      "Calendar integration"
    ],
    cta: "Get Started",
    link: "/book-demo",
    popular: false,
    color: "blue"
  },
  {
    name: "AI Receptionist Pro",
    price: "$295",
    period: "month",
    setup: "$75 setup",
    icon: Star,
    features: [
      "Everything in Standard",
      "Advanced multi-step qualification",
      "Text message follow-up automation",
      "Photo & document collection",
      "Smart routing & prioritization",
      "CRM integration with detailed notes",
      "SMS appointment reminders"
    ],
    cta: "Book Demo",
    link: "/book-demo",
    popular: true,
    color: "purple"
  },
  {
    name: "Website Starter",
    price: "$495",
    period: "one-time",
    setup: "No monthly fee",
    icon: Rocket,
    features: [
      "Custom responsive design (5 pages)",
      "Mobile-optimized",
      "SEO foundation",
      "Contact forms",
      "Google Analytics",
      "30-day support after launch"
    ],
    cta: "Start Your Site",
    link: "/book-demo",
    popular: false,
    color: "green"
  },
  {
    name: "Website Managed",
    price: "$199",
    period: "month",
    setup: "$150 setup",
    icon: Shield,
    features: [
      "Everything in Starter",
      "Premium hosting included",
      "SSL & security",
      "Daily backups",
      "Unlimited edits & updates",
      "99.9% uptime guarantee",
      "Ongoing SEO optimization"
    ],
    cta: "Get Managed Site",
    link: "/book-demo",
    popular: true,
    color: "green"
  }
];

const comparisonFeatures = [
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

const faqs = [
  {
    q: "Can I switch plans later?",
    a: "Yes! You can upgrade or downgrade your plan at any time. We'll prorate the charges accordingly."
  },
  {
    q: "Is there a contract?",
    a: "No long-term contracts required. All monthly plans are month-to-month with a 30-day cancellation notice."
  },
  {
    q: "What's included in the setup fee?",
    a: "Setup includes customization, training, integration with your tools, and testing to ensure everything works perfectly."
  },
  {
    q: "Do you offer refunds?",
    a: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied, we'll refund your first month (excluding setup fees)."
  },
  {
    q: "Can I bundle services for a discount?",
    a: "Absolutely! Combine AI Receptionist + Website for 10% off. Contact us for a custom quote."
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards, ACH transfers, and can invoice for annual plans."
  }
];

export default function PricingPage() {
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
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Simple, Transparent Pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-12"
          >
            Choose the plan that fits your business. No hidden fees, no surprises.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {pricingData.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative glassmorphism border ${
                  plan.popular ? `border-${plan.color}-500 shadow-xl shadow-${plan.color}-500/20` : "border-gray-800"
                } rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300`}
              >
                {plan.popular && (
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 bg-${plan.color}-600 text-white px-4 py-1 rounded-full text-xs font-semibold`}>
                    Popular
                  </div>
                )}

                <div className={`w-12 h-12 bg-${plan.color}-600 rounded-lg flex items-center justify-center mb-4`}>
                  <plan.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">/{plan.period}</span>
                </div>
                <div className="text-sm text-gray-500 mb-6">{plan.setup}</div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.link}
                  className={`block text-center ${
                    plan.popular
                      ? `bg-${plan.color}-600 hover:bg-${plan.color}-700`
                      : "bg-gray-800 hover:bg-gray-700"
                  } text-white px-6 py-3 rounded-lg font-semibold transition-colors`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-8 text-center"
          >
            <div className="flex items-center space-x-2 text-gray-400">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>30-day money-back guarantee</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>No long-term contracts</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Cancel anytime</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bundle Section */}
      <section className="py-12 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glassmorphism border border-yellow-600/50 rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Save 10% with a Bundle
            </h3>
            <p className="text-gray-300 mb-6">
              Combine AI Receptionist + Website Design for a complete business growth solution
            </p>
            <Link
              href="/book-demo"
              className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Request Custom Quote
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 bg-black overflow-x-auto">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Detailed Feature Comparison
            </h2>
            <p className="text-gray-400">
              See exactly what's included in each package
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
                    <th className="p-4 text-center text-white font-semibold">AI Standard</th>
                    <th className="p-4 text-center text-white font-semibold">AI Pro</th>
                    <th className="p-4 text-center text-white font-semibold">Web Starter</th>
                    <th className="p-4 text-center text-white font-semibold">Web Managed</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, index) => (
                    <tr
                      key={feature.name}
                      className={`${
                        index !== comparisonFeatures.length - 1 ? "border-b border-gray-800" : ""
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

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400">
              Have questions? We have answers.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glassmorphism border border-gray-800 rounded-xl p-6"
              >
                <div className="flex items-start space-x-3">
                  <HelpCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{faq.q}</h3>
                    <p className="text-gray-400">{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Sure Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Not Sure Which Package Is Right?
            </h2>
            <p className="text-gray-400 mb-8">
              Book a free consultation and we'll help you choose the best solution for your business
            </p>
            <Link
              href="/book-demo"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Schedule Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
