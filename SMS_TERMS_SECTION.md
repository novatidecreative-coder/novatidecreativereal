# SMS Terms Section for Terms & Conditions (Section 17)

This is the comprehensive A2P 10DLC compliant SMS section to be inserted into the Terms & Conditions page.

```tsx
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
```
