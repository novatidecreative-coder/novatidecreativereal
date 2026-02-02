import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-16">
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-400">
              Ready to transform your business? Let&apos;s talk.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              {/* Info Card */}
              <div className="glassmorphism border border-gray-800 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Phone</h3>
                      <a
                        href="tel:+19178095712"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        +1 917-809-5712
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:team@novatidecreative.com"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        team@novatidecreative.com
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Location</h3>
                      <p className="text-gray-400">Manhasset, NY</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
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
              <form
                action="https://formsubmit.co/novatidecreative@gmail.com"
                method="POST"
                className="space-y-6"
              >
                {/* Name */}
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full p-3 rounded-lg bg-black/40 border border-gray-700 text-white"
                    placeholder="Your Name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full p-3 rounded-lg bg-black/40 border border-gray-700 text-white"
                    placeholder="Your Email"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-gray-300 mb-2">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    className="w-full p-3 rounded-lg bg-black/40 border border-gray-700 text-white"
                    placeholder="Phone Number"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    className="w-full p-3 rounded-lg bg-black/40 border border-gray-700 text-white h-32"
                    placeholder="Tell us how we can help"
                  ></textarea>
                </div>

                {/* Hidden Fields */}
                <input
                  type="hidden"
                  name="_next"
                  value="https://novatidecreative.vercel.app/thank-you"
                />

                <input
                  type="hidden"
                  name="_subject"
                  value="New Lead from Novatide Creative"
                />

                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
