import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { Button } from "./ui/button.jsx";
import { Input } from "./ui/input.jsx";
import { Textarea } from "./ui/textarea.jsx";
import { Card, CardContent } from "./ui/card.jsx";
import { motion } from "motion/react";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@velomynt.com",
      subdetails: "",
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
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 px-2 sm:px-0">Get In Touch</h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white px-4 sm:px-0">
              Ready to start your project? Contact us today and let's discuss how we can help transform your business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 sm:py-16 md:py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-1 gap-8 mb-20 max-w-md mx-auto">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="border-2 border-slate-700/50 hover:border-indigo-500/60 hover:shadow-xl hover:shadow-indigo-500/20 bg-slate-900/80 backdrop-blur-sm transition-all">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-sky-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-black" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{info.title}</h3>
                    <a href={`mailto:${info.details}`} className="text-gray-200 mb-1 hover:text-indigo-400 transition-colors">{info.details}</a>
                    {info.subdetails && <p className="text-indigo-100 text-sm">{info.subdetails}</p>}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact Form and Info Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="w-full bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    className="w-full bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company Name
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="w-full bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-slate-700 rounded-md bg-slate-900/50 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">Select a service</option>
                    <option value="software">Software Development</option>
                    <option value="web">Website Development</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="other">Other Services</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={6}
                    className="w-full bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-indigo-600 to-sky-500 hover:from-indigo-500 hover:to-sky-400 text-black"
                >
                  Send Message <Send className="ml-2" size={20} />
                </Button>
              </form>
            </div>

            {/* Additional Info */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Why Contact Us?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-slate-700/60 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <div className="w-3 h-3 bg-sky-400 rounded-full"></div>
                  </div>
                  <div>
                      <h3 className="font-bold text-white mb-2">Free Consultation</h3>
                      <p className="text-gray-300">Get expert advice on your project at no cost. We'll help you make the right technology decisions.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-slate-700/60 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <div className="w-3 h-3 bg-sky-400 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">Quick Response</h3>
                    <p className="text-gray-300">We respond to all inquiries within 24 hours. Your time is valuable, and we respect that.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-slate-700/60 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <div className="w-3 h-3 bg-sky-400 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">Detailed Proposal</h3>
                    <p className="text-gray-300">Receive a comprehensive project proposal with timeline, budget, and deliverables.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-slate-700/60 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <div className="w-3 h-3 bg-sky-400 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">No Obligation</h3>
                    <p className="text-gray-300">Consulting with us comes with no strings attached. Make an informed decision for your business.</p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="mt-12 p-6 bg-gradient-to-br from-slate-950 to-slate-900 rounded-2xl border border-slate-800/60">
                <h3 className="font-bold text-white mb-4">Office Hours</h3>
                <div className="space-y-2 text-sm text-indigo-100">
                  <div className="flex justify-between">
                    <span className="text-indigo-100">Monday - Friday:</span>
                    <span className="font-medium text-indigo-100">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-indigo-100">Saturday:</span>
                    <span className="font-medium text-indigo-100">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-indigo-100">Sunday:</span>
                    <span className="font-medium text-indigo-100">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

