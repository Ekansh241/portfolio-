"use client";

import { motion } from "framer-motion";

const experience = [
  {
    role: "On-Site Internee",
    company: "L&T (Larsen & Toubro)",
    date: "May 2025 - June 2025",
    location: "Rourkela, India",
    details: [
      "Completed an on-site internship at Larsen & Toubro, gaining exposure to enterprise IT systems and industrial software processes, and learned teamwork.",
      "Gained hands-on exposure to real-world industrial IT systems and enterprise-level software workflows, system operations."
    ]
  },
  {
    role: "On-Site Internee",
    company: "SAIL Rourkela Steel Plant",
    date: "May 2024 - June 2024",
    location: "Rourkela, India",
    details: [
      "Learned practical applications of computer science concepts in an industrial environment.",
      "Gained exposure to enterprise-level IT workflows and operational systems."
    ]
  }
];

const education = [
  {
    degree: "B.Tech in Computer Science",
    school: "Sambalpur University Institute of Information Technology",
    date: "Nov 2022 - Aug 2026",
    location: "Sambalpur, India",
    score: "CGPA: 7.5/10"
  },
  {
    degree: "Higher Secondary Education (HSC) in Science",
    school: "D.A.V Public School",
    date: "Apr 2019 - Apr 2021",
    location: "Kansbahal, Odisha",
    score: "Percentage: 70%"
  },
  {
    degree: "Secondary School Certification (SSC)",
    school: "D.A.V Public School",
    date: "Mar 2019",
    location: "Kansbahal, Odisha",
    score: "Percentage: 82%"
  }
];

const technicalSkills = [
  { category: "Languages", items: "JAVA, PYTHON, JAVASCRIPT (React, Node.js), C/C++, HTML, SQL, GIT/GITHUB" },
  { category: "Core CS", items: "Data Structures & Algorithms, OOPS, Operating Systems, DBMS, Computer Networks" },
  { category: "Databases", items: "MySQL, PostgreSQL, SQL queries, indexing, normalization" },
  { category: "Cybersecurity", items: "Network Security, IDS, Vulnerability Assessment, Risk Analysis, Linux Security, Firewalls, Encryption" },
  { category: "Security Tools", items: "Python for automation, OpenCV, SIEM basics, Cybersecurity Fundamentals" }
];

const softSkills = [
  "Effective Communication", "Willingness to learn", "Empathy and Patience", 
  "Conflict and Resolution", "Attention to Detail", "Teamwork", "Adaptability"
];

const certifications = [
  "CYBERSECURITY ANALYST - (FORAGE)",
  "AGILE PROJECT MANAGEMENT - (HP)",
  "ARTIFICIAL INTELLIGENCE - (HP)",
  "DATA SCIENCE & ANALYTICS - (DELOITTE)",
  "AMAZON WEB SERVICES - (AMAZON)"
];

const awards = {
  title: "Branch Representative of CSE (CYBER-SECURITY)",
  details: [
    "Risk management, stakeholder communication, and maintaining clear documentation throughout all phases of the project.",
    "Proactive approach to problem-solving and strong decision-making capabilities helped navigate challenges efficiently and stay on track."
  ]
};

export default function Resume() {
  return (
    <section className="bg-transparent py-24 px-8 text-white relative z-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto space-y-24">
        
        {/* Internships & Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Internships */}
          <div>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="text-white/50">01.</span> Internships
            </h2>
            <div className="space-y-12">
              {experience.map((exp, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={i} 
                  className="relative pl-8 border-l border-white/20"
                >
                  <div className="absolute w-3 h-3 bg-white rounded-full -left-[6.5px] top-2 shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <div className="text-white/60 font-medium mb-1">{exp.company}</div>
                  <div className="text-sm text-white/40 mb-4">{exp.date} | {exp.location}</div>
                  <ul className="list-disc list-outside ml-4 space-y-2 text-white/70 font-light text-sm">
                    {exp.details.map((detail, j) => (
                      <li key={j}>{detail}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="text-white/50">02.</span> Education
            </h2>
            <div className="space-y-12">
              {education.map((edu, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={i} 
                  className="relative pl-8 border-l border-white/20"
                >
                  <div className="absolute w-3 h-3 bg-white rounded-full -left-[6.5px] top-2 shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <div className="text-white/60 font-medium mb-1">{edu.school}</div>
                  <div className="flex justify-between items-center text-sm text-white/40 mb-2">
                    <span>{edu.date} | {edu.location}</span>
                  </div>
                  <div className="inline-block px-3 py-1 bg-white/10 rounded-md text-sm font-medium">
                    {edu.score}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-white/50">03.</span> Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Technical */}
            <div className="backdrop-blur-md bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-6 border-b border-white/10 pb-4">Technical Skills</h3>
              <div className="space-y-4">
                {technicalSkills.map((skill, i) => (
                  <div key={i}>
                    <span className="font-medium text-white/90">{skill.category}: </span>
                    <span className="text-white/60 font-light text-sm leading-relaxed">{skill.items}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills & Certs */}
            <div className="space-y-8">
              <div className="backdrop-blur-md bg-white/5 border border-white/10 p-8 rounded-2xl">
                <h3 className="text-xl font-semibold mb-6 border-b border-white/10 pb-4">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill, i) => (
                    <span key={i} className="text-sm font-medium px-4 py-2 bg-white/10 rounded-full text-white/80">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="backdrop-blur-md bg-white/5 border border-white/10 p-8 rounded-2xl">
                <h3 className="text-xl font-semibold mb-6 border-b border-white/10 pb-4">Certifications</h3>
                <ul className="space-y-3">
                  {certifications.map((cert, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-white/70 font-light">
                      <div className="w-1.5 h-1.5 bg-white/50 rounded-full" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Awards */}
        <div>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-white/50">04.</span> Awards & Leadership
          </h2>
          <motion.div 
            whileHover={{ y: -5 }}
            className="backdrop-blur-md bg-white/5 border border-white/10 p-8 rounded-2xl"
          >
            <h3 className="text-xl font-semibold mb-4">{awards.title}</h3>
            <ul className="list-disc list-outside ml-4 space-y-3 text-white/70 font-light">
              {awards.details.map((detail, i) => (
                <li key={i} className="leading-relaxed">{detail}</li>
              ))}
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
