"use client";

import { useState, FormEvent } from "react";
import { CheckCircle, Loader2, Phone } from "lucide-react";
import Link from "next/link";

const WEB3FORMS_ACCESS_KEY = "cc32d85d-bc44-43c7-93dc-8fcb35463b76";

export default function DemoOptInForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    business: "",
    smsAppointment: false,
    smsMarketing: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState(""); // Store submitted email
  const [error, setError] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (
      !/^\+?1?\s?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/.test(
        formData.phone
      )
    ) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.business.trim()) {
      newErrors.business = "Please tell us about your business";
    }

    // SMS checkboxes are OPTIONAL - no validation required

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) {
      setError("✕ Please fill in all required fields correctly.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Create submission data with timestamp
      const timestamp = new Date().toISOString();
      const submissionData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
        email: formData.email,
        business: formData.business,
        smsAppointment: formData.smsAppointment,
        smsMarketing: formData.smsMarketing,
        timestamp: timestamp,
      };

      // Log to console for testing/debugging
      console.log("Form Submission Data:", submissionData);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          first_name: formData.firstName,
          last_name: formData.lastName,
          name: `${formData.firstName} ${formData.lastName}`,
          phone: formData.phone,
          email: formData.email,
          business: formData.business,
          sms_appointment: formData.smsAppointment ? "Yes - Opted In" : "No",
          sms_marketing: formData.smsMarketing ? "Yes - Opted In" : "No",
          timestamp: timestamp,
          subject: "New Demo Request from Novatide Creative Website",
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Store the submitted email before clearing
        setSubmittedEmail(formData.email);
        
        // Clear form on success
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          business: "",
          smsAppointment: false,
          smsMarketing: false,
        });
        setErrors({});
        setIsSuccess(true);
      } else {
        setError(
          data.message ||
            "Oops! Something went wrong while submitting the form."
        );
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setError("Oops! Something went wrong while submitting the form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12 px-4">
        <div className="mb-6 bg-green-500/20 rounded-full p-6">
          <CheckCircle className="w-16 h-16 text-green-500" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 max-w-2xl">
          ✓ Thank you! We've received your request.
        </h2>
        <p className="text-gray-400 text-lg mb-8 max-w-xl">
          Check your email at{" "}
          <span className="text-blue-400 font-semibold">
            {submittedEmail}
          </span>{" "}
          for next steps.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Return to Home
          </a>
          <a
            href="/pricing"
            className="border-2 border-blue-600 text-white hover:bg-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            View Services
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Request a Demo
        </h2>
        <p className="text-gray-400">
          We will reach out and setup a time for a discovery call
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* First Name & Last Name - Side by Side on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="sr-only">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="First Name *"
              value={formData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              className={`w-full px-4 py-4 bg-[#1a1a1a] border ${
                errors.firstName ? "border-red-500" : "border-gray-700"
              } rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors`}
              disabled={isSubmitting}
              aria-required="true"
              aria-invalid={errors.firstName ? "true" : "false"}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1" role="alert">
                {errors.firstName}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="lastName" className="sr-only">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              placeholder="Last Name *"
              value={formData.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              className={`w-full px-4 py-4 bg-[#1a1a1a] border ${
                errors.lastName ? "border-red-500" : "border-gray-700"
              } rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors`}
              disabled={isSubmitting}
              aria-required="true"
              aria-invalid={errors.lastName ? "true" : "false"}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1" role="alert">
                {errors.lastName}
              </p>
            )}
          </div>
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="sr-only">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="Phone Number *"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className={`w-full px-4 py-4 bg-[#1a1a1a] border ${
              errors.phone ? "border-red-500" : "border-gray-700"
            } rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors`}
            disabled={isSubmitting}
            aria-required="true"
            aria-invalid={errors.phone ? "true" : "false"}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1" role="alert">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Email Address */}
        <div>
          <label htmlFor="email" className="sr-only">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email Address *"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className={`w-full px-4 py-4 bg-[#1a1a1a] border ${
              errors.email ? "border-red-500" : "border-gray-700"
            } rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors`}
            disabled={isSubmitting}
            aria-required="true"
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* Business - Textarea */}
        <div>
          <label htmlFor="business" className="sr-only">
            What Business are you in?
          </label>
          <textarea
            id="business"
            placeholder="What Business are you in? *"
            value={formData.business}
            onChange={(e) => handleChange("business", e.target.value)}
            rows={3}
            className={`w-full px-4 py-4 bg-[#1a1a1a] border ${
              errors.business ? "border-red-500" : "border-gray-700"
            } rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none`}
            disabled={isSubmitting}
            aria-required="true"
            aria-invalid={errors.business ? "true" : "false"}
          />
          {errors.business && (
            <p className="text-red-500 text-sm mt-1" role="alert">
              {errors.business}
            </p>
          )}
        </div>

        {/* Phone Disclosure & SMS Consent Section */}
        <div className="border-2 border-gray-700 rounded-lg p-5 bg-gray-900/50 space-y-4">
          {/* Phone Disclosure */}
          <div className="flex items-center space-x-2 pb-3 border-b border-gray-700">
            <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
            <p className="text-sm font-semibold text-gray-300">
              📱 SMS Messages from:{" "}
              <span className="text-white">+1 917-809-5712</span>
            </p>
          </div>

          {/* SMS Appointment Reminders Checkbox */}
          <div className="flex items-start space-x-3 py-2">
            <input
              type="checkbox"
              id="smsAppointment"
              checked={formData.smsAppointment}
              onChange={(e) => handleChange("smsAppointment", e.target.checked)}
              className="mt-1 w-5 h-5 rounded border-2 border-gray-600 bg-[#1a1a1a] text-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 cursor-pointer flex-shrink-0"
              disabled={isSubmitting}
              aria-label="SMS Appointment Reminders & Updates (Optional)"
            />
            <label
              htmlFor="smsAppointment"
              className="text-sm text-gray-300 cursor-pointer leading-relaxed"
            >
              <strong className="text-white font-semibold">
                SMS Appointment Reminders & Updates (Optional)
              </strong>
              <br />
              <span className="text-gray-400 text-xs leading-relaxed">
                I consent to receive SMS text messages from Novatide Creative
                for appointment reminders and service setup updates. Message
                frequency varies (2-4 per month). Message and data rates may
                apply. Reply HELP for help, STOP to unsubscribe.
              </span>
            </label>
          </div>

          {/* Separator */}
          <div className="border-t border-gray-700/50"></div>

          {/* Marketing Promotional Offers Checkbox */}
          <div className="flex items-start space-x-3 py-2">
            <input
              type="checkbox"
              id="smsMarketing"
              checked={formData.smsMarketing}
              onChange={(e) => handleChange("smsMarketing", e.target.checked)}
              className="mt-1 w-5 h-5 rounded border-2 border-gray-600 bg-[#1a1a1a] text-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 cursor-pointer flex-shrink-0"
              disabled={isSubmitting}
              aria-label="Marketing & Promotional Offers (Optional)"
            />
            <label
              htmlFor="smsMarketing"
              className="text-sm text-gray-300 cursor-pointer leading-relaxed"
            >
              <strong className="text-white font-semibold">
                Marketing & Promotional Offers (Optional)
              </strong>
              <br />
              <span className="text-gray-400 text-xs leading-relaxed">
                I consent to receive marketing text messages and promotional
                offers from Novatide Creative. Message frequency varies. Message
                and data rates may apply. Reply HELP for help, STOP to
                unsubscribe.
              </span>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white px-6 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 text-lg"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Submitting...</span>
            </>
          ) : (
            <span>Submit Request</span>
          )}
        </button>

        {/* Error Message */}
        {error && (
          <div
            className="text-red-500 text-center text-sm bg-red-500/10 border border-red-500/50 rounded-lg py-3 px-4"
            role="alert"
          >
            {error}
          </div>
        )}

        {/* Footer Section */}
        <div className="text-center text-xs text-gray-500 pt-2 leading-relaxed">
          By submitting this form, you agree to our{" "}
          <Link
            href="/privacy-policy"
            className="text-blue-400 hover:text-blue-300 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link
            href="/terms-and-conditions"
            className="text-blue-400 hover:text-blue-300 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Service
          </Link>
          . SMS opt-in data is never shared with third parties.
        </div>
      </form>
    </div>
  );
}
