import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/UniqueLogo3.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

// Exact colors mapped from the logo image
const theme = {
  blue: "#2c5e7a",
  logoYellow: "#ffb400", // The precise amber yellow from "UNIQUE DC"
  black: "#000000",
  darkBg: "#0a0d14",
};

const Logo = ({
  className = "h-8 md:h-9 w-auto block object-contain",
}: {
  className?: string;
}) => <img src={logo} alt="UNIQUE DC MOTOR BRAKES" className={className} />;

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[60] bg-white border-gray-300 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center h-full sm:pr-8">
            <Link to="/" className="flex items-center leading-none group">
              <Logo className="h-14 sm:h-16 md:h-19 w-auto block transition-transform group-hover:scale-105 duration-300 transform-gpu backface-hidden" />{" "}
            </Link>
          </div>

          {/* Desktop Nav */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:flex items-center space-x-8"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <motion.div key={link.name} variants={itemVariants}>
                  <Link
                    to={link.path}
                    style={
                      {
                        color: isActive ? theme.blue : undefined,
                        "--hover-color": theme.logoYellow,
                      } as React.CSSProperties
                    }
                    className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                      isActive
                        ? ""
                        : "text-slate-600 hover:text-[var(--hover-color)]"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              );
            })}

            <motion.div variants={itemVariants}>
              <a
                href="https://wa.me/918233268311"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-[#128C7E] transition-all shadow-md shadow-green-500/10"
              >
                <div className="w-4 h-4 fill-current">
                  <svg viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                WhatsApp
              </a>
            </motion.div>
          </motion.div>

          <div className="md:hidden flex items-center gap-4">
            <a
              href="https://wa.me/918233268311"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#25D366]"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={
                { "--hover-color": theme.logoYellow } as React.CSSProperties
              }
              className="text-slate-600 hover:text-[var(--hover-color)] p-2 relative z-[70]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[65] md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl flex flex-col pt-8 px-6 pb-12"
            >
              <div className="mb-10 pb-6 border-b border-gray-100">
                <Logo className="h-7 w-auto" />
              </div>
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      style={
                        {
                          color: isActive ? theme.blue : undefined,
                          "--hover-color": theme.logoYellow,
                        } as React.CSSProperties
                      }
                      className="flex items-center justify-between py-4 border-b border-gray-100 group"
                    >
                      <span
                        className={`text-sm font-bold uppercase tracking-[0.2em] transition-colors ${
                          isActive
                            ? ""
                            : "text-slate-600 group-hover:text-[var(--hover-color)]"
                        }`}
                      >
                        {link.name}
                      </span>
                      <div
                        style={{ backgroundColor: theme.logoYellow }}
                        className={`w-1.5 h-1.5 rounded-full transition-transform ${
                          isActive ? "scale-100" : "scale-0"
                        }`}
                      />
                    </Link>
                  );
                })}
              </div>

              <div className="mt-auto pt-12">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">
                  Connect with us
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <a
                    href="https://wa.me/918233268311"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white px-6 py-4 rounded-sm text-xs font-bold uppercase tracking-widest"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp Support
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: theme.darkBg }} // Updated to use theme.darkBg
      className="text-slate-400 pt-10 pb-8 relative overflow-hidden border-t border-white/5 font-sans"
    >
      {/* Enhanced Technical Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.15] pointer-events-none" />
      <div
        style={{
          backgroundImage: `linear-gradient(to right, transparent, ${theme.blue}4d, transparent)`,
        }}
        className="absolute top-0 left-0 w-full h-[1px]"
      />
      <div
        style={{ backgroundColor: `${theme.blue}0d` }}
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* WhatsApp Support Section - Streamlined */}
        <div className="mb-8 md:mb-12 pb-8 md:pb-12 border-b border-white/5">
          <div className="bg-white/[0.01] border border-white/5 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 hover:border-white/10 transition-all group overflow-hidden relative">
            <div
              style={{ backgroundColor: `${theme.blue}0d` }}
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl pointer-events-none"
            />

            <div className="relative z-10 flex flex-col sm:flex-row items-center text-center sm:text-left gap-4 sm:gap-6">
              <div
                style={{
                  backgroundColor: `${theme.blue}0d`,
                  borderColor: `${theme.blue}1a`,
                }}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border flex items-center justify-center shrink-0"
              >
                <div
                  style={{
                    backgroundColor: theme.logoYellow,
                    boxShadow: `0 0 10px ${theme.logoYellow}80`,
                  }}
                  className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full animate-pulse"
                />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-1 tracking-tight">
                  Technical Support
                </h3>
                <p className="text-xs md:text-sm text-slate-400">
                  Instant expert consultation for industrial solutions
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/918233268311"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366] text-[#25D366] hover:text-white rounded-lg transition-all duration-300 font-bold text-sm tracking-widest uppercase shadow-lg shadow-[#25D366]/5"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Connect Now</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-12 gap-y-12 gap-x-8 lg:gap-8 ">
          {/* Navigation blocks */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6 lg:mb-8">
              <div
                style={{ backgroundColor: theme.logoYellow }}
                className="w-1 h-3"
              />
              <h4 className="text-white font-bold text-sm uppercase tracking-widest">
                Solutions
              </h4>
            </div>
            <ul className="space-y-3 lg:space-y-4">
              {[
                "DC Disc Brakes",
                "Thruster Brakes",
                "Marine Systems",
                "Custom Safety",
                "Maintenance",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/products"
                    style={
                      {
                        "--hover-color": theme.logoYellow,
                      } as React.CSSProperties
                    }
                    className="text-sm hover:text-[var(--hover-color)] hover:translate-x-1 transition-all duration-300 inline-block font-medium"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6 lg:mb-8">
              <div
                style={{ backgroundColor: theme.logoYellow }}
                className="w-1 h-3"
              />
              <h4 className="text-white font-bold text-sm uppercase tracking-widest">
                Company
              </h4>
            </div>
            <ul className="space-y-3 lg:space-y-4">
              {[
                { name: "About", path: "/about" },
                { name: "Products", path: "/products" },
                { name: "Gallery", path: "/gallery" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    style={
                      {
                        "--hover-color": theme.logoYellow,
                      } as React.CSSProperties
                    }
                    className="text-sm hover:text-[var(--hover-color)] hover:translate-x-1 transition-all duration-300 inline-block font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location Block with Map */}
          <div className="col-span-2 lg:col-span-8">
            <div className="flex items-center gap-2 mb-6 lg:mb-8">
              <div
                style={{ backgroundColor: theme.logoYellow }}
                className="w-1 h-3"
              />
              <h4 className="text-white font-bold text-sm uppercase tracking-widest">
                Our Location
              </h4>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Unique+dc+motor+brake+Gudli+Udaipur+Rajasthan"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="w-full h-40 sm:h-64 lg:h-48 bg-white/5 border border-white/10 rounded-sm overflow-hidden relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14511.442998344585!2d73.83984021287413!3d24.5767597144766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e42d7658c14d%3A0xd64f1d408ba1fcd0!2sGudli%2C%20Rajasthan%20313024!5e0!3m2!1sen!2sin!4v1715501865910!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter: "grayscale(1) invert(0.9) contrast(1.2)",
                    pointerEvents: "none",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                ></iframe>
                <div
                  style={{ backgroundColor: `${theme.blue}0d` }}
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                >
                  <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-sm border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest">
                    View on Google Maps
                  </div>
                </div>
              </div>
              <p
                style={
                  { "--hover-color": theme.logoYellow } as React.CSSProperties
                }
                className="mt-4 text-[11px] font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2 group-hover:text-[var(--hover-color)] transition-colors leading-relaxed"
              >
                <MapPin
                  size={14}
                  style={{ color: theme.logoYellow }}
                  className="shrink-0"
                />
                Regd. office & Mfg. Unit gudli, near power house, Udaipur,
                Rajasthan 313024
              </p>
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 text-center md:text-left">
            <span className="flex items-center gap-2">
              <div
                style={{ backgroundColor: theme.logoYellow }}
                className="w-1 h-1"
              />
              © 2026 UNIQUE DC MOTOR BRAKES PVT. LTD.
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 w-full md:w-auto">
            <div className="flex gap-3 w-full sm:w-auto justify-center">
              <div
                style={{
                  backgroundColor: theme.blue,
                  boxShadow: `0 4px 14px ${theme.blue}1a`,
                }}
                className="flex-1 sm:flex-none px-5 py-2  text-white text-[10px] font-black uppercase tracking-[0.2em] text-center whitespace-nowrap"
              >
                ISO 9001:2015
              </div>
              <div style={{
                  backgroundColor: theme.blue,
                  boxShadow: `0 4px 14px ${theme.blue}1a`,
                }}
              
              className="flex-1 sm:flex-none px-5 py-2  text-white text-[10px] font-black uppercase tracking-[0.2em] text-center whitespace-nowrap">
                MSME CERTIFIED
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-xs ">Made with ❤️ by YOGESH PATEL</div>
        <div className="text-center text-xs ">
          Contact: +91-6375360041, yp766104@gmail.com
        </div>
      </div>
    </footer>
  );
};
