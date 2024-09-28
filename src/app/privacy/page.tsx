'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function PrivacyPolicyComponent() {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "information-we-collect", title: "1. Information We Collect" },
    { id: "how-we-use-your-information", title: "2. How We Use Your Information" },
    { id: "how-we-share-your-information", title: "3. How We Share Your Information" },
    { id: "data-security", title: "4. Data Security" },
    { id: "your-rights", title: "5. Your Rights" },
    { id: "third-party-links", title: "6. Third-Party Links" },
    { id: "international-data-transfers", title: "7. International Data Transfers" },
    { id: "childrens-privacy", title: "8. Children's Privacy" },
    { id: "changes-to-this-privacy-policy", title: "9. Changes to This Privacy Policy" },
    { id: "contact-us", title: "10. Contact Us" },
  ]

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">Privacy Policy</CardTitle>
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
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p>
                At DoShare.me, we prioritize your privacy. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our services. By accessing or using DoShare.me, you agree to this policy. Please read it carefully.
              </p>
            </section>

            <section id="information-we-collect" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
              <p>We collect the following types of information to provide and improve our services:</p>
              <h3 className="text-xl font-semibold mt-4 mb-2">a) Personal Information</h3>
              <p>When you register for an account, use our services, or contact us, we may collect:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Name</li>
                <li>Email address</li>
                <li>Contact details</li>
                <li>Payment information (if applicable)</li>
              </ul>
              <h3 className="text-xl font-semibold mt-4 mb-2">b) Non-Personal Information</h3>
              <p>We may collect non-personal data including:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Usage patterns and navigation on DoShare.me</li>
              </ul>
              <h3 className="text-xl font-semibold mt-4 mb-2">c) File Information</h3>
              <p>
                When you upload, share, or sync files, the content of the files and related metadata (such as file size, type, and creation date) may be processed but not stored permanently unless opted for.
              </p>
            </section>

            <section id="how-we-use-your-information" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
              <p>We use the collected information for the following purposes:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>To create and manage your account</li>
                <li>To provide, maintain, and improve our services</li>
                <li>To communicate with you regarding updates, support, and marketing (if consented)</li>
                <li>To process payments (if applicable)</li>
                <li>To ensure the security and integrity of our platform</li>
              </ul>
            </section>

            <section id="how-we-share-your-information" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. How We Share Your Information</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. However, we may share your information in the following situations:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>
                  <strong>With Service Providers:</strong> We may share your data with third-party service providers to help with operational tasks such as hosting, analytics, payment processing, or customer support.
                </li>
                <li>
                  <strong>For Legal Reasons:</strong> We may disclose your data if required by law or in response to legal processes (e.g., subpoenas or court orders).
                </li>
                <li>
                  <strong>Business Transfers:</strong> In the event of a merger, acquisition, or asset sale, your data may be transferred as part of the business assets.
                </li>
              </ul>
            </section>

            <section id="data-security" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
              <p>
                We take appropriate measures to safeguard your information from unauthorized access, alteration, disclosure, or destruction. However, please be aware that no security measures are foolproof, and we cannot guarantee 100% security of your data.
              </p>
            </section>

            <section id="your-rights" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
              <p>You have the following rights concerning your personal data:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>
                  <strong>Access and Correction:</strong> You can access and update your personal information through your account settings.
                </li>
                <li>
                  <strong>Data Deletion:</strong> You may request the deletion of your personal data by contacting us at <a href="mailto:privacy@doshare.me" className="text-blue-600 hover:underline">privacy@doshare.me</a>.
                </li>
                <li>
                  <strong>Opt-Out of Marketing Communications:</strong> If you have opted into marketing communications, you can opt out at any time by following the unsubscribe instructions in the email or by contacting us.
                </li>
              </ul>
            </section>

            <section id="third-party-links" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Third-Party Links</h2>
              <p>
                Our platform may contain links to third-party websites. We are not responsible for the privacy practices or content of these sites. We recommend reviewing their privacy policies before providing personal information.
              </p>
            </section>

            <section id="international-data-transfers" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. International Data Transfers</h2>
              <p>
                If you are located outside of the country where DoShare.me servers are based, please be aware that your information may be transferred internationally. By using our services, you consent to the transfer of your information across borders.
              </p>
            </section>

            <section id="childrens-privacy" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Children's Privacy</h2>
              <p>
                Our services are not directed to children under 13, and we do not knowingly collect personal information from children. If we discover that we have collected personal data from a child under 13 without parental consent, we will take steps to delete such information.
              </p>
            </section>

            <section id="changes-to-this-privacy-policy" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. When we do, we will revise the "Effective Date" at the top of this policy. Your continued use of DoShare.me after changes are made indicates your acceptance of the new policy.
              </p>
            </section>

            <section id="contact-us" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
              <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Email: <a href="mailto:privacy@doshare.me" className="text-blue-600 hover:underline">privacy@doshare.me</a></li>
                <li>Mailing Address: 402A, Rejoice Tower, Sikka Karmic Greens, Sector -78, Noida, India </li>
                <li>Support: <a href="/support" className="text-blue-600 hover:underline">https://doshare.me/support</a></li>
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