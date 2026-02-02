import Link from "next/link";
import { CheckCircle, Mail, Phone, MessageSquare } from "lucide-react";

export default function InstructionsForOptOutPage() {
  return (
    <main className="min-h-screen pt-16 pb-20 px-4">
      <article className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Your Privacy Matters
          </h1>
          <p className="text-xl text-gray-400">
            At Novatide Creative, we respect your right to control how your personal information is used. This page provides clear instructions on how to opt out of various data collection and communication practices, including our SMS messaging program.
          </p>
        </div>

        <div className="space-y-12">
          {/* Email Marketing */}
          <section className="glassmorphism border border-gray-800 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Mail className="w-8 h-8 text-blue-500" />
              <h2 className="text-3xl font-bold text-white">1. Email Marketing Communications</h2>
            </div>
            <p className="text-gray-300 mb-6">
              If you no longer wish to receive marketing emails, newsletters, or promotional content from Novatide Creative, you can opt out using any of the following methods:
            </p>

            <div className="space-y-4">
              <div className="bg-gray-900 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-green-400 mb-3">Option 1: Unsubscribe Link</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Open any marketing email from Novatide Creative</li>
                  <li>• Scroll to the bottom of the email</li>
                  <li>• Click the "Unsubscribe" or "Opt Out" link</li>
                  <li>• Follow the prompts to confirm your unsubscription</li>
                </ul>
              </div>

              <div className="bg-gray-900 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-green-400 mb-3">Option 2: Email Request</h3>
                <p className="text-gray-300">
                  Send an email to{" "}
                  <a href="mailto:novatidecreative@gmail.com" className="text-blue-400 hover:text-blue-300 underline">
                    novatidecreative@gmail.com
                  </a>{" "}
                  with the subject line "Unsubscribe from Marketing Emails" and include the email address you wish to remove from our list.
                </p>
              </div>

              <div className="bg-gray-900 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-green-400 mb-3">Option 3: Phone Request</h3>
                <p className="text-gray-300">
                  Call us at{" "}
                  <a href="tel:+19178095712" className="text-blue-400 hover:text-blue-300 underline">
                    +1 917-809-5712
                  </a>{" "}
                  and request to be removed from our marketing email list.
                </p>
              </div>
            </div>

            <div className="mt-6 bg-yellow-900/20 border border-yellow-600/50 rounded-lg p-4">
              <p className="text-yellow-400 text-sm">
                <strong>Important:</strong> Even if you opt out of marketing emails, you will still receive transactional emails related to active projects, invoices, and important account information.
              </p>
            </div>
          </section>

          {/* SMS/Text Messages */}
          <section className="glassmorphism border border-gray-800 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <MessageSquare className="w-8 h-8 text-purple-500" />
              <h2 className="text-3xl font-bold text-white">2. SMS/Text Message Communications</h2>
            </div>
            <p className="text-gray-300 mb-6">
              You can opt out of receiving SMS/text messages from Novatide Creative at any time. Here's how:
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">Quickest Method: Text STOP</h3>
                <p className="text-gray-300 mb-4">
                  Simply reply <strong className="text-white">STOP</strong> to any text message you receive from us.
                </p>
                <div className="bg-black/50 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-2">Example:</p>
                  <p className="text-white font-mono">Reply: STOP</p>
                </div>
                <p className="text-gray-400 text-sm mt-4">
                  You will receive a confirmation message, and no further messages will be sent.
                </p>
              </div>

              <div className="bg-gray-900 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-green-400 mb-3">Method 2: Text Alternative Keywords</h3>
                <p className="text-gray-300 mb-3">
                  You can also reply with any of these keywords to opt out:
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-gray-800 text-white px-4 py-2 rounded-lg font-mono">STOP</span>
                  <span className="bg-gray-800 text-white px-4 py-2 rounded-lg font-mono">STOPALL</span>
                  <span className="bg-gray-800 text-white px-4 py-2 rounded-lg font-mono">UNSUBSCRIBE</span>
                  <span className="bg-gray-800 text-white px-4 py-2 rounded-lg font-mono">CANCEL</span>
                  <span className="bg-gray-800 text-white px-4 py-2 rounded-lg font-mono">END</span>
                  <span className="bg-gray-800 text-white px-4 py-2 rounded-lg font-mono">QUIT</span>
                </div>
              </div>

              <div className="bg-gray-900 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-green-400 mb-3">Method 3: Contact Us Directly</h3>
                <p className="text-gray-300 mb-3">You can opt out by contacting us:</p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Email:{" "}
                    <a href="mailto:novatidecreative@gmail.com" className="text-blue-400 hover:text-blue-300 underline">
                      novatidecreative@gmail.com
                    </a>
                  </li>
                  <li>• Phone:{" "}
                    <a href="tel:+1 917-809-5712" className="text-blue-400 hover:text-blue-300 underline">
                      (917) 480-6014
                    </a>
                  </li>
                </ul>
                <p className="text-gray-400 text-sm mt-3">
                  Please include your phone number and specify that you want to opt out of SMS messages.
                </p>
              </div>

              <div className="bg-gray-900 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-green-400 mb-3">Need Help?</h3>
                <p className="text-gray-300">
                  If you need assistance with SMS messages, reply <strong className="text-white">HELP</strong> to any message, and we'll provide support information.
                </p>
              </div>
            </div>

            <div className="mt-6 bg-blue-900/20 border border-blue-600/50 rounded-lg p-4">
              <p className="text-blue-400 text-sm">
                <strong>Note:</strong> After opting out, you will no longer receive any SMS marketing or promotional messages. However, you may still receive transactional messages related to active services or appointments until those are completed.
              </p>
            </div>
          </section>

          {/* Phone Calls */}
          <section className="glassmorphism border border-gray-800 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Phone className="w-8 h-8 text-green-500" />
              <h2 className="text-3xl font-bold text-white">3. Phone Call Marketing</h2>
            </div>
            <p className="text-gray-300 mb-6">
              If you do not wish to receive marketing or promotional phone calls from us:
            </p>

            <div className="space-y-4">
              <div className="bg-gray-900 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-green-400 mb-3">During a Call</h3>
                <p className="text-gray-300">
                  Simply inform our representative that you would like to be removed from our calling list. We will immediately add you to our internal Do Not Call list.
                </p>
              </div>

              <div className="bg-gray-900 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-green-400 mb-3">Email or Phone Request</h3>
                <p className="text-gray-300">
                  Contact us at{" "}
                  <a href="mailto:novatidecreative@gmail.com" className="text-blue-400 hover:text-blue-300 underline">
                    novatidecreative@gmail.com
                  </a>{" "}
                  or{" "}
                  <a href="tel:+1 917-809-5712" className="text-blue-400 hover:text-blue-300 underline">
                    (917) 480-6014
                  </a>{" "}
                  and request to be added to our Do Not Call list. Please provide your phone number.
                </p>
              </div>
            </div>
          </section>

          {/* Cookies */}
          <section className="glassmorphism border border-gray-800 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">4. Website Cookies and Tracking</h2>
            <p className="text-gray-300 mb-6">
              You can control and manage cookies through your browser settings. Here's how to disable cookies in popular browsers:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border border-gray-700 rounded-lg overflow-hidden">
                <thead className="bg-gray-900">
                  <tr>
                    <th className="px-4 py-3 text-white font-semibold">Browser</th>
                    <th className="px-4 py-3 text-white font-semibold">Instructions</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-t border-gray-800">
                    <td className="px-4 py-3 font-semibold">Chrome</td>
                    <td className="px-4 py-3">Settings → Privacy and security → Cookies and other site data</td>
                  </tr>
                  <tr className="border-t border-gray-800">
                    <td className="px-4 py-3 font-semibold">Firefox</td>
                    <td className="px-4 py-3">Options → Privacy & Security → Cookies and Site Data</td>
                  </tr>
                  <tr className="border-t border-gray-800">
                    <td className="px-4 py-3 font-semibold">Safari</td>
                    <td className="px-4 py-3">Preferences → Privacy → Manage Website Data</td>
                  </tr>
                  <tr className="border-t border-gray-800">
                    <td className="px-4 py-3 font-semibold">Edge</td>
                    <td className="px-4 py-3">Settings → Cookies and site permissions → Manage cookies</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-yellow-900/20 border border-yellow-600/50 rounded-lg p-4">
              <p className="text-yellow-400 text-sm">
                <strong>Note:</strong> Disabling cookies may affect your ability to use certain features of our website.
              </p>
            </div>
          </section>

          {/* Social Media */}
          <section className="glassmorphism border border-gray-800 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">5. Social Media</h2>
            <p className="text-gray-300 mb-6">
              To stop seeing our content on social media platforms:
            </p>

            <div className="space-y-4">
              <div className="bg-gray-900 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-green-400 mb-3">Unfollow or Unlike</h3>
                <p className="text-gray-300">
                  You can unfollow or unlike our social media pages on platforms like Facebook, Instagram, LinkedIn, or Twitter/X.
                </p>
              </div>

              <div className="bg-gray-900 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-green-400 mb-3">Platform Ad Settings</h3>
                <p className="text-gray-300">
                  Adjust your ad preferences on each social media platform to control what types of ads you see. Visit the platform's settings or privacy section for options.
                </p>
              </div>
            </div>
          </section>

          {/* Data Deletion */}
          <section className="glassmorphism border border-gray-800 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">6. Data Deletion Requests</h2>
            <p className="text-gray-300 mb-6">
              If you want us to delete the personal information we have about you:
            </p>

            <div className="bg-gray-900 rounded-xl p-6">
              <ol className="list-decimal pl-6 space-y-3 text-gray-300">
                <li>Send an email to{" "}
                  <a href="mailto:novatidecreative@gmail.com" className="text-blue-400 hover:text-blue-300 underline">
                    novatidecreative@gmail.com
                  </a>
                </li>
                <li>Subject line: "Data Deletion Request"</li>
                <li>Include your name, email address, phone number, and any other identifying information</li>
                <li>Specify what data you want deleted</li>
              </ol>
              <p className="text-gray-400 text-sm mt-4">
                We will process your request within 30 days, subject to any legal obligations to retain certain information.
              </p>
            </div>
          </section>

          {/* CCPA Rights */}
          <section className="glassmorphism border border-gray-800 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">7. Do Not Sell My Personal Information (CCPA)</h2>
            <p className="text-gray-300 mb-4">
              <strong>We do not sell your personal information.</strong>
            </p>
            <p className="text-gray-300">
              If you are a California resident and our practices change in the future, you will have the right to opt out of the sale of your personal information. We will update this page with instructions if that ever becomes applicable.
            </p>
          </section>

          {/* Third Party Sharing */}
          <section className="glassmorphism border border-gray-800 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">8. Third-Party Sharing Opt-Out</h2>
            <p className="text-gray-300 mb-6">
              If you wish to opt out of having your information shared with our service providers (e.g., email marketing platforms, CRM systems):
            </p>

            <div className="bg-gray-900 rounded-xl p-6">
              <p className="text-gray-300">
                Contact us at{" "}
                <a href="mailto:novatidecreative@gmail.com" className="text-blue-400 hover:text-blue-300 underline">
                  novatidecreative@gmail.com
                </a>{" "}
                with the subject "Opt Out of Third-Party Sharing." Please note that this may limit our ability to provide certain services to you.
              </p>
            </div>
          </section>

          {/* Processing Time */}
          <section className="glassmorphism border border-gray-800 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">9. Processing Time</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-semibold">Email Opt-Out:</p>
                  <p className="text-gray-300">Processed within 48 hours</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-semibold">SMS Opt-Out:</p>
                  <p className="text-gray-300">Immediate upon replying STOP</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-semibold">Data Deletion:</p>
                  <p className="text-gray-300">Processed within 30 days</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-semibold">Do Not Call:</p>
                  <p className="text-gray-300">Processed within 48 hours</p>
                </div>
              </div>
            </div>
          </section>

          {/* Questions */}
          <section className="glassmorphism border border-gray-800 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">10. Questions or Concerns</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about opting out or managing your privacy preferences, please don't hesitate to contact us:
            </p>

            <div className="bg-gray-900 rounded-xl p-6">
              <p className="font-semibold text-white mb-4">Novatide Creative</p>
              <div className="space-y-2 text-gray-300">
                <p>Manhasset, NY</p>
                <p>Email:{" "}
                  <a href="mailto:novatidecreative@gmail.com" className="text-blue-400 hover:text-blue-300 underline">
                    novatidecreative@gmail.com
                  </a>
                </p>
                <p>Phone:{" "}
                  <a href="tel:+1 917-809-5712" className="text-blue-400 hover:text-blue-300 underline">
                    (917) 480-6014
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Your Rights Section */}
          <section className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/50 rounded-2xl p-8">
            <div className="flex items-center justify-center mb-6">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
            <h2 className="text-3xl font-bold text-white text-center mb-6">
              ✓ Your Rights Are Protected
            </h2>
            <p className="text-gray-300 text-center max-w-2xl mx-auto">
              We are committed to respecting your privacy choices. Opting out will not affect any services you have already purchased, and we will not discriminate against you for exercising your privacy rights.
            </p>
          </section>

          {/* Related Links */}
          <div className="text-center space-y-4">
            <p className="text-gray-400">For more information about how we handle your data:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/privacy-policy"
                className="inline-block bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-and-conditions"
                className="inline-block bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>

          <div className="text-center text-gray-500 text-sm pt-8 border-t border-gray-800">
            <p>© 2025 Novatide Creative. All rights reserved.</p>
            <p className="mt-2">Last Updated: January 12, 2026</p>
          </div>
        </div>
      </article>
    </main>
  );
}
