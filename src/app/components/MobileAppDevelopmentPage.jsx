import { Button } from "./ui/button.jsx";
import { Card, CardContent } from "./ui/card.jsx";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export function MobileAppDevelopmentPage({ onNavigate }) {
  const solutions = [
    {
      title: "iOS App Development",
      description:
        "Custom iPhone and iPad apps built using modern frameworks for performance, security, and smooth user experience.",
    },
    {
      title: "Android App Development",
      description:
        "High-quality Android applications optimized for speed, compatibility, and user engagement across devices.",
    },
    {
      title: "Cross-Platform App Development",
      description:
        "Cost-effective mobile apps using a single codebase for both Android and iOS platforms.",
    },
    {
      title: "Mobile App UI/UX Design",
      description:
        "Intuitive, visually appealing designs that improve usability, retention, and conversions.",
    },
    {
      title: "App Store Optimization (ASO)",
      description:
        "Keyword-optimized app listings to improve visibility, downloads, and rankings.",
    },
    {
      title: "App Maintenance & Support",
      description:
        "Ongoing updates, performance optimization, security patches, and feature enhancements.",
    },
  ];

  const technologies = [
    "Android",
    "iOS",
    "Cross-Platform Frameworks",
    "React",
    "Angular",
    "Vue.js",
    "Node.js",
    "Python",
    "Java",
    "AWS",
    "REST APIs",
    "SQL & NoSQL Databases",
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Understanding your business goals, users, and technical requirements.",
    },
    {
      step: "02",
      title: "UI/UX Design",
      description: "Creating engaging and user-friendly app designs and prototypes.",
    },
    {
      step: "03",
      title: "App Development",
      description: "Building scalable, secure, and high-performance mobile applications.",
    },
    {
      step: "04",
      title: "Testing & Quality Assurance",
      description: "Rigorous testing across devices, platforms, and scenarios.",
    },
    {
      step: "05",
      title: "Launch & Ongoing Support",
      description: "App store deployment with continuous support and optimization.",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-indigo-300 font-medium mb-3">Mobile App Development Services</p>
            <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              Scalable, Secure &amp; High-Performance Mobile Applications
            </h1>
            <p className="text-lg text-indigo-100 mb-4">
              Velomynt is a professional mobile app development company delivering powerful
              Android, iOS, and cross-platform applications for startups and growing businesses.
            </p>
            <p className="text-lg text-indigo-100/90 mb-4">
              We build mobile apps that are not just visually appealing — they are fast, secure,
              user-centric, and built for long-term scalability.
            </p>
            <p className="text-sm text-indigo-200/80 mb-6">
              👉 Serving businesses worldwide with modern mobile solutions
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-sky-500 text-black hover:from-indigo-500 hover:to-sky-400 shadow-lg shadow-indigo-500/40"
                onClick={() => onNavigate?.("contact")}
              >
                Get Started Now <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-indigo-400/70 text-white hover:bg-indigo-500/10"
                onClick={() => onNavigate?.("services")}
              >
                Back to Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Mobile App Development Services?
            </h2>
            <p className="text-gray-700 mb-4">
              Your mobile app is your direct connection to users. We make sure it delivers value.
            </p>
            <ul className="space-y-3">
              {[
                "Native & cross-platform development",
                "Performance-optimized & scalable architecture",
                "Secure code & data protection",
                "User-centric UI/UX design",
                "App Store & Play Store ready",
              ].map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-indigo-500 mt-1" size={18} />
                  <span className="text-indigo-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <Card className="border-2 border-indigo-500/20 shadow-lg bg-slate-900">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                Industries We Serve
              </h3>
              <ul className="space-y-2 text-white">
                <li>✔ Startups &amp; Tech Companies</li>
                <li>✔ E-Commerce &amp; Retail</li>
                <li>✔ Healthcare &amp; Fitness</li>
                <li>✔ Real Estate &amp; Property</li>
                <li>✔ Education &amp; SaaS Platforms</li>
              </ul>
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Why Velomynt?</h3>
              <ul className="space-y-2 text-white">
                <li>• Experienced mobile app developers</li>
                <li>• Agile development &amp; transparent communication</li>
                <li>• Business-driven app solutions</li>
                <li>• On-time delivery with long-term support</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
            Our Mobile App Development Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, idx) => (
              <Card
                key={idx}
                className="border border-slate-700 bg-slate-900/80 hover:border-indigo-400/70 hover:shadow-lg hover:shadow-indigo-500/20 transition-all"
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{solution.title}</h3>
                  <p className="text-sm text-indigo-100">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Technologies We Use for App Development
          </h2>
          <p className="text-gray-700 mb-4">
            We leverage modern mobile technologies to build reliable apps:
          </p>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-indigo-600/10 text-indigo-800 rounded-full text-sm border border-indigo-500/40"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
            Our Mobile App Development Process
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="text-white">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-sky-400 flex items-center justify-center mb-3 text-black font-bold">
                  {step.step}
                </div>
                <h3 className="font-semibold mb-1">{step.title}</h3>
                <p className="text-sm text-indigo-100">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-indigo-700 to-indigo-500 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Let’s Build Your Mobile App</h2>
          <p className="text-lg text-indigo-100 mb-6">
            Ready to launch a powerful mobile app for your business?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-indigo-700 hover:bg-indigo-50"
              onClick={() => onNavigate?.("contact")}
            >
              Get a Free App Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              onClick={() => onNavigate?.("contact")}
            >
              Talk to Our Mobile Experts
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}


