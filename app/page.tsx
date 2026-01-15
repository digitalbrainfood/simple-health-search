"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useState } from "react";
import { useRouter } from "next/navigation";

const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
  "Wisconsin", "Wyoming"
];

export default function Home() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    state: "",
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      alert("Please acknowledge the Privacy Policy and Licensing information.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/submit-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push("/thank-you");
      } else {
        alert("There was an error submitting the form. Please try again.");
      }
    } catch {
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Ringba Script */}
      <Script
        src="//b-js.ringba.com/CA2867709378390131869"
        strategy="afterInteractive"
      />

      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
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
          <div className="hidden md:flex items-center gap-6 text-gray-700 text-sm font-medium">
            <Link href="#" className="hover:text-[#1e2a5e]">Medicare</Link>
            <Link href="#" className="hover:text-[#1e2a5e]">Family Caregiver</Link>
            <Link href="#" className="hover:text-[#1e2a5e]">Health Insurance</Link>
            <Link href="#" className="hover:text-[#1e2a5e]">Latest Insights</Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:+18337411902" className="hidden md:flex items-center gap-2 text-gray-700 font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            (833) 741-1902
          </a>
          <button className="bg-[#c5d86d] hover:bg-[#b5c85d] text-[#1e2a5e] font-semibold px-5 py-2.5 rounded-full transition-colors">
            Find your plan
          </button>
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center right",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/30"></div>
        </div>

        {/* Decorative lime shape */}
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#c5d86d]/30 rounded-tr-full z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="pt-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1e2a5e] leading-tight mb-4">
              Get Health Insurance Coverage<br />
              <span className="text-[#c5d86d]">Starting As Soon As Tomorrow!</span>
            </h1>

            <p className="text-gray-700 mb-6 max-w-xl">
              <strong>We&apos;re here to help you find the perfect plan for your needs.</strong> Our team has access to every plan available – including Private and Marketplace options – and takes an unbiased approach at helping you choose coverage and complete the enrollment. Best of all, our services are <strong>completely free of charge</strong>.
            </p>

            <p className="text-gray-700 mb-8">
              Simply fill out the form or call <a href="tel:+18337411902" className="text-[#c5d86d] font-semibold hover:underline">(833) 741-1902</a> to discuss your coverage options today.
            </p>

            <p className="text-gray-600 mb-4">Our licensed specialists will help you:</p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Image src="/images/check-mark.svg" alt="" width={24} height={24} className="mt-1 flex-shrink-0" />
                <span className="text-[#1e2a5e] font-semibold">Find The Right Plan In As Little As 15 Minutes.</span>
              </li>
              <li className="flex items-start gap-3">
                <Image src="/images/check-mark.svg" alt="" width={24} height={24} className="mt-1 flex-shrink-0" />
                <span className="text-[#1e2a5e] font-semibold">Provide Access To All Carriers And Plans Available To You.</span>
              </li>
              <li className="flex items-start gap-3">
                <Image src="/images/check-mark.svg" alt="" width={24} height={24} className="mt-1 flex-shrink-0" />
                <span className="text-[#1e2a5e] font-semibold">Apply For Any Available Tax Credits Or Subsidies.</span>
              </li>
              <li className="flex items-start gap-3">
                <Image src="/images/check-mark.svg" alt="" width={24} height={24} className="mt-1 flex-shrink-0" />
                <span className="text-[#1e2a5e] font-semibold">Enroll In A Plan With Coverage Beginning As Soon As The Next Day.</span>
              </li>
            </ul>
          </div>

          {/* Right Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h2 className="text-[#c5d86d] text-xl font-medium mb-6 italic">Let&apos;s Explore Your Coverage Options.</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-[#c5d86d] transition-colors"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-[#c5d86d] transition-colors"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-[#c5d86d] transition-colors"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-[#c5d86d] transition-colors"
                />
              </div>

              <div>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-[#c5d86d] transition-colors text-gray-500"
                >
                  <option value="">-Select State-</option>
                  {US_STATES.map((state) => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-start gap-3 pt-4">
                <input
                  type="checkbox"
                  name="consent"
                  id="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 rounded border-gray-300 accent-[#c5d86d]"
                />
                <label htmlFor="consent" className="text-sm text-gray-600">
                  I acknowledge Find The Plan&apos;s <Link href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link> and <Link href="/terms-of-service" className="text-blue-600 hover:underline">Licensing information</Link>.
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#c5d86d] hover:bg-[#b5c85d] text-[#1e2a5e] font-semibold py-3 px-6 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-4"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-white py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs text-gray-500 leading-relaxed">
            By submitting this form, you authorize Lighthouse Insurance Group, LLC, and/or its affiliates to contact you at the email address and phone number provided (even if the number you provided is on the state or national do not call registry). This contact may include providing you with insurance quotes, policy and benefit information, and/or marketing information. The company may contact you using live operators, auto-dialers, or emails. You acknowledge that you are not required to consent to contact as a condition of receiving services and that you may revoke consent at any time. This website may not display all data on Qualified Health Plans (QHPs) being offered in your state through the Health Insurance Marketplace℠ website. To see all available data on QHP options in your state, go to the Health Insurance Marketplace℠ website at <a href="https://healthcare.gov" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">HealthCare.gov</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
