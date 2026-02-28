import { lazy, Suspense, useState, useEffect } from "react";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { SEO } from "./components/SEO.jsx";
import { getSEOConfig } from "./config/seoKeywords.js";
import { PROJECT_MAP } from "./config/projectMap.js";

const HomePage = lazy(() => import("./components/HomePage.jsx").then((m) => ({ default: m.HomePage })));
const AboutPage = lazy(() => import("./components/AboutPage.jsx").then((m) => ({ default: m.AboutPage })));
const ServicesPage = lazy(() => import("./components/ServicesPage.jsx").then((m) => ({ default: m.ServicesPage })));
const TechnologiesPage = lazy(() =>
  import("./components/TechnologiesPage.jsx").then((m) => ({ default: m.TechnologiesPage })),
);
const PortfolioPage = lazy(() => import("./components/PortfolioPage.jsx").then((m) => ({ default: m.PortfolioPage })));
const WhyChooseUsPage = lazy(() =>
  import("./components/WhyChooseUsPage.jsx").then((m) => ({ default: m.WhyChooseUsPage })),
);
const TestimonialsPage = lazy(() =>
  import("./components/TestimonialsPage.jsx").then((m) => ({ default: m.TestimonialsPage })),
);
const ContactPage = lazy(() => import("./components/ContactPage.jsx").then((m) => ({ default: m.ContactPage })));
const SoftwareDevelopmentPage = lazy(() =>
  import("./components/SoftwareDevelopmentPage.jsx").then((m) => ({ default: m.SoftwareDevelopmentPage })),
);
const WebsiteDevelopmentPage = lazy(() =>
  import("./components/WebsiteDevelopmentPage.jsx").then((m) => ({ default: m.WebsiteDevelopmentPage })),
);
const MobileAppDevelopmentPage = lazy(() =>
  import("./components/MobileAppDevelopmentPage.jsx").then((m) => ({ default: m.MobileAppDevelopmentPage })),
);
const AdditionalServicesPage = lazy(() =>
  import("./components/AdditionalServicesPage.jsx").then((m) => ({ default: m.AdditionalServicesPage })),
);
const ProjectViewer = lazy(() =>
  import("./components/ProjectViewer.jsx").then((m) => ({ default: m.ProjectViewer })),
);

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [projectSlug, setProjectSlug] = useState(null);

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

  const parseUrl = (pathname) => {
    if (!pathname) return { page: "home", slug: null };
    const p = pathname.replace(/^\/+/, "").replace(/\/+$/, "");

    const projectMatch = p.match(/^portfolio\/(.+)$/);
    if (projectMatch && PROJECT_MAP[projectMatch[1]]) {
      return { page: "project-viewer", slug: projectMatch[1] };
    }

    switch (p) {
      case "homepage":
      case "home":
        return { page: "home", slug: null };
      case "about":
        return { page: "about", slug: null };
      case "services":
        return { page: "services", slug: null };
      case "additional-services":
        return { page: "additional-services", slug: null };
      case "software-development":
        return { page: "software-development", slug: null };
      case "website-development":
        return { page: "website-development", slug: null };
      case "mobile-app-development":
        return { page: "mobile-app-development", slug: null };
      case "technologies":
        return { page: "technologies", slug: null };
      case "portfolio":
        return { page: "portfolio", slug: null };
      case "why-choose-us":
        return { page: "why-choose-us", slug: null };
      case "testimonials":
        return { page: "testimonials", slug: null };
      case "contact":
        return { page: "contact", slug: null };
      default:
        return { page: "home", slug: null };
    }
  };

  const handleNavigate = (page, replace = false) => {
    let url;
    if (page.startsWith("portfolio/")) {
      const slug = page.replace("portfolio/", "");
      url = `/${page}`;
      setProjectSlug(slug);
      setCurrentPage("project-viewer");
    } else {
      url = `/${pageToPath[page] || pageToPath.home}`;
      setProjectSlug(null);
      setCurrentPage(page);
    }

    if (replace) {
      window.history.replaceState({}, "", url);
    } else {
      window.history.pushState({}, "", url);
    }

    window.scrollTo({ top: 0, behavior: "instant" });
  };

  useEffect(() => {
    document.body.style.fontFamily = "'Inter', sans-serif";

    const { page, slug } = parseUrl(window.location.pathname);
    setCurrentPage(page);
    setProjectSlug(slug);

    const onPop = () => {
      const { page: p, slug: s } = parseUrl(window.location.pathname);
      setCurrentPage(p);
      setProjectSlug(s);
      window.scrollTo({ top: 0, behavior: "instant" });
    };

    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    if (currentPage !== "project-viewer") {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [currentPage]);

  const isProjectView = currentPage === "project-viewer" && projectSlug;

  const renderPage = () => {
    if (isProjectView) {
      return <ProjectViewer slug={projectSlug} onNavigate={handleNavigate} />;
    }
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
        return <PortfolioPage onNavigate={handleNavigate} />;
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

  const seoData = getSEOConfig(isProjectView ? "portfolio" : currentPage);
  const pageFallback = (
    <div className="min-h-[40vh] flex items-center justify-center text-indigo-300 text-sm">
      Loading...
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-900 overflow-x-hidden">
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonical={seoData.canonical}
      />
      {!isProjectView && <Header currentPage={currentPage} onNavigate={handleNavigate} />}
      <main className="overflow-x-hidden">
        <Suspense fallback={pageFallback}>{renderPage()}</Suspense>
      </main>
      {!isProjectView && <Footer onNavigate={handleNavigate} />}
    </div>
  );
}

