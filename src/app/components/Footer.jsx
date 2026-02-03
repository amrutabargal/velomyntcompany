import { Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import companyLogo from "../../image/lightthemlogo.png";

export function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300 border-t border-indigo-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src={companyLogo} 
                alt="Velomynt Logo" 
                className="h-12 sm:h-16 md:h-20 w-auto object-contain"
              />
              <span className="ml-2 text-base sm:text-lg md:text-xl font-bold text-white">Velomynt</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Leading IT services company providing innovative software solutions, web development, and mobile applications to businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/velomynt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors"
                aria-label="Visit our Facebook page"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://x.com/velomynt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors"
                aria-label="Visit our Twitter/X page"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/velomynt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors"
                aria-label="Visit our LinkedIn page"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://www.instagram.com/velomynt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors"
                aria-label="Visit our Instagram page"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate("home")} className="hover:text-indigo-400 transition-colors text-sm">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("about")} className="hover:text-indigo-400 transition-colors text-sm">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("services")} className="hover:text-indigo-400 transition-colors text-sm">
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("additional-services")} 
                  className="hover:text-indigo-400 transition-colors text-sm"
                >
                  Additional Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("portfolio")} className="hover:text-indigo-400 transition-colors text-sm">
                  Portfolio
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate("software-development")}
                  className="text-sm hover:text-indigo-400 transition-colors"
                >
                  Software Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("website-development")}
                  className="text-sm hover:text-indigo-400 transition-colors"
                >
                  Website Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("mobile-app-development")}
                  className="text-sm hover:text-indigo-400 transition-colors"
                >
                  Mobile App Development
                </button>
              </li>
            </ul>
          </div>

          {/* Additional Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Additional Services</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate("additional-services")}
                  className="text-sm hover:text-indigo-400 transition-colors"
                >
                  UI/UX Design
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("additional-services")}
                  className="text-sm hover:text-indigo-400 transition-colors"
                >
                  AI Automation & Integration
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("additional-services")}
                  className="text-sm hover:text-indigo-400 transition-colors"
                >
                  Database Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("additional-services")}
                  className="text-sm hover:text-indigo-400 transition-colors"
                >
                  Cloud Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("additional-services")}
                  className="text-sm hover:text-indigo-400 transition-colors"
                >
                  Cybersecurity
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("additional-services")}
                  className="text-sm hover:text-indigo-400 transition-colors"
                >
                  Performance Optimization
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@velomynt.com" className="text-sm hover:text-indigo-400 transition-colors">info@velomynt.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Velomynt Digital LLP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

