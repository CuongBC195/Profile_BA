"use client"

import { motion } from 'framer-motion'
import { Calendar, MapPin, Award, Heart, Code2, Lightbulb } from 'lucide-react'

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const experiences = [
    {
      title: "Business Analyst",
      company: "Health Management System - HMS",
      period: "May 2025 - Sep 2025",
      description: "Directed the development team, set project vision, and established detailed roadmaps and milestones. Prepared comprehensive documentation (BRD, SRS) and defined business flows, user journeys, and system logic.",
      technologies: ["ASP.NET", "Business Analysis", "API Development", "System Integration"]
    },
    {
      title: "Business Analyst",
      company: "Mom and Baby - MAB",
      period: "Sep 2024 - Dec 2024",
      description: "Drove the planning and ideation for a multi-store e-commerce platform targeting the mom-and-baby retail sector. Defined product workflows, customer journeys, and store management logic.",
      technologies: ["Java Jakarta Servlet", "E-commerce", "UI/UX Design", "Product Management"]
    },
    {
      title: "Business Analyst Intern",
      company: "UTA Solution",
      period: "Jun 2024 - Aug 2024",
      description: "Conducted customer research and gathered requirements to support early-stage project planning and solution design. Collaborated with stakeholders to understand business objectives.",
      technologies: ["Requirements Analysis", "Stakeholder Management", "Agile", "Documentation"]
    },
    {
      title: "Business Analyst",
      company: "Find Jobs 3Do - FJ3Do",
      period: "Jun 2024 - May 2024",
      description: "Planned and defined the structure of a recruitment platform connecting job seekers and employers. Designed system workflows, user journeys, and data models.",
      technologies: ["Java Jakarta Servlet", "System Design", "User Experience", "Platform Architecture"]
    }
  ]

  const achievements = [
    "📋 Expert in requirements analysis and business documentation (BRD, SRS, Use Case, User Flow)",
    "� Strong in bridging communication between clients, development teams, and stakeholders",
    "🛠️ Proficient in business analysis tools: Postman, Figma, Balsamiq, Canva, Draw.io, Lucidchart",
    "� Backend development experience with Java and ASP.NET API Development",
    "🎯 Skilled in creating process models and system logic diagrams",
    "🚀 Experience in e-commerce and recruitment platform development",
    "🏗️ Strong foundation in software engineering principles and project management",
    "� Certified in Project Management Principles and Practices, User Experience Research and Design"
  ]

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
              About Me
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
              Business Analyst (IT) bridging technology and business needs in Can Tho City
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Introduction */}
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="prose prose-lg dark:prose-invert max-w-none"
              >
                <h2 className="text-3xl font-bold mb-6 text-gradient">My Journey</h2>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  Hello! I'm Bui Chi Cuong, a Business Analyst (IT) with a solid IT background, 
                  skilled in requirements analysis, business documentation (BRD, SRS, Use Case, User Flow), 
                  and bridging communication between clients, development teams, and stakeholders. 
                  Currently pursuing my Bachelor of Information Technology at FPT University Campus Can Tho.
                </p>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  Throughout my career journey, I've had the privilege of working on diverse projects 
                  from healthcare management systems to e-commerce platforms and recruitment solutions. 
                  This experience has taught me the importance of not just understanding technical 
                  requirements, but also translating business needs into actionable development plans.
                </p>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  I believe in continuous learning and staying up-to-date with the latest 
                  business analysis methodologies and development technologies. My technical skills 
                  in Java and ASP.NET complement my analytical abilities, allowing me to better 
                  communicate with development teams and ensure project success.
                </p>
              </motion.div>

              {/* Experience */}
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-8 text-gradient">Experience</h2>
                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="glass-effect p-6 rounded-lg"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold">{exp.title}</h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                        <div className="flex items-center text-muted-foreground mt-2 md:mt-0">
                          <Calendar size={16} className="mr-2" />
                          {exp.period}
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4 text-justify">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Info */}
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="glass-effect p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <MapPin size={20} className="mr-2 text-primary" />
                  Quick Info
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location</span>
                    <span>Can Tho City, Vietnam</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Experience</span>
                    <span>1 year+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Focus</span>
                    <span>Business Analysis</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Education</span>
                    <span>Bachelor IT (2021-2025)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Availability</span>
                    <span className="text-green-500">Open to work</span>
                  </div>
                </div>
              </motion.div>

              {/* Key Achievements */}
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="glass-effect p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Award size={20} className="mr-2 text-primary" />
                  Key Achievements
                </h3>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-sm text-muted-foreground"
                    >
                      {achievement}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Interests */}
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="glass-effect p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Heart size={20} className="mr-2 text-primary" />
                  Interests
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Code2, label: "Coding" },
                    { icon: Lightbulb, label: "Innovation" },
                    { icon: Award, label: "Learning" },
                    { icon: Heart, label: "Open Source" },
                  ].map((interest, index) => (
                    <motion.div
                      key={interest.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <interest.icon size={24} className="mx-auto text-primary mb-2" />
                      <p className="text-sm text-muted-foreground">{interest.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
