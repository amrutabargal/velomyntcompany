import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card.jsx";
import { motion } from "motion/react";

export function TestimonialsPage() {
  const testimonials = [
    {
      name: "Priya Deshmukh",
      role: "Operations Manager, Brightwell Logistics",
      company: "Brightwell Logistics",
      initials: "PD",
      rating: 4.2,
      text: "We changed scope twice and it could've derailed the timeline. They stayed calm, kept us updated, and shipped a clean release.",
    },
    {
      name: "Arjun Mehta",
      role: "Founder, FinEdge",
      company: "FinEdge",
      initials: "AM",
      rating: 4.8,
      text: "Communication was the biggest win for us. Even when bugs popped up after launch, they owned the fixes and closed the loop fast.",
    },
    {
      name: "Neha Rao",
      role: "Product Lead, CareBridge",
      company: "CareBridge",
      initials: "NR",
      rating: 3.6,
      text: "There were a few back-and-forths on UI, but the team listened and got it right. The final build is reliable and easy to use.",
    },
    {
      name: "Vikram Iyer",
      role: "Director, SwiftCart",
      company: "SwiftCart",
      initials: "VI",
      rating: 4.9,
      text: "We saw fewer support tickets within a month. The team kept things transparent and didn’t overpromise timelines.",
    },
    {
      name: "Meera Kapoor",
      role: "VP Operations, LogiCore",
      company: "LogiCore",
      initials: "MK",
      rating: 4.1,
      text: "They handled the complex integrations better than our previous vendor. A few adjustments were needed, but they owned them.",
    },
    {
      name: "Rahul Singh",
      role: "CEO, HomeBridge Realty",
      company: "HomeBridge Realty",
      initials: "RS",
      rating: 4.4,
      text: "The new portal is simple for our agents to use. Training took half the time compared to the old system.",
    },
  ];

  const stats = [
    { number: "99.9%", label: "Client Satisfaction" },
    { number: "5+", label: "Happy Clients" },
    { number: "10+", label: "Projects Completed" },
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
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <span className="ml-2 text-sm text-indigo-100">{testimonial.rating.toFixed(1)}/5</span>
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
                "There were a couple of late nights before launch, but they stayed on the call and didn’t leave us hanging. The outcome felt practical, not overdone."
              </blockquote>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-indigo-500/20 border border-indigo-400/40 text-indigo-100 flex items-center justify-center font-semibold mx-auto mb-4 text-2xl">
                  JM
                </div>
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

