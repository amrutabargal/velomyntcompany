import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { Button } from "./ui/button.jsx";
import { Input } from "./ui/input.jsx";
import { Textarea } from "./ui/textarea.jsx";
import { Card, CardContent } from "./ui/card.jsx";

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
      <section className="bg-gradient-to-br from-emerald-950 via-black to-emerald-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-600">
              Ready to start your project? Contact us today and let's discuss how we can help transform your business
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-1 gap-8 mb-20 max-w-md mx-auto">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="border-2 border-slate-800 hover:border-emerald-500/60 hover:shadow-xl hover:shadow-emerald-500/20 bg-slate-950 transition-all">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-black" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                    <a href={`mailto:${info.details}`} className="text-gray-200 mb-1 hover:text-emerald-400 transition-colors">{info.details}</a>
                    {info.subdetails && <p className="text-gray-600 text-sm">{info.subdetails}</p>}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact Form and Info Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
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
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
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
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-slate-700 rounded-md bg-slate-900 text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="">Select a service</option>
                    <option value="software">Software Development</option>
                    <option value="web">Website Development</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="other">Other Services</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
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
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-emerald-600 to-emerald-400 hover:from-emerald-500 hover:to-emerald-300 text-black"
                >
                  Send Message <Send className="ml-2" size={20} />
                </Button>
              </form>
            </div>

            {/* Additional Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Contact Us?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-emerald-900/40 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Free Consultation</h3>
                    <p className="text-gray-600">Get expert advice on your project at no cost. We'll help you make the right technology decisions.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-emerald-900/40 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Quick Response</h3>
                    <p className="text-gray-600">We respond to all inquiries within 24 hours. Your time is valuable, and we respect that.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-emerald-900/40 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Detailed Proposal</h3>
                    <p className="text-gray-600">Receive a comprehensive project proposal with timeline, budget, and deliverables.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-emerald-900/40 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">No Obligation</h3>
                    <p className="text-gray-600">Consulting with us comes with no strings attached. Make an informed decision for your business.</p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="mt-12 p-6 bg-gradient-to-br from-emerald-950 to-slate-900 rounded-2xl border border-emerald-900/60">
                <h3 className="font-bold text-gray-900 mb-4">Office Hours</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium">Closed</span>
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

