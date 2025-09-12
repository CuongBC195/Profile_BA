"use client"

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Code, Database, Server, Facebook } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const skills = [
    { name: 'Java', icon: Code, level: 88 },
    { name: 'ASP.NET', icon: Server, level: 85 },
    { name: 'Business Analysis', icon: Database, level: 90 },
    { name: 'API Testing', icon: Code, level: 85 },
    { name: 'Figma', icon: Code, level: 80 },
    { name: 'Draw.io', icon: Database, level: 82 },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            <motion.div variants={fadeInUp}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="block">Hello, I'm</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-gray-800">
                  Bui Chi Cuong
                </span>
              </h1>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
                Business Analyst (IT) & Backend Developer
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Business Analyst with a solid IT background, skilled in requirements analysis, 
                business documentation and bridging communication between clients, development teams, 
                and stakeholders. Experienced in Java, ASP.NET API development, and proficient in 
                tools like Draw.io, Figma to support product development.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/projects"
                  className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
                >
                  <span>View Projects</span>
                  <Code size={20} />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/contact"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center space-x-2"
                >
                  <span>Get In Touch</span>
                  <Mail size={20} />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="flex justify-center space-x-6 pt-8"
            >
              {[
                { Icon: Github, href: "https://github.com/CuongBC195", label: "GitHub" },
                { Icon: Facebook, href: "https://www.facebook.com/chicuong.bui.03", label: "Facebook" },
                { Icon: Mail, href: "mailto:cuongbc.work@gmail.com", label: "Email" },
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                  aria-label={label}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown size={32} className="text-white/60" />
        </motion.div>
      </section>

      {/* Skills Section */}
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
              Technical Skills
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass-effect p-6 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  <skill.icon size={24} className="text-primary mr-3" />
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                  <motion.div
                    className="bg-gradient-to-r from-slate-600 to-gray-800 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
                <p className="text-sm text-muted-foreground">{skill.level}% Proficiency</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About Me
              </h2>
              <p className="text-lg mb-6 text-gray-200 leading-relaxed">
                I'm a Business Analyst (IT) with a solid technical background and 
                1+ year of experience in bridging business requirements with technical solutions. 
                I specialize in requirements analysis, business documentation, and stakeholder communication.
              </p>
              <p className="text-lg mb-8 text-gray-200 leading-relaxed">
                Currently pursuing my Bachelor of Information Technology at FPT University Can Tho, 
                I combine academic knowledge with practical experience in Java, ASP.NET development, 
                and business analysis tools like Figma, Draw.io, and Postman.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/about"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowDown size={16} className="rotate-[-90deg]" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-effect p-8 rounded-lg">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white">Experience</span>
                    <span className="text-slate-300 font-semibold">1 year+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white">Projects Completed</span>
                    <span className="text-slate-300 font-semibold">8+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white">Business Tools</span>
                    <span className="text-slate-300 font-semibold">8+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white">Education</span>
                    <span className="text-slate-300 font-semibold">Bachelor IT</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
