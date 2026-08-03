'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>
            <p className="text-gray-400 mb-8">Last updated: April 27, 2026</p>

            <div className="prose prose-invert prose-lg max-w-none">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">1. Agreement to Terms</h2>
                  <p className="text-gray-300 leading-relaxed">
                    By accessing or using VoxTrade, you agree to be bound by these Terms of Service 
                    and our Privacy Policy. If you disagree with any part of these terms, you may 
                    not access the service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">2. Description of Service</h2>
                  <p className="text-gray-300 leading-relaxed">
                    VoxTrade provides market intelligence including insider trade tracking, 
                    politician trade monitoring, trending stock analysis, and AI-powered insights. 
                    The service is available through our mobile applications and website.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">3. Not Financial Advice</h2>
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 mb-4">
                    <p className="text-yellow-200 font-medium">
                      ⚠️ IMPORTANT DISCLAIMER
                    </p>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    VoxTrade is for informational purposes only and does NOT provide financial advice. 
                    The information provided should not be construed as investment advice, 
                    recommendations, or solicitations to buy or sell securities.
                  </p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-4">
                    <li>We are not a registered investment advisor</li>
                    <li>Past performance does not guarantee future results</li>
                    <li>Always conduct your own research before investing</li>
                    <li>Consider consulting a licensed financial advisor</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">4. User Accounts</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">When you create an account, you agree to:</p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the security of your password</li>
                    <li>Accept responsibility for all activities under your account</li>
                    <li>Notify us immediately of any unauthorized use</li>
                    <li>Be at least 18 years old</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">5. Subscription and Payments</h2>
                  <h3 className="text-xl font-medium mb-3">Billing</h3>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>Subscriptions are billed in advance on a monthly or yearly basis</li>
                    <li>All fees are non-refundable unless otherwise stated</li>
                    <li>Prices may change with 30 days notice</li>
                  </ul>

                  <h3 className="text-xl font-medium mb-3 mt-6">Cancellation</h3>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>You may cancel your subscription at any time</li>
                    <li>Access continues until the end of the billing period</li>
                    <li>No partial refunds for unused time</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">6. Acceptable Use</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">You agree NOT to:</p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>Use the service for any illegal purpose</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Scrape, copy, or redistribute our data without permission</li>
                    <li>Use automated systems to access the service excessively</li>
                    <li>Impersonate others or provide false information</li>
                    <li>Interfere with or disrupt the service</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">7. Intellectual Property</h2>
                  <p className="text-gray-300 leading-relaxed">
                    All content, features, and functionality of VoxTrade are owned by us and 
                    protected by copyright, trademark, and other intellectual property laws. 
                    You may not copy, modify, or distribute our content without permission.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">8. Data Accuracy</h2>
                  <p className="text-gray-300 leading-relaxed">
                    While we strive to provide accurate data from official sources (SEC, Congress, etc.), 
                    we do not guarantee the accuracy, completeness, or timeliness of any information. 
                    Data may be delayed or contain errors. Always verify information before making 
                    investment decisions.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">9. Limitation of Liability</h2>
                  <p className="text-gray-300 leading-relaxed">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, VOXTRADE SHALL NOT BE LIABLE FOR ANY 
                    INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING 
                    LOSS OF PROFITS, DATA, OR INVESTMENT LOSSES, ARISING FROM YOUR USE OF THE SERVICE.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">10. Indemnification</h2>
                  <p className="text-gray-300 leading-relaxed">
                    You agree to indemnify and hold harmless VoxTrade and its officers, directors, 
                    employees, and agents from any claims, damages, or expenses arising from your 
                    use of the service or violation of these terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">11. Changes to Terms</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We reserve the right to modify these terms at any time. We will provide notice 
                    of significant changes via email or in-app notification. Continued use of the 
                    service after changes constitutes acceptance of the new terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">12. Governing Law</h2>
                  <p className="text-gray-300 leading-relaxed">
                    These terms shall be governed by and construed in accordance with the laws of 
                    the State of Montana, without regard to conflict of law provisions.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">13. Contact</h2>
                  <p className="text-gray-300 leading-relaxed">
                    For questions about these Terms of Service:
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
