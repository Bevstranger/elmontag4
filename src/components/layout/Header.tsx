import { Link } from "react-router-dom";
import { useState } from "react";
import {
  HomeIcon,
  WrenchScrewdriverIcon,
  ClipboardDocumentListIcon,
  PhoneIcon,
  BoltIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)] bg-cover bg-center opacity-20"></div>
      <nav className="relative bg-[#1e1e1ecc] backdrop-blur-sm shadow-lg shadow-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <BoltIcon className="h-8 w-8 text-yellow-400 mr-2" />
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200">
                  ЭлектроСервис
                </span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
              >
                {isMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-2">
              <Link
                to="/"
                className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 group"
              >
                <HomeIcon className="h-5 w-5 mr-2 group-hover:text-yellow-300" />
                <span>Главная</span>
              </Link>
              <Link
                to="/services"
                className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 group"
              >
                <WrenchScrewdriverIcon className="h-5 w-5 mr-2 group-hover:text-yellow-300" />
                <span>Услуги</span>
              </Link>
              <Link
                to="#"
                className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 group"
              >
                <ClipboardDocumentListIcon className="h-5 w-5 mr-2 group-hover:text-yellow-300" />
                <span>Проекты</span>
              </Link>
              <Link
                to="/contact"
                className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 group"
              >
                <PhoneIcon className="h-5 w-5 mr-2 group-hover:text-yellow-300" />
                <span>Контакты</span>
              </Link>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              <Link
                to="/"
                className="flex items-center px-4 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 group"
                onClick={() => setIsMenuOpen(false)}
              >
                <HomeIcon className="h-5 w-5 mr-2 group-hover:text-yellow-300" />
                <span>Главная</span>
              </Link>
              <Link
                to="/services"
                className="flex items-center px-4 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 group"
                onClick={() => setIsMenuOpen(false)}
              >
                <WrenchScrewdriverIcon className="h-5 w-5 mr-2 group-hover:text-yellow-300" />
                <span>Услуги</span>
              </Link>
              <Link
                to="/projects"
                className="flex items-center px-4 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 group"
                onClick={() => setIsMenuOpen(false)}
              >
                <ClipboardDocumentListIcon className="h-5 w-5 mr-2 group-hover:text-yellow-300" />
                <span>Проекты</span>
              </Link>
              <Link
                to="/contact"
                className="flex items-center px-4 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 group"
                onClick={() => setIsMenuOpen(false)}
              >
                <PhoneIcon className="h-5 w-5 mr-2 group-hover:text-yellow-300" />
                <span>Контакты</span>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
