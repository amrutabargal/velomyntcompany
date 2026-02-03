import { useState, useEffect } from "react";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { SEO } from "./components/SEO.jsx";
import { getSEOConfig } from "./config/seoKeywords.js";
import { HomePage } from "./components/HomePage.jsx";
import { AboutPage } from "./components/AboutPage.jsx";
import { ServicesPage } from "./components/ServicesPage.jsx";
import { TechnologiesPage } from "./components/TechnologiesPage.jsx";
import { PortfolioPage } from "./components/PortfolioPage.jsx";
import { WhyChooseUsPage } from "./components/WhyChooseUsPage.jsx";
import { TestimonialsPage } from "./components/TestimonialsPage.jsx";
import { ContactPage } from "./components/ContactPage.jsx";
import { SoftwareDevelopmentPage } from "./components/SoftwareDevelopmentPage.jsx";
import { WebsiteDevelopmentPage } from "./components/WebsiteDevelopmentPage.jsx";
import { MobileAppDevelopmentPage } from "./components/MobileAppDevelopmentPage.jsx";
import { AdditionalServicesPage } from "./components/AdditionalServicesPage.jsx";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  // map between page ids and URL paths
  const pageToPath = {
    home: "homepage",
    about: "about",
    services: "services",
    "additional-services": "additional-services",
    "software-development": "software-development",
    "website-development": "website-development",
    "mobile-app-development": "mobile-app-development",
    technologies: "technologies",
    portfolio: "portfolio",
    "why-choose-us": "why-choose-us",
    testimonials: "testimonials",
    contact: "contact",
  };

  const pathToPage = (path) => {
    if (!path) return "home";
    const p = path.replace(/^\/+/, "");
    switch (p) {
      case "homepage":
      case "home":
        return "home";
      case "about":
        return "about";
      case "services":
        return "services";
      case "additional-services":
        return "additional-services";
      case "software-development":
        return "software-development";
      case "website-development":
        return "website-development";
      case "mobile-app-development":
        return "mobile-app-development";
      case "technologies":
        return "technologies";
      case "portfolio":
        return "portfolio";
      case "why-choose-us":
        return "why-choose-us";
      case "testimonials":
        return "testimonials";
      case "contact":
        return "contact";
      default:
        return "home";
    }
  };

  const handleNavigate = (page, replace = false) => {
    const path = pageToPath[page] || pageToPath.home;
    const url = `/${path}`;
    if (replace) {
      window.history.replaceState({}, "", url);
    } else {
      window.history.pushState({}, "", url);
    }
    setCurrentPage(page);
    // Scroll to top immediately, then smooth if needed
    window.scrollTo({ top: 0, behavior: "instant" });
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  };

  useEffect(() => {
    document.body.style.fontFamily = "'Inter', sans-serif";

    // initialize page from URL path
    const pageFromUrl = pathToPage(window.location.pathname);
    setCurrentPage(pageFromUrl);

    // handle back/forward
    const onPop = () => {
      const p = pathToPage(window.location.pathname);
      setCurrentPage(p);
      // Scroll to top immediately, then smooth if needed
      window.scrollTo({ top: 0, behavior: "instant" });
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 0);
    };

    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  // Scroll to top whenever page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />;
      case "about":
        return <AboutPage />;
      case "services":
        return <ServicesPage onNavigate={handleNavigate} />;
      case "additional-services":
        return <AdditionalServicesPage onNavigate={handleNavigate} />;
      case "software-development":
        return <SoftwareDevelopmentPage onNavigate={handleNavigate} />;
      case "website-development":
        return <WebsiteDevelopmentPage onNavigate={handleNavigate} />;
      case "mobile-app-development":
        return <MobileAppDevelopmentPage onNavigate={handleNavigate} />;
      case "technologies":
        return <TechnologiesPage />;
      case "portfolio":
        return <PortfolioPage />;
      case "why-choose-us":
        return <WhyChooseUsPage />;
      case "testimonials":
        return <TestimonialsPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  // Get SEO config for current page
  const seoData = getSEOConfig(currentPage);

  return (
    <div className="min-h-screen bg-slate-900">
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonical={seoData.canonical}
      />
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

