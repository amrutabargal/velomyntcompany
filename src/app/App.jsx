import { useState, useEffect } from "react";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { HomePage } from "./components/HomePage.jsx";
import { AboutPage } from "./components/AboutPage.jsx";
import { ServicesPage } from "./components/ServicesPage.jsx";
import { TechnologiesPage } from "./components/TechnologiesPage.jsx";
import { PortfolioPage } from "./components/PortfolioPage.jsx";
import { WhyChooseUsPage } from "./components/WhyChooseUsPage.jsx";
import { TestimonialsPage } from "./components/TestimonialsPage.jsx";
import { ContactPage } from "./components/ContactPage.jsx";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    document.body.style.fontFamily = "'Inter', sans-serif";
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />;
      case "about":
        return <AboutPage />;
      case "services":
        return <ServicesPage onNavigate={handleNavigate} />;
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

  return (
    <div className="min-h-screen bg-slate-900">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

