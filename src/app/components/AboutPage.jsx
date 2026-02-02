import { Target, Users, Award, TrendingUp } from "lucide-react";
import { Card, CardContent } from "./ui/card.jsx";
import { motion } from "motion/react";
import companyLogo from "../../image/companylogo-removebg-preview.png";

export function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Mission Driven",
      description: "Our mission is to empower businesses with innovative technology solutions that drive growth and success.",
    },
    {
      icon: Users,
      title: "Client Focused",
      description: "We prioritize our clients' needs and work collaboratively to deliver exceptional results every time.",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We maintain the highest standards of quality in every project, ensuring reliability and performance.",
    },
    {
      icon: TrendingUp,
      title: "Innovation First",
      description: "We stay ahead of technology trends to provide cutting-edge solutions that future-proof your business.",
    },
  ];

  const team = [
    {
      name: "Karan Sharma",
      role: "Founder & CEO",
      image: companyLogo,
    },
    {
      name: "Ajay Verma",
      role: "Head of Department",
      image: companyLogo,
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
      <section className="bg-gradient-to-br from-black via-slate-900 to-black py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">About Us</h1>
            <p className="text-xl text-gray-300">
              We are a team of passionate technologists dedicated to transforming businesses through innovative software solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-lg text-gray-300 mb-6">
                Founded in 2026, Velomynt Digital was created with a clear vision — to help businesses leverage cutting-edge technology to solve real-world problems and achieve sustainable growth. We started as a focused team of developers, designers, and problem-solvers who believe that technology should simplify business, not complicate it. From startups to growing enterprises, we work closely with our clients to build scalable, secure, and high-performing digital solutions.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                As a modern IT services company, we combine fresh perspectives, agile methodologies, and the latest technologies to deliver solutions that are reliable, future-ready, and business-driven.
              </p>
              <p className="text-lg text-gray-300">
                Our commitment to quality, transparency, and client satisfaction drives everything we do — and that’s what helps our clients succeed in today’s digital-first world.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-sky-500 rounded-2xl transform -rotate-3 opacity-20 blur-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 to-indigo-500 rounded-2xl transform -rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1739298061707-cefee19941b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3Njc2Nzg4ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Our Team"
                className="relative rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="border-2 border-slate-700/50 bg-slate-800/50 backdrop-blur-sm hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/20 transition-all h-full">
                    <CardContent className="p-8 text-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-sky-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indigo-500/40"
                      >
                        <Icon className="text-white" size={32} />
                      </motion.div>
                      <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                      <p className="text-gray-400">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Talented professionals dedicated to your success
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-items-center max-w-4xl mx-auto"
          >
            {team.map((member, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -10 }} className="text-center group w-full max-w-[220px]">
                <div className="relative mb-5 overflow-hidden rounded-3xl p-4 bg-white shadow-[0_20px_60px_-30px_rgba(99,102,241,0.5)] transform-gpu transition-transform duration-500 group-hover:[transform:perspective(900px)_rotateX(6deg)_rotateY(-6deg)]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-52 object-contain drop-shadow-[0_12px_24px_rgba(30,64,175,0.35)] group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-indigo-300 font-medium">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-700 via-indigo-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { number: "10+", label: "Projects Completed" },
              { number: "5+", label: "Happy Clients" },
              { number: "8+", label: "Team Members" },
              { number: "Est. 2026", label: "Founded" }
            ].map((stat, index) => (
              <motion.div key={index} variants={itemVariants} className="text-center">
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-indigo-100">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

