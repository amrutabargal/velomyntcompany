import { useState } from "react";
import { Card, CardContent } from "./ui/card.jsx";
import { Badge } from "./ui/badge.jsx";
import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import bankingAppImage from "../../image/portfolio/banking-app-interface-concept_23-2148616879_ANTI_SEARCH.png";
import healthcareImage from "../../image/portfolio/emr-management_ANTI_SEARCH.png";
import foodDeliveryImage from "../../image/portfolio/food-delivery.png";
import gameAppImage from "../../image/portfolio/game-app.png";
import goldenLakeImage from "../../image/portfolio/golden-lake.png";
import fitnessImage from "../../image/portfolio/gradient-fitness-app-template_23-2151095465_ANTI_SEARCH.png";
import ecommerceImage from "../../image/portfolio/image_ANTI_SEARCH.png";
import maximizeNetworkImage from "../../image/portfolio/maximize-network.png";
import shootForFutureImage from "../../image/portfolio/shoot-for-the-future.png";
import weAreBamImage from "../../image/portfolio/we-are-bam.png";

export function PortfolioPage() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Banking Mobile App",
      category: "mobile",
      tags: ["React Native", "Firebase", "Secure API"],
      description: "Secure mobile banking application with account management, transactions, and real-time notifications. Features biometric authentication and seamless user experience.",
      image: bankingAppImage,
    },
    {
      title: "Healthcare Management System",
      category: "software",
      tags: ["Java", "Spring Boot", "PostgreSQL"],
      description: "Enterprise healthcare solution for patient records, appointments, and billing management. Streamlined workflow for medical professionals.",
      image: healthcareImage,
    },
    {
      title: "Food Delivery App",
      category: "mobile",
      tags: ["Flutter", "Node.js", "MongoDB"],
      description: "Complete food ordering and delivery platform with real-time tracking, multiple payment options, and restaurant management system.",
      image: foodDeliveryImage,
    },
    {
      title: "Game Application",
      category: "mobile",
      tags: ["Unity", "C#", "Game Engine"],
      description: "Engaging mobile game application with immersive gameplay, social features, and in-app purchases. Optimized for performance across devices.",
      image: gameAppImage,
    },
    {
      title: "Golden Lake Platform",
      category: "web",
      tags: ["React", "Next.js", "Tailwind CSS"],
      description: "Modern web platform with responsive design, interactive features, and seamless user experience. Built for scalability and performance.",
      image: goldenLakeImage,
    },
    {
      title: "Fitness Tracking App",
      category: "mobile",
      tags: ["React Native", "Firebase", "Redux"],
      description: "Cross-platform mobile app for workout tracking, meal planning, and progress monitoring. Helps users achieve their fitness goals.",
      image: fitnessImage,
    },
    {
      title: "E-Commerce Platform",
      category: "web",
      tags: ["React", "Node.js", "MongoDB"],
      description: "Complete online shopping platform with payment integration, inventory management, and admin dashboard. Secure and scalable solution.",
      image: ecommerceImage,
    },
    {
      title: "Network Management Platform",
      category: "software",
      tags: ["Python", "Django", "REST API"],
      description: "Advanced network management solution for maximizing connectivity and performance. Real-time monitoring and analytics dashboard.",
      image: maximizeNetworkImage,
    },
    {
      title: "Creative Agency Website",
      category: "web",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      description: "Modern creative agency website showcasing portfolio, services, and client testimonials. Bold branding with strategic design approach.",
      image: shootForFutureImage,
    },
    {
      title: "Digital Product Agency",
      category: "web",
      tags: ["React", "Cloud Services", "SaaS"],
      description: "Digital product agency website featuring cloud mobile SaaS and AI solutions. Professional design with comprehensive service offerings.",
      image: weAreBamImage,
    },
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "software", name: "Software Solutions" },
  ];

  const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">Our Portfolio</h1>
            <p className="text-xl text-white">
              Explore our successful projects and see how we've helped businesses achieve their goals
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
                  <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  filter === category.id
                  ? "bg-gradient-to-r from-indigo-600 to-sky-500 text-black shadow-lg shadow-indigo-500/40"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="overflow-hidden group cursor-pointer bg-slate-950 border border-slate-800/50 hover:border-indigo-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden h-56 md:h-64 lg:h-72 bg-gradient-to-br from-slate-900 to-slate-950">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileHover={{ scale: 1 }}
                        className="text-white flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600/90 backdrop-blur-sm"
                      >
                        <ExternalLink size={20} className="animate-pulse" />
                        <span className="font-medium">View Project</span>
                      </motion.div>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    </div>
                  </div>
                  <CardContent className="p-5 md:p-6 lg:p-7 bg-gradient-to-b from-slate-950 to-slate-900">
                    <motion.h3
                      className="text-lg md:text-xl font-bold text-white mb-2.5 md:mb-3 group-hover:text-indigo-400 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-gray-300 mb-3 md:mb-4 text-xs md:text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.div
                          key={tagIndex}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge
                            variant="secondary"
                            className="bg-slate-800/80 text-indigo-200 border border-indigo-700/50 hover:border-indigo-500 hover:bg-indigo-900/30 transition-all duration-300"
                          >
                            {tag}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-500/30 rounded-lg transition-all duration-500 pointer-events-none"></div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-700 to-indigo-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">10+</div>
              <div className="text-indigo-100 text-sm md:text-base">Successful Projects</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-indigo-100 text-sm md:text-base">Client Retention Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">8+</div>
              <div className="text-indigo-100 text-sm md:text-base">Trusted Partners</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">6+</div>
              <div className="text-indigo-100 text-sm md:text-base">Industries We Serve</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

