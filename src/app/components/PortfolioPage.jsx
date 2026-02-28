import { useState } from "react";
import { Card, CardContent } from "./ui/card.jsx";
import { Badge } from "./ui/badge.jsx";
import { Eye } from "lucide-react";
import { motion } from "motion/react";
import caremaxImage from "../../image/portfolio/caremax-hospital.png";
import medicareImage from "../../image/portfolio/medicare.png";
import medicarePlusImage from "../../image/portfolio/medicare-plus.png";
import foodHubImage from "../../image/portfolio/foodhub.png";
import foodSwiftImage from "../../image/portfolio/foodswift.png";
import royalPalaceImage from "../../image/portfolio/royal-palace.png";
import prestigeGrandImage from "../../image/portfolio/prestige-grand.png";
import paradiseResortImage from "../../image/portfolio/paradise-resort.png";
import indianResortImage from "../../image/portfolio/incredible-india.png";
import eduFlowImage from "../../image/portfolio/excellence-academy.png";
import himkanImage from "../../image/portfolio/himkan.png";
import shophubImage from "../../image/portfolio/shophub.png";
import styleverseImage from "../../image/portfolio/styleverse.png";
import toursImage from "../../image/portfolio/wanderluxe.png";
import finflowImage from "../../image/portfolio/finflow.png";
import logiflowImage from "../../image/portfolio/logiflow.png";
import premierEstateImage from "../../image/portfolio/premier-estate.png";
import quickServeImage from "../../image/portfolio/quickserve.png";
import luxurySalonImage from "../../image/portfolio/luxury-salon.png";

