"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Calendar, Star, GitBranch } from 'lucide-react'
import Link from 'next/link'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with Next.js, featuring real-time inventory management, payment integration, and admin dashboard.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Tailwind CSS"],
      category: "Full-Stack",
      status: "Completed",
      date: "2024-01",
      github: "https://github.com/yourusername/ecommerce-platform",
      demo: "https://your-ecommerce-demo.vercel.app",
      featured: true,
      stats: {
        stars: 45,
        forks: 12,
        commits: 156
      }
    },
    {
      id: 2,
      title: "Real-Time Chat Application",
      description: "A modern chat application with real-time messaging, file sharing, and video calls using WebRTC and Socket.io.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "Socket.io", "WebRTC", "MongoDB", "Express"],
      category: "Full-Stack",
      status: "Completed",
      date: "2023-11",
      github: "https://github.com/yourusername/chat-app",
      demo: "https://your-chat-app.vercel.app",
      featured: true,
      stats: {
        stars: 32,
        forks: 8,
        commits: 89
      }
    },
    {
      id: 3,
      title: "Task Management Dashboard",
      description: "A comprehensive project management tool with drag-and-drop functionality, team collaboration, and advanced analytics.",
      image: "/api/placeholder/600/400",
      technologies: ["Vue.js", "Laravel", "MySQL", "Redis", "Docker"],
      category: "Frontend",
      status: "In Progress",
      date: "2024-02",
      github: "https://github.com/yourusername/task-manager",
      demo: "https://your-task-manager.vercel.app",
      featured: false,
      stats: {
        stars: 18,
        forks: 5,
        commits: 67
      }
    },
    {
      id: 4,
      title: "Weather Analytics API",
      description: "RESTful API providing detailed weather analytics and forecasts with machine learning predictions.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "FastAPI", "PostgreSQL", "Docker", "ML Models"],
      category: "Backend",
      status: "Completed",
      date: "2023-09",
      github: "https://github.com/yourusername/weather-api",
      demo: "https://your-weather-api.herokuapp.com/docs",
      featured: false,
      stats: {
        stars: 26,
        forks: 7,
        commits: 42
      }
    },
    {
      id: 5,
      title: "Portfolio Website Template",
      description: "A modern, responsive portfolio template built with Next.js and Framer Motion, featuring dark mode and smooth animations.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
      category: "Frontend",
      status: "Completed",
      date: "2023-12",
      github: "https://github.com/yourusername/portfolio-template",
      demo: "https://portfolio-template-demo.vercel.app",
      featured: false,
      stats: {
        stars: 67,
        forks: 23,
        commits: 34
      }
    },
    {
      id: 6,
      title: "Cryptocurrency Tracker",
      description: "Real-time cryptocurrency price tracker with portfolio management, price alerts, and market analysis.",
      image: "/api/placeholder/600/400",
      technologies: ["React Native", "Redux", "Node.js", "CoinGecko API"],
      category: "Mobile",
      status: "Completed",
      date: "2023-10",
      github: "https://github.com/yourusername/crypto-tracker",
      demo: "https://crypto-tracker-demo.vercel.app",
      featured: false,
      stats: {
        stars: 41,
        forks: 15,
        commits: 78
      }
    }
  ]

  const categories = ['All', 'Full-Stack', 'Frontend', 'Backend', 'Mobile']
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = projects.filter(project => 
    selectedCategory === 'All' || project.category === selectedCategory
  )

  const featuredProjects = projects.filter(project => project.featured)

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
              My Projects
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
              A showcase of my latest work and contributions to the developer community
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Highlighting some of my most impactful and innovative projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass-effect rounded-lg overflow-hidden group"
              >
                {/* Project Image */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-600/20 to-gray-800/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-8xl opacity-20">💻</div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-green-500 text-white text-xs rounded-full">
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Calendar size={16} />
                      <span className="text-sm">{project.date}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center space-x-6 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Star size={16} className="mr-1" />
                      {project.stats.stars}
                    </div>
                    <div className="flex items-center">
                      <GitBranch size={16} className="mr-1" />
                      {project.stats.forks}
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                      {project.stats.commits} commits
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors"
                    >
                      <Github size={16} />
                      <span>GitHub</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6 text-gradient">
              All Projects
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore my complete portfolio of work
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card hover:bg-accent text-card-foreground'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-effect rounded-lg overflow-hidden group"
              >
                {/* Project Image */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-600/20 to-gray-800/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-20">⚡</div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      project.status === 'Completed' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-yellow-500 text-black'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                      {project.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {project.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-primary text-primary-foreground rounded text-sm hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink size={14} />
                      <span>Demo</span>
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 border border-border rounded text-sm hover:bg-accent transition-colors"
                    >
                      <Github size={14} />
                      <span>Code</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
