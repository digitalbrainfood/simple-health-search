import Link from "next/link";
import Image from "next/image";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-white">
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
          <a href="tel:8888618488" className="hidden md:flex items-center gap-2 text-gray-700 font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            (888) 861-8488
          </a>
          <Link href="/" className="bg-[#c5d86d] hover:bg-[#b5c85d] text-[#1e2a5e] font-semibold px-5 py-2.5 rounded-full transition-colors">
            Find your plan
          </Link>
        </div>
      </nav>

      {/* Thank You Section */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
        {/* Decorative lime shape */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#c5d86d]/30 rounded-br-full z-0"></div>

        <div className="relative z-10 text-center px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1e2a5e] mb-4">
            Thank you for contacting us!
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            We&apos;ll get back to you shortly!
          </p>

          <div className="bg-[#c5d86d] inline-block px-8 py-4 rounded-full">
            <p className="text-gray-800">
              Need help sooner? Call us now at{" "}
              <a href="tel:8888147488" className="font-bold text-[#1e2a5e] hover:underline">
                (888) 814-7488
              </a>{" "}
              for priority assistance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
