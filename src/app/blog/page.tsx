"use client"

import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, Search, Tag } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const blogPosts = [
    {
      id: 1,
      title: "Building Modern Web Applications with Next.js 14",
      excerpt: "Learn how to leverage the latest features in Next.js 14 to build fast, scalable web applications with server components and improved routing.",
      category: "Next.js",
      date: "2024-01-15",
      readTime: "8 min read",
      image: "/api/placeholder/600/300",
      tags: ["Next.js", "React", "SSR", "Performance"]
    },
    {
      id: 2,
      title: "Mastering TypeScript: Advanced Patterns and Best Practices",
      excerpt: "Dive deep into TypeScript's advanced features including conditional types, mapped types, and how to build type-safe applications.",
      category: "TypeScript",
      date: "2024-01-10",
      readTime: "12 min read",
      image: "/api/placeholder/600/300",
      tags: ["TypeScript", "JavaScript", "Best Practices"]
    },
    {
      id: 3,
      title: "State Management in React: Zustand vs Redux Toolkit",
      excerpt: "Compare modern state management solutions and learn when to use each approach in your React applications.",
      category: "React",
      date: "2024-01-05",
      readTime: "10 min read",
      image: "/api/placeholder/600/300",
      tags: ["React", "State Management", "Zustand", "Redux"]
    },
    {
      id: 4,
      title: "Building RESTful APIs with Node.js and Express",
      excerpt: "A comprehensive guide to creating robust, scalable APIs with proper error handling, validation, and security practices.",
      category: "Node.js",
      date: "2023-12-28",
      readTime: "15 min read",
      image: "/api/placeholder/600/300",
      tags: ["Node.js", "Express", "API", "Backend"]
    },
    {
      id: 5,
      title: "CSS Grid vs Flexbox: When to Use Which",
      excerpt: "Understanding the differences between CSS Grid and Flexbox and how to choose the right layout method for your projects.",
      category: "CSS",
      date: "2023-12-20",
      readTime: "6 min read",
      image: "/api/placeholder/600/300",
      tags: ["CSS", "Layout", "Grid", "Flexbox"]
    },
    {
      id: 6,
      title: "Deploying Applications to AWS: A Complete Guide",
      excerpt: "Step-by-step guide to deploying your applications to AWS using various services like EC2, S3, and CloudFront.",
      category: "DevOps",
      date: "2023-12-15",
      readTime: "20 min read",
      image: "/api/placeholder/600/300",
      tags: ["AWS", "DevOps", "Deployment", "Cloud"]
    }
  ]

  const categories = ['All', 'Next.js', 'React', 'TypeScript', 'Node.js', 'CSS', 'DevOps']

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Tech Blog
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
              Sharing insights, tutorials, and experiences in web development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-6 mb-12"
          >
            {/* Search */}
            <div className="relative flex-1">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card hover:bg-accent text-card-foreground'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-effect rounded-lg overflow-hidden group cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-600/20 to-gray-800/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-20">📝</div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-muted-foreground mb-4 line-clamp-3 text-justify">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                      >
                        <Tag size={10} className="mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link 
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    Read More
                    <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-muted-foreground text-lg">
                No articles found matching your criteria.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Subscribe to my newsletter for the latest tutorials and insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
