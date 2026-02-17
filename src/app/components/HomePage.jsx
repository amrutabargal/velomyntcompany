import { useState, useEffect, useRef } from "react";
import { ArrowRight, Code, Smartphone, Globe, ExternalLink, Shield, Users, Zap, Award, TrendingUp, Clock, Headphones, Star, Quote } from "lucide-react";
import { Button } from "./ui/button.jsx";
import { Card, CardContent } from "./ui/card.jsx";
import { motion, useInView } from "motion/react";
import ecommerceImage from "../../image/portfolio/shophub.png";
import healthcareImage from "../../image/portfolio/caremax-hospital.png";
import maximizeNetworkImage from "../../image/portfolio/himkan.png";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog.tsx";
import companyLogo from "../../image/companylogo-removebg-preview.png";
import homeImage from "../../image/home-image.png";
import ReactLogo from "../../image/react.svg";
import NodeLogo from "../../image/nodejs.svg";
import PythonLogo from "../../image/python.svg";
import JavaLogo from "../../image/java.svg";
import AngularLogo from "../../image/angular.svg";
import VueLogo from "../../image/vue.svg";
import DockerLogo from "../../image/docker.svg";
import AWSLogo from "../../image/aws.svg";

export function HomePage({ onNavigate }) {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);
  const [counters, setCounters] = useState({ projects: 0, clients: 0 });
  const heroRef = useRef(null);

  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs with cutting-edge technologies.",
      details: "We specialize in building scalable, robust software applications using modern frameworks and best practices. Our team delivers enterprise-grade solutions that streamline operations and drive growth.",
      features: ["Custom Development", "API Integration", "Cloud Solutions", "Maintenance & Support"]
    },
    {
      icon: Globe,
      title: "Website Development",
      description: "Responsive and modern websites that drive engagement and deliver exceptional user experiences.",
      details: "Create stunning, responsive websites that work seamlessly across all devices. We focus on performance, SEO optimization, and user experience to help your business stand out online.",
      features: ["Responsive Design", "SEO Optimization", "Fast Performance", "Modern UI/UX"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that bring your ideas to life.",
      details: "From iOS to Android, we develop native and cross-platform mobile applications that provide exceptional user experiences. Our apps are optimized for performance and user engagement.",
      features: ["Native Apps", "Cross-Platform", "App Store Optimization", "Push Notifications"]
    },
  ];

  const technologies = [
    {
      name: "React",
      icon: <img src={ReactLogo} alt="React" className="w-9 h-9" />,
      description: "Modern UI library for building interactive interfaces",
    },
    {
      name: "Node.js",
      icon: <img src={NodeLogo} alt="Node.js" className="w-9 h-9" />,
      description: "Server-side JavaScript runtime for scalable applications",
    },
    {
      name: "Python",
      icon: <img src={PythonLogo} alt="Python" className="w-9 h-9" />,
      description: "Versatile programming language for backend development",
    },
    {
      name: "Java",
      icon: <img src={JavaLogo} alt="Java" className="w-9 h-9" />,
      description: "Enterprise-grade language for robust applications",
    },
    {
      name: "Angular",
      icon: <img src={AngularLogo} alt="Angular" className="w-9 h-9" />,
      description: "Comprehensive framework for web applications",
    },
    {
      name: "Vue.js",
      icon: <img src={VueLogo} alt="Vue.js" className="w-9 h-9" />,
      description: "Progressive framework for building user interfaces",
    },
    {
      name: "Docker",
      icon: <img src={DockerLogo} alt="Docker" className="w-9 h-9" />,
      description: "Containerization platform for deployment",
    },
    {
      name: "AWS",
      icon: <img src={AWSLogo} alt="AWS" className="w-9 h-9" />,
      description: "Cloud infrastructure and services",
    },
  ];

  const portfolioItems = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      image: ecommerceImage,
      description: "Complete e-commerce solution with payment integration",
      fullDescription: "A comprehensive e-commerce platform featuring secure payment processing, inventory management, and customer analytics. Built with modern technologies for scalability and performance.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"]
    },
    {
      title: "Healthcare Management System",
      category: "Software Development",
      image: healthcareImage,
      description: "Enterprise healthcare solution for patient records and appointments",
      fullDescription: "A HIPAA-compliant healthcare management system for providers to manage patient records, appointments, and medical history. Features secure data encryption and real-time synchronization.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "HIPAA Compliance"]
    },
    {
      title: "Network Management Platform",
      category: "Software Development",
      image: maximizeNetworkImage,
      description: "Advanced network management solution for connectivity and performance",
      fullDescription: "An enterprise network management solution with advanced analytics, real-time monitoring, and integration capabilities. Helps businesses maximize connectivity and track performance metrics.",
      technologies: ["Python", "Django", "REST API", "AWS"]
    },
  ];

  // Animated counter effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const duration = 2000;
            const steps = 60;
            const increment = duration / steps;

            const animateCounter = (target, key) => {
              let current = 0;
              const targetValue = target;
              const step = targetValue / steps;

              const timer = setInterval(() => {
                current += step;
                if (current >= targetValue) {
                  setCounters((prev) => ({ ...prev, [key]: targetValue }));
                  clearInterval(timer);
                } else {
                  setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }));
                }
              }, increment);
            };

            animateCounter(10, "projects");
            animateCounter(5, "clients");
          }
        });
      },
      { threshold: 0.5 }
    );

    const statsElement = document.querySelector(".stats-section");
    if (statsElement) {
      observer.observe(statsElement);
    }

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, threshold: 0.5 });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-grid-pattern opacity-10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        ></motion.div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(16,185,129,0.2),transparent_55%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="inline-block px-4 py-2 bg-indigo-500/15 border border-indigo-400/40 text-indigo-200 rounded-full text-sm font-medium mb-6 backdrop-blur-sm cursor-pointer"
              >
                🚀 Leading IT Solutions Provider
              </motion.div>
              <motion.h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Transform Your Business with
                <motion.span 
                  className="bg-gradient-to-r from-indigo-400 to-sky-400 bg-clip-text text-transparent block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  Innovative Technology
                </motion.span>
              </motion.h1>
              <motion.p 
                className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 px-2 sm:px-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Velomynt is a trusted IT solutions company delivering custom software development, website design, mobile app development, and AI-driven solutions for startups and growing businesses. We turn ideas into scalable digital products.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    onClick={() => onNavigate("contact")}
                    className="bg-gradient-to-r from-indigo-600 to-sky-500 hover:from-indigo-500 hover:to-sky-400 shadow-lg shadow-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/60 transition-all w-full sm:w-auto"
                  >
                    Get Started <ArrowRight className="ml-2" size={20} />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => onNavigate("portfolio")}
                    className="border-indigo-400/60 text-white hover:bg-indigo-500/10 backdrop-blur-sm w-full sm:w-auto"
                  >
                    View Our Work
                  </Button>
                </motion.div>
              </motion.div>
              <div ref={statsRef} className="stats-section mt-6 sm:mt-8 flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 md:gap-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ scale: 1.1 }}
                  className="cursor-pointer text-center sm:text-left"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-white bg-gradient-to-r from-indigo-400 to-sky-400 bg-clip-text text-transparent">
                    {counters.projects}+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">Projects Completed</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ scale: 1.1 }}
                  className="cursor-pointer text-center sm:text-left"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-white bg-gradient-to-r from-indigo-400 to-sky-400 bg-clip-text text-transparent">
                    {counters.clients}+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">Happy Clients</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={{ scale: 1.1 }}
                  className="cursor-pointer text-center sm:text-left"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-white bg-gradient-to-r from-indigo-400 to-sky-400 bg-clip-text text-transparent">
                    Est. 2026
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">Founded</div>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={homeImage}
                  alt="Technology"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-black via-slate-900/30 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-2 sm:px-0">Our Services</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-4 sm:px-0">
              Comprehensive IT solutions designed to help your business thrive in the digital age
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                >
                  <Card
                    className="border-2 border-slate-700/50 bg-slate-900/80 backdrop-blur-sm hover:border-indigo-500/60 hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-300 group cursor-pointer h-full"
                  >
                    <CardContent className="p-4 sm:p-6 md:p-8">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ type: "spring", stiffness: 300, duration: 0.6 }}
                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-indigo-600 to-sky-500 rounded-xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-indigo-500/40"
                      >
                        <Icon className="text-white" size={24} />
                      </motion.div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-indigo-300 transition-colors">{service.title}</h3>
                      <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">{service.description}</p>
                      <div className="flex justify-between items-center mt-4">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedService(service)}
                          className="text-indigo-300 text-sm font-medium flex items-center"
                        >
                          Learn more <ArrowRight className="ml-1" size={16} />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => {
                            const map = {
                              "Software Development": "software-development",
                              "Website Development": "website-development",
                              "Mobile App Development": "mobile-app-development",
                            };
                            const target = map[service.title];
                            if (target) onNavigate(target);
                          }}
                          className="text-xs font-medium text-indigo-200 border border-indigo-400/60 rounded-full px-3 py-1 hover:bg-indigo-500/10"
                        >
                          View More Details
                        </motion.button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate("services")}
                className="border-indigo-500/60 text-white hover:bg-indigo-500/10 backdrop-blur-sm"
              >
                View All Services <ArrowRight className="ml-2" size={20} />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Service Details Dialog */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="bg-slate-900 border-slate-700 text-white max-w-2xl">
          {selectedService && (() => {
            const Icon = selectedService.icon;
            return (
              <>
                <DialogHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-sky-500 rounded-xl flex items-center justify-center">
                      <Icon className="text-white" size={32} />
                    </div>
                    <DialogTitle className="text-2xl font-bold">{selectedService.title}</DialogTitle>
                  </div>
                <DialogDescription className="text-gray-300">
                  {selectedService.description}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-6">
                <p className="text-gray-300 mb-6">{selectedService.details}</p>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {selectedService.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-2 text-gray-300"
                      >
                        <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex gap-4">
                  <Button
                    onClick={() => {
                      setSelectedService(null);
                      onNavigate("contact");
                    }}
                    className="bg-gradient-to-r from-indigo-600 to-sky-500 hover:from-indigo-500 hover:to-sky-400 text-black"
                  >
                    Get Started
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      if (!selectedService) return;
                      const map = {
                        "Software Development": "software-development",
                        "Website Development": "website-development",
                        "Mobile App Development": "mobile-app-development",
                      };
                      const target = map[selectedService.title];
                      setSelectedService(null);
                      if (target) onNavigate(target);
                    }}
                    className="border-indigo-500/60 text-white hover:bg-indigo-500/10 backdrop-blur-sm"
                  >
                    View More Details <ArrowRight className="ml-2" size={20} />
                  </Button>
                </div>
              </div>
              </>
            );
          })()}
        </DialogContent>
      </Dialog>

      {/* Technologies Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-2 sm:px-0">Technologies We Use</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Leveraging the latest technologies to build robust and scalable solutions
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 md:gap-6"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -15, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-slate-800/60 border border-slate-700 rounded-xl p-6 flex flex-col items-center justify-center hover:border-indigo-500/60 hover:shadow-lg hover:shadow-indigo-500/20 transition-all cursor-pointer group backdrop-blur-sm relative"
                onClick={() => onNavigate("technologies")}
              >
                <motion.div
                  whileHover={{ scale: 1.4, rotate: 360 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  className="text-2xl sm:text-3xl md:text-4xl mb-3"
                >
                  {tech.icon}
                </motion.div>
                <div className="text-sm font-medium text-gray-300 group-hover:text-indigo-300 transition-colors">{tech.name}</div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-xs px-3 py-2 rounded-lg shadow-xl border border-slate-700 whitespace-nowrap z-10 pointer-events-none"
                >
                  {tech.description}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-900 border-l border-t border-slate-700 rotate-45"></div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-2 sm:px-0">Featured Projects</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-4 sm:px-0">
              Explore our portfolio of successful projects and see how we've helped businesses grow
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          >
            {portfolioItems.map((item, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants} 
                whileHover={{ y: -15, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card
                  className="overflow-hidden border-2 border-slate-700/50 bg-slate-900/80 backdrop-blur-sm hover:border-indigo-500/60 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 group cursor-pointer"
                  onClick={() => setSelectedPortfolio(item)}
                >
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 sm:h-56 md:h-64 object-cover"
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                    <motion.div 
                      className="absolute top-4 right-4 bg-indigo-500 text-black px-3 py-1 rounded-full text-xs font-medium shadow-lg"
                      whileHover={{ scale: 1.1 }}
                    >
                      {item.category}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="absolute bottom-4 left-4 right-4"
                    >
                      <div className="flex items-center gap-2 text-white text-sm font-medium">
                        View Details <ExternalLink size={16} />
                      </div>
                    </motion.div>
                  </div>
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-400">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate("portfolio")}
                className="border-indigo-500/60 text-white hover:bg-indigo-500/10 backdrop-blur-sm"
              >
                View All Projects <ArrowRight className="ml-2" size={20} />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Details Dialog */}
      <Dialog open={!!selectedPortfolio} onOpenChange={() => setSelectedPortfolio(null)}>
        <DialogContent className="bg-slate-900 border-slate-700 text-white max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedPortfolio && (
            <>
              <div className="relative mb-6 rounded-lg overflow-hidden">
                <img
                  src={selectedPortfolio.image}
                  alt={selectedPortfolio.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-indigo-500 text-black px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                  {selectedPortfolio.category}
                </div>
              </div>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold mb-2">{selectedPortfolio.title}</DialogTitle>
                <DialogDescription className="text-gray-300 text-lg">
                  {selectedPortfolio.description}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-6">
                <p className="text-gray-300 mb-6">{selectedPortfolio.fullDescription}</p>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedPortfolio.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-4 py-2 bg-indigo-600/15 border border-indigo-500/40 rounded-full text-sm text-indigo-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex gap-4">
                  <Button
                    onClick={() => {
                      setSelectedPortfolio(null);
                      onNavigate("contact");
                    }}
                    className="bg-gradient-to-r from-indigo-600 to-sky-500 hover:from-indigo-500 hover:to-sky-400 text-black"
                  >
                    Start Similar Project
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSelectedPortfolio(null);
                      onNavigate("portfolio");
                    }}
                    className="border-slate-600 text-white hover:bg-slate-700"
                  >
                    View All Projects
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-slate-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-2 sm:px-0">Why Choose Us</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We don't just build software—we build partnerships and deliver solutions that drive real business results
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
          >
            {[
              {
                icon: Shield,
                title: "Proven Track Record",
                description: "10+ years of delivering successful projects across various industries with 98% client satisfaction rate",
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "50+ skilled professionals with extensive experience in cutting-edge technologies and best practices",
              },
              {
                icon: Zap,
                title: "Fast Delivery",
                description: "Agile methodology ensures quick turnaround times without compromising on quality or functionality",
              },
              {
                icon: Award,
                title: "Quality Assurance",
                description: "Rigorous testing and quality control processes to ensure bug-free, reliable solutions",
              },
              {
                icon: TrendingUp,
                title: "Scalable Solutions",
                description: "We build with growth in mind, ensuring your solution scales seamlessly as your business expands",
              },
              {
                icon: Clock,
                title: "On-Time Delivery",
                description: "We respect deadlines and ensure timely project completion with transparent progress tracking",
              },
              {
                icon: Headphones,
                title: "24/7 Support",
                description: "Round-the-clock technical support and maintenance to keep your systems running smoothly",
              },
              {
                icon: Globe,
                title: "Global Experience",
                description: "Successfully served clients across 30+ countries with diverse industry requirements",
              },
            ].map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="border-2 border-slate-700/50 bg-slate-900/80 backdrop-blur-sm hover:border-indigo-500/60 hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-300 group h-full">
                    <CardContent className="p-6">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ type: "spring", stiffness: 300, duration: 0.6 }}
                        className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-sky-500 rounded-xl flex items-center justify-center mb-4"
                      >
                        <Icon className="text-white" size={28} />
                      </motion.div>
                      <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-indigo-300 transition-colors">{reason.title}</h3>
                      <p className="text-indigo-100 text-sm">{reason.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-black via-slate-900/30 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-2 sm:px-0">Client Testimonials</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Don't just take our word for it—hear what our satisfied clients have to say about working with us
            </p>
          </motion.div>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16"
          >
            {[
              { number: "98%", label: "Client Retention" },
              { number: "8+", label: "Trusted Partners" },
              { number: "10+", label: "Projects Delivered" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-sky-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          >
            {[
              {
                name: "Aarav Mehta",
                role: "Founder/CEO, BlueOrbit Technologies",
                company: "BlueOrbit Technologies",
                initials: "AM",
                rating: 4.2,
                text: "We changed scope twice and it could've derailed the timeline. They stayed calm, kept us updated, and shipped a clean release.",
              },
              {
                name: "Ritika Sharma",
                role: "Founder/CEO, Nexwave Solutions",
                company: "Nexwave Solutions",
                initials: "RS",
                rating: 4.8,
                text: "Communication was the biggest win for us. Even when bugs popped up after launch, they owned the fixes and closed the loop fast.",
              },
              {
                name: "Kunal Verma",
                role: "Founder/CEO, CloudMint Systems",
                company: "CloudMint Systems",
                initials: "KV",
                rating: 3.6,
                text: "There were a few back-and-forths on UI, but the team listened and got it right. The final build is reliable and easy to use.",
              },
            ].map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -10 }}>
                <Card className="border-2 border-slate-700/50 bg-slate-900/80 backdrop-blur-sm hover:border-indigo-500/60 hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      {Array.from({ length: 5 }).map((_, i) => {
                        const filledStars = Math.floor(testimonial.rating);
                        const hasHalfStar = testimonial.rating - filledStars >= 0.5;
                        const isFilled = i < filledStars;
                        const isHalf = i === filledStars && hasHalfStar;
                        const starClass = isFilled
                          ? "w-5 h-5 fill-yellow-400 text-yellow-400"
                          : isHalf
                            ? "w-5 h-5 fill-yellow-400/50 text-yellow-400"
                            : "w-5 h-5 text-yellow-400/40";
                        return <Star key={i} className={starClass} />;
                      })}
                    </div>
                    <Quote className="w-10 h-10 text-indigo-200 mb-4" />
                    <p className="text-indigo-100 mb-6 italic">"{testimonial.text}"</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-indigo-500/20 border border-indigo-400/40 text-indigo-100 flex items-center justify-center font-semibold mr-4">
                        {testimonial.initials}
                      </div>
                      <div>
                        <div className="font-bold text-white">{testimonial.name}</div>
                        <div className="text-sm text-indigo-100">{testimonial.role}</div>
                        <div className="text-sm text-sky-400">{testimonial.company}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-indigo-700 via-indigo-600 to-indigo-700 text-white relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-grid-pattern opacity-10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        ></motion.div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2 sm:px-0"
              whileHover={{ scale: 1.05 }}
            >
              Ready to Start Your Project?
            </motion.h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with innovative technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  onClick={() => onNavigate("contact")}
                  className="bg-white text-indigo-700 hover:bg-indigo-50 shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
                >
                  Contact Us Now <ArrowRight className="ml-2" size={20} />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => onNavigate("services")}
                  className="border-white text-white hover:bg-white/20 backdrop-blur-sm w-full sm:w-auto"
                >
                  Explore Services
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

