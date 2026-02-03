import { Paintbrush, Zap, Database, Cloud, Shield } from "lucide-react";
import { Card, CardContent } from "./ui/card.jsx";
import { Button } from "./ui/button.jsx";
import { motion } from "motion/react";
import { useEffect } from "react";

export function AdditionalServicesPage({ onNavigate }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const additionalServices = [
    {
      icon: Paintbrush,
      title: "UI/UX Design",
      description: "User-centric design that improves engagement, usability, and brand trust.",
      details: "We create intuitive and visually appealing user interfaces that enhance user experience and drive conversions. Our design process focuses on understanding user behavior, creating wireframes, and developing pixel-perfect designs that align with your brand identity.",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Visual Design & Branding",
        "Usability Testing",
        "Design System Creation",
        "Responsive Design",
      ],
    },
    {
      icon: Zap,
      title: "AI Automation & Integration",
      subtitle: "(Optional but Powerful)",
      description: "Smart automation solutions to reduce manual work and increase productivity.",
      details: "Leverage the power of artificial intelligence to automate repetitive tasks, streamline workflows, and make data-driven decisions. Our AI solutions integrate seamlessly with your existing systems to enhance efficiency and unlock new capabilities.",
      features: [
        "Process Automation",
        "AI-Powered Analytics",
        "Chatbot Development",
        "Machine Learning Integration",
        "Data Processing Automation",
        "Smart Decision Making",
      ],
    },
    {
      icon: Database,
      title: "Database Solutions",
      description: "Robust database design and optimization",
      details: "We design, implement, and optimize database solutions that ensure data integrity, performance, and scalability. From relational databases to NoSQL solutions, we help you manage your data effectively.",
      features: [
        "Database Design & Architecture",
        "Performance Optimization",
        "Data Migration",
        "Backup & Recovery Solutions",
        "Database Security",
        "Scalability Planning",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and migration",
      details: "Move your infrastructure to the cloud with confidence. We help you migrate, manage, and optimize your cloud infrastructure to reduce costs, improve scalability, and enhance security.",
      features: [
        "Cloud Migration",
        "Infrastructure Setup",
        "Cloud Security",
        "Cost Optimization",
        "Auto-scaling Solutions",
        "Multi-cloud Strategy",
      ],
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions",
      details: "Protect your digital assets with our comprehensive cybersecurity services. We implement security best practices, conduct audits, and provide ongoing monitoring to keep your systems safe from threats.",
      features: [
        "Security Audits",
        "Vulnerability Assessment",
        "Penetration Testing",
        "Security Implementation",
        "Compliance Management",
        "24/7 Security Monitoring",
      ],
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed and efficiency improvements",
      details: "Optimize your applications and websites for peak performance. We analyze, identify bottlenecks, and implement solutions to improve load times, responsiveness, and overall user experience.",
      features: [
        "Performance Analysis",
        "Code Optimization",
        "Caching Strategies",
        "CDN Implementation",
        "Database Query Optimization",
        "Load Time Reduction",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 px-2 sm:px-0">Additional Services</h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white px-4 sm:px-0">
              Comprehensive solutions to support all aspects of your digital transformation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="border-2 border-slate-700/50 bg-slate-900/80 backdrop-blur-sm hover:border-indigo-500/60 hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-300 h-full flex flex-col">
                    <CardContent className="p-6 sm:p-8 flex flex-col flex-grow">
                      <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-sky-500 rounded-xl flex items-center justify-center mb-6">
                        <Icon className="text-white" size={32} />
                      </div>
                      <h2 className="text-2xl font-bold text-white mb-3">
                        {service.title}
                        {service.subtitle && (
                          <span className="text-lg text-gray-400 block mt-1">{service.subtitle}</span>
                        )}
                      </h2>
                      <p className="text-gray-300 mb-4 flex-grow">{service.description}</p>
                      <div className="mt-4">
                        <h3 className="text-sm font-semibold text-indigo-300 mb-3">Key Features:</h3>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-400">
                              <div className="w-1.5 h-1.5 bg-sky-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button 
                        onClick={() => onNavigate("contact")} 
                        className="mt-6 bg-gradient-to-r from-indigo-600 to-sky-500 hover:from-indigo-500 hover:to-sky-400 text-black w-full"
                      >
                        Get Started
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-indigo-700 to-indigo-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2 sm:px-0">Ready to Enhance Your Project?</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-indigo-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 sm:px-0">
            Let's discuss how our additional services can complement your main project and drive better results
          </p>
          <Button onClick={() => onNavigate("contact")} size="lg" className="bg-white text-indigo-700 hover:bg-indigo-50">
            Contact Us Today
          </Button>
        </div>
      </section>
    </div>
  );
}

