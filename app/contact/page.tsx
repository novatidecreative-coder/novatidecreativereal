import DemoOptInForm from "@/components/DemoOptInForm";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-16">
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-400">
              Ready to transform your business? Let's talk.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="glassmorphism border border-gray-800 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Phone</h3>
                      <a href="tel:917-480-6014" className="text-gray-400 hover:text-white transition-colors">
                        917-480-6014
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Email</h3>
                      <a href="mailto:novatidecreative@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                        novatidecreative@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Location</h3>
                      <p className="text-gray-400">
                        Manhasset, NY
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glassmorphism border border-gray-800 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2 text-gray-400">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glassmorphism border border-gray-800 rounded-2xl p-8">
              <DemoOptInForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
