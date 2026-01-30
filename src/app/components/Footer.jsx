import { Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import companyLogo from "../../image/lightthemlogo.png";

export function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300 border-t border-indigo-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src={companyLogo} 
                alt="Velomynt Digital Logo" 
                className="h-20 w-auto object-contain"
              />
              <span className="ml-2 text-xl font-bold text-white">Velomynt Digital</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Leading IT services company providing innovative software solutions, web development, and mobile applications to businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-indigo-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-indigo-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-indigo-400 transition-colors">
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
              <li>
                <button
                  onClick={() => onNavigate("services")}
                  className="text-sm hover:text-indigo-400 transition-colors"
                >
                  UI/UX Design
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
            © {currentYear} Velomynt Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