export function PortfolioPage({ onNavigate }) {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Shophube — E‑commerce",
      slug: "shophube",
      category: "ecommerce",
      tags: ["Next.js", "React", "Node.js", "Stripe", "MongoDB"],
      description: "Modern e‑commerce storefront with product catalog, cart, and secure checkout.",
      image: shophubImage,
    },
    {
      title: "Styleverse — Fashion Store",
      slug: "styleverse",
      category: "ecommerce",
      tags: ["Next.js", "React", "Tailwind CSS", "Stripe", "Vercel"],
      description: "Fashion storefront with curated collections, product pages, and checkout.",
      image: styleverseImage,
    },
    {
      title: "Royal Palace — Hotel",
      slug: "royal-palace",
      category: "hospitality",
      tags: ["Next.js", "React", "Tailwind CSS", "Headless CMS", "Stripe"],
      description: "Luxury hotel website showcasing rooms, amenities, and online booking.",
      image: royalPalaceImage,
    },
    {
      title: "Prestigra Den — Hotel",
      slug: "prestigra-den",
      category: "hospitality",
      tags: ["Next.js", "React", "Tailwind CSS", "Booking API", "PostgreSQL"],
      description: "Premium hotel site with room listings and booking workflows.",
      image: prestigeGrandImage,
    },
    {
      title: "Paradise Resort Bali — Resort",
      slug: "paradise-resort",
      category: "hospitality",
      tags: ["React", "Next.js", "Tailwind CSS", "Cloudinary", "Booking System"],
      description: "Resort showcase with high‑quality galleries, amenities, and booking CTA.",
      image: paradiseResortImage,
    },
    {
      title: "Indian Resort — Resort",
      slug: "indian-resort",
      category: "hospitality",
      tags: ["React", "Next.js", "Tailwind CSS", "Reservations", "PostgreSQL"],
      description: "Hospitality site featuring accommodations, services, and reservations.",
      image: indianResortImage,
    },
    {
      title: "Caremax — Clinic",
      slug: "caremax",
      category: "healthcare",
      tags: ["React", "Node.js", "Express", "PostgreSQL", "Docker"],
      description: "Clinic website for appointments, services, and patient information.",
      image: caremaxImage,
    },
    {
      title: "FoodSwift — Restaurants",
      slug: "foodswift",
      category: "food",
      tags: ["React", "Node.js", "Express", "PostgreSQL", "Socket.io"],
      description: "Restaurant ordering site with menu browsing and order placement.",
      image: foodSwiftImage,
    },
    {
      title: "FoodHub — Restaurants",
      slug: "foodhub",
      category: "food",
      tags: ["React", "Firebase", "Cloud Functions", "Realtime DB", "Firestore"],
      description: "Food ordering platform with restaurant listings and delivery tracking.",
      image: foodHubImage,
    },
    {
      title: "Healthcare Portal",
      slug: "healthcare-portal",
      category: "healthcare",
      tags: ["React", "Node.js", "Express", "PostgreSQL", "HIPAA Security"],
      description: "Comprehensive healthcare site with patient services and appointment booking.",
      image: medicareImage,
    },
    {
      title: "Medicare Plus — Clinics",
      slug: "medicare-plus",
      category: "healthcare",
      tags: ["React", "Node.js", "Express", "PostgreSQL", "Docker"],
      description: "Clinic website offering services, appointments, and provider information.",
      image: medicarePlusImage,
    },
    {
      title: "EduFlow — E‑learning",
      slug: "eduflow",
      category: "education",
      tags: ["Next.js", "React", "NextAuth", "Stripe", "PostgreSQL"],
      description: "Education platform with course listings, enrollment, and student resources.",
      image: eduFlowImage,
    },
    {
      title: "Velomynt — Real Estate",
      slug: "velomynt-realestate",
      category: "real-estate",
      tags: ["React", "Node.js", "Express", "Mapbox", "PostgreSQL"],
      description: "Property listings platform with search, interactive maps, and contact features.",
      image: himkanImage,
    },
    {
      title: "Tours — Travel",
      slug: "tours",
      category: "travel",
      tags: ["Next.js", "React", "Node.js", "Stripe", "Headless CMS"],
      description: "Travel & tours site with packages, itineraries, and booking capabilities.",
      image: toursImage,
    },
    {
      title: "FinFlow — Smart Finance",
      slug: "finflow",
      category: "finance",
      tags: ["React", "Tailwind CSS", "Chart.js", "Node.js", "PostgreSQL"],
      description: "Smart digital finance platform with dashboards, analytics, and financial tools.",
      image: finflowImage,
    },
    {
      title: "LogiFlow — Logistics",
      slug: "logiflow",
      category: "logistics",
      tags: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      description: "Logistics & supply chain management platform with tracking and analytics.",
      image: logiflowImage,
    },
    {
      title: "PremierEstate — Real Estate",
      slug: "premier-estate",
      category: "real-estate",
      tags: ["React", "Tailwind CSS", "Mapbox", "Node.js", "PostgreSQL"],
      description: "Luxury real estate website with property listings, virtual tours, and agent profiles.",
      image: premierEstateImage,
    },
    {
      title: "QuickServe — On‑Demand Services",
      slug: "quickserve",
      category: "services",
      tags: ["React", "Tailwind CSS", "Node.js", "Express", "Socket.io"],
      description: "On-demand services platform connecting users with local service providers.",
      image: quickServeImage,
    },
    {
      title: "Luxe Beauty Studio — Salon",
      slug: "luxury-salon",
      category: "beauty",
      tags: ["React", "Tailwind CSS", "Vite", "Framer Motion", "Responsive"],
      description: "Premium luxury salon website for Beverly Hills with appointment booking, services showcase, and gallery.",
      image: luxurySalonImage,
    },
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "ecommerce", name: "E‑commerce" },
    { id: "hospitality", name: "Hospitality" },
    { id: "healthcare", name: "Healthcare" },
    { id: "food", name: "Food & Restaurants" },
    { id: "education", name: "Education" },
    { id: "real-estate", name: "Real Estate" },
    { id: "travel", name: "Travel & Tours" },
    { id: "finance", name: "Finance" },
    { id: "logistics", name: "Logistics" },
    { id: "services", name: "Services" },
    { id: "beauty", name: "Beauty & Salon" },
  ];

  const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.category === filter);

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
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 px-2 sm:px-0">Our Portfolio</h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white px-4 sm:px-0">
              Explore our successful projects and see how we've helped businesses achieve their goals
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="render-defer py-8 sm:py-12 bg-slate-800 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((category) => (
                  <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all ${
                  filter === category.id
                  ? "bg-gradient-to-r from-indigo-600 to-sky-500 text-black shadow-lg shadow-indigo-500/40"
                    : "bg-slate-700/50 text-gray-300 hover:bg-slate-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="render-defer py-16 md:py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full max-w-[310px]"
              >
                <Card
                  className="overflow-hidden group cursor-pointer bg-slate-950 border border-slate-800/50 hover:border-indigo-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden h-48 sm:h-52 bg-gradient-to-br from-slate-900 to-slate-950">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center cursor-pointer"
                      onClick={() => onNavigate(`portfolio/${project.slug}`)}
                    >
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileHover={{ scale: 1 }}
                        className="text-white flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600/90 backdrop-blur-sm"
                      >
                        <Eye size={20} className="animate-pulse" />
                        <span className="font-medium">View Project</span>
                      </motion.div>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    </div>
                  </div>
                  <CardContent className="p-5 md:p-6 lg:p-7 bg-gradient-to-b from-slate-950 to-slate-900">
                    <motion.h3
                      className="text-lg md:text-xl font-bold text-white mb-2.5 md:mb-3 group-hover:text-indigo-400 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-gray-300 mb-3 md:mb-4 text-xs md:text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.div
                          key={tagIndex}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge
                            variant="secondary"
                            className="bg-slate-800/80 text-indigo-200 border border-indigo-700/50 hover:border-indigo-500 hover:bg-indigo-900/30 transition-all duration-300"
                          >
                            {tag}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                    <div className="mt-4 flex justify-end">
                      <button
                        onClick={() => onNavigate(`portfolio/${project.slug}`)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-500 transition-all duration-200 text-sm cursor-pointer"
                      >
                        <Eye size={16} />
                        View Project
                      </button>
                    </div>
                  </CardContent>
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-500/30 rounded-lg transition-all duration-500 pointer-events-none"></div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="render-defer py-20 bg-gradient-to-br from-indigo-700 to-indigo-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-5xl font-bold mb-2">20+</div>
              <div className="text-indigo-100 text-sm md:text-base">Successful Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-5xl font-bold mb-2">98%</div>
              <div className="text-indigo-100 text-sm md:text-base">Client Retention Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-5xl font-bold mb-2">8+</div>
              <div className="text-indigo-100 text-sm md:text-base">Trusted Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-5xl font-bold mb-2">10+</div>
              <div className="text-indigo-100 text-sm md:text-base">Industries We Serve</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

