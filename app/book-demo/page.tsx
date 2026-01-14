import DemoOptInForm from "@/components/DemoOptInForm";
import Link from "next/link";
import { Facebook } from "lucide-react";

export default function BookDemoPage() {
  return (
    <main className="min-h-screen pt-16 flex flex-col">
      {/* Main Form Section */}
      <section className="flex-1 flex items-center justify-center py-20 px-4">
        <DemoOptInForm />
      </section>

      {/* Minimal Footer */}
      <footer className="border-t border-gray-800 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-white">Novatide Creative</h3>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-8 mb-6 text-center text-sm">
            <div>
              <h4 className="text-gray-400 font-semibold mb-2">Company</h4>
              <ul className="space-y-1">
                <li>
                  <Link href="/#process" className="text-gray-500 hover:text-white transition-colors">
                    How it works
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-gray-500 hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-500 hover:text-white transition-colors">
                    Homepage
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-gray-400 font-semibold mb-2">About</h4>
              <ul className="space-y-1">
                <li>
                  <Link href="/terms-and-conditions" className="text-gray-500 hover:text-white transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-gray-500 hover:text-white transition-colors">
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link href="/instructions-for-opt-out" className="text-gray-500 hover:text-white transition-colors">
                    Instructions for Opt out
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social */}
          <div className="flex justify-center mb-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-xs text-gray-600">
            Copyright © 2025 Novatide Creative
          </div>
        </div>
      </footer>
    </main>
  );
}
