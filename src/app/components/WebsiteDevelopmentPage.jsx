import { Button } from "./ui/button.jsx";
import { Card, CardContent } from "./ui/card.jsx";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export function WebsiteDevelopmentPage({ onNavigate }) {
  const solutions = [
    {
      title: "Custom Website Development",
      description:
        "Tailor-made websites designed specifically for your business goals, brand identity, and target audience.",
    },
    {
      title: "Responsive Web Design",
      description:
        "Mobile-friendly websites that adapt perfectly across all devices — desktop, tablet, and mobile.",
    },
    {
      title: "E-Commerce Website Development",
      description:
        "High-converting e-commerce solutions with secure payment gateways, product management, and scalable architecture.",
    },
    {
      title: "CMS Website Development",
      description:
        "Easy-to-manage websites using WordPress or custom CMS solutions so you can update content effortlessly.",
    },
    {
      title: "Progressive Web Applications (PWA)",
      description:
        "Fast, app-like web experiences that work offline and deliver superior performance.",
    },
    {
      title: "Website Maintenance & Support",
      description:
        "Ongoing updates, security monitoring, performance optimization, and technical support.",
    },
  ];

  const technologies = [
    "React",
    "Angular",
    "Vue.js",
    "HTML5",
    "CSS3",
    "Node.js",
    "Python",
    "Java",
    "WordPress",
    "Custom CMS",
    "AWS",
    "Docker",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description:
        "We understand your business, audience, and goals to create the right website strategy.",
    },
    {
      step: "02",
      title: "UI/UX Design",
      description:
        "User-focused designs that enhance usability, engagement, and trust.",
    },
    {
      step: "03",
      title: "Development & Optimization",
      description:
        "Clean, scalable code with SEO, speed, and security best practices.",
    },
    {
      step: "04",
      title: "Testing & Launch",
      description:
        "Cross-browser testing, performance optimization, and smooth deployment.",
    },
    {
      step: "05",
      title: "Ongoing Support",
      description:
        "Continuous improvements, updates, and maintenance as your business grows.",
    },
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
            <p className="text-sm sm:text-base text-indigo-300 font-medium mb-2 sm:mb-3">Website Development Services</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
              Professional, SEO-Friendly &amp; High-Performance Websites
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-indigo-100 mb-3 sm:mb-4">
              Velomynt is a professional website development company helping businesses
              build fast, secure, and scalable websites that drive traffic, engagement, and conversions.
            </p>
            <p className="text-lg text-indigo-100/90 mb-4">
              We design and develop websites that don’t just look good — they generate leads,
              improve brand credibility, and support long-term business growth.
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
              Why Choose Our Website Development Services?
            </h2>
            <p className="text-gray-700 mb-4">
              Your website is your digital sales engine. We ensure it works 24/7 for your business.
            </p>
            <ul className="space-y-3">
              {[
                "SEO-optimized website architecture",
                "Mobile-first & responsive design",
                "Fast loading & performance-focused",
                "Secure, scalable & future-ready",
                "Conversion-driven user experience",
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
                Who Is This Service For?
              </h3>
              <ul className="space-y-2 text-white">
                <li>✔ Startups launching their first website</li>
                <li>✔ Businesses redesigning outdated websites</li>
                <li>✔ E-commerce brands looking to scale</li>
                <li>✔ Companies needing custom web applications</li>
              </ul>
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Why Velomynt?</h3>
              <ul className="space-y-2 text-white">
                <li>• Experienced web developers & designers</li>
                <li>• Business-focused development approach</li>
                <li>• Transparent communication &amp; pricing</li>
                <li>• On-time delivery with post-launch support</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-12 sm:py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
            Our Website Development Solutions
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
            Technologies We Use for Web Development
          </h2>
          <p className="text-gray-700 mb-4">
            We build modern websites using industry-leading technologies:
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
            Our Website Development Process
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
          <h2 className="text-3xl font-bold mb-4">Let’s Build Your Website the Right Way</h2>
          <p className="text-lg text-indigo-100 mb-6">
            Ready to create a high-performing website that attracts customers and grows your business?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-indigo-700 hover:bg-indigo-50"
              onClick={() => onNavigate?.("contact")}
            >
              Get a Free Website Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              onClick={() => onNavigate?.("contact")}
            >
              Talk to Our Web Experts
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}


