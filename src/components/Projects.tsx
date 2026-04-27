"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Real-Time Intrusion Detection System",
    description: "Low-cost, real-time security solution using Python and OpenCV for video processing, featuring automated WhatsApp alert notifications with timestamped messages.",
    tags: ["Python", "OpenCV", "Computer Vision", "Automation"],
    image: "/projects/security.jpg"
  },
  {
    title: "Fake News Detection NLP",
    description: "NLP-based machine learning system to classify fake news articles. Designed an end-to-end pipeline comparing SVM, KNN, and Random Forest algorithms.",
    tags: ["Machine Learning", "NLP", "Python", "SVM"],
    image: "/projects/nlp.jpg"
  },
  {
    title: "Java Microservices CI/CD Pipeline",
    description: "End-to-end DevOps CI/CD pipeline for a Java application. Automated build, testing, and Docker image creation, deploying on a Kubernetes cluster via AWS.",
    tags: ["Java", "Docker", "Kubernetes", "AWS", "GitHub Actions"],
    image: "/projects/cicd.jpg"
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-transparent py-24 px-8 text-white relative z-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative p-8 rounded-2xl flex flex-col h-[400px] cursor-pointer overflow-hidden border border-white/10 group"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              
              {/* Dark Overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/80 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-80" />
              
              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex-grow flex flex-col justify-end">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-white/80 font-light text-sm mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs font-medium px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
