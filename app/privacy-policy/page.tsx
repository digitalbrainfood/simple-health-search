import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Find The Plan",
  description: "Learn how Find The Plan by Healthie Insurance Agency collects, uses, and protects your personal information. Your privacy matters to us.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto border-b">
        <div className="flex items-center gap-8">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Find The Plan"
              width={180}
              height={50}
              priority
            />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:+18337411902" className="hidden md:flex items-center gap-2 text-gray-700 font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            (833) 741-1902
          </a>
          <Link href="/" className="bg-[#c5d86d] hover:bg-[#b5c85d] text-[#1e2a5e] font-semibold px-5 py-2.5 rounded-full transition-colors">
            Find your plan
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-[#1e2a5e] mb-8">Privacy Policy</h1>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last Updated:</strong> January 2026
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1e2a5e] mb-4">Introduction</h2>
            <p className="text-gray-700 mb-4">
              Find The Plan, operated by Healthie LLC DBA Healthie Insurance Agency (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1e2a5e] mb-4">Information We Collect</h2>
            <h3 className="text-xl font-medium text-gray-800 mb-3">Personal Information</h3>
            <p className="text-gray-700 mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Fill out our contact forms</li>
              <li>Request information about health insurance plans</li>
              <li>Contact us via phone, email, or other means</li>
              <li>Subscribe to our newsletter or marketing communications</li>
            </ul>
            <p className="text-gray-700 mb-4">
              This information may include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Name (first and last)</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>State of residence</li>
              <li>Health insurance preferences and needs</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1e2a5e] mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Connect you with licensed insurance agents who can help you find suitable health insurance plans</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you information about health insurance options available to you</li>
              <li>Comply with legal obligations and protect our rights</li>
              <li>Improve our website and services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1e2a5e] mb-4">Information Sharing</h2>
            <p className="text-gray-700 mb-4">
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li><strong>Licensed Insurance Agents:</strong> To help you find and enroll in health insurance plans</li>
              <li><strong>Service Providers:</strong> Third-party companies that help us operate our business (e.g., hosting, analytics)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1e2a5e] mb-4">Your Rights and Choices</h2>
            <p className="text-gray-700 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent where applicable</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1e2a5e] mb-4">Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1e2a5e] mb-4">Cookies and Tracking</h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar tracking technologies to improve your experience on our website. You can control cookies through your browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1e2a5e] mb-4">Third-Party Links</h2>
            <p className="text-gray-700 mb-4">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these websites. We encourage you to read the privacy policies of any linked sites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1e2a5e] mb-4">Children&apos;s Privacy</h2>
            <p className="text-gray-700 mb-4">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1e2a5e] mb-4">Changes to This Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1e2a5e] mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Healthie LLC DBA Healthie Insurance Agency</strong>
            </p>
            <p className="text-gray-700">
              <strong>Phone:</strong> <a href="tel:+18337411902" className="text-[#c5d86d] hover:underline">(833) 741-1902</a>
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Find The Plan. All rights reserved.</p>
          <div className="mt-4 flex justify-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#1e2a5e]">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-[#1e2a5e]">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
