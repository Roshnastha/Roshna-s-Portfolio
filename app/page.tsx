"use client"

import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Download,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Moon,
  Sun,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [currentExperience, setCurrentExperience] = useState(0)
  const [isDark, setIsDark] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    if (!isDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const closeMenu = () => setIsMenuOpen(false)

  const nextExperience = () => {
    setCurrentExperience((prev) => (prev + 1) % experiences.length)
  }

  const prevExperience = () => {
    setCurrentExperience((prev) => (prev - 1 + experiences.length) % experiences.length)
  }

  const experiences = [
    {
      title: "Full Stack Internship",
      company: "Lyra Innovation",
      period: "Sept 2024 – Jan 2025",
      description:
        "Developed and maintained full-stack web applications using modern JavaScript frameworks. Collaborated with the product team to build responsive UIs and RESTful APIs, contributing to real-world production features.",
      skills: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    },
    {
      title: "Mobile App Development Internship",
      company: "Excelerate",
      period: "2025",
      description:
        "Developed mobile applications using Flutter with focus on UI/UX and performance optimization. Gained hands-on experience in cross-platform development and agile methodologies.",
      skills: ["Flutter", "Dart", "Mobile Development", "UI/UX"],
    },
    {
      title: "Cybersecurity Training",
      company: "Himalaya College of Engineering",
      period: "2024-2025",
      description:
        "Completed comprehensive cybersecurity training covering network security, encryption, threat analysis, and ethical hacking practices.",
      skills: ["Network Security", "Encryption", "Threat Analysis", "Ethical Hacking"],
    },
    {
      title: "Blockchain Fellowship",
      company: "eSatya",
      period: "2024-2025",
      description:
        "Completed comprehensive blockchain development training. Built decentralized applications using Solidity, developed understanding of smart contracts and DeFi protocols.",
      skills: ["Solidity", "Web3", "Smart Contracts", "Blockchain"],
    },
    {
      title: "Digital SHE",
      company: "RAN",
      period: "2022",
      description:
        "Participated in Digital SHE program focusing on digital literacy and skills development for women in technology.",
      skills: ["Digital Literacy", "Women in Tech", "Skill Development", "Leadership"],
    },
    {
      title: "Hackathon Organizer",
      company: "Code Yatra",
      period: "2024",
      description:
        "Organized and coordinated Code Yatra hackathon, managing event logistics, mentoring participants, and promoting innovation in tech community.",
      skills: ["Leadership", "Event Management", "Community Building", "Mentoring"],
    },
    {
      title: "MERN Stack Training",
      company: "Himalaya College of Engineering",
      period: "2023-2024",
      description:
        "Completed comprehensive MERN Stack training covering MongoDB, Express.js, React, and Node.js. Built full-stack web applications with modern JavaScript practices.",
      skills: ["MERN", "JavaScript", "Node.js", "MongoDB"],
    },
  ]

  const programmingSkills = ["JavaScript", "Python", "C++", "C", "MATLAB", "HTML", "CSS"]

  const technicalSkills = [
    "MERN Stack", "React", "Node.js", "Express.js", "PostgreSQL",
    "MongoDB", "Solidity", "Deep Learning", "PyTorch", "BERT", "MetaMask", "Web3",
  ]

  const softSkills = [
    "Communication", "Teamwork", "Problem-Solving", "Time Management", "Adaptability", "Leadership",
  ]

  const projects = [
    {
      title: "AI-Generated Face Detection System",
      description:
        "Deep learning-based system using DenseNet-121 architecture to identify AI-generated faces. Implemented with PyTorch and Adam optimizer for efficient feature extraction and improved classification.",
      tech: ["PyTorch", "DenseNet-121", "Deep Learning", "Computer Vision"],
      github: "https://github.com/Roshnastha/MINOR.git",
    },
    {
      title: "E-commerce Bookstore (MERN Stack)",
      description:
        "Full-stack online bookstore with MongoDB, Express.js, React, and Node.js. Features include user authentication, product management, shopping cart, and secure checkout system.",
      tech: ["React", "Node.js", "MongoDB", "Express.js"],
      github: "https://github.com/KalyanSubedi/Bookstore.git",
    },
    {
      title: "Text Summarizer using BERT",
      description:
        "Fine-tuned BERT-based NLP model for automatic text summarization. Improved contextual understanding and generated concise summaries for large textual datasets.",
      tech: ["BERT", "NLP", "Python", "Machine Learning"],
      github: "https://github.com/Roshnastha",
    },
    {
      title: "NFT-Based Ticket Selling Platform",
      description:
        "Decentralized ticketing system using Solidity and MetaMask integration. Enabled secure and transparent ticket transactions using blockchain and non-fungible tokens.",
      tech: ["Solidity", "Web3", "MetaMask", "Blockchain"],
      github: "https://github.com/Roshnastha/NFT-ticket.git",
    },
    {
      title: "AI-Generated Video Detection System",
      description:
        "Hybrid deep learning model combining spatial and temporal analysis techniques to detect AI-generated (deepfake) videos. Enhanced detection accuracy for manipulated media.",
      tech: ["Deep Learning", "Computer Vision", "PyTorch", "Video Analysis"],
      github: "https://github.com/Roshnastha/NewsHub.git",
    },
  ]

  const education = [
    {
      degree: "Bachelor in Computer Engineering",
      institution: "Himalaya College of Engineering, Chyasal",
      year: "2022-2026",
      gpa: "3.00",
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "Orchid College, Bharatpur-10",
      year: "2021",
      gpa: "3.35",
    },
    {
      degree: "Secondary School Certificate",
      institution: "Small Heaven School, Kalyanpur",
      year: "2019",
      gpa: "3.35",
    },
  ]

  const navLinks = ["About", "Skills", "Experience", "Projects", "Contact"]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-gray-200 dark:border-slate-800 shadow-sm transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 sm:py-5">
            <div className="text-lg sm:text-xl font-semibold text-sky-600 dark:text-sky-400">
              Roshna Shrestha
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  {item}
                </Link>
              ))}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full text-gray-600 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-50 dark:hover:bg-gray-800 transition-colors"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full text-gray-600 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-50 dark:hover:bg-gray-800 transition-colors"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="rounded-full text-gray-600 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-50 dark:hover:bg-gray-800 transition-colors"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              {navLinks.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={closeMenu}
                  className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Decorative background orbs */}
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-sky-200 dark:bg-sky-900/30 rounded-full blur-3xl opacity-40 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-100 dark:bg-cyan-900/20 rounded-full blur-3xl opacity-35 translate-y-1/2 pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-sky-100 dark:bg-sky-800/20 rounded-full blur-3xl opacity-30 pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              {/* Status badge */}
              <div className="inline-flex items-center gap-2 bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 border border-sky-200 dark:border-sky-700/60">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Available for opportunities
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-3 leading-tight transition-colors duration-300">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-sky-600 to-cyan-500 dark:from-sky-400 dark:to-cyan-300 bg-clip-text text-transparent">
                  Roshna Shrestha
                </span>
              </h1>

              <p className="text-sm font-semibold text-sky-500 dark:text-sky-400 uppercase tracking-widest mb-5">
                Full Stack · AI/ML
              </p>

              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed transition-colors duration-300">
                Computer Engineering graduate with a passion for technology and a track record of turning ideas into working projects. I pick up new tools quickly, work well in a team, and am fully committed to growing into a professional who delivers real value.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
                <Button
                  className="bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 text-white px-8 py-3 rounded-full shadow-lg shadow-sky-200 dark:shadow-sky-900/40 hover:shadow-xl transition-all text-sm sm:text-base"
                  asChild
                >
                  <Link href="/Roshna-Shrestha-CV.pdf" download>
                    <Download className="w-4 h-4 mr-2" />
                    Download CV
                  </Link>
                </Button>
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-500 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-900/30 rounded-full transition-colors"
                    asChild
                  >
                    <Link href="https://github.com/Roshnastha" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5" />
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-500 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-900/30 rounded-full transition-colors"
                    asChild
                  >
                    <Link href="https://www.linkedin.com/in/roshna-shrestha-189057320" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5" />
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-500 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-900/30 rounded-full transition-colors"
                    asChild
                  >
                    <Link href="mailto:roshna.w3@gmail.com">
                      <Mail className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <MapPin className="w-4 h-4 mr-1.5 text-sky-500 dark:text-sky-400 flex-shrink-0" />
                Gyaneshwor, Kathmandu
              </div>
            </div>

            {/* Photo with gradient ring */}
            <div className="relative flex justify-center">
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
                <div className="relative aspect-square">
                  <div className="absolute -top-5 -right-5 w-24 h-24 bg-sky-100 dark:bg-sky-800/30 rounded-full opacity-70 pointer-events-none" />
                  <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-cyan-100 dark:bg-cyan-800/30 rounded-full opacity-70 pointer-events-none" />
                  <div className="absolute top-1/2 -right-3 w-8 h-8 bg-sky-300 dark:bg-sky-600/40 rounded-full opacity-50 pointer-events-none" />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-sky-400 via-cyan-500 to-sky-600 p-[3px] shadow-2xl shadow-sky-200 dark:shadow-sky-900/50">
                    <div className="w-full h-full rounded-3xl overflow-hidden bg-white dark:bg-slate-900">
                      <Image
                        src="/myself.jpeg"
                        alt="Roshna Shrestha"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-sky-50/40 dark:bg-slate-900 transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              About Me
            </h2>
            <div className="w-12 sm:w-16 h-1 bg-sky-600 dark:bg-sky-400 mx-auto rounded-full transition-colors duration-300"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden border border-sky-100 dark:border-slate-700 transition-colors duration-300">
                <div className="relative h-52">
                  <Image
                    src="/myself.jpeg"
                    alt="Roshna Shrestha"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-tight">Roshna Shrestha</h3>
                  <p className="text-sky-600 dark:text-sky-400 text-sm font-medium mb-4">Computer Engineer</p>
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2.5 text-sm text-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4 text-sky-500 flex-shrink-0" />
                      Gyaneshwor, Kathmandu
                    </div>
                    <div className="flex items-center gap-2.5 text-sm text-gray-600 dark:text-gray-400">
                      <span className="text-base flex-shrink-0">🎓</span>
                      2022–2026, Himalaya College of Engineering (IOE)
                    </div>
                    <div className="flex items-center gap-2.5 text-sm">
                      <span className="relative flex h-2 w-2 flex-shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      <span className="text-green-600 dark:text-green-400 font-medium">Open to work</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Bio + Stats + Education */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-3">
                <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                  I'm a Computer Engineering graduate from Himalaya College of Engineering (HCOE) with a strong foundation in full-stack development, AI/ML, blockchain technology, and cybersecurity. My journey in tech has been marked by continuous learning and hands-on project experience.
                </p>
                <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                  I thrive on solving complex problems and building innovative solutions — from deep learning models for AI-generated content detection to decentralized blockchain applications.
                </p>
              </div>

              {/* Stat counters */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "3.00", label: "GPA" },
                  { value: "5+", label: "Projects" },
                  { value: "2026", label: "Graduating" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white dark:bg-slate-800 rounded-xl p-4 text-center shadow-sm border border-sky-100 dark:border-slate-700 transition-colors duration-300"
                  >
                    <p className="text-2xl font-bold text-sky-600 dark:text-sky-400">{stat.value}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium uppercase tracking-wide">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Education */}
              <div>
                <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3">
                  Education
                </h3>
                <div className="space-y-3">
                  {education.map((edu, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-slate-800 border border-sky-100 dark:border-slate-700 shadow-sm transition-colors duration-300"
                    >
                      <div className="w-2 h-2 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm text-gray-900 dark:text-white">{edu.degree}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{edu.institution}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="text-xs font-medium text-sky-600 dark:text-sky-400">{edu.year}</p>
                        <p className="text-xs text-gray-400 mt-0.5">GPA {edu.gpa}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20 md:py-24">
        <style>{`
          @keyframes marquee-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marquee-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .marquee-left  { animation: marquee-left  30s linear infinite; }
          .marquee-right { animation: marquee-right 38s linear infinite; }
          .marquee-slow  { animation: marquee-left  24s linear infinite; }
          .marquee-left:hover,
          .marquee-right:hover,
          .marquee-slow:hover { animation-play-state: paused; }
          .marquee-mask {
            -webkit-mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
            mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
          }
        `}</style>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Skills & Technologies
            </h2>
            <div className="w-12 sm:w-16 h-1 bg-sky-600 dark:bg-sky-400 mx-auto rounded-full transition-colors duration-300"></div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Row 1 — Programming Languages → left */}
          <div>
            <p className="text-center text-xs font-semibold text-sky-500 dark:text-sky-400 uppercase tracking-widest mb-4">
              Programming Languages
            </p>
            <div className="overflow-hidden marquee-mask">
              <div className="flex gap-4 marquee-left" style={{ width: "max-content" }}>
                {Array(4).fill(programmingSkills).flat().map((skill, i) => (
                  <span
                    key={i}
                    className="flex-shrink-0 inline-flex items-center px-5 py-2 rounded-full border-2 border-sky-300 dark:border-sky-600 text-sky-700 dark:text-sky-300 bg-white dark:bg-slate-900 text-sm font-medium shadow-sm hover:bg-sky-50 dark:hover:bg-sky-900/30 hover:border-sky-500 dark:hover:border-sky-400 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2 — Technical Skills → right */}
          <div>
            <p className="text-center text-xs font-semibold text-sky-500 dark:text-sky-400 uppercase tracking-widest mb-4">
              Technical Skills
            </p>
            <div className="overflow-hidden marquee-mask">
              <div className="flex gap-4 marquee-right" style={{ width: "max-content" }}>
                {Array(3).fill(technicalSkills).flat().map((skill, i) => (
                  <span
                    key={i}
                    className="flex-shrink-0 inline-flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-sky-600 to-cyan-600 dark:from-sky-500 dark:to-cyan-500 text-white text-sm font-medium shadow-md hover:from-sky-700 hover:to-cyan-700 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Row 3 — Soft Skills → left slow */}
          <div>
            <p className="text-center text-xs font-semibold text-sky-500 dark:text-sky-400 uppercase tracking-widest mb-4">
              Soft Skills
            </p>
            <div className="overflow-hidden marquee-mask">
              <div className="flex gap-4 marquee-slow" style={{ width: "max-content" }}>
                {Array(6).fill(softSkills).flat().map((skill, i) => (
                  <span
                    key={i}
                    className="flex-shrink-0 inline-flex items-center px-5 py-2 rounded-full bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-700/60 text-sm font-medium hover:bg-sky-200 dark:hover:bg-sky-800/50 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-sky-50/40 dark:bg-slate-900 transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Experience & Training
            </h2>
            <div className="w-12 sm:w-16 h-1 bg-sky-600 dark:bg-sky-400 mx-auto rounded-full transition-colors duration-300"></div>
          </div>

          <div className="relative">
            <Card className="border-0 shadow-xl bg-white dark:bg-slate-800 overflow-hidden rounded-2xl transition-colors duration-300">
              <div className="p-6 sm:p-8 lg:p-12">
                <div className="flex items-center text-sky-600 dark:text-sky-400 text-xs sm:text-sm font-medium mb-3 bg-sky-100 dark:bg-sky-900/30 px-3 py-1 rounded-full w-fit transition-colors duration-300">
                  <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                  {experiences[currentExperience].period}
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                  {experiences[currentExperience].title}
                </h3>

                <p className="text-sky-600 dark:text-sky-400 font-medium mb-4 text-sm sm:text-base transition-colors duration-300">
                  {experiences[currentExperience].company}
                </p>

                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6 transition-colors duration-300">
                  {experiences[currentExperience].description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {experiences[currentExperience].skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full transition-colors duration-300 text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>

            {/* Navigation Buttons */}
            <div className="flex flex-wrap justify-center mt-6 sm:mt-8 gap-3 sm:gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevExperience}
                className="rounded-full border-sky-200 dark:border-sky-700 text-sky-600 dark:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-900/30 hover:border-sky-300 dark:hover:border-sky-600 transition-colors duration-300"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              <div className="flex items-center gap-2">
                {experiences.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentExperience(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentExperience
                        ? "bg-sky-600 dark:bg-sky-400 w-6 sm:w-8"
                        : "bg-sky-200 dark:bg-sky-800 hover:bg-sky-300 dark:hover:bg-sky-700 w-2"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextExperience}
                className="rounded-full border-sky-200 dark:border-sky-700 text-sky-600 dark:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-900/30 hover:border-sky-300 dark:hover:border-sky-600 transition-colors duration-300"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Featured Projects
            </h2>
            <div className="w-12 sm:w-16 h-1 bg-sky-600 dark:bg-sky-400 mx-auto rounded-full transition-colors duration-300"></div>
          </div>

          <div className="space-y-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 p-6 sm:p-8 bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 hover:border-sky-300 dark:hover:border-sky-600 hover:shadow-lg hover:shadow-sky-100 dark:hover:shadow-sky-900/20 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-400 to-cyan-500 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="hidden sm:flex items-start pt-1 flex-shrink-0 w-14">
                  <span className="text-5xl font-bold text-gray-100 dark:text-slate-700 group-hover:text-sky-100 dark:group-hover:text-sky-900/60 transition-colors duration-300 leading-none select-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white group-hover:text-sky-700 dark:group-hover:text-sky-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <button
                      onClick={() => window.open(project.github, "_blank")}
                      className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-medium text-sky-600 dark:text-sky-400 hover:text-sky-800 dark:hover:text-sky-300 border border-sky-200 dark:border-sky-700 hover:border-sky-400 dark:hover:border-sky-500 bg-sky-50 dark:bg-sky-900/20 hover:bg-sky-100 dark:hover:bg-sky-900/40 px-3 py-1.5 rounded-full transition-all duration-200"
                    >
                      <ExternalLink className="w-3 h-3" />
                      GitHub
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 font-medium border border-gray-200 dark:border-slate-600 group-hover:bg-sky-50 dark:group-hover:bg-sky-900/20 group-hover:border-sky-200 dark:group-hover:border-sky-800 group-hover:text-sky-700 dark:group-hover:text-sky-300 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-sky-50/40 dark:bg-slate-900 transition-colors duration-300"
      >
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Let's Connect
            </h2>
            <div className="w-12 sm:w-16 h-1 bg-sky-600 dark:bg-sky-400 mx-auto mb-6 sm:mb-8 rounded-full transition-colors duration-300"></div>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
              I'm interested in opportunities where I can contribute my skills in full-stack development, AI/ML, and blockchain technology. Feel free to reach out!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center flex-wrap">
            <Button
              className="bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all text-sm sm:text-base"
              onClick={() => window.location.href = "mailto:roshna.w3@gmail.com"}
            >
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
            <Button
              variant="outline"
              className="border-sky-300 text-gray-700 hover:border-sky-400 hover:text-sky-600 hover:bg-sky-50 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-colors duration-300 text-sm sm:text-base"
              onClick={() => window.location.href = "tel:+977-9862784871"}
            >
              📞 Call Me
            </Button>
            <Button
              variant="outline"
              className="border-sky-300 text-gray-700 hover:border-sky-400 hover:text-sky-600 hover:bg-sky-50 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-colors duration-300 text-sm sm:text-base"
              onClick={() => window.open("https://www.linkedin.com/in/roshna-shrestha-189057320", "_blank")}
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-slate-800 bg-sky-50/40 dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
            Roshna Shrestha, stay connected
          </p>
        </div>
      </footer>
    </div>
  )
}
