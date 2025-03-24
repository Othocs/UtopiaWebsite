import React from "react";

const ContactSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
          <p className="text-lg text-gray-700 mb-8">
            Have questions or want to collaborate? Reach out to us whether
            you&apos;re a company, individual, or association.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium py-3 px-8 rounded-full hover:from-purple-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
