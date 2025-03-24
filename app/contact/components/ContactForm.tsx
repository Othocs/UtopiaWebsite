"use client";

import React, { useState } from "react";
// import { useRouter } from "next/navigation";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  // const router = useRouter();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      organization: formData.get("organization") as string,
      message: formData.get("message") as string,
    };

    try {
      // Send the form data to our API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      // Parse the JSON response
      const result = await response.json();

      // Check if the request was successful
      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      // Log the form data for debugging
      console.log("Form submitted with data:", data);

      setStatus("success");

      // Reset form
      (event.target as HTMLFormElement).reset();

      // Automatically go back to homepage after 3 seconds
      // setTimeout(() => {
      //   router.push("/");
      // }, 3000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "There was a problem sending your message. Please try again later."
      );
      console.error("Error submitting form:", error);
    }
  }

  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 md:p-10 max-w-3xl mx-auto">
      {status === "success" ? (
        <div className="text-center py-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Message Sent!
          </h3>
          <p className="text-gray-600">
            Thank you for contacting us. We&apos;ll get back to you shortly.
          </p>
          {/* <p className="text-gray-500 mt-4 text-sm">
            Redirecting you to the homepage...
          </p> */}
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
          suppressHydrationWarning
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
              placeholder="Your name"
              suppressHydrationWarning
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
              placeholder="your.email@example.com"
              suppressHydrationWarning
            />
          </div>

          <div>
            <label
              htmlFor="organization"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Organization (Optional)
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
              placeholder="Company, association, etc."
              suppressHydrationWarning
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
              placeholder="How can we help you?"
              suppressHydrationWarning
            />
          </div>

          {status === "error" && (
            <div className="text-red-500 text-sm p-2 bg-red-50 rounded-md">
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className={`w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-md hover:from-purple-700 hover:to-indigo-700 transition-all shadow-md ${
              status === "submitting" ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {status === "submitting" ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
}
