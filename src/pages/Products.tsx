import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Download, FileText, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { downloadPDF } from "../lib/download";

// =========================================================================
// PLACEHOLDERS: Change the filenames below to match what is inside public/images/
// =========================================================================
const products = [
  {
    id: 1,
    name: "DC Motor Brake",
    cat: "Electromagnetic",
    torque: "200 Nm",
    voltage: "440V DC",
    image: "/images/Handle.png",
    
  },
  {
    id: 2,
    name: "FAIL-SAFE BRAKE",
    cat: "Disc Brakes",
    torque: "400 Nm",
    voltage: "440V DC",
    image: "/images/Main_Brake.png",
  },
  {
    id: 3,
    name: "DC MOTORS",
    cat: "Electromagnetic",
    torque: "600 Nm",
    voltage: "440V DC",
    image: "/images/Motor.png",
  },
  {
    id: 4,
    name: "ELECTROMAGNETIC BRAKES",
    cat: "Hydraulic",
    torque: "800 Nm",
    voltage: "440V DC",
    image: "/images/Brake_65.png",
  },
  {
    id: 5,
    name: "CLUTCH BRAKE COMBINATION",
    cat: "Electromagnetic",
    torque: "1000 Nm",
    voltage: "440V DC",
    image: "/images/Combination_Brake.png",
  },
  {
    id: 6,
    name: "ALUMINUM LINERS",
    cat: "Disc Brakes",
    torque: "1200 Nm",
    voltage: "440V DC",
    image: "/images/Liner.png",
  },
  {
    id: 7,
    name: "RECTIFIERS",
    cat: "Electromagnetic",
    torque: "1400 Nm",
    voltage: "440V DC",
    image: "/images/Rectiffier.png",
  },
  {
    id: 8,
    name: "HUB MOUNT BRAKE",
    cat: "Custom Brakes",
    torque: "1600 Nm",
    voltage: "440V DC",
    image: "/images/pro1.png",
  },
  {
    id: 9,
    name: "CLUTCH BRAKE",
    cat: "Electromagnetic",
    torque: "1000 Nm",
    voltage: "440V DC",
    image: "/images/Clutch_Brake.png",
  },
  {
    id: 10,
    name: "LINERS",
    cat: "Disc Brakes",
    torque: "1200 Nm",
    voltage: "440V DC",
    image: "/images/Liner.png",
  },
  {
    id: 11,
    name: "FRICTION PLATES",
    cat: "Electromagnetic",
    torque: "1400 Nm",
    voltage: "440V DC",
    image: "/images/Rectiffier.png",
  },
  {
    id: 12,
    name: "ACCESSORIES",
    cat: "Custom Brakes",
    torque: "1600 Nm",
    voltage: "440V DC",
    image: "/images/pro1.png",
  },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = React.useState("All Brakes");
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredProducts = products.filter((p) => {
    const matchesCat =
      activeCategory === "All Brakes" || p.cat === activeCategory;
    const matchesSearch = p.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="pt-20 bg-white min-h-screen">
      {/* Hero Header */}
      <header className="relative bg-slate-950 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,46,46,0.1),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center md:text-left max-w-3xl"
          >
            <h2 className="text-yellow-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">
              Engineering Catalog
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
              HEAVY-DUTY <br />
              <span className="text-metallic-red">BRAKING SOLUTIONS.</span>
            </h1>
            <p className="text-slate-400 text-lg font-light uppercase leading-relaxed mb-10">
              Discover our range of high-precision electromagnetic, disc, and
              Electromagnetic brakes designed for extreme industrial environments.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button
                onClick={() =>
                  downloadPDF(
                    "Full Product Catalog",
                    "Complete range of electromagnetic, disc, and hydraulic brakes.",
                  )
                }
                className="flex items-center gap-3 px-8 py-4 bg-metallic-red text-white text-xs font-bold uppercase tracking-widest hover:shadow-xl hover:shadow-brand-red/20 transition-all rounded-sm"
              >
                <Download size={16} /> Full Catalog
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Main Grid */}
      <main className="py-18">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  variants={itemVariants}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="group bg-white flex flex-col"
                >
                  <Link
                    to={`/products/${product.id}`}
                    className="block relative aspect-[4/5] bg-slate-50 overflow-hidden mb-6 rounded-sm border border-gray-100 transition-colors group-hover:border-brand-red/20 shadow-sm group-hover:shadow-md"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-100"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-500" />

                    <div className="absolute bottom-0 left-0 w-full p-6 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  </Link>

                  <div className="py-2 text-center">
                    <h3 className="text-lg font-bold text-slate-950 group-hover:text-yellow-500 transition-colors">
                      {product.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      {/* Support Section */}
      <section className="bg-slate-50 border-t border-gray-100 py-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-yellow-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">
                Request Support
              </h2>
              <h3 className="text-2xl md:text-4xl uppercase font-bold text-slate-950 tracking-tight leading-tight mb-2">
                Can't find the exact <br />
                specification?
              </h3>
              <p className="text-slate-600 text-lg font-light leading-relaxed mb-10">
                Our engineering department specializes in custom torque ratings,
                voltage requirements, and non-standard mounting configurations.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-4 px-10 py-5 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-all rounded-sm"
              >
                Contact US <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Price List 2024", icon: FileText },
                { label: "Installation Guide", icon: FileText },
                { label: "Global Warranty", icon: FileText },
                { label: "Technical Docs", icon: FileText },
              ].map((doc, i) => (
                <button
                  key={i}
                  onClick={() =>
                    downloadPDF(
                      doc.label,
                      "Company documentation for industrial products.",
                    )
                  }
                  className="flex flex-col p-8 bg-white border border-gray-100 hover:bg-slate-200 hover:border-slate-300 hover:shadow-lg transition-all text-left"
                >
                  <doc.icon className="text-yellow-500 mb-6" size={24} />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                    Download
                  </span>
                  <span className="text-sm font-bold text-slate-900">
                    {doc.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
