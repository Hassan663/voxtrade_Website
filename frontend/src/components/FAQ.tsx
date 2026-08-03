'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What is VoxTrade?',
      answer: 'VoxTrade is a mobile app that provides retail investors with real-time insider trades, politician trades, trending stocks, AI-powered market insights, and more. It helps you make smarter investment decisions by following the "smart money."',
    },
    {
      question: 'How does insider trading tracking work?',
      answer: 'We monitor SEC Form 4 filings in real-time. When company executives (CEOs, CFOs, directors, etc.) buy or sell their company\'s stock, they must report it to the SEC. We process these filings and alert you within hours of submission.',
    },
    {
      question: 'Is politician trade tracking legal?',
      answer: 'Yes! Under the STOCK Act of 2012, members of Congress are required to disclose their stock trades within 45 days. This information is public record. We simply aggregate and present this data in an easy-to-use format.',
    },
    {
      question: 'What is the Trump Tracker?',
      answer: 'The Trump Tracker monitors Donald Trump\'s Truth Social posts and alerts you when there\'s a market-relevant statement. Our AI analyzes each post for potential market impact and identifies related tickers.',
    },
    {
      question: 'Is VoxTrade free?',
      answer: 'Yes! VoxTrade has a free tier that includes market news, trending tickers, and the Trump Tracker. For advanced features like insider trades, politician trades, and VoxAI, you can upgrade to Standard ($19/month) or Pro ($39/month).',
    },
    {
      question: 'What is VoxAI?',
      answer: 'VoxAI is our AI-powered chatbot that answers your market questions. It combines real-time data, insider activity, social sentiment, and news to provide intelligent analysis. Available on the Pro plan.',
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Absolutely! You can cancel your subscription at any time through the app settings. There are no cancellation fees or long-term commitments. Your access continues until the end of your billing period.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, we take security seriously. VoxTrade uses bank-level encryption (256-bit SSL) to protect your data. We never share your personal information with third parties, and we don\'t have access to your brokerage accounts.',
    },
    {
      question: 'Do you provide financial advice?',
      answer: 'No, VoxTrade is for informational purposes only. We provide data and insights, but we do not provide personalized financial advice. Always do your own research and consider consulting a financial advisor before making investment decisions.',
    },
    {
      question: 'Which platforms is VoxTrade available on?',
      answer: 'VoxTrade is available on iOS (iPhone and iPad) and Android devices. You can download it for free from the App Store or Google Play Store.',
    },
  ]

  return (
    <section id="faq" className="section-padding relative overflow-hidden bg-dark-100">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -40, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-primary/8 blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 50, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/3 right-0 w-[400px] h-[400px] rounded-full bg-secondary/8 blur-[120px] pointer-events-none"
      />

      <div className="container-custom relative z-10 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Frequently Asked
            <br />
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400">
            Everything you need to know about VoxTrade.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`bg-white/5 backdrop-blur-xl border rounded-xl overflow-hidden transition-all ${
                openIndex === index
                  ? 'border-primary/40 shadow-lg shadow-primary/10'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-semibold pr-4 text-sm sm:text-base">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                    openIndex === index ? 'bg-primary text-black shadow-lg shadow-primary/40' : 'bg-white/5 border border-white/10 text-white'
                  }`}
                >
                  {openIndex === index ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-5 text-sm sm:text-base text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <a
            href="mailto:brendan@voxtradeapp.com"
            className="text-primary hover:text-primary-600 font-semibold transition-colors"
          >
            Contact our support team →
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
