import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Linkedin, Facebook, Twitter, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
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
                href="https://wa.me/918233268311"
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
            transition={{ duration: 0.3 }}
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
                href="https://wa.me/918233268311"
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
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    engineering: [
      { name: "DC Disc Brakes", path: "/products" },
      { name: "Thruster Brakes", path: "/products" },
      { name: "Marine Systems", path: "/products" },
    ],
    connect: [
      { name: "Legacy & Vision", path: "/about" },
      { name: "Project Archive", path: "/gallery" },
      { name: "Global Support", path: "/contact" },
    ],
  };

  return (
    <footer className="relative bg-slate-950 text-slate-400 pt-24 pb-12 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-red/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Brand Header */}
        <div className="flex flex-col items-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <Link to="/">
              <img 
                src={logo}
                alt="UNIQUE DC" 
                className="h-14 md:h-20 w-auto brightness-0 invert opacity-90 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105" 
              />
            </Link>
            {/* Ambient Glow behind logo */}
            <div className="absolute -inset-4 bg-brand-red/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
          <div className="mt-6">
            <h3 className="text-white/40 font-bold text-[11px] uppercase tracking-[0.8em] text-center">
              Precision Engineered <span className="text-brand-red/60">Stability</span>
            </h3>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 pb-20 border-t border-white/5 pt-16">
          
          {/* Column 1: Legacy */}
          <div className="space-y-6">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="w-2 h-2 bg-brand-red" /> Legacy
            </h4>
            <p className="text-sm leading-relaxed font-medium text-slate-400/80">
              Setting the global standard for heavy-duty DC motor brakes and industrial safety systems since 1985. 
              <span className="block mt-4 text-brand-red font-semibold italic text-xs uppercase tracking-widest">
                Reliability in every rotation.
              </span>
            </p>
          </div>

          {/* Column 2: Engineering */}
          <div className="space-y-6">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em]">Engineering</h4>
            <ul className="space-y-4 text-sm font-medium">
              {footerLinks.engineering.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="group flex items-center justify-between hover:text-white transition-colors">
                    <span>{link.name}</span>
                    <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all text-brand-red" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div className="space-y-6">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em]">Connect</h4>
            <ul className="space-y-4 text-sm font-medium">
              {footerLinks.connect.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="group flex items-center justify-between hover:text-white transition-colors">
                    <span>{link.name}</span>
                    <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all text-brand-red" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Headquarters */}
          <div className="space-y-6">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em]">Headquarters</h4>
            <div className="space-y-4 text-sm">
              <div className="flex gap-4 p-4 rounded-lg bg-white/[0.02] border border-white/5 hover:border-brand-red/30 transition-colors">
                <MapPin size={20} className="text-brand-red shrink-0" />
                <span className="leading-tight">
                  Power House, Gudli,<br />
                  <span className="text-white font-semibold">Rajasthan 313024, IN</span>
                </span>
              </div>
              <a href="mailto:unique@dcmotorbrake.com" className="flex items-center gap-4 p-4 rounded-lg bg-white/[0.02] border border-white/5 hover:border-brand-red/30 transition-colors group">
                <Mail size={20} className="text-brand-red shrink-0" />
                <span className="text-white group-hover:text-brand-red transition-colors truncate">unique@dcmotorbrake.com</span>
              </a>
            </div>
            
            {/* Socials */}
            <div className="flex gap-3 pt-2">
              {[ {Icon: Linkedin, href: "#"}, {Icon: Facebook, href: "#"} ].map((social, i) => (
                <a key={i} href={social.href} className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center hover:bg-brand-red hover:border-brand-red text-white transition-all duration-300">
                  <social.Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-10 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-600">
              © {currentYear} UNIQUE DC DYNAMICS
            </span>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-brand-red transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-brand-red transition-colors">Terms of Service</Link>
            </div>
          </div>

          <div className="flex gap-3">
            {[ "ISO 9001:2015", "CE CERTIFIED" ].map((cert) => (
              <div key={cert} className="flex items-center gap-2 px-4 py-2 bg-slate-900/40 border border-white/5 rounded-full">
                <ShieldCheck size={12} className="text-brand-red" />
                <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
