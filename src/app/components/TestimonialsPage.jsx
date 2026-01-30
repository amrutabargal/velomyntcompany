import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card.jsx";
import { motion } from "motion/react";

export function TestimonialsPage() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      company: "TechStart Inc.",
      image: "https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHRlYW18ZW58MXx8fHwxNzY3NjE0NDk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 5,
      text: "Velomynt Digital transformed our outdated system into a modern, efficient platform. Their team's expertise and professionalism exceeded our expectations. Highly recommended!",
    },
    {
      name: "Michael Chen",
      role: "CTO, FinanceHub",
      company: "FinanceHub",
      image: "https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHRlYW18ZW58MXx8fHwxNzY3NjE0NDk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 5,
      text: "Outstanding service from start to finish. They delivered our mobile app on time and within budget. The quality of work and attention to detail is remarkable.",
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, HealthCare Plus",
      company: "HealthCare Plus",
      image: "https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHRlYW18ZW58MXx8fHwxNzY3NjE0NDk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 5,
      text: "The team at Velomynt Digital is incredible! They built our healthcare management system with precision and care. Their support has been invaluable to our growth.",
    },
    {
      name: "David Thompson",
      role: "Director, E-Commerce Co.",
      company: "E-Commerce Co.",
      image: "https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHRlYW18ZW58MXx8fHwxNzY3NjE0NDk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 5,
      text: "Working with Velomynt Digital was a game-changer. Their e-commerce platform increased our sales by 150% in the first quarter. Exceptional work!",
    },
    {
      name: "Lisa Anderson",
      role: "VP Operations, LogiTech",
      company: "LogiTech",
      image: "https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHRlYW18ZW58MXx8fHwxNzY3NjE0NDk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 5,
      text: "Professional, responsive, and highly skilled. Velomynt Digital delivered a complex logistics system that streamlined our entire operation. We couldn't be happier!",
    },
    {
      name: "Robert Williams",
      role: "CEO, RealEstate Pro",
      company: "RealEstate Pro",
      image: "https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHRlYW18ZW58MXx8fHwxNzY3NjE0NDk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 5,
      text: "Velomynt Digital created an amazing property portal for us. The features, design, and performance are all top-notch. They truly understand business needs.",
    },
  ];

  const stats = [
    { number: "100%", label: "Client Satisfaction" },
    { number: "5+", label: "Happy Clients" },
    { number: "10+", label: "Projects Completed" },
    { number: "5.0/5", label: "Average Rating" },
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
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">Client Testimonials</h1>
            <p className="text-xl text-white">
              Don't just take our word for it—hear what our satisfied clients have to say about working with us
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-500 to-sky-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="w-10 h-10 text-indigo-200 mb-4" />
                  <p className="text-indigo-100 mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="font-bold text-white">{testimonial.name}</div>
                      <div className="text-sm text-indigo-100">{testimonial.role}</div>
                      <div className="text-sm text-sky-400">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-indigo-500/40 shadow-2xl">
              <CardContent className="p-12">
              <Quote className="w-16 h-16 text-indigo-200 mb-6 mx-auto" />
              <blockquote className="text-2xl lg:text-3xl text-white text-center mb-8 italic leading-relaxed">
                "Velomynt Digital has been instrumental in our digital transformation journey. Their expertise, dedication, and innovative solutions have helped us stay ahead of the competition. They're not just a vendor—they're a true partner in our success."
              </blockquote>
              <div className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHRlYW18ZW58MXx8fHwxNzY3NjE0NDk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Featured Client"
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                />
                <div className="font-bold text-xl text-white">Jennifer Martinez</div>
                <div className="text-indigo-100">CEO, Global Enterprises</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Trusted By Industry Leaders</h2>
            <p className="text-lg text-gray-600">We've partnered with amazing companies across various sectors</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Healthcare", icon: "🏥" },
              { name: "Finance", icon: "💼" },
              { name: "E-Commerce", icon: "🛒" },
              { name: "Education", icon: "🎓" },
              { name: "Real Estate", icon: "🏢" },
              { name: "Logistics", icon: "🚚" },
              { name: "Retail", icon: "🏪" },
              { name: "Technology", icon: "💻" },
            ].map((industry, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">{industry.icon}</div>
                <div className="font-semibold text-gray-900">{industry.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-700 to-indigo-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">Join Our Growing List of Happy Clients</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Experience the same level of excellence and dedication that our clients rave about
          </p>
        </div>
      </section>
    </div>
  );
}

