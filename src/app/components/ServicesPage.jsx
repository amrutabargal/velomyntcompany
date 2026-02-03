import { Code, Globe, Smartphone } from "lucide-react";
import { Card, CardContent } from "./ui/card.jsx";
import { Button } from "./ui/button.jsx";
import { motion } from "motion/react";

export function ServicesPage({ onNavigate }) {
  const mainServices = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions tailored to your unique business requirements. We build scalable, secure, and efficient applications using the latest technologies.",
      features: [
        "Custom Enterprise Software",
        "SaaS Application Development",
        "Legacy System Modernization",
        "API Development & Integration",
        "Cloud-Native Applications",
      ],
    },
    {
      icon: Globe,
      title: "Website Development",
      description: "Responsive and modern websites that drive engagement and conversions. From corporate websites to complex web applications.",
      features: [
        "Responsive Web Design",
        "E-Commerce Solutions",
        "CMS Development",
        "Progressive Web Apps (PWA)",
        "Website Maintenance & Support",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android platforms.",
      features: [
        "iOS App Development",
        "Android App Development",
        "Cross-Platform Solutions",
        "App UI/UX Design",
        "App Store Optimization",
      ],
    },
  ];

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
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 px-2 sm:px-0">Our Services</h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white px-4 sm:px-0">We offer end-to-end IT services tailored to your business goals.</p>
              </motion.div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}>
                  <div className={isEven ? "" : "lg:order-2"}>
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-sky-400/20 rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="text-sky-400" size={32} />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{service.title}</h2>
                    <p className="text-lg text-gray-300 mb-6">{service.description}</p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-6 h-6 bg-slate-800/60 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                          </div>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button onClick={() => onNavigate("contact")} className="bg-gradient-to-r from-indigo-600 to-sky-500 hover:from-indigo-500 hover:to-sky-400 text-black shadow-indigo-500/40">
                      Get Started
                    </Button>
                  </div>
                  <div className={isEven ? "" : "lg:order-1"}>
                    <Card className="overflow-hidden border-2 border-gray-100 shadow-xl">
                      <img
                        src={
                          index === 0
                            ? "https://images.unsplash.com/photo-1763568258752-fe55f4ab7267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwc29mdHdhcmUlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3Njc2ODE4NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                            : index === 1
                            ? "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3Njc2MzA5NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                            : "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY3NjAwODc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        }
                        alt={service.title}
                        className="w-full h-96 object-cover"
                      />
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-2 sm:px-0">Our Process</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
              A proven methodology that ensures project success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We analyze your requirements and create a strategic plan" },
              { step: "02", title: "Design", description: "Our designers create beautiful and intuitive interfaces" },
              { step: "03", title: "Development", description: "We build your solution using best practices and latest tech" },
              { step: "04", title: "Delivery", description: "We deploy, test, and provide ongoing support" },
            ].map((phase, index) => (
              <div key={index} className="relative">
                {index < 3 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-slate-900/40 to-transparent"></div>
                )}
                <div className="text-center">
                  <div className="w-24 h-24 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4 border border-slate-900">
                    <span className="text-3xl font-bold text-white">{phase.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
                  <p className="text-indigo-100">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-indigo-700 to-indigo-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2 sm:px-0">Ready to Get Started?</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-indigo-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 sm:px-0">
            Let's discuss your project and create a solution that drives results
          </p>
          <Button onClick={() => onNavigate("contact")} size="lg" className="bg-white text-indigo-700 hover:bg-indigo-50">
            Contact Us Today
          </Button>
        </div>
      </section>
    </div>
  );
}

