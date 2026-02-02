"use client";

import { useState, FormEvent } from "react";
import { CheckCircle, Loader2, Phone } from "lucide-react";
import Link from "next/link";

const WEB3FORMS_ACCESS_KEY = "cc32d85d-bc44-43c7-93dc-8fcb35463b76"; // <- put your access key here

export default function DemoOptInForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    business: "",
    smsAppointments: false,
    smsMarketing: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
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

    // SMS consent is now OPTIONAL - no validation needed

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          business: formData.business,
          sms_appointments: formData.smsAppointments ? "Yes - Opted In" : "No",
          sms_marketing: formData.smsMarketing ? "Yes - Opted In" : "No",
          subject: "New Demo Request from Novatide Website",
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSuccess(true);
      } else {
        setError(
          data.message ||
            "Oops! Something went wrong while submitting the form."
        );
      }
    } catch (err) {
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
      <div className="flex flex-col items-center justify-center text-center py-20">
        <div className="mb-6 bg-green-500/20 rounded-full p-6">
          <CheckCircle className="w-16 h-16 text-green-500" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-2xl">
          Thank you! Your submission has been received, an employee will be in
          contact with you shortly!
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
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
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Request a Demo
        </h2>
        <p className="text-gray-400">
          We will reach out and setup a time for a discovery call
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className={`w-full px-4 py-4 bg-[#1a1a1a] border ${
              errors.name ? "border-red-500" : "border-gray-700"
            } rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors`}
            disabled={isSubmitting}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <input
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className={`w-full px-4 py-4 bg-[#1a1a1a] border ${
              errors.phone ? "border-red-500" : "border-gray-700"
            } rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors`}
            disabled={isSubmitting}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className={`w-full px-4 py-4 bg-[#1a1a1a] border ${
              errors.email ? "border-red-500" : "border-gray-700"
            } rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors`}
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            placeholder="What Business are you in?"
            value={formData.business}
            onChange={(e) => handleChange("business", e.target.value)}
            className={`w-full px-4 py-4 bg-[#1a1a1a] border ${
              errors.business ? "border-red-500" : "border-gray-700"
            } rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors`}
            disabled={isSubmitting}
          />
          {errors.business && (
            <p className="text-red-500 text-sm mt-1">{errors.business}</p>
          )}
        </div>

        {/* SMS Consent Section */}
        <div className="border border-gray-700 rounded-lg p-4 bg-gray-900/50">
          <div className="flex items-center space-x-2 mb-3">
            <Phone className="w-5 h-5 text-blue-400" />
            <p className="text-sm font-semibold text-gray-300">
              📱 SMS Messages from: <span className="text-white">+1 917-809-5712</span>
            </p>
          </div>
          
          <p className="text-xs text-gray-400 mb-4">
            SMS consent is <strong className="text-white">optional</strong>. You can still request a demo without opting in to text messages.
          </p>

          {/* Checkbox 1: Appointment Reminders */}
          <div className="flex items-start space-x-3 mb-4">
            <input
              type="checkbox"
              id="smsAppointments"
              checked={formData.smsAppointments}
              onChange={(e) => handleChange("smsAppointments", e.target.checked)}
              className="mt-1 w-4 h-4 rounded border border-gray-700 bg-[#1a1a1a] focus:ring-2 focus:ring-blue-500 cursor-pointer"
              disabled={isSubmitting}
            />
            <label htmlFor="smsAppointments" className="text-sm text-gray-300 cursor-pointer">
              <strong className="text-white">SMS Appointment Reminders & Updates</strong> (Optional)
              <br />
              <span className="text-xs text-gray-400">
                Receive appointment reminders and service setup updates via text message.
              </span>
            </label>
          </div>

          {/* Checkbox 2: Marketing Messages */}
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="smsMarketing"
              checked={formData.smsMarketing}
              onChange={(e) => handleChange("smsMarketing", e.target.checked)}
              className="mt-1 w-4 h-4 rounded border border-gray-700 bg-[#1a1a1a] focus:ring-2 focus:ring-blue-500 cursor-pointer"
              disabled={isSubmitting}
            />
            <label htmlFor="smsMarketing" className="text-sm text-gray-300 cursor-pointer">
              <strong className="text-white">Marketing & Promotional Offers</strong> (Optional)
              <br />
              <span className="text-xs text-gray-400">
                Receive special offers, product updates, and promotional messages.
              </span>
            </label>
          </div>

          <p className="text-xs text-gray-400 mt-4">
            Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for support at any time. 
            By checking above, you consent to receive SMS messages from{" "}
            <strong className="text-white">Novatide Creative</strong> at{" "}
            <strong className="text-white">+1 917-809-5712</strong>.
          </p>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white px-6 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Submitting...</span>
            </>
          ) : (
            <span>Submit</span>
          )}
        </button>

        {error && <p className="text-red-500 text-center mt-4">{error}</p>}

        {/* Footer Links */}
        <div className="text-center text-xs text-gray-500 mt-4">
          By submitting this form, you agree to our{" "}
          <Link href="/terms-and-conditions" className="text-blue-400 hover:text-blue-300 underline" target="_blank">
            Terms & Conditions
          </Link>
          {" "}and{" "}
          <Link href="/privacy-policy" className="text-blue-400 hover:text-blue-300 underline" target="_blank">
            Privacy Policy
          </Link>
          .
        </div>
      </form>
    </div>
  );
}

