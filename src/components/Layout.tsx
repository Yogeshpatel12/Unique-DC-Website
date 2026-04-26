import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

import logo from '../assets/logo.svg';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[60] bg-white border-b border-gray-100 shadow-md">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center px-4 sm:px-6 lg:px-8 border-r border-gray-100">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="UNIQUE DC MOTOR BRAKES" className="h-8 md:h-9 w-auto" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:flex items-center space-x-8"
          >
            {navLinks.map((link) => (
              <motion.div key={link.name} variants={itemVariants}>
                <Link
                  to={link.path}
                  className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                    location.pathname === link.path ? 'text-brand-red' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            
            <motion.div variants={itemVariants}>
              <a 
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-[#128C7E] transition-all shadow-md shadow-green-500/10"
              >
                <div className="w-4 h-4 fill-current">
                   <svg viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.224-3.82l.446.265c1.512.9 3.586 1.377 5.213 1.377 5.441 0 9.865-4.424 9.868-9.864.001-2.639-1.03-5.12-2.906-6.995-1.875-1.875-4.355-2.907-6.992-2.908-5.442 0-9.866 4.424-9.869 9.864 0 2.015.597 3.98 1.727 5.688l.292.457-1.112 4.062 4.14-1.086z" />
                   </svg>
                </div>
                WhatsApp
              </a>
            </motion.div>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
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
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white px-6 py-4 rounded-sm text-xs font-bold uppercase tracking-widest shadow-md"
              >
                <div className="w-4 h-4 fill-current">
                   <svg viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.224-3.82l.446.265c1.512.9 3.586 1.377 5.213 1.377 5.441 0 9.865-4.424 9.868-9.864.001-2.639-1.03-5.12-2.906-6.995-1.875-1.875-4.355-2.907-6.992-2.908-5.442 0-9.866 4.424-9.869 9.864 0 2.015.597 3.98 1.727 5.688l.292.457-1.112 4.062 4.14-1.086z" />
                   </svg>
                </div>
                WhatsApp Support
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-24 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="logo-shine group"
          >
            <Link to="/">
              <img 
                src={logo} 
                alt="UNIQUE DC MOTOR BRAKES" 
                className="h-12 md:h-16 w-auto transition-transform duration-500 group-hover:scale-110 brightness-0 invert" 
              />
            </Link>
          </motion.div>
          <div className="mt-8 text-center">
            <h3 className="text-white font-black text-[10px] uppercase tracking-[0.6em]">Precision Engineered Stability</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20 border-t border-white/5 pt-20">
          <div className="flex flex-col">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-8 border-b border-white/5 pb-4">Legacy</h4>
            <p className="text-sm leading-relaxed font-medium opacity-80">
              Setting the global standard for heavy-duty DC motor brakes and industrial safety systems since 1985. Reliability in every rotation.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-8 border-b border-white/5 pb-4">Engineering</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/products" className="hover:text-brand-red transition-all flex items-center gap-2 group"><span className="w-0 group-hover:w-4 h-[1px] bg-brand-red transition-all" /> DC Disc Brakes</Link></li>
              <li><Link to="/products" className="hover:text-brand-red transition-all flex items-center gap-2 group"><span className="w-0 group-hover:w-4 h-[1px] bg-brand-red transition-all" /> Thruster Brakes</Link></li>
              <li><Link to="/products" className="hover:text-brand-red transition-all flex items-center gap-2 group"><span className="w-0 group-hover:w-4 h-[1px] bg-brand-red transition-all" /> Marine Systems</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-8 border-b border-white/5 pb-4">Connect</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/about" className="hover:text-brand-red transition-all flex items-center gap-2 group"><span className="w-0 group-hover:w-4 h-[1px] bg-brand-red transition-all" /> Legacy & Vision</Link></li>
              <li><Link to="/gallery" className="hover:text-brand-red transition-all flex items-center gap-2 group"><span className="w-0 group-hover:w-4 h-[1px] bg-brand-red transition-all" /> Project Archive</Link></li>
              <li><Link to="/contact" className="hover:text-brand-red transition-all flex items-center gap-2 group"><span className="w-0 group-hover:w-4 h-[1px] bg-brand-red transition-all" /> Global Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-8 border-b border-white/5 pb-4">Headquarters</h4>
            <ul className="space-y-6 text-sm font-medium">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-red shrink-0" />
                <span className="leading-relaxed">Industrial Estate, Phase II,<br /><span className="text-white">Mumbai, MH 400001</span></span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-red shrink-0" />
                <span className="text-white hover:text-brand-red transition-colors cursor-pointer">sales@uniquedcbrakes.com</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-8">
              <a href="#" className="w-10 h-10 bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-brand-red hover:text-white transition-all rounded-sm">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-brand-red hover:text-white transition-all rounded-sm">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">© 2026 UNIQUE DC DYNAMICS</span>
            <div className="flex gap-4">
              <Link to="/privacy" className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-brand-red">Privacy</Link>
              <Link to="/terms" className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-brand-red">Terms</Link>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="px-5 py-2 bg-slate-900/50 border border-slate-800 rounded-sm">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">ISO 9001:2015</span>
            </div>
            <div className="px-5 py-2 bg-slate-900/50 border border-slate-800 rounded-sm">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">CE CERTIFIED</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
