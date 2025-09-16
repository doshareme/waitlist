'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function TermsOfServiceComponent() {
  const sections = [
    { id: "introduction", title: "1. Introduction" },
    { id: "acceptance-of-terms", title: "2. Acceptance of Terms" },
    { id: "description-of-service", title: "3. Description of Service" },
    { id: "user-registration", title: "4. User Registration" },
    { id: "user-responsibilities", title: "5. User Responsibilities" },
    { id: "intellectual-property", title: "6. Intellectual Property" },
    { id: "privacy-and-data-protection", title: "7. Privacy and Data Protection" },
    { id: "payment-terms", title: "8. Payment Terms" },
    { id: "termination", title: "9. Termination" },
    { id: "disclaimers", title: "10. Disclaimers" },
    { id: "limitation-of-liability", title: "11. Limitation of Liability" },
    { id: "indemnification", title: "12. Indemnification" },
    { id: "governing-law", title: "13. Governing Law" },
    { id: "changes-to-terms", title: "14. Changes to Terms" },
    { id: "contact-us", title: "15. Contact Us" },
  ]

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">Terms of Service</CardTitle>
            <p className="text-center text-gray-500 mt-2">Effective Date: September 26, 2024</p>
          </CardHeader>
          <CardContent>
            <nav className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
              <ul className="space-y-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <Link href={`#${section.id}`} className="text-blue-600 hover:underline">
                      {section.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <section id="introduction" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p>
                Welcome to DoShare.me. These Terms of Service ("Terms") govern your use of DoShare.me's website, services, and products, including our Personal Cloud product (collectively, the "Service"). Please read these Terms carefully before using the Service.
              </p>
            </section>

            <section id="acceptance-of-terms" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Acceptance of Terms</h2>
              <p>
                By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the Service.
              </p>
            </section>

            <section id="description-of-service" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Description of Service</h2>
              <p>
                DoShare.me provides a secure cloud storage and file sharing service, including our Personal Cloud product. Our service includes end-to-end encryption for files uploaded through the Personal Cloud product, ensuring that your data remains private and secure.
              </p>
            </section>

            <section id="user-registration" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. User Registration</h2>
              <p>
                To use certain features of the Service, you must register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
              </p>
            </section>

            <section id="user-responsibilities" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. User Responsibilities</h2>
              <p>You are responsible for:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Maintaining the confidentiality of your account and password</li>
                <li>Restricting access to your computer and account</li>
                <li>Ensuring that your use of the Service complies with applicable laws and regulations</li>
                <li>All activities that occur under your account</li>
                <li>Properly managing and deleting your files as needed</li>
              </ul>
              <p className="mt-4">
                You must not use the Service for any illegal or unauthorized purpose. You must not, in the use of the Service, violate any laws in your jurisdiction.
              </p>
            </section>

            <section id="intellectual-property" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
              <p>
                The Service and its original content, features, and functionality are and will remain the exclusive property of DoShare.me and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of DoShare.me.
              </p>
            </section>

            <section id="privacy-and-data-protection" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Privacy and Data Protection</h2>
              <p>
                Your privacy is important to us. Our Privacy Policy, which is incorporated into these Terms, explains how we collect, use, and protect your personal information. By using our Service, you agree to the collection and use of information in accordance with our Privacy Policy.
              </p>
              <p className="mt-4">
                For files uploaded through our Personal Cloud product, we employ end-to-end encryption by default. This means that your files are encrypted before they leave your device, and we do not have access to the contents of your files. You have the option to disable encryption for specific files or folders, but we strongly recommend keeping encryption enabled for maximum security.
              </p>
            </section>

            <section id="payment-terms" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Payment Terms</h2>
              <p>
                Some aspects of the Service may be provided for a fee. You agree to pay all fees associated with your use of the Service. We may change our fees at any time by posting the changes on the Site 30 days prior to the effective date of the change.
              </p>
            </section>

            <section id="termination" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
              <p>
                We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms. Upon termination, your right to use the Service will immediately cease.
              </p>
            </section>

            <section id="disclaimers" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Disclaimers</h2>
              <p>
                The Service is provided on an "AS IS" and "AS AVAILABLE" basis. DoShare.me does not warrant that the Service will be uninterrupted, timely, secure, or error-free. While we employ end-to-end encryption for files in our Personal Cloud product, we do not guarantee absolute security or privacy of your data during transmission over the internet.
              </p>
            </section>

            <section id="limitation-of-liability" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">11. Limitation of Liability</h2>
              <p>
                In no event shall DoShare.me, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
              </p>
            </section>

            <section id="indemnification" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">12. Indemnification</h2>
              <p>
                You agree to defend, indemnify and hold harmless DoShare.me and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of a) your use and access of the Service, or b) a breach of these Terms.
              </p>
            </section>

            <section id="governing-law" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">13. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of Uttar Pradesh, India, without regard to its conflict of law provisions.
              </p>
            </section>

            <section id="changes-to-terms" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">14. Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
              </p>
            </section>

            <section id="contact-us" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">15. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Email: <a href="mailto:legal@doshare.me" className="text-blue-600 hover:underline">legal@doshare.me</a></li>
                <li>Mailing Address: 402A, Rejoice Tower, Sikka Karmic Greens, Sector 78, Noida - India</li>
                <li>Support: <a href="/support" className="text-blue-600 hover:underline">https://doshare.me/support</a></li>
                <li>Phone: <a href="tel:+919522692877">+91 9522692877</a></li>
              </ul>
            </section>

            <div className="mt-8 text-center">
              <Button asChild>
                <Link href="/">Return to Home</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
