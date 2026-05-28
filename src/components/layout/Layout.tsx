import { ReactNode } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useStore } from '../../store/useStore';
import { GraduationCap, Heart, Scale, Search, Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '../ui/Button';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

function Navbar() {
  const { savedColleges, compareColleges, theme, toggleTheme } = useStore();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Colleges', path: '/colleges' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tighter text-indigo-600 uppercase italic">UniSeeker.</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex flex-1 items-center justify-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-bold uppercase tracking-widest transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 ${
                    isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500 dark:text-slate-400'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            <NavLink to="/compare">
              <Button variant="ghost" className="relative">
                <Scale className="h-5 w-5 mr-2" />
                Compare
                {compareColleges.length > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-black text-white">
                    {compareColleges.length}
                  </span>
                )}
              </Button>
            </NavLink>
            <NavLink to="/saved">
              <Button variant="outline" className="relative">
                <Heart className="h-4 w-4 mr-2" />
                Saved
                {savedColleges.length > 0 && (
                  <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                    {savedColleges.length}
                  </span>
                )}
              </Button>
            </NavLink>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 overflow-hidden"
          >
            <div className="space-y-4 px-4 py-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-medium text-gray-900 dark:text-gray-100"
                >
                  {link.name}
                </NavLink>
              ))}
              <NavLink to="/compare" onClick={() => setIsOpen(false)} className="flex items-center text-base font-medium text-gray-900 dark:text-gray-100">
                <Scale className="h-5 w-5 mr-3 text-gray-500" />
                Compare ({compareColleges.length})
              </NavLink>
              <NavLink to="/saved" onClick={() => setIsOpen(false)} className="flex items-center text-base font-medium text-gray-900 dark:text-gray-100">
                <Heart className="h-5 w-5 mr-3 text-red-500" />
                Saved ({savedColleges.length})
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white py-12 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-black tracking-tighter text-indigo-600 uppercase italic">UniSeeker.</span>
            </div>
            <p className="text-sm font-bold text-slate-500 dark:text-slate-400 max-w-xs uppercase tracking-widest leading-relaxed">
              Your premium platform to discover, compare, and get admitted to the top colleges around the globe.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/colleges">All Colleges</NavLink></li>
              <li><NavLink to="/compare">Compare</NavLink></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li><a href="#">Admission Guide</a></li>
              <li><a href="#">Entrance Exams</a></li>
              <li><a href="#">Scholarships</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between dark:border-gray-800">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
            © {new Date().getFullYear()} UniSeeker Global
          </p>
        </div>
      </div>
    </footer>
  );
}

export function Layout() {
  const { theme } = useStore();

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors ${theme}`}>
      <div className="flex-1 bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
