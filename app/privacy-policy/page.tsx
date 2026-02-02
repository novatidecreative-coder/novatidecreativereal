import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen pt-16 pb-20 px-4">
      <article className="max-w-4xl mx-auto prose prose-invert prose-lg">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-400">Last Updated: January 12, 2026</p>
        </div>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <p className="text-lg">
            At Novatide Creative, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">1. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact us through our website or email</li>
              <li>Request a quote or consultation</li>
              <li>Subscribe to our newsletter or communications</li>
              <li>Engage our services</li>
            </ul>
            <p className="mt-4">
              This information may include your name, email address, phone number, company name, and any other details you choose to provide.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect certain information about your device, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website</li>
              <li>Date and time of visit</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Cookies and Tracking Technologies</h3>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with small amounts of data that are sent to your browser from a website and stored on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect for various purposes, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Providing and maintaining our services</li>
              <li>Communicating with you about your inquiries, projects, or services</li>
              <li>Sending you marketing and promotional communications (with your consent)</li>
              <li>Improving our website and services</li>
              <li>Analyzing website usage and trends</li>
              <li>Detecting, preventing, and addressing technical issues or security threats</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">3. Legal Basis for Processing (GDPR)</h2>
            <p>If you are from the European Economic Area (EEA), our legal basis for collecting and using your personal information depends on the data and the context in which we collect it:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You have given us consent to do so</li>
              <li>Processing is necessary to perform a contract with you</li>
              <li>Processing is in our legitimate interests and not overridden by your rights</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">4. Sharing Your Information</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
            
            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Service Providers</h3>
            <p>
              We may share your information with third-party service providers who perform services on our behalf, such as:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email marketing platforms</li>
              <li>Analytics services</li>
              <li>Payment processors</li>
              <li>Cloud hosting providers</li>
              <li>Customer relationship management (CRM) systems</li>
            </ul>
            <p className="mt-4">
              These service providers are contractually obligated to protect your information and use it only for the purposes we specify.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Legal Requirements</h3>
            <p>We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).</p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Business Transfers</h3>
            <p>
              In the event of a merger, acquisition, or sale of assets, your personal information may be transferred. We will provide notice before your information is transferred and becomes subject to a different privacy policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">5. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">6. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">7. Your Privacy Rights</h2>
            <p>Depending on your location, you may have the following rights regarding your personal information:</p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Right to Access</h3>
            <p>You have the right to request a copy of the personal information we hold about you.</p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Right to Rectification</h3>
            <p>You can request that we correct any inaccurate or incomplete personal information.</p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Right to Erasure</h3>
            <p>You can request that we delete your personal information, subject to certain legal exceptions.</p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Right to Restrict Processing</h3>
            <p>You can request that we limit how we use your personal information.</p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Right to Data Portability</h3>
            <p>You can request a copy of your personal information in a structured, machine-readable format.</p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Right to Object</h3>
            <p>You can object to our processing of your personal information for direct marketing purposes.</p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Right to Withdraw Consent</h3>
            <p>If we process your information based on your consent, you have the right to withdraw that consent at any time.</p>

            <p className="mt-6">
              To exercise any of these rights, please contact us using the information provided at the end of this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">8. California Privacy Rights (CCPA)</h2>
            <p>
              If you are a California resident, you have specific rights regarding your personal information under the California Consumer Privacy Act (CCPA):
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Right to Know</h3>
            <p>You have the right to request information about:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The categories of personal information we collect</li>
              <li>The sources from which we collect personal information</li>
              <li>The purposes for collecting or selling personal information</li>
              <li>The categories of third parties with whom we share personal information</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Right to Delete</h3>
            <p>You have the right to request deletion of your personal information, subject to certain exceptions.</p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Right to Opt-Out</h3>
            <p>
              We do not sell your personal information. If our practices change, we will update this policy and provide you with an opportunity to opt out.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Right to Non-Discrimination</h3>
            <p>We will not discriminate against you for exercising any of your CCPA rights.</p>

            <p className="mt-6">
              To exercise your CCPA rights, please visit our{" "}
              <Link href="/instructions-for-opt-out" className="text-blue-400 hover:text-blue-300 underline">
                opt-out instructions page
              </Link>{" "}
              or contact us directly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">9. Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can delete it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">10. International Data Transfers</h2>
            <p>
              Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. If you are located outside the United States and choose to provide information to us, please note that we transfer the data to the United States and process it there.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">11. Third-Party Websites</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section id="sms-privacy">
            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">12. SMS Messaging & Data Privacy</h2>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">How We Collect Your Information</h3>
            <p>
              We collect phone numbers from customers who opt-in to receive SMS messages via our "Request a Demo" form at{" "}
              <Link href="/book-demo" className="text-blue-400 hover:text-blue-300 underline">
                https://novatidecreative.com/book-demo
              </Link>
              . When you check the "SMS Appointment Reminders & Updates" consent box, you authorize us to collect and use your phone number for SMS communications.
            </p>
            <p className="mt-4">
              <strong className="text-white">Contact Number:</strong> All SMS messages are sent from{" "}
              <span className="text-blue-400 font-mono">+1 917-809-5712</span>
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">What We Use Your Information For</h3>
            <p>Your phone number is used exclusively to send you:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Appointment reminders for your demo call</li>
              <li>Service setup updates and progress notifications</li>
              <li>Product information and updates (only if you opt-in to promotional messages)</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Data Sharing & Privacy Protection</h3>
            <p>
              Your phone number and SMS opt-in information is <strong className="text-white">NOT shared with third parties</strong> for marketing purposes. Your data is never:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Sold to other companies</li>
              <li>Rented to marketing firms</li>
              <li>Shared with affiliates for promotional purposes</li>
              <li>Used for purposes other than those disclosed</li>
            </ul>
            <p className="mt-4">
              We only share your phone number with our SMS service provider (Twilio/HighLevel) to deliver messages on our behalf. These service providers are contractually obligated to maintain the confidentiality of your information.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Data Security</h3>
            <p>
              We take reasonable measures to protect your phone number from unauthorized access, alteration, disclosure, or destruction through industry-standard security practices and encryption.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Your Rights</h3>
            <p>You can:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Request deletion of your phone number at any time by replying STOP to any SMS from <span className="text-blue-400 font-mono">+1 917-809-5712</span></li>
              <li>Contact us at <a href="mailto:support@novatidecreative.com" className="text-blue-400 hover:text-blue-300 underline">support@novatidecreative.com</a> to request data removal</li>
              <li>Call <a href="tel:+19178095712" className="text-blue-400 hover:text-blue-300 underline">+1 917-809-5712</a> during business hours for assistance</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">International Users</h3>
            <p>
              If you are located outside the United States, additional data protection laws may apply to your information. By opting in to SMS messages, you consent to the transfer and processing of your data as described in this policy.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Opt-Out Instructions</h3>
            <p>
              For detailed instructions on how to opt out of SMS messages, please visit our{" "}
              <Link href="/instructions-for-opt-out" className="text-blue-400 hover:text-blue-300 underline">
                Instructions for Opt Out page
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">13. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last Updated" date at the top of this page. We encourage you to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">14. Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="bg-gray-900 rounded-lg p-6 mt-4">
              <p className="font-semibold text-white mb-2">Novatide Creative</p>
              <p>Manhasset, NY</p>
              <p>Email:{" "}
                <a href="mailto:team@novatidecreative.com" className="text-blue-400 hover:text-blue-300 underline">
                  team@novatidecreative.com
                </a>
              </p>
              <p>Phone:{" "}
                <a href="tel:+1 917-809-5712" className="text-blue-400 hover:text-blue-300 underline">
                  +1 917-809-5712
                </a>
              </p>
            </div>
            <p className="mt-6">
              For opt-out instructions, please visit:{" "}
              <Link href="/instructions-for-opt-out" className="text-blue-400 hover:text-blue-300 underline">
                novatidecreative.com/instructions-for-opt-out
              </Link>
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>© 2025 Novatide Creative. All rights reserved.</p>
            <p className="mt-2">
              Last Updated: January 12, 2026
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
