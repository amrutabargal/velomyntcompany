/**
 * SEO Keywords Configuration
 * 
 * This file contains meta tags (title, description, keywords) for each page.
 * Keywords are extracted from the approved SEO document.
 */

export const seoConfig = {
  home: {
    title: "Velomynt - IT Solutions & Technology Services",
    description: "Leading IT Solutions Provider. We deliver cutting-edge software solutions, web development, and mobile applications.",
    keywords: "Software development company, Custom software development services, Website development company, Mobile app development services, IT services company, SaaS development company, Web & app development services",
    canonical: "/homepage"
  },
  about: {
    title: "About Us - Velomynt",
    description: "Learn about Velomynt, our mission, team, and commitment to delivering exceptional IT solutions.",
    keywords: "IT services company, Software development team, Technology partner for businesses, Custom software solutions company",
    canonical: "/about"
  },
  services: {
    title: "Our Services - Velomynt",
    description: "Comprehensive IT services including software development, web development, mobile apps, and cloud solutions.",
    keywords: "Software development company, Custom software development services, Website development company, Mobile app development services, IT services company, SaaS development company, Web & app development services",
    canonical: "/services"
  },
  "software-development": {
    title: "Software Development Services - Velomynt",
    description: "Custom software development solutions tailored to your business needs with cutting-edge technologies.",
    keywords: "Software development company, Custom software development services, Enterprise software development, SaaS development company, Cloud-based software solutions, API development services",
    canonical: "/software-development"
  },
  "website-development": {
    title: "Website Development Services - Velomynt",
    description: "Responsive and modern websites that drive engagement and deliver exceptional user experiences.",
    keywords: "Website development company, Web design and development services, Custom website development, Professional web development company, Responsive website design services, E-commerce website development",
    canonical: "/website-development"
  },
  "mobile-app-development": {
    title: "Mobile App Development Services - Velomynt",
    description: "Native and cross-platform mobile applications that bring your ideas to life.",
    keywords: "Mobile app development company, Android app development services, iOS app development company, Cross-platform app development, Custom mobile app development, App development services",
    canonical: "/mobile-app-development"
  },
  technologies: {
    title: "Technologies We Use - Velomynt",
    description: "Explore the cutting-edge technologies and frameworks we use to build exceptional solutions.",
    keywords: "Software development technologies, Web development technologies, Mobile app development technologies",
    canonical: "/technologies"
  },
  portfolio: {
    title: "Our Portfolio - Velomynt",
    description: "View our portfolio of successful projects and client solutions across various industries.",
    keywords: "Software development projects, Web development portfolio, Mobile app development projects, Custom software case studies",
    canonical: "/portfolio"
  },
  "why-choose-us": {
    title: "Why Choose Us - Velomynt",
    description: "Discover why businesses choose Velomynt for their IT solutions and technology needs.",
    keywords: "Why choose software development company, Trusted IT services company, Experienced software developers",
    canonical: "/why-choose-us"
  },
  testimonials: {
    title: "Client Testimonials - Velomynt",
    description: "Read what our clients say about working with Velomynt and our IT solutions.",
    keywords: "Client testimonials, Software development reviews, IT services testimonials",
    canonical: "/testimonials"
  },
  contact: {
    title: "Contact Us - Velomynt",
    description: "Get in touch with Velomynt for your IT solutions and technology consulting needs.",
    keywords: "Software development company, IT services company, Contact software development company, Hire software developers",
    canonical: "/contact"
  }
};

/**
 * Get SEO config for a specific page
 * @param {string} pageId - The page identifier
 * @returns {Object} SEO configuration object
 */
export function getSEOConfig(pageId) {
  return seoConfig[pageId] || seoConfig.home;
}

