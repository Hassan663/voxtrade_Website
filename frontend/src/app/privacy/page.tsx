'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
            <p className="text-gray-400 mb-8">Last updated: April 27, 2026</p>

            <div className="prose prose-invert prose-lg max-w-none">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">1. Introduction</h2>
                  <p className="text-gray-300 leading-relaxed">
                    VoxTrade ("we," "our," or "us") is committed to protecting your privacy. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard 
                    your information when you use our mobile application and website.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">2. Information We Collect</h2>
                  <h3 className="text-xl font-medium mb-3">Personal Information</h3>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>Name and email address when you create an account</li>
                    <li>Payment information when you subscribe (processed by Stripe)</li>
                    <li>Usage data and app interactions</li>
                    <li>Device information and identifiers</li>
                  </ul>

                  <h3 className="text-xl font-medium mb-3 mt-6">Automatically Collected Information</h3>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>IP address and location data</li>
                    <li>Browser type and device information</li>
                    <li>App usage patterns and preferences</li>
                    <li>Crash reports and performance data</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">3. How We Use Your Information</h2>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>To provide and maintain our services</li>
                    <li>To process your transactions and subscriptions</li>
                    <li>To send you alerts and notifications you've opted into</li>
                    <li>To improve our app and develop new features</li>
                    <li>To communicate with you about updates and offers</li>
                    <li>To detect and prevent fraud or abuse</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">4. Data Sharing</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We do not sell your personal information. We may share data with:
                  </p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li><strong>Service Providers:</strong> Companies that help us operate (payment processors, cloud hosting, analytics)</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                    <li><strong>Business Transfers:</strong> In connection with a merger or acquisition</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">5. Data Security</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We implement industry-standard security measures including:
                  </p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-4">
                    <li>256-bit SSL encryption for all data transmission</li>
                    <li>Secure data storage with encryption at rest</li>
                    <li>Regular security audits and penetration testing</li>
                    <li>Two-factor authentication options</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">6. Your Rights</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">You have the right to:</p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>Access your personal data</li>
                    <li>Correct inaccurate data</li>
                    <li>Delete your account and data</li>
                    <li>Export your data</li>
                    <li>Opt out of marketing communications</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">7. Cookies and Tracking</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We use cookies and similar technologies to improve your experience, 
                    analyze usage, and deliver personalized content. You can control cookies 
                    through your browser settings.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">8. Children's Privacy</h2>
                  <p className="text-gray-300 leading-relaxed">
                    VoxTrade is not intended for users under 18 years of age. We do not 
                    knowingly collect information from children.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">9. Changes to This Policy</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you 
                    of any changes by posting the new policy on this page and updating the 
                    "Last updated" date.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">10. Contact Us</h2>
                  <p className="text-gray-300 leading-relaxed">
                    If you have questions about this Privacy Policy, please contact us at:
                  </p>
                  <div className="mt-4 bg-dark-100 rounded-xl p-6 border border-dark-400">
                    <p className="text-gray-300">Email: brendan@voxtradeapp.com</p>
                    <p className="text-gray-300">Address: Kalispell, Montana, USA</p>
                  </div>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
