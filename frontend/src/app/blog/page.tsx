'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, TrendingUp, User } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function BlogPage() {
  const featuredPost = {
    title: 'How Insider Trading Data Can Give You an Edge in the Market',
    excerpt: 'Learn how to interpret SEC Form 4 filings and use insider trading data to make more informed investment decisions.',
    author: 'VoxTrade Team',
    date: 'April 25, 2026',
    readTime: '8 min read',
    category: 'Education',
    image: '/blog/insider-trading.jpg',
    slug: 'insider-trading-edge',
  }

  const posts = [
    {
      title: 'Top 10 Politician Trades of Q1 2026',
      excerpt: 'A look at the most significant stock trades made by Congress members in the first quarter.',
      author: 'VoxTrade Team',
      date: 'April 20, 2026',
      readTime: '5 min read',
      category: 'Analysis',
      slug: 'top-politician-trades-q1-2026',
    },
    {
      title: 'Understanding the STOCK Act: What Investors Need to Know',
      excerpt: 'A comprehensive guide to the law that requires Congress members to disclose their trades.',
      author: 'VoxTrade Team',
      date: 'April 15, 2026',
      readTime: '6 min read',
      category: 'Education',
      slug: 'understanding-stock-act',
    },
    {
      title: 'How Social Media Moves Markets: The Trump Effect',
      excerpt: 'Analyzing how social media posts from influential figures can impact stock prices.',
      author: 'VoxTrade Team',
      date: 'April 10, 2026',
      readTime: '7 min read',
      category: 'Analysis',
      slug: 'social-media-market-impact',
    },
    {
      title: '5 Biotech Stocks to Watch in 2026',
      excerpt: 'Key FDA decisions and clinical trial results that could move these stocks.',
      author: 'VoxTrade Team',
      date: 'April 5, 2026',
      readTime: '6 min read',
      category: 'Research',
      slug: 'biotech-stocks-2026',
    },
    {
      title: 'The Rise of Retail Investors: How VoxTrade Levels the Playing Field',
      excerpt: 'How technology is democratizing access to market intelligence.',
      author: 'VoxTrade Team',
      date: 'April 1, 2026',
      readTime: '5 min read',
      category: 'Industry',
      slug: 'rise-of-retail-investors',
    },
    {
      title: 'Reading SEC Form 4: A Beginner\'s Guide',
      excerpt: 'Everything you need to know about interpreting insider trading filings.',
      author: 'VoxTrade Team',
      date: 'March 28, 2026',
      readTime: '10 min read',
      category: 'Education',
      slug: 'sec-form-4-guide',
    },
  ]

  const categories = ['All', 'Education', 'Analysis', 'Research', 'Industry', 'News']

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Blog</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Market Insights &
              <br />
              <span className="gradient-text">Trading Education</span>
            </h1>
            <p className="text-xl text-gray-400">
              Learn how to trade smarter with insights from the VoxTrade team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 border-b border-dark-400">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  category === 'All'
                    ? 'bg-primary text-black'
                    : 'bg-dark-100 text-gray-400 hover:text-white hover:bg-dark-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="grid lg:grid-cols-2 gap-8 bg-dark-100 rounded-2xl border border-dark-400 overflow-hidden hover:border-primary/50 transition-all">
                {/* Image */}
                <div className="h-64 lg:h-auto bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <TrendingUp className="w-24 h-24 text-primary/30" />
                </div>
                
                {/* Content */}
                <div className="p-8 flex flex-col justify-center">
                  <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
                    Featured • {featuredPost.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-400 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <User size={14} />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {featuredPost.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div>
                  <div className="card h-full flex flex-col group">
                    {/* Thumbnail */}
                    <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl mb-4 flex items-center justify-center">
                      <TrendingUp className="w-12 h-12 text-primary/30 group-hover:text-primary/50 transition-colors" />
                    </div>
                    
                    {/* Content */}
                    <span className="text-primary text-xs font-semibold uppercase tracking-wider mb-2">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 flex-grow">{post.excerpt}</p>
                    
                    {/* Meta */}
                    <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-dark-400">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="btn-secondary inline-flex items-center gap-2">
              Load More Articles
              <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-dark-100">
        <div className="container-custom max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-400 mb-8">
            Get the latest market insights and trading tips delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-dark-200 border border-dark-400 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none"
            />
            <button className="btn-primary whitespace-nowrap">Subscribe</button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
