/**
 * SEO Keywords Configuration
 * 
 * This file contains meta tags (title, description, keywords) for each page.
 * Keywords are extracted from the approved SEO document.
 */

export const seoConfig = {
  home: {
    title: "Velomynt Digital - IT Solutions & Technology Services",
    description: "Leading IT Solutions Provider. We deliver cutting-edge software solutions, web development, and mobile applications.",
    keywords: "Software development company, Custom software development services, Website development company, Mobile app development services, IT services company, SaaS development company, Web & app development services",
    canonical: "/homepage"
  },
  about: {
    title: "About Us - Velomynt Digital",
    description: "Learn about Velomynt Digital, our mission, team, and commitment to delivering exceptional IT solutions.",
    keywords: "IT services company, Software development team, Technology partner for businesses, Custom software solutions company",
    canonical: "/about"
  },
  services: {
    title: "Our Services - Velomynt Digital",
    description: "Comprehensive IT services including software development, web development, mobile apps, and cloud solutions.",
    keywords: "Software development company, Custom software development services, Website development company, Mobile app development services, IT services company, SaaS development company, Web & app development services",
    canonical: "/services"
  },
  "software-development": {
    title: "Software Development Services - Velomynt Digital",
    description: "Custom software development solutions tailored to your business needs with cutting-edge technologies.",
    keywords: "Software development company, Custom software development services, Enterprise software development, SaaS development company, Cloud-based software solutions, API development services",
    canonical: "/software-development"
  },
  "website-development": {
    title: "Website Development Services - Velomynt Digital",
    description: "Responsive and modern websites that drive engagement and deliver exceptional user experiences.",
    keywords: "Website development company, Web design and development services, Custom website development, Professional web development company, Responsive website design services, E-commerce website development",
    canonical: "/website-development"
  },
  "mobile-app-development": {
    title: "Mobile App Development Services - Velomynt Digital",
    description: "Native and cross-platform mobile applications that bring your ideas to life.",
    keywords: "Mobile app development company, Android app development services, iOS app development company, Cross-platform app development, Custom mobile app development, App development services",
    canonical: "/mobile-app-development"
  },
  technologies: {
    title: "Technologies We Use - Velomynt Digital",
    description: "Explore the cutting-edge technologies and frameworks we use to build exceptional solutions.",
    keywords: "Software development technologies, Web development technologies, Mobile app development technologies",
    canonical: "/technologies"
  },
  portfolio: {
    title: "Our Portfolio - Velomynt Digital",
    description: "View our portfolio of successful projects and client solutions across various industries.",
    keywords: "Software development projects, Web development portfolio, Mobile app development projects, Custom software case studies",
    canonical: "/portfolio"
  },
  "why-choose-us": {
    title: "Why Choose Us - Velomynt Digital",
    description: "Discover why businesses choose Velomynt Digital for their IT solutions and technology needs.",
    keywords: "Why choose software development company, Trusted IT services company, Experienced software developers",
    canonical: "/why-choose-us"
  },
  testimonials: {
    title: "Client Testimonials - Velomynt Digital",
    description: "Read what our clients say about working with Velomynt Digital and our IT solutions.",
    keywords: "Client testimonials, Software development reviews, IT services testimonials",
    canonical: "/testimonials"
  },
  contact: {
    title: "Contact Us - Velomynt Digital",
    description: "Get in touch with Velomynt Digital for your IT solutions and technology consulting needs.",
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

