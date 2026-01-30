import { Shield, Users, Zap, Award, TrendingUp, Clock, Headphones, Globe } from "lucide-react";
import { Card, CardContent } from "./ui/card.jsx";
import { motion } from "motion/react";

export function WhyChooseUsPage() {
  const reasons = [
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
  ];

  const process = [
    {
      step: "01",
      title: "Consultation",
      description: "We start with understanding your business goals, challenges, and requirements in detail",
    },
    {
      step: "02",
      title: "Planning",
      description: "Our team creates a comprehensive project plan with clear milestones and deliverables",
    },
    {
      step: "03",
      title: "Design & Development",
      description: "We design and build your solution using best practices and cutting-edge technologies",
    },
    {
      step: "04",
      title: "Testing & QA",
      description: "Rigorous testing ensures your solution is bug-free, secure, and performs optimally",
    },
    {
      step: "05",
      title: "Deployment",
      description: "Smooth launch with minimal downtime and comprehensive training for your team",
    },
    {
      step: "06",
      title: "Support & Maintenance",
      description: "Ongoing support, updates, and enhancements to keep your solution running perfectly",
    },
  ];

  const benefits = [
    {
      title: "Cost-Effective Solutions",
      description: "Competitive pricing without compromising on quality",
      icon: "💰",
    },
    {
      title: "Transparent Communication",
      description: "Regular updates and clear communication throughout the project",
      icon: "💬",
    },
    {
      title: "Cutting-Edge Technology",
      description: "We use the latest tools and technologies to future-proof your solution",
      icon: "🚀",
    },
    {
      title: "Data Security",
      description: "Bank-level security measures to protect your sensitive information",
      icon: "🔒",
    },
  ];

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
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">Why Choose Us</h1>
            <p className="text-xl text-white">
              We don't just build software—we build partnerships and deliver solutions that drive real business results
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Reasons Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">What Sets Us Apart</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the advantages of partnering with Velomynt Digital
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <Card
                  key={index}
                  className="border-2 border-slate-800 hover:border-indigo-500/60 hover:shadow-xl hover:shadow-indigo-500/20 bg-slate-950 transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-sky-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">{reason.title}</h3>
                    <p className="text-indigo-100 text-sm">{reason.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Our Proven Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach that ensures project success from start to finish
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((phase, index) => (
              <div key={index} className="relative">
                <Card className="border-2 border-gray-100 hover:shadow-lg transition-all h-full">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-sky-500 rounded-2xl flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-white">{phase.step}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{phase.title}</h3>
                    <p className="text-indigo-100">{phase.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Additional Benefits</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              More reasons to choose Velomynt Digital as your technology partner
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-indigo-100">{benefit.description}</p>
              </div>
            ))}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#B3B3B3" d="M63.81 1.026L4.553 21.88l9.363 77.637 49.957 27.457 50.214-27.828 9.36-77.635z"/><path fill="#A6120D" d="M117.536 25.998L63.672 7.629v112.785l45.141-24.983z"/><path fill="#DD1B16" d="M11.201 26.329l8.026 69.434 44.444 24.651V7.627z"/><path fill="#F2F2F2" d="M78.499 67.67l-14.827 6.934H48.044l-7.347 18.374-13.663.254 36.638-81.508L78.499 67.67zm-1.434-3.491L63.77 37.858 52.864 63.726h10.807l13.394.453z"/><path fill="#B3B3B3" d="M63.671 11.724l.098 26.134 12.375 25.888H63.698l-.027 10.841 17.209.017 8.042 18.63 13.074.242z"/></svg>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-indigo-100 mb-6">Our Commitment to You</h2>
              <div className="space-y-4">
                {[
                  "We deliver solutions that exceed expectations",
                  "Your success is our top priority",
                  "We maintain the highest standards of quality",
                  "We're committed to long-term partnerships",
                  "We stay ahead of technology trends",
                  "We provide honest, transparent communication",
                ].map((commitment, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg text-indigo-100">{commitment}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-sky-500 rounded-2xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1739298061707-cefee19941b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3Njc2Nzg4ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Our Team"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-700 to-indigo-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join 200+ satisfied clients who have transformed their businesses with our solutions
          </p>
        </div>
      </section>
    </div>
  );
}

