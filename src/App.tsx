import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Brain, MessageSquare, Code, Database, Cloud, ArrowRight, Mail, Github, Linkedin, Download, Zap, Target, TrendingUp, CheckCircle, ExternalLink, Cpu, Bot, Lightbulb, Rocket, Users, Award, Terminal, FileText, Send, MapPin, Phone, ChevronRight, Star, Play } from 'lucide-react'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
}

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
}

// Animated background
const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Grid pattern */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(99,97,236,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,97,236,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black_40%,transparent_100%)]" />

    {/* Gradient orbs */}
    <motion.div
      className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-500/15 rounded-full blur-[120px]"
      animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-500/15 rounded-full blur-[100px]"
      animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.2, 0.4] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    />
    <motion.div
      className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-fuchsia-500/10 rounded-full blur-[80px]"
      animate={{ x: [-50, 50, -50], y: [-30, 30, -30] }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
)

// Floating shapes
const FloatingShapes = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute border border-white/10 rounded-lg"
        style={{
          width: Math.random() * 60 + 40,
          height: Math.random() * 60 + 40,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -30, 0],
          rotate: [0, 180, 360],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: Math.random() * 10 + 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 5,
        }}
      />
    ))}
  </div>
)

// Section title component
const SectionTitle = ({ subtitle, title, description }: { subtitle: string, title: string, description: string }) => (
  <motion.div
    className="text-center mb-16"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={fadeInUp}
  >
    <span className="inline-block px-4 py-1.5 bg-indigo-500/20 text-indigo-400 text-sm font-medium rounded-full mb-4">
      {subtitle}
    </span>
    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
      <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
        {title}
      </span>
    </h2>
    <p className="text-gray-400 max-w-2xl mx-auto text-lg">{description}</p>
  </motion.div>
)

// Bento grid card
const BentoCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <motion.div
    className={`glass rounded-3xl p-6 ${className}`}
    whileHover={{ y: -4, transition: { duration: 0.3 } }}
  >
    {children}
  </motion.div>
)

// Skill tag component
const SkillTag = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.span
    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all cursor-default"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.4 }}
    whileHover={{ scale: 1.05 }}
  >
    {children}
  </motion.span>
)

// Project card
const ProjectCard = ({ project, index }: { project: any, index: number }) => (
  <motion.div
    className="group relative glass rounded-3xl overflow-hidden cursor-pointer"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={fadeInUp}
    custom={index}
    whileHover={{ y: -8 }}
  >
    {/* Animated gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-fuchsia-600/20 opacity-0 group-hover:opacity-100 transition-all duration-500" />

    {/* Top gradient bar */}
    <div className="h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500" />

    <div className="relative z-10 p-8">
      {/* Icon and badge */}
      <div className="flex items-start justify-between mb-5">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/25">
          <Code className="w-7 h-7 text-white" />
        </div>
        <span className="text-xs font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-500 px-3 py-1.5 rounded-full shadow-lg">
          {project.highlight}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-300">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 mb-5 leading-relaxed text-sm">{project.description}</p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t: string, i: number) => (
          <span key={i} className="text-xs font-medium text-indigo-300 bg-indigo-500/10 px-3 py-1.5 rounded-lg border border-indigo-500/20">
            {t}
          </span>
        ))}
      </div>

      {/* View link */}
      <a
        href={project.url || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-between w-full group/link"
      >
        <span className="text-sm font-semibold text-gray-300 group-hover/link:text-white transition-colors">
          View Project
        </span>
        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover/link:bg-indigo-500 transition-all duration-300">
          <ArrowRight className="w-5 h-5 text-gray-400 group-hover/link:text-white group-hover/link:rotate-45 transition-all duration-300" />
        </div>
      </a>
    </div>

    {/* Decorative corner */}
    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full" />
  </motion.div>
)

// Experience card
const ExperienceCard = ({ exp, index }: { exp: any, index: number }) => (
  <motion.div
    className="group glass rounded-3xl p-8 relative overflow-hidden"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
    custom={index}
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-bl-full" />

    <div className="relative z-10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <div>
          <h3 className="text-lg font-bold group-hover:text-indigo-400 transition-colors">{exp.role}</h3>
          <p className="text-indigo-400 font-medium">{exp.company}</p>
        </div>
        <span className="text-sm text-gray-400 bg-white/5 px-4 py-1.5 rounded-full self-start">
          {exp.period}
        </span>
      </div>
      <p className="text-gray-400 leading-relaxed">{exp.description}</p>
    </div>
  </motion.div>
)

// Stat card
const StatCard = ({ stat, index }: { stat: any, index: number }) => (
  <motion.div
    className="glass rounded-2xl p-6 text-center"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={scaleIn}
    custom={index}
    whileHover={{ scale: 1.03 }}
  >
    <stat.icon className="w-8 h-8 mx-auto text-indigo-400 mb-3" />
    <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
      {stat.value}
    </div>
    <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
  </motion.div>
)

