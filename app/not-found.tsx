import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found - Utopia ESSEC",
  description:
    "The page you are looking for could not be found. Explore Utopia ESSEC, the AI association of ESSEC Business School.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center flex-col px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Page Not Found</h1>
      <p className="text-lg mb-8 text-center max-w-2xl">
        We&apos;re sorry, but the page you are looking for does not exist. You
        might have followed an outdated link or entered a URL that doesn&apos;t
        exist on this site.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <Link
          href="/"
          className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          Return to Home
        </Link>
        <Link
          href="/events"
          className="px-6 py-3 bg-white border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors"
        >
          Explore Events
        </Link>
      </div>

      <div className="w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4">
          You might be interested in:
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li>
            <Link href="/about" className="text-purple-600 hover:underline">
              About Utopia ESSEC
            </Link>
          </li>
          <li>
            <Link href="/team" className="text-purple-600 hover:underline">
              Our Team
            </Link>
          </li>
          <li>
            <Link href="/resources" className="text-purple-600 hover:underline">
              AI Resources
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-purple-600 hover:underline">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
