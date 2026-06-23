"use client"

import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Download,
  ExternalLink,
  Moon,
  Sun,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Portfolio() {
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
    const next = !isDark
    setIsDark(next)
    if (next) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const closeMenu = () => setIsMenuOpen(false)

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
      period: "sept-Nov2025",
      description:
        "Developed mobile applications using Flutter with focus on UI/UX and performance optimization. Gained hands-on experience in cross-platform development and agile methodologies.",
      skills: ["Flutter", "Dart", "Mobile Development", "UI/UX"],
    },
    {
      title: "Cybersecurity Training",
      company: "Himalaya College of Engineering",
      period: "June-July 2025",
      description:
        "Completed comprehensive cybersecurity training covering network security, encryption, threat analysis, and ethical hacking practices.",
      skills: ["Network Security", "Encryption", "Threat Analysis", "Ethical Hacking"],
    },
    {
      title: "Blockchain Fellowship",
      company: "eSatya",
      period: "2024",
      description:
        "Completed comprehensive blockchain development training. Built decentralized applications using Solidity, developed understanding of smart contracts and DeFi protocols.",
      skills: ["Solidity", "Web3", "Smart Contracts", "Blockchain"],
    },
    {
      title: "Digital SHE",
      company: "RAN",
      period: "June 2022",
      description:
        "Participated in Digital SHE program focusing on digital literacy and skills development for women in technology.",
      skills: ["Digital Literacy", "Women in Tech", "Leadership"],
    },
    {
      title: "Hackathon Organizer",
      company: "Code Yatra",
      period: "2024",
      description:
        "Organized and coordinated Code Yatra hackathon, managing event logistics, mentoring participants, and promoting innovation in the tech community.",
      skills: ["Leadership", "Event Management", "Community Building", "Mentoring"],
    },
    {
      title: "MERN Stack Training",
      company: "Himalaya College of Engineering",
      period: "June-July 2024",
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
      title: "AI-Generated Video Detection System",
      description:
        "Hybrid deep learning model combining spatial and temporal analysis to detect AI-generated (deepfake) videos. Enhanced detection accuracy for manipulated media.",
      tech: ["Deep Learning", "Computer Vision", "PyTorch", "Video Analysis"],
      github: "https://github.com/Roshnastha/NewsHub.git",
    },
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
        "Full-stack online bookstore with MongoDB, Express.js, React, and Node.js. Features include user authentication, product management, shopping cart, and secure checkout.",
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
    
  ]

  const education = [
    {
      degree: "Bachelor in Computer Engineering",
      institution: "Himalaya College of Engineering, Chyasal",
      year: "2022 – 2026",
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
    <div className="min-h-screen bg-[#F8F7F3] dark:bg-[#0C0C15] transition-colors duration-300">

      {/* Top metadata strip */}
      <div className="hidden sm:flex items-center justify-center gap-0 bg-[#0C0C15] border-b border-[#232330] py-2 px-4">
        <p className="text-[10px] tracking-[0.28em] uppercase text-[#4A4A5A] font-code">
          Roshna Shrestha &nbsp;·&nbsp; Computer Engineer &nbsp;·&nbsp; Kathmandu, Nepal &nbsp;·&nbsp; Available 2026
        </p>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#F8F7F3]/96 dark:bg-[#0C0C15]/96 backdrop-blur-md border-b border-[#E8E6E2] dark:border-[#232330] transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-sm font-bold tracking-[0.05em] text-[#141422] dark:text-[#EEECF0] font-display">
              Roshna Shrestha
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[11px] tracking-[0.18em] uppercase text-[#6B6A78] dark:text-[#8C8B99] hover:text-[#00C896] dark:hover:text-[#00C896] transition-colors font-code"
                >
                  {item}
                </Link>
              ))}
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="text-[#6B6A78] dark:text-[#8C8B99] hover:text-[#00C896] dark:hover:text-[#00C896] transition-colors"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>

            {/* Mobile controls */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="text-[#6B6A78] dark:text-[#8C8B99] hover:text-[#00C896] dark:hover:text-[#00C896] transition-colors"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                className="text-[#6B6A78] dark:text-[#8C8B99]"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 pt-1 border-t border-[#E8E6E2] dark:border-[#232330] space-y-1">
              {navLinks.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={closeMenu}
                  className="block py-2.5 text-[11px] tracking-[0.18em] uppercase text-[#6B6A78] dark:text-[#8C8B99] hover:text-[#00C896] dark:hover:text-[#00C896] transition-colors font-code"
                >
                  {item}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Soft mint glow — light */}
        <div
          className="absolute -top-20 -right-20 w-[700px] h-[500px] rounded-full bg-[#00C896] opacity-[0.04] blur-[120px] pointer-events-none dark:hidden"
        />
        {/* Soft mint glow — dark */}
        <div
          className="absolute -top-20 -right-20 w-[700px] h-[500px] rounded-full bg-[#00C896] opacity-[0.07] blur-[120px] pointer-events-none hidden dark:block"
        />

        {/* Background photo — watermark treatment */}
        <div className="absolute inset-y-0 right-0 w-[55%] pointer-events-none select-none" aria-hidden="true">
          <div className="relative w-full h-full">
            <Image
              src="/myself.jpeg"
              alt=""
              fill
              className="object-cover object-top grayscale opacity-[0.70] dark:opacity-[0.50]"
              priority
            />
            {/* Scan-line on background */}
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00C896] to-transparent opacity-40"
                style={{ animation: "scan-line 4s ease-in-out infinite" }}
              />
            </div>
          </div>
          {/* Fade from bg color on left edge */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F8F7F3] via-[#F8F7F3]/20 to-transparent dark:from-[#0C0C15] dark:via-[#0C0C15]/20" />
          {/* Fade from bg color on bottom edge */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#F8F7F3]/50 to-transparent dark:from-[#0C0C15]/50" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <div>
              {/* Eyebrow */}
              <p className="text-[11px] tracking-[0.3em] uppercase text-[#6B6A78] dark:text-[#8C8B99] mb-6 font-code">
                Computer Engineer · Kathmandu, Nepal
              </p>

              {/* Main headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold text-[#141422] dark:text-[#EEECF0] leading-[1.05] tracking-tight mb-6">
                Building systems that authenticate reality.
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-[#6B6A78] dark:text-[#8C8B99] mb-8 leading-relaxed max-w-xl">
                I work at the intersection of AI detection, blockchain, and full-stack engineering — turning technically hard problems into working systems.
              </p>

              {/* Domain tags */}
              <div className="flex flex-wrap gap-2 mb-10">
                {["Full Stack", "AI / ML"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-semibold tracking-wide px-3 py-1 rounded-sm bg-[#00C896]/10 dark:bg-[#00C896]/15 text-[#007A5E] dark:text-[#00C896] border border-[#00C896]/25 font-code"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <Link
                  href="/Roshna-Shrestha-CV.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#141422] dark:bg-[#EEECF0] text-[#F8F7F3] dark:text-[#141422] text-sm font-semibold hover:bg-[#00C896] dark:hover:bg-[#00C896] dark:hover:text-white transition-colors rounded-sm font-display"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </Link>
                <div className="flex items-center gap-4">
                  <Link
                    href="https://github.com/Roshnastha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6B6A78] dark:text-[#8C8B99] hover:text-[#141422] dark:hover:text-[#EEECF0] transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/roshna-shrestha-189057320"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6B6A78] dark:text-[#8C8B99] hover:text-[#141422] dark:hover:text-[#EEECF0] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Link>
                  <Link
                    href="mailto:roshna.w3@gmail.com"
                    className="text-[#6B6A78] dark:text-[#8C8B99] hover:text-[#141422] dark:hover:text-[#EEECF0] transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              {/* Location + status — below hairline */}
              <div className="pt-8 border-t border-[#E8E6E2] dark:border-[#232330] flex flex-wrap items-center gap-5 text-xs text-[#6B6A78] dark:text-[#8C8B99]">
                <span className="flex items-center gap-1.5 font-code">
                  <MapPin className="w-3.5 h-3.5 text-[#00C896]" />
                  Gyaneshwor, Kathmandu
                </span>
                <span className="flex items-center gap-1.5 font-code">
                  <span className="relative flex w-2 h-2">
                    <span className="animate-ping absolute inline-flex w-full h-full rounded-full bg-[#00C896] opacity-60" />
                    <span className="relative inline-flex w-2 h-2 rounded-full bg-[#00C896]" />
                  </span>
                  Available for opportunities
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#14141E] border-y border-[#E8E6E2] dark:border-[#232330] transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="About" title="Who I am" />

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 lg:gap-16">
            {/* Bio + stats */}
            <div>
              <div className="space-y-4 mb-10">
                <p className="text-base text-[#6B6A78] dark:text-[#8C8B99] leading-relaxed">
                  I'm a Computer Engineering graduate from Himalaya College of Engineering (IOE), passed out in 2026 and currently awaiting results. My work spans full-stack development, AI/ML, blockchain, and cybersecurity — with a particular focus on systems that verify authenticity in a world of synthetic content.
                </p>
                <p className="text-base text-[#6B6A78] dark:text-[#8C8B99] leading-relaxed">
                  From fine-tuning DenseNet-121 models to detect AI-generated faces, to building decentralized NFT ticketing systems where ownership is on-chain, I gravitate toward technically demanding problems where correctness actually matters.
                </p>
              </div>

              {/* Stats */}
              <div className="flex gap-10">
                {[
                  { value: "2+", label: "Internships" },
                  { value: "5+", label: "Projects" },
                  { value: "4", label: "Tech Domains" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-bold text-[#141422] dark:text-[#EEECF0] font-display">{stat.value}</p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#6B6A78] dark:text-[#8C8B99] mt-1 font-code">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-[#6B6A78] dark:text-[#8C8B99] mb-5 font-code">
                Education
              </p>
              <div className="space-y-5">
                {education.map((edu, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="pt-1.5 flex-shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00C896]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#141422] dark:text-[#EEECF0] leading-tight font-display">
                        {edu.degree}
                      </p>
                      <p className="text-xs text-[#6B6A78] dark:text-[#8C8B99] mt-0.5 leading-snug">{edu.institution}</p>
                      <p className="text-xs text-[#00C896] mt-1 font-code">
                        {edu.year} · GPA {edu.gpa}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-16 sm:py-20 md:py-24">
        <style>{`
          .marquee-left  { animation: marquee-left  30s linear infinite; }
          .marquee-right { animation: marquee-right 38s linear infinite; }
          .marquee-slow  { animation: marquee-left  24s linear infinite; }
          .marquee-left:hover,
          .marquee-right:hover,
          .marquee-slow:hover { animation-play-state: paused; }
          .marquee-mask {
            -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          }
        `}</style>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <SectionHeader eyebrow="Skills" title="Technologies" />
        </div>

        <div className="space-y-8">
          {/* Languages */}
          <div>
            <p className="text-center text-[10px] tracking-[0.3em] uppercase text-[#6B6A78] dark:text-[#8C8B99] mb-4 font-code">
              Languages
            </p>
            <div className="overflow-hidden marquee-mask">
              <div className="flex gap-3 marquee-left" style={{ width: "max-content" }}>
                {Array(4).fill(programmingSkills).flat().map((skill, i) => (
                  <span
                    key={i}
                    className="flex-shrink-0 inline-flex items-center px-4 py-2 rounded-sm border border-[#E8E6E2] dark:border-[#232330] text-[#141422] dark:text-[#EEECF0] bg-white dark:bg-[#14141E] text-xs font-medium tracking-wide hover:border-[#00C896] hover:text-[#00C896] dark:hover:border-[#00C896] dark:hover:text-[#00C896] transition-colors cursor-default font-code"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Frameworks & Tools */}
          <div>
            <p className="text-center text-[10px] tracking-[0.3em] uppercase text-[#6B6A78] dark:text-[#8C8B99] mb-4 font-code">
              Frameworks & Tools
            </p>
            <div className="overflow-hidden marquee-mask">
              <div className="flex gap-3 marquee-right" style={{ width: "max-content" }}>
                {Array(3).fill(technicalSkills).flat().map((skill, i) => (
                  <span
                    key={i}
                    className="flex-shrink-0 inline-flex items-center px-4 py-2 rounded-sm bg-[#00C896] text-white text-xs font-semibold tracking-wide hover:bg-[#00A07A] transition-colors cursor-default font-code"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <p className="text-center text-[10px] tracking-[0.3em] uppercase text-[#6B6A78] dark:text-[#8C8B99] mb-4 font-code">
              Soft Skills
            </p>
            <div className="overflow-hidden marquee-mask">
              <div className="flex gap-3 marquee-slow" style={{ width: "max-content" }}>
                {Array(6).fill(softSkills).flat().map((skill, i) => (
                  <span
                    key={i}
                    className="flex-shrink-0 inline-flex items-center px-4 py-2 rounded-full bg-[#00C896]/10 dark:bg-[#00C896]/15 text-[#007A5E] dark:text-[#00C896] text-xs font-medium tracking-wide hover:bg-[#00C896]/20 transition-colors cursor-default font-code"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#14141E] border-y border-[#E8E6E2] dark:border-[#232330] transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Experience" title="Training & Work" />

          <div className="relative">
            {/* Connector line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-[#E8E6E2] dark:bg-[#232330]" />

            <div className="space-y-10">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex gap-8 pl-9 group">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[#F8F7F3] dark:bg-[#0C0C15] border-2 border-[#00C896] group-hover:bg-[#00C896] transition-colors flex-shrink-0" />

                  <div className="flex-1 min-w-0 pb-4 border-b border-transparent group-hover:border-[#E8E6E2] dark:group-hover:border-[#232330] transition-colors">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#00C896] mb-1 font-code">
                      {exp.period}
                    </p>
                    <h3 className="text-base font-semibold text-[#141422] dark:text-[#EEECF0] leading-tight font-display">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-[#6B6A78] dark:text-[#8C8B99] mb-2">{exp.company}</p>
                    <p className="text-sm text-[#6B6A78] dark:text-[#8C8B99] leading-relaxed mb-3">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.skills.map((skill, si) => (
                        <span
                          key={si}
                          className="text-[11px] px-2.5 py-0.5 rounded-sm bg-[#F8F7F3] dark:bg-[#0C0C15] text-[#6B6A78] dark:text-[#8C8B99] border border-[#E8E6E2] dark:border-[#232330] font-code"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Work" title="Featured Projects" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative p-6 bg-white dark:bg-[#14141E] border border-[#E8E6E2] dark:border-[#232330] rounded-sm hover:border-[#00C896]/40 dark:hover:border-[#00C896]/40 hover:shadow-lg hover:shadow-[#00C896]/5 transition-all duration-200"
              >
                {/* Left accent bar — appears on hover */}
                <div className="absolute left-0 top-4 bottom-4 w-[2px] rounded-full bg-transparent group-hover:bg-[#00C896] transition-colors duration-200" />

                {/* Number + link row */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="text-[11px] font-code text-[#00C896]/60 dark:text-[#00C896]/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <button
                    onClick={() => window.open(project.github, "_blank")}
                    className="flex-shrink-0 text-[#6B6A78] dark:text-[#8C8B99] hover:text-[#00C896] dark:hover:text-[#00C896] transition-colors"
                    aria-label="View on GitHub"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>

                <h3 className="text-sm font-semibold text-[#141422] dark:text-[#EEECF0] group-hover:text-[#00C896] dark:group-hover:text-[#00C896] transition-colors leading-snug mb-2 font-display">
                  {project.title}
                </h3>

                <p className="text-xs text-[#6B6A78] dark:text-[#8C8B99] leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech, ti) => (
                    <span
                      key={ti}
                      className="text-[10px] font-code px-2 py-0.5 rounded-sm bg-[#F8F7F3] dark:bg-[#0C0C15] text-[#6B6A78] dark:text-[#8C8B99] border border-[#E8E6E2] dark:border-[#232330] group-hover:border-[#00C896]/25 group-hover:text-[#007A5E] dark:group-hover:text-[#00C896] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact — inverted dark section */}
      <section
        id="contact"
        className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#141422] relative overflow-hidden"
      >
        {/* Mint dot grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(0,200,150,0.07) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        <div className="relative max-w-3xl mx-auto">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#00C896] mb-4 font-code">Contact</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#EEECF0] mb-5 leading-tight font-display">
            Let's build something real.
          </h2>
          <p className="text-base text-[#8C8B99] mb-10 max-w-xl leading-relaxed">
            Open to full-stack, AI/ML, and blockchain roles. If you're working on something technically interesting, I'd like to hear about it.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            <a
              href="mailto:roshna.w3@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#00C896] hover:bg-[#00A07A] text-white text-sm font-semibold transition-colors rounded-sm font-display"
            >
              <Mail className="w-4 h-4" />
              Get in touch
            </a>
            <a
              href="https://www.linkedin.com/in/roshna-shrestha-189057320"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#2A2A38] hover:border-[#00C896]/50 text-[#8C8B99] hover:text-[#00C896] text-sm font-medium transition-colors rounded-sm font-display"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="tel:+977-9862784871"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#2A2A38] hover:border-[#00C896]/50 text-[#8C8B99] hover:text-[#00C896] text-sm font-medium transition-colors rounded-sm font-code"
            >
              +977 986 278 4871
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 sm:px-6 lg:px-8 border-t border-[#E8E6E2] dark:border-[#232330] bg-[#F8F7F3] dark:bg-[#0C0C15] transition-colors duration-300">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <p className="text-xs text-[#6B6A78] dark:text-[#8C8B99] font-display">Roshna Shrestha</p>
          <p className="text-xs text-[#6B6A78] dark:text-[#8C8B99] font-code">Kathmandu · 2026</p>
        </div>
      </footer>
    </div>
  )
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-12">
      <p className="text-[11px] tracking-[0.3em] uppercase text-[#00C896] mb-3 font-code">{eyebrow}</p>
      <div className="flex items-end gap-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#141422] dark:text-[#EEECF0] flex-shrink-0 font-display">
          {title}
        </h2>
        <div className="flex-1 h-px bg-[#E8E6E2] dark:bg-[#232330] mb-2" />
      </div>
    </div>
  )
}
