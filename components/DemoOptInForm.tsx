"use client";

import { useState, FormEvent } from "react";
import { CheckCircle, Loader2 } from "lucide-react";

export default function DemoOptInForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    business: "",
    smsConsent: false
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
    } else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone)) {
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

    if (!formData.smsConsent) {
      newErrors.smsConsent = "You must consent to receive SMS notifications";
    }

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
      // Simulate API call - replace with your actual endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // TODO: Replace with actual API call
      // const response = await fetch('/api/submit-demo', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      setIsSuccess(true);
    } catch (err) {
      setError("Oops! Something went wrong while submitting the form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
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
          Thank you! Your submission has been received, an employee will be in contact with you shortly!
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

        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="smsConsent"
            checked={formData.smsConsent}
            onChange={(e) => handleChange("smsConsent", e.target.checked)}
            className={`mt-1 w-4 h-4 rounded border ${
              errors.smsConsent ? "border-red-500" : "border-gray-700"
            } bg-[#1a1a1a] focus:ring-2 focus:ring-blue-500`}
            disabled={isSubmitting}
          />
          <label htmlFor="smsConsent" className="text-sm text-gray-300">
            I consent to receive SMS notifications from{" "}
            <strong className="text-white">Novatide</strong>. Message frequency varies. Msg & data rates
            may apply. Text HELP for assistance, reply STOP to unsubscribe at any time.
          </label>
        </div>
        {errors.smsConsent && (
          <p className="text-red-500 text-sm">{errors.smsConsent}</p>
        )}

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

        {error && (
          <p className="text-red-500 text-center mt-4">{error}</p>
        )}
      </form>
    </div>
  );
}