function App() {
  const [currentRole, setCurrentRole] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Rotate through roles
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const roles = ["Prompt Engineer", "GenAI Developer", "AI Solution Builder", "LLM Specialist"]

  const skills = [
    { icon: MessageSquare, title: "Prompt Engineering", desc: "Chain-of-thought, Few-shot, Role prompting" },
    { icon: Brain, title: "LLM Integration", desc: "OpenAI, Claude, Gemini API integration" },
    { icon: Bot, title: "AI Automation", desc: "Workflow automation with LangChain, AutoGen" },
    { icon: Code, title: "Full-Stack Dev", desc: "React, Python, FastAPI development" },
    { icon: Database, title: "Vector Databases", desc: "RAG with Pinecone, Chroma, Weaviate" },
    { icon: Cloud, title: "Cloud & DevOps", desc: "AWS, Docker, Kubernetes deployment" },
  ]

  const promptSkills = [
    "Prompt Optimization", "Few-shot Learning", "Chain-of-Thought", "Role Prompting",
    "System Prompts", "Context Engineering", "Prompt Testing", "Output Validation"
  ]

  const aiTools = [
    "ChatGPT", "Claude", "Gemini", "GPT-4", "LangChain", "AutoGen", "CrewAI", "OpenAI API"
  ]

  const projects = [
    {
      title: "CV Tailor App",
      description: "AI-powered CV tailoring with ATS scoring, keyword optimization, and professional PDF generation.",
      tech: ["React", "FastAPI", "Python", "OpenAI"],
      highlight: "AI Resume Optimizer",
      url: "https://github.com/Ravi-Chudgar/cv-tailor-app"
    },
    {
      title: "Object Detection Platform",
      description: "AI-powered Object Detection Platform with YOLOv8, Django backend, React frontend.",
      tech: ["Python", "YOLOv8", "PyTorch", "React", "Django"],
      highlight: "Computer Vision",
      url: "https://github.com/Ravi-Chudgar/object-detection-platform"
    },
    {
      title: "Prompt Engineering Framework",
      description: "A framework for testing, optimizing, and evaluating prompts with evaluation metrics and A/B testing capabilities.",
      tech: ["Python", "LangChain", "Streamlit"],
      highlight: "Prompt Optimization",
      url: "https://github.com/Ravi-Chudgar/prompt-engineering-framework"
    },
    {
      title: "Personal Portfolio",
      description: "Personal portfolio website showcasing projects and skills.",
      tech: ["TypeScript", "React", "Tailwind CSS"],
      highlight: "Web Development",
      url: "https://github.com/Ravi-Chudgar/personal-portfolio"
    },
    {
      title: "Microwave Repair System",
      description: "System for managing microwave repair requests and tracking.",
      tech: ["Python"],
      highlight: "Full Stack",
      url: "https://github.com/Ravi-Chudgar/microwave-repair-system"
    },
    {
      title: "MQTT Raspberry Pi Alexa Skill",
      description: "Alexa skill connected to Raspberry Pi with MQTT server and Google Firebase for real-time updates.",
      tech: ["Python", "Raspberry Pi", "MQTT", "Firebase"],
      highlight: "IoT Integration",
      url: "https://github.com/Ravi-Chudgar/mqtt-raspberry-pi-alexa-skill-"
    },
    {
      title: "Vector Data",
      description: "Reading and Fetching data from Vector format for data processing.",
      tech: ["JavaScript"],
      highlight: "Data Processing",
      url: "https://github.com/Ravi-Chudgar/Vector_Data"
    },
    {
      title: "Mobile App",
      description: "Mobile application built with Flutter.",
      tech: ["Dart", "Flutter"],
      highlight: "Mobile App",
      url: "https://github.com/Ravi-Chudgar/mobile_app"
    },
    {
      title: "Measurement App Flutter",
      description: "Application for ladies measurement tracking and management.",
      tech: ["Dart", "Flutter"],
      highlight: "Mobile App",
      url: "https://github.com/Ravi-Chudgar/Measurement_app-Flutter"
    },
    {
      title: "MCQ System",
      description: "Multiple Choice Question system built with ASP.NET.",
      tech: ["ASP.NET", "C#"],
      highlight: "Web Application",
      url: "https://github.com/Ravi-Chudgar/MCQ-System"
    },
    {
      title: "Website",
      description: "Website project with CSS styling and design.",
      tech: ["HTML", "CSS", "JavaScript"],
      highlight: "Web Design",
      url: "https://github.com/Ravi-Chudgar/website"
    },
    {
      title: "Canteen Management System",
      description: "Canteen management system built in C language.",
      tech: ["C"],
      highlight: "Desktop App",
      url: "https://github.com/Ravi-Chudgar/Canteen-Management-on-C-language"
    },
    {
      title: "Copilot Agents",
      description: "Copilot agents implementation for AI-assisted development.",
      tech: ["HTML", "JavaScript"],
      highlight: "AI Agents",
      url: "https://github.com/Ravi-Chudgar/copilot-agetns"
    }
  ]

  const experiences = [
    {
      company: "NiftyMoney",
      role: "Full Stack Developer & AI Lead",
      period: "2024 - Present",
      description: "Leading AI integration initiatives, implementing LLM-powered features, and building automated workflows. Managed FinTech infrastructure with 99.9% uptime."
    },
    {
      company: "Webburner India",
      role: "Backend Developer",
      period: "2019 - 2022",
      description: "Built trading backend systems with Python/Django, implemented real-time data processing supporting 50K+ concurrent users."
    },
    
  ]

  const stats = [
    { value: "4+", label: "Years Experience", icon: Users },
    { value: "50+", label: "Prompts Optimized", icon: Terminal },
    { value: "15+", label: "AI Projects", icon: Rocket },
    { value: "99.9%", label: "System Uptime", icon: Award },
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden font-sans">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0a0a0f]/80 border-b border-white/5"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <motion.div
              className="flex items-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              onClick={() => scrollToSection('hero')}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Ravi</span>
            </motion.div>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm text-gray-400 hover:text-white transition relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 h-0.5 bg-indigo-500 w-0 group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <motion.a
                href="/cv/Ravi_Chudgar_CV.pdf"
                download
                className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 px-5 py-2.5 rounded-xl text-sm font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={16} />
                <span>Download CV</span>
              </motion.a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative">
        <AnimatedBackground />
        <FloatingShapes />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="mb-8">
              <span className="inline-flex items-center gap-2 glass rounded-full px-5 py-2.5">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-sm">🚀 Available for new opportunities</span>
              </span>
            </motion.div>

            {/* Name & Role */}
            <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              Hi, I'm <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                Ravi Chudgar
              </span>
            </motion.h1>

            <motion.div variants={fadeInUp} className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-400 mb-8 h-12">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRole}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
                >
                  {roles[currentRole]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            {/* Description */}
            <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              I build intelligent AI solutions, optimize prompts for maximum performance, and create applications that transform how businesses leverage Large Language Models.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <motion.button
                onClick={() => scrollToSection('projects')}
                className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-4 rounded-xl text-lg font-semibold"
                whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(99, 97, 236, 0.4)" }}
                whileTap={{ scale: 0.98 }}
              >
                View My Work
                <ArrowRight size={20} />
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="flex items-center gap-2 glass px-8 py-4 rounded-xl text-lg font-semibold"
                whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.98 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div variants={staggerContainer} className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, idx) => (
                <StatCard key={idx} stat={stat} index={idx} />
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 bg-indigo-400 rounded-full"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="// ABOUT ME"
            title="About Me"
            description="Passionate about leveraging AI to solve real-world business problems"
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInLeft}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur-2xl opacity-30" />
                <div className="relative glass rounded-3xl p-8 sm:p-10">
                  <div className="flex flex-col items-center">
                    <motion.div
                      className="w-40 h-40 sm:w-48 sm:h-48 rounded-3xl overflow-hidden border-4 border-indigo-500/30 mb-6"
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ravi"
                        alt="Ravi Chudgar"
                        className="w-full h-full"
                      />
                    </motion.div>

                    <h3 className="text-2xl sm:text-3xl font-bold mb-2">Ravi Chudgar</h3>
                    <p className="text-indigo-400 font-medium mb-4">Prompt Engineer & GenAI Developer</p>

                    <div className="flex gap-3">
                      <a href="https://github.com/Ravi-Chudgar" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl hover:bg-white/10 transition">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href="https://linkedin.com/in/ravichudgar" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl hover:bg-white/10 transition">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href="mailto:ravi.chudgar@gmail.com" className="p-3 glass rounded-xl hover:bg-white/10 transition">
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.p variants={fadeInUp} className="text-lg text-gray-300 leading-relaxed">
                I'm a <span className="text-indigo-400 font-semibold">Full Stack Developer</span> with 4+ years of experience, now specializing in <span className="text-indigo-400 font-semibold">Prompt Engineering</span> and <span className="text-indigo-400 font-semibold">GenAI Development</span>. I help businesses leverage the power of Large Language Models to automate workflows, improve customer experiences, and drive growth.
              </motion.p>

              {/* Bento grid for traits */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { icon: Zap, text: "Fast Learner" },
                  { icon: Target, text: "Problem Solver" },
                  { icon: Users, text: "Team Player" },
                  { icon: Award, text: "Detail Oriented" },
                  { icon: Rocket, text: "Innovative" },
                  { icon: Lightbulb, text: "Creative" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={scaleIn}
                    className="glass rounded-2xl p-4 text-center"
                    whileHover={{ scale: 1.03 }}
                  >
                    <item.icon className="w-6 h-6 mx-auto text-indigo-400 mb-2" />
                    <span className="text-sm font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Quick links */}
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
                <a href="tel:+916351770056" className="flex items-center gap-2 glass rounded-full px-4 py-2 text-sm hover:bg-white/10 transition">
                  <Phone className="w-4 h-4 text-indigo-400" />
                  +91 6351770056
                </a>
                <a href="mailto:ravi.chudgar@gmail.com" className="flex items-center gap-2 glass rounded-full px-4 py-2 text-sm hover:bg-white/10 transition">
                  <Mail className="w-4 h-4 text-indigo-400" />
                  ravi.chudgar@gmail.com
                </a>
                <span className="flex items-center gap-2 glass rounded-full px-4 py-2 text-sm">
                  <MapPin className="w-4 h-4 text-indigo-400" />
                  Surat, India
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            subtitle="// EXPERTISE"
            title="Skills & Tools"
            description="Specialized skills in prompt engineering and AI development to build cutting-edge solutions"
          />

          {/* Skills Grid */}
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.map((skill, idx) => (
              <motion.div key={idx} variants={scaleIn}>
                <BentoCard>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center mb-4">
                    <skill.icon className="w-7 h-7 text-indigo-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{skill.title}</h3>
                  <p className="text-gray-400 text-sm">{skill.desc}</p>
                </BentoCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Prompt Engineering Skills */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-indigo-400" />
              Prompt Engineering
            </h3>
            <div className="flex flex-wrap gap-3">
              {promptSkills.map((skill, idx) => (
                <SkillTag key={idx} delay={idx * 0.05}>
                  {skill}
                </SkillTag>
              ))}
            </div>
          </motion.div>

          {/* AI Tools */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Brain className="w-5 h-5 text-purple-400" />
              AI Models & Tools
            </h3>
            <div className="flex flex-wrap gap-3">
              {aiTools.map((tool, idx) => (
                <SkillTag key={idx} delay={idx * 0.05}>
                  {tool}
                </SkillTag>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        {/* Gradient backgrounds */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[80px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            subtitle="// MY WORK"
            title="Featured Projects"
            description="Showcasing AI-powered projects that demonstrate expertise in prompt engineering and LLM integration"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} index={idx} />
            ))}
          </div>

          {/* View All Link */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="https://github.com/Ravi-Chudgar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 glass px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white/10 transition-all hover:scale-105"
            >
              <Github className="w-6 h-6" />
              View All Projects on GitHub
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            subtitle="// CAREER"
            title="Work Experience"
            description="Professional journey with focus on AI integration and full-stack development"
          />

          <div className="max-w-4xl mx-auto space-y-6">
            {experiences.map((exp, idx) => (
              <ExperienceCard key={idx} exp={exp} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="// GET IN TOUCH"
            title="Let's Connect"
            description="Ready to build AI-powered solutions? Let's discuss how I can help your business."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div variants={staggerContainer} className="space-y-6">
              <motion.div variants={fadeInUp} className="glass rounded-3xl p-8">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-5">
                  <a href="mailto:ravi.chudgar@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-indigo-400 transition group">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="font-medium">ravi.chudgar@gmail.com</p>
                    </div>
                  </a>
                  <a href="tel:+916351770056" className="flex items-center gap-4 text-gray-300 hover:text-indigo-400 transition group">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="font-medium">+91 6351770056</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 text-gray-300">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="font-medium">Surat, India</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="glass rounded-3xl p-8">
                <h3 className="text-xl font-semibold mb-6">Social Links</h3>
                <div className="flex gap-4">
                  {[
                    { icon: Github, href: "https://github.com/Ravi-Chudgar", label: "GitHub" },
                    { icon: Linkedin, href: "https://linkedin.com/in/ravichudgar", label: "LinkedIn" },
                  ].map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 glass rounded-xl py-4 hover:bg-white/10 transition"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <social.icon className="w-5 h-5" />
                      <span className="font-medium">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              variants={fadeInUp}
              className="glass rounded-3xl p-8 space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <h3 className="text-xl font-semibold">Send a Message</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Message</label>
                <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition" placeholder="Tell me about your project..."></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 py-4 rounded-xl font-semibold"
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(99, 97, 236, 0.4)" }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={18} />
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 glass border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold">Ravi Chudgar</span>
            </div>
            <p className="text-sm text-gray-500">
              © 2026 All rights reserved. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App