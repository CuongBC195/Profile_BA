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
      title: "Senior Full-Stack Developer",
      company: "Tech Company Inc.",
      period: "2022 - Present",
      description: "Leading development of scalable web applications using React, Node.js, and cloud technologies.",
      technologies: ["React", "Next.js", "Node.js", "AWS", "TypeScript"]
    },
    {
      title: "Full-Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client projects, focusing on performance and user experience.",
      technologies: ["Vue.js", "Laravel", "MySQL", "Docker"]
    },
    {
      title: "Frontend Developer",
      company: "StartupX",
      period: "2019 - 2020",
      description: "Built responsive web interfaces and improved application performance by 40%.",
      technologies: ["React", "JavaScript", "Sass", "Webpack"]
    }
  ]

  const achievements = [
    "🏆 Built 50+ successful web applications",
    "🚀 Improved application performance by 60% on average",
    "👥 Led a team of 5 developers",
    "📱 Expertise in responsive design and mobile-first approach",
    "☁️ Cloud architecture and deployment specialist",
    "🔧 Strong problem-solving and debugging skills"
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
              Passionate developer with a mission to create amazing digital experiences
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
                <p className="text-muted-foreground leading-relaxed">
                  Hello! I'm a passionate full-stack developer with over 5 years of experience 
                  in creating digital solutions that make a difference. My journey in technology 
                  started during my computer science studies, where I discovered my love for 
                  problem-solving and building innovative applications.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Throughout my career, I've had the privilege of working with diverse teams 
                  and clients, from early-stage startups to established enterprises. This 
                  experience has taught me the importance of not just writing clean code, 
                  but also understanding business needs and user perspectives.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in continuous learning and staying up-to-date with the latest 
                  technologies. Whether it's exploring new frameworks, attending tech 
                  conferences, or contributing to open-source projects, I'm always looking 
                  for ways to grow and improve my skills.
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
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
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
                    <span>Vietnam</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Experience</span>
                    <span>5+ Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Focus</span>
                    <span>Full-Stack</span>
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
