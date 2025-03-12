"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HelpCircle } from "lucide-react"
import { WaitlistForm } from "@/components/waitlist-form"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
              <span className="text-white font-semibold">W</span>
            </div>
            <span className="font-semibold">Wira</span>
          </div>

          <nav className="hidden md:block">
            <Link
              href="#"
              className="text-sm font-medium text-gray-900 hover:text-gray-600 border-b-2 border-indigo-600 pb-1"
            >
              Home
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" className="text-sm font-medium" asChild>
              <Link href="#waitlist">Sign Up</Link>
            </Button>
            <Button variant="default" className="text-sm font-medium" asChild>
              <Link href="#waitlist">
                <HelpCircle className="w-4 h-4 mr-2" />
                Help
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-24 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">Connect with Talent</h1>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Discover and match with top professionals globally
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="default"
            className="px-8 py-3 h-auto rounded-lg shadow-md hover:shadow-lg transition-all"
            asChild
          >
            <Link href="#waitlist">Join us now</Link>
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-3 h-auto rounded-lg" asChild>
            <Link href="#waitlist">Request demo</Link>
          </Button>
        </div>
      </section>

      {/* Feature Section (replacing the image section) */}
      <section className="container mx-auto px-4 py-16 bg-white rounded-xl shadow-sm mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Talent Network</h3>
              <p className="text-gray-600">
                Access professionals from around the world with diverse skills and experiences.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Matching</h3>
              <p className="text-gray-600">
                Our AI-powered system connects you with the perfect candidates for your needs.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Platform</h3>
              <p className="text-gray-600">
                Your data is protected with enterprise-grade security and privacy controls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Join Our Waitlist</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Be among the first to experience our platform when we launch. Sign up today to secure early access.
            </p>
          </div>

          <WaitlistForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 bg-white mt-16">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Wira. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

