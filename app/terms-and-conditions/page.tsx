import Link from "next/link";

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen pt-16 pb-20 px-4">
      <article className="max-w-4xl mx-auto prose prose-invert prose-lg">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Terms and Conditions
          </h1>
          <p className="text-gray-400">Last Updated: January 12, 2026</p>
        </div>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">1. Introduction</h2>
            <p>
              Welcome to Novatide Creative ("Company," "we," "our," or "us"). These Terms and Conditions ("Terms") govern your access to and use of our website located at www.novatidecreative.com (the "Website") and the creative services we provide.
            </p>
            <p>
              By accessing or using our Website and services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Website or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">2. Services</h2>
            <p>
              Novatide Creative provides creative design, branding, digital marketing, AI receptionist services, and related professional services (collectively, "Services"). Specific details about Services, deliverables, timelines, and pricing will be outlined in individual project agreements or proposals.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">3. Use of Website</h2>
            
            <h3 className="text-xl font-semibold text-white mt-8 mb-3">3.1 Acceptable Use</h3>
            <p>You agree to use our Website only for lawful purposes and in accordance with these Terms. You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the Website in any way that violates any applicable federal, state, local, or international law or regulation</li>
              <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Website</li>
              <li>Attempt to gain unauthorized access to any portion of the Website or any systems or networks connected to the Website</li>
              <li>Use any automated system, including but not limited to "robots," "spiders," or "offline readers," to access the Website in a manner that sends more request messages to our servers than a human can reasonably produce in the same period</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">3.2 Intellectual Property</h3>
            <p>
              All content on this Website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, and software, is the property of Novatide Creative or its content suppliers and is protected by international copyright laws. You may not reproduce, distribute, modify, or create derivative works from any content on this Website without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">4. Client Obligations</h2>
            <p>When you engage our Services, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and complete information required for the Services</li>
              <li>Respond to requests for information or feedback in a timely manner</li>
              <li>Pay all fees as outlined in your project agreement or proposal</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not use our Services for any unlawful or fraudulent purpose</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">5. Fees and Payment</h2>
            
            <h3 className="text-xl font-semibold text-white mt-8 mb-3">5.1 Pricing</h3>
            <p>
              Service fees will be outlined in your project agreement or proposal. All prices are in U.S. Dollars unless otherwise specified. We reserve the right to adjust pricing with 30 days' notice.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">5.2 Payment Terms</h3>
            <p>
              Payment is due according to the terms specified in your project agreement. Late payments may be subject to interest charges of 1.5% per month or the maximum allowed by law, whichever is less. We reserve the right to suspend Services if payment is not received by the due date.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">5.3 Refunds</h3>
            <p>
              Refund policies will be specified in your project agreement. Generally, setup fees and completed work are non-refundable. Monthly subscription services may be canceled with 30 days' notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">6. Intellectual Property Rights</h2>
            
            <h3 className="text-xl font-semibold text-white mt-8 mb-3">6.1 Ownership of Deliverables</h3>
            <p>
              Upon full payment for Services, you will own the final deliverables created specifically for you. However, we retain ownership of any pre-existing materials, tools, templates, and methodologies used in creating the deliverables.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">6.2 Portfolio Use</h3>
            <p>
              We reserve the right to display work created for you in our portfolio and marketing materials unless otherwise agreed in writing.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">6.3 Third-Party Materials</h3>
            <p>
              Any third-party materials (such as stock photos, fonts, or software) used in your project may be subject to separate licensing terms. You are responsible for ensuring compliance with such licenses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">7. Confidentiality</h2>
            <p>
              Both parties agree to keep confidential any proprietary or sensitive information disclosed during the course of our working relationship. This obligation survives the termination of any agreement between us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">8. Term and Termination</h2>
            
            <h3 className="text-xl font-semibold text-white mt-8 mb-3">8.1 Project-Based Services</h3>
            <p>
              For project-based services, the agreement remains in effect until all deliverables are completed and payment is received, or until either party terminates as provided in the project agreement.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">8.2 Subscription Services</h3>
            <p>
              Subscription services continue on a month-to-month basis unless otherwise specified. Either party may terminate with 30 days' written notice.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">8.3 Termination for Cause</h3>
            <p>
              Either party may terminate immediately if the other party breaches these Terms and fails to cure the breach within 10 days of written notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">9. Warranties and Disclaimers</h2>
            
            <h3 className="text-xl font-semibold text-white mt-8 mb-3">9.1 Our Warranties</h3>
            <p>
              We warrant that Services will be performed in a professional and workmanlike manner consistent with industry standards.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">9.2 Disclaimer</h3>
            <p>
              EXCEPT AS EXPRESSLY PROVIDED HEREIN, OUR WEBSITE AND SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT GUARANTEE SPECIFIC RESULTS FROM OUR SERVICES.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">10. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL NOVATIDE CREATIVE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your use or inability to use our Website or Services</li>
              <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
              <li>Any interruption or cessation of transmission to or from our Website</li>
              <li>Any bugs, viruses, or the like that may be transmitted through our Website by any third party</li>
            </ul>
            <p className="mt-4">
              OUR TOTAL LIABILITY TO YOU FOR ANY CLAIM ARISING FROM OR RELATING TO THESE TERMS OR OUR SERVICES SHALL NOT EXCEED THE AMOUNT YOU PAID US FOR SERVICES IN THE SIX MONTHS PRECEDING THE CLAIM.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">11. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Novatide Creative and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with your use of our Services or violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">12. Third-Party Links and Services</h2>
            <p>
              Our Website may contain links to third-party websites or services that are not owned or controlled by Novatide Creative. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">13. Privacy and Data Protection</h2>
            <p>
              Your privacy is important to us. Our collection and use of personal information in connection with your use of our Website and Services is described in our{" "}
              <Link href="/privacy-policy" className="text-blue-400 hover:text-blue-300 underline">
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">14. Force Majeure</h2>
            <p>
              Neither party shall be liable for any failure or delay in performance due to circumstances beyond its reasonable control, including but not limited to acts of God, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, pandemics, strikes, or shortages of transportation, facilities, fuel, energy, labor, or materials.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">15. Governing Law and Dispute Resolution</h2>
            
            <h3 className="text-xl font-semibold text-white mt-8 mb-3">15.1 Governing Law</h3>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">15.2 Dispute Resolution</h3>
            <p>
              Any dispute arising from these Terms or our Services shall first be attempted to be resolved through good-faith negotiation. If negotiation fails, the dispute shall be resolved through binding arbitration in Nassau County, New York, in accordance with the rules of the American Arbitration Association.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">16. General Provisions</h2>
            
            <h3 className="text-xl font-semibold text-white mt-8 mb-3">16.1 Entire Agreement</h3>
            <p>
              These Terms, together with any project agreements or proposals, constitute the entire agreement between you and Novatide Creative regarding the use of our Website and Services.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">16.2 Amendments</h3>
            <p>
              We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the new Terms on our Website. Your continued use of our Services after such changes constitutes acceptance of the new Terms.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">16.3 Severability</h3>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in full force and effect.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">16.4 Waiver</h3>
            <p>
              No waiver of any term of these Terms shall be deemed a further or continuing waiver of such term or any other term, and our failure to assert any right or provision under these Terms shall not constitute a waiver of such right or provision.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">16.5 Assignment</h3>
            <p>
              You may not assign or transfer these Terms or your rights hereunder without our prior written consent. We may assign these Terms without restriction.
            </p>
          </section>

          <section id="sms-terms">
            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">17. SMS Messaging Terms & Service</h2>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">SMS Program Overview</h3>
            <p>
              By checking the "SMS Appointment Reminders & Updates" consent box on our demo form, you are agreeing to participate in Novatide Creative's SMS messaging program. You will receive appointment reminders, service setup updates, and (optionally) promotional offers via text message to the phone number you provide.
            </p>
            <p className="mt-4">
              <strong className="text-white">SMS Contact Number:</strong> All messages will be sent from{" "}
              <a href="tel:+19178095712" className="text-blue-400 hover:text-blue-300 underline font-mono">
                +1 917-809-5712
              </a>
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Message Frequency</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-white">Appointment/Service Updates:</strong> 2-4 messages per month (varies based on your activity)</li>
              <li><strong className="text-white">Promotional Messages:</strong> Only sent if you opt-in to the marketing consent box; frequency varies</li>
              <li><strong className="text-white">Emergency/Critical Updates:</strong> May be sent outside normal message frequency if needed</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Message Rates & Charges</h3>
            <p>
              Standard message and data rates from your carrier will apply to all SMS messages you receive. Novatide Creative is not responsible for message charges. Contact your mobile carrier for details about your specific plan and messaging rates.
            </p>
            <div className="bg-gray-900 rounded-lg p-4 mt-4">
              <p className="text-sm text-gray-400 mb-2">Example charges:</p>
              <ul className="list-disc pl-6 space-y-1 text-sm text-gray-400">
                <li>Standard SMS: Typically $0.01-$0.25 per message depending on your carrier</li>
                <li>MMS (if applicable): May have higher rates</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Opting Out (STOP)</h3>
            <p>You can unsubscribe from all SMS messages at any time by:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Replying <strong className="text-white font-mono">STOP</strong> to any message from us, or</li>
              <li>Texting <strong className="text-white font-mono">STOP</strong> to{" "}
                <a href="tel:+19178095712" className="text-blue-400 hover:text-blue-300 underline font-mono">
                  +1 917-809-5712
                </a>
              </li>
            </ul>
            <p className="mt-4">
              Within 24 hours of your opt-out request, you will receive a confirmation that you have been removed from our SMS program. You will not receive any further messages from this number.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Getting Help (HELP)</h3>
            <p>For assistance with our SMS program, you can:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Reply <strong className="text-white font-mono">HELP</strong> to any message, or</li>
              <li>Call us at{" "}
                <a href="tel:+19178095712" className="text-blue-400 hover:text-blue-300 underline">
                  +1 917-809-5712
                </a>{" "}
                during business hours, or</li>
              <li>Email{" "}
                <a href="mailto:support@novatidecreative.com" className="text-blue-400 hover:text-blue-300 underline">
                  support@novatidecreative.com
                </a>
              </li>
            </ul>
            <p className="mt-4">
              When you reply HELP, you will receive information about how to contact customer support and manage your preferences.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Consent is Optional</h3>
            <div className="bg-blue-900/20 border border-blue-500/50 rounded-lg p-4 mt-4">
              <p className="text-blue-400">
                <strong>Important:</strong> Signing up for SMS messages is completely voluntary. You are not required to opt-in to SMS to request a demo, book a service, or purchase any of our products or services. Providing or withholding SMS consent will not affect your ability to access our services.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Carrier Compliance</h3>
            <p>
              Novatide Creative complies with all TCPA (Telephone Consumer Protection Act), CTIA (Cellular Telecommunications and Internet Association), and carrier rules regarding SMS messaging. We will not:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Send messages outside 8 AM - 9 PM in your local time zone (except critical updates)</li>
              <li>Send messages to numbers on Do Not Call lists</li>
              <li>Send messages to reassigned numbers</li>
              <li>Discriminate or retaliate against users who opt-out</li>
              <li>Charge fees for opting out</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">No Liability for Carrier Issues</h3>
            <p>Novatide Creative is not responsible for:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Message delays or non-delivery due to carrier issues</li>
              <li>Technical problems with your phone or carrier network</li>
              <li>Messages being filtered or blocked by your device or carrier</li>
              <li>SMS delivery failures due to carrier maintenance or outages</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Supported Carriers</h3>
            <p>
              Our SMS service is available on major U.S. carriers including AT&T, T-Mobile, Verizon, Sprint, Boost, Cricket, MetroPCS, U.S. Cellular, and others. Service may not be available on all carriers or in all areas.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Changes to This Agreement</h3>
            <p>
              We may update these SMS terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our SMS program after changes are posted constitutes your acceptance of the updated terms.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Program Termination</h3>
            <p>We reserve the right to terminate your participation in the SMS program if:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Your account is suspended or terminated for any reason</li>
              <li>You use the SMS service in violation of these terms</li>
              <li>Carrier regulations require termination</li>
              <li>We discontinue the SMS program</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Age Restriction</h3>
            <p>
              You must be at least 18 years of age to opt in to our SMS program. By opting in, you certify that you are at least 18 years old.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Questions or Concerns</h3>
            <p>
              If you have any questions or concerns about our SMS program, please contact us at:
            </p>
            <div className="bg-gray-900 rounded-lg p-6 mt-4">
              <p className="font-semibold text-white mb-2">Novatide Creative</p>
              <p>Manhasset, NY</p>
              <p>Email:{" "}
                <a href="mailto:support@novatidecreative.com" className="text-blue-400 hover:text-blue-300 underline">
                  support@novatidecreative.com
                </a>
              </p>
              <p>Phone:{" "}
                <a href="tel:+19178095712" className="text-blue-400 hover:text-blue-300 underline">
                  +1 917-809-5712
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">18. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="bg-gray-900 rounded-lg p-6 mt-4">
              <p className="font-semibold text-white mb-2">Novatide Creative</p>
              <p>Manhasset, NY</p>
              <p>Email:{" "}
                <a href="mailto:novatidecreative@gmail.com" className="text-blue-400 hover:text-blue-300 underline">
                  novatidecreative@gmail.com
                </a>
              </p>
              <p>Phone:{" "}
                <a href="tel:+19178095712" className="text-blue-400 hover:text-blue-300 underline">
                  +1 917-809-5712
                </a>
              </p>
            </div>
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
