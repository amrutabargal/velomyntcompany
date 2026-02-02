import { Button } from "./ui/button.jsx";
import { Card, CardContent } from "./ui/card.jsx";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export function SoftwareDevelopmentPage({ onNavigate }) {
  const sections = [
    {
      title: "Why Choose Our Software Development Services?",
      points: [
        "Custom-built software tailored to your workflows",
        "Scalable architecture for future growth",
        "Secure development with best practices",
        "High-performance & reliable systems",
        "Transparent communication & on-time delivery",
      ],
    },
  ];

  const solutions = [
    {
      title: "Custom Enterprise Software Development",
      description:
        "Robust, enterprise-grade software designed to streamline operations, manage data, and improve productivity.",
    },
    {
      title: "SaaS Application Development",
      description:
        "End-to-end SaaS product development, from idea validation to deployment and scaling.",
    },
    {
      title: "Legacy System Modernization",
      description:
        "Upgrade outdated systems to modern, secure, and high-performance software solutions.",
    },
    {
      title: "API Development & System Integration",
      description:
        "Seamless integration of third-party services, tools, and internal systems using secure APIs.",
    },
    {
      title: "Cloud-Native Application Development",
      description:
        "Scalable cloud-based software built for performance, flexibility, and reliability.",
    },
    {
      title: "Software Maintenance & Support",
      description:
        "Ongoing support, updates, performance optimization, and security enhancements.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Requirement Analysis & Planning",
      description: "We understand your business goals and define a clear software roadmap.",
    },
    {
      step: "02",
      title: "System Design & Architecture",
      description: "Creating scalable, secure, and efficient system architecture.",
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Agile development with continuous testing and quality assurance.",
    },
    {
      step: "04",
      title: "Deployment & Launch",
      description: "Secure deployment with performance optimization.",
    },
    {
      step: "05",
      title: "Support & Scaling",
      description: "Continuous monitoring, updates, and scalability support.",
    },
  ];

  const technologies = [
    "Node.js",
    "Python",
    "Java",
    "React",
    "Angular",
    "Vue.js",
    "AWS",
    "Docker",
    "SQL & NoSQL Databases",
  ];

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-sm sm:text-base text-indigo-300 font-medium mb-2 sm:mb-3">Software Development Services</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
              Custom, Scalable &amp; Secure Software Solutions
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-indigo-100 mb-3 sm:mb-4">
              Velomynt is a professional software development company delivering custom
              software solutions that help businesses automate operations, improve efficiency, and scale faster.
            </p>
            <p className="text-lg text-indigo-100/90 mb-4">
              We design and develop software that is secure, scalable, and tailored to your business
              needs, using modern technologies and proven development practices.
            </p>
            <p className="text-sm text-indigo-200/80 mb-6">
              👉 Serving startups, SMEs, and enterprises worldwide
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
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Software Development Services?
            </h2>
            <p className="text-gray-700 mb-4">
              Your software should solve real business problems, not create new ones.
            </p>
              <ul className="space-y-3">
              {sections[0].points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-indigo-500 mt-1" size={18} />
                  <span className="text-gray-800">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <Card className="border-2 border-indigo-500/20 shadow-lg bg-slate-900">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                Who Is This Service For?
              </h3>
              <ul className="space-y-2 text-white">
                <li>✔ Startups building MVPs &amp; SaaS products</li>
                <li>✔ Enterprises needing custom software</li>
                <li>✔ Businesses modernizing legacy systems</li>
                <li>✔ Companies automating internal operations</li>
              </ul>
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Why Velomynt?</h3>
              <ul className="space-y-2 text-white">
                <li>• Experienced software engineers</li>
                <li>• Business-focused development approach</li>
                <li>• Agile methodology &amp; transparency</li>
                <li>• Long-term partnership mindset</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-12 sm:py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
            Our Software Development Solutions
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
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Technologies We Use for Software Development
          </h2>
          <p className="text-gray-700 mb-4">
            We build powerful software using industry-leading technologies:
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
      <section className="py-12 sm:py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
            Our Software Development Process
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
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-indigo-700 to-indigo-500 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Let’s Build Your Software Solution</h2>
          <p className="text-lg text-indigo-100 mb-6">
            Ready to develop custom software that supports your business goals?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-indigo-700 hover:bg-indigo-50"
              onClick={() => onNavigate?.("contact")}
            >
              Get a Free Software Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              onClick={() => onNavigate?.("contact")}
            >
              Talk to Our Experts
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}


