import React from "react";
import ContactForm from "./components/ContactForm";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

export const metadata = {
  title: "Contact Us | Utopia",
  description:
    "Get in touch with the Utopia team. We'd love to hear from you about questions, collaborations, or ideas.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen py-16 md:py-24 mt-[20px]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Contact Us
          </h1>

          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Have a question, want to collaborate, or interested in joining our
            community? We&apos;d love to hear from you!
          </p>
        </div>

        <ContactForm />

        <div className="mt-16 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Other Ways to Reach Us
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-gray-600 mb-3">For general inquiries</p>
              <a
                href="mailto:utopia.essec@gmail.com"
                className="text-purple-600 hover:text-purple-800 font-medium"
              >
                utopia.essec@gmail.com
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Social Media</h3>
              <p className="text-gray-600 mb-3">
                Follow us for the latest updates
              </p>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/company/utopia-essec/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-purple-600"
                >
                  <span className="sr-only">LinkedIn</span>
                  <FaLinkedin className="h-8 w-8" />
                </a>
                <a
                  href="https://www.instagram.com/utopia.essec?igsh=MTlqa2tzdjdqa2dqdw%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-purple-600"
                >
                  <span className="sr-only">Instagram</span>
                  <FaInstagram className="h-8 w-8" />
                </a>
                <a
                  href="https://chat.whatsapp.com/IbzUW3yjQ3xFD1I2BZgabL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-purple-600"
                >
                  <span className="sr-only">WhatsApp</span>
                  <FaWhatsapp className="h-8 w-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
