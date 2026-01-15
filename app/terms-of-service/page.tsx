import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Find The Plan",
  description: "Review the terms and conditions for using Find The Plan health insurance services by Healthie Insurance Agency. Understand your rights and responsibilities.",
};

export default function TermsOfService() {
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
        <h1 className="text-4xl font-bold text-[#1e2a5e] mb-8">Terms of Service</h1>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last Updated:</strong> January 2026
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1e2a5e] mb-4">Agreement to Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing or using Find The Plan&apos;s website and services, operated by Healthie LLC DBA Healthie Insurance Agency, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1e2a5e] mb-4">Description of Services</h2>
            <p className="text-gray-700 mb-4">
              Find The Plan provides health insurance information and connects consumers with licensed insurance agents who can help them find and enroll in health insurance plans. Our services are provided free of charge to consumers.
            </p>
            <p className="text-gray-700 mb-4">
              We are not an insurance company. We do not underwrite, sell, or issue insurance policies. Licensed insurance agents who work with us are responsible for providing insurance advice and facilitating enrollment in insurance plans.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1e2a5e] mb-4">Eligibility</h2>
            <p className="text-gray-700 mb-4">
              You must be at least 18 years old to use our services. By using our website, you represent and warrant that you meet this age requirement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1e2a5e] mb-4">User Responsibilities</h2>
            <p className="text-gray-700 mb-4">
              When using our services, you agree to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Provide accurate and complete information</li>
              <li>Use the services only for lawful purposes</li>
              <li>Not attempt to interfere with the proper functioning of our website</li>
              <li>Not impersonate any person or entity</li>
              <li>Not use automated systems to access our services without permission</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1e2a5e] mb-4">Consent to Contact</h2>
            <p className="text-gray-700 mb-4">
              By submitting your information through our website, you expressly consent to be contacted by Find The Plan and/or our licensed insurance agent partners at the phone number and email address you provided. This may include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Phone calls (including using auto-dialers)</li>
              <li>Text messages (SMS)</li>
              <li>Emails</li>
            </ul>
            <p className="text-gray-700 mb-4">
              You understand that consent is not required as a condition of purchasing any goods or services. You may revoke your consent at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1e2a5e] mb-4">Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              All content on this website, including text, graphics, logos, images, and software, is the property of Find The Plan or its licensors and is protected by intellectual property laws. You may not copy, modify, distribute, or reproduce any content without our prior written consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1e2a5e] mb-4">Disclaimer of Warranties</h2>
            <p className="text-gray-700 mb-4">
              OUR SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT OUR SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.
            </p>
            <p className="text-gray-700 mb-4">
              We do not guarantee the availability, pricing, or suitability of any health insurance plan. Insurance availability and rates are determined by insurance carriers and may vary based on individual circumstances.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1e2a5e] mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, FIND THE PLAN SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF OUR SERVICES.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1e2a5e] mb-4">Indemnification</h2>
            <p className="text-gray-700 mb-4">
              You agree to indemnify and hold harmless Find The Plan and its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of our services or violation of these terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1e2a5e] mb-4">Licensing Information</h2>
            <p className="text-gray-700 mb-4">
              Find The Plan works with licensed insurance agents who are authorized to sell health insurance in their respective states. All insurance agents are required to maintain proper licensing and comply with applicable state and federal regulations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1e2a5e] mb-4">Third-Party Links</h2>
            <p className="text-gray-700 mb-4">
              Our website may contain links to third-party websites. We are not responsible for the content or practices of these websites. Your use of third-party websites is at your own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1e2a5e] mb-4">Modifications to Terms</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after any changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1e2a5e] mb-4">Governing Law</h2>
            <p className="text-gray-700 mb-4">
              These Terms of Service shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1e2a5e] mb-4">Severability</h2>
            <p className="text-gray-700 mb-4">
              If any provision of these Terms of Service is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1e2a5e] mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms of Service, please contact us at:
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
