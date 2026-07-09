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
    name: "FAIL-SAFE BRAKE",
    cat: "Type - USB & UMB (Normally On)",
    torque: "Torque : 2 - 1600 Nm",
    voltage: "Voltage : 190V DC",
    image: "/images/SingleBrake.png",
  },
  {
    id: 2,
    name: "BRAKE",
    cat: "Type - USB & UMB (Normally On)",
    torque: "Torque : 2 - 1600 Nm",
    voltage: "Voltage : 190V DC",
    image: "/images/Main_Brake.png",
  },
  {
    id: 3,
    name: "DC MOTORS",
    cat: "Type - UBM (1440 RPM)",
    torque: "Power : 0.25 - 20 Hp",
    voltage: "Voltage : 415 VAC",
    image: "/images/Motor.png",
  },
  {
    id: 4,
    name: "NMRV GEAR BOX",
    cat: "Power : 0.5 KW",
    torque: "Gear Type - Worm",
    voltage: "Voltage : Input : 3 - 10 Hp",
    image: "/images/Nmrv.png",
  },
  {
    id: 5,
    name: "COMBINATION",
    cat: "Type : UCB",
    torque: "Torque : 15 - 500 Nm",
    voltage: "Voltage : 24/96/190 V DC",
    image: "/images/Combination_Brake.png",
  },
  {
    id: 6,
    name: "FAIL-SAFE BRAKE",
    cat: "Type - USB & UMB (Normally On)",
    torque: "Torque : 2 - 1600 Nm",
    voltage: "Voltage : 190V DC",
    image: "/images/Main_Brake_5.png",
  },
  {
    id: 7,
    name: "RECTIFIERS",
    cat: "Type : UFC",
    torque: "Torque : 15 - 500 Nm",
    voltage: "Voltage : 190V DC",
    image: "/images/Rectiffier.png",
  },
  {
    id: 8,
    name: "HUB MOUNT BRAKE",
    cat: "Type : UBM",
    torque: "Torque : 1600 Nm",
    voltage: "Voltage : 190V DC",
    image: "/images/BrakeMotor2.png",
  },
  {
    id: 9,
    name: "CLUTCH BRAKE",
    cat: "Type : UCB",
    torque: "Torque : 15 - 500 Nm",
    voltage: "Voltage : 24/96/190 V DC",
    image: "/images/Clutch_Brake.png",
  },
  {
    id: 10,
    name: "ALUMINUM LINERS",
    cat: "Type : UFB",
    torque: "Torque : 2 - 1200 Nm",
    voltage: "Voltage : 190V DC",
    image: "/images/Liner.png",
  },
  {
    id: 11,
    name: "FLANGE MOUNT BRAKE",
    cat: "Type : UFB (Normally Off)",
    torque: "Torque : 15 - 500 Nm",
    voltage: "Voltage : 24/96/190V DC",
    image: "/images/CoilBrake.png",
  },
  {
    id: 12,
    name: "ACCESSORIES",
    cat: "Custom Brakes",
    torque: "Torque : 1 - 1600 Nm",
    voltage: "Voltage : 190V DC",
    image: "/images/Accessories.png",
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
    <div className="pt-20  bg-white min-h-screen ">
      {/* Hero Header */}
      <header className="relative bg-slate-950 py-26 overflow-hidden">
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
            <p className="text-slate-400 text-sm font-light uppercase leading-relaxed mb-15">
              Discover our range of high-precision electromagnetic, disc, and
              Electromagnetic brakes designed for extreme industrial
              environments.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button
                onClick={(e) => {
                  e.preventDefault(); // Prevents default button behavior
                  downloadPDF(
                    "/files/UniquePdf.pdf",
                    "Full_Product_Catalog.pdf",
                  );
                }}
                className="flex items-center gap-3 px-8 py-4 bg-metallic-red text-white text-xs font-bold uppercase tracking-widest hover:shadow-xl hover:shadow-brand-red/20 transition-all rounded-sm"
              >
                <Download size={16} /> Full Catalog
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Video Section */}

      <section className="pt-8 pb-0  bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl border border-slate-200">
            <video
              className="w-full h-full  object-cover"
              controls
              poster="/images/Main_Brake.png" // Add a thumbnail image here
            >
              <source src="/images/Video1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="mt-4 text-center"></div>
        </div>
      </section>

      {/* Main Grid */}

      <main className="py-4">
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

                  <div className="py-4 text-center border-t border-b border-slate-400 group-hover:border-yellow-500 transition-colors">
                    <h3 className="text-xl font-bold text-slate-700 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm italic text-slate-950  transition-colors">
                      {product.cat}
                    </p>
                    <p className="text-sm italic text-slate-950  transition-colors">
                      {product.torque}
                    </p>
                    <p className="text-sm italic text-slate-950  transition-colors">
                      {product.voltage}
                    </p>
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
                { label: "Catalogue 2026 ", icon: FileText },
                { label: "Product Brochure", icon: FileText },
                { label: "Spec Sheet", icon: FileText },
                { label: "Technical Docs", icon: FileText },
              ].map((doc, i) => (
                <button
                  key={i}
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/files/UniquePdf.pdf";
                    link.setAttribute("download", `${doc.label}.pdf`);
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
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

          <div className="mt-10 mx-4 md:m-10 border-t border-slate-700 pt-10 bg-slate-950 p-6 rounded-lg">
            <h3 className="text-lg md:text-xl font-bold text-center text-slate-100 mb-4 uppercase tracking-widest">
              BRAKE SIZES AND DIMENSIONS
            </h3>

            <div className="w-full overflow-x-auto">
              <table className="w-full table-fixed border-collapse border border-slate-700 text-[8px] md:text-sm text-slate-300">
                <thead>
                  <tr className="bg-slate-900">
                    <th className="p-1 md:p-3 border text-left border-slate-700 text-[8px] md:text-xs font-bold text-yellow-400 uppercase truncate">
                      Parameter
                    </th>
                    {[
                      "Size-08",
                      "Size-10",
                      "Size-12",
                      "Size-14",
                      "Size-16",
                      "Size-18",
                    ].map((size) => (
                      <th
                        key={size}
                        className="p-1 md:p-3 border border-slate-700 text-[8px] md:text-xs font-bold text-yellow-400 uppercase text-center"
                      >
                        {size}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-[8px] md:text-sm">
                  <tr className="bg-slate-800/50">
                    <td className="p-1 md:p-3 border border-slate-700 font-bold text-slate-200 truncate">
                      Supply Voltage
                    </td>
                    {Array(6)
                      .fill("24/190Vdc")
                      .map((v, i) => (
                        <td
                          key={i}
                          className="p-1 md:p-3 border border-slate-700 text-slate-300 text-center truncate"
                        >
                          {v}
                        </td>
                      ))}
                  </tr>
                  {[
                    {
                      label: "A",
                      data: ["105", "128", "148", "164", "188", "212"],
                    },
                    { label: "B", data: ["55", "66", "74", "86", "103", "99"] },
                    {
                      label: "C (Rotor Od)",
                      data: ["78", "95", "115", "125", "150", "174"],
                    },
                    { label: "D", data: ["30", "42", "50", "57", "70", "80"] },
                    {
                      label: "E (Rotor Od)",
                      data: [
                        "15/19",
                        "15/19",
                        "19/24",
                        "24/28",
                        "32/38/p",
                        "34/38/p",
                      ],
                    },
                    {
                      label: "F",
                      data: ["36", "42.5", "48", "54.5", "63.5", "63.5"],
                    },
                    { label: "H", data: ["42", "44", "50", "57", "70", "80"] },
                    { label: "P", data: ["20", "20", "26", "30", "30", "38"] },
                    {
                      label: "Torque (Nm)",
                      data: ["10", "20", "34", "65", "85", "155"],
                    },
                  ].map((row) => (
                    <tr
                      key={row.label}
                      className="hover:bg-slate-800 transition-colors"
                    >
                      <td className="p-1 md:p-3 border border-slate-700 font-bold text-slate-400 truncate">
                        {row.label}
                      </td>
                      {row.data.map((val, i) => (
                        <td
                          key={i}
                          className="p-1 md:p-3 border border-slate-700 text-slate-300 text-center truncate"
                        >
                          {val}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-10 mx-4 md:m-10 border-t border-slate-700 pt-10 bg-slate-950 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-center text-slate-100 mb-6 uppercase tracking-widest">
              Rotor Dimensions
            </h3>

            <div className="w-full overflow-x-auto">
              <table className="w-full table-fixed border-collapse border border-slate-700 text-[7px] md:text-sm text-slate-300">
                <thead>
                  <tr className="bg-slate-900">
                    <th className="p-1 md:p-3 border border-slate-700 font-bold text-slate-400 uppercase truncate">
                      Param
                    </th>
                    {["S-08", "S-10", "S-12", "S-14", "S-16", "S-18"].map(
                      (size) => (
                        <th
                          key={size}
                          className="p-1 md:p-3 border border-slate-700 font-bold text-yellow-400 uppercase text-center"
                        >
                          {size}
                        </th>
                      ),
                    )}
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      label: "A(od)",
                      data: ["78", "96", "115", "125", "150", "175"],
                    },
                    {
                      label: "B(Std)",
                      data: [
                        "14,15",
                        "15,19",
                        "19,24,28",
                        "24,28",
                        "32,38",
                        "34",
                      ],
                    },
                    {
                      label: "B(Non)",
                      data: ["19", "24", "24", "28", "34", "38"],
                    },
                    {
                      label: "C(Std)",
                      data: ["36", "42.5", "48", "54.5", "65", "74"],
                    },
                    {
                      label: "C(Non)",
                      data: ["40", "42.5", "-", "-", "-", "-"],
                    },
                    {
                      label: "D(thk)",
                      data: ["9", "10.5", "12", "13", "15", "16"],
                    },
                  ].map((row) => (
                    <tr
                      key={row.label}
                      className="hover:bg-slate-800 transition-colors"
                    >
                      <td className="p-1 md:p-3 border border-slate-700 font-bold text-slate-400 truncate text-[6px] md:text-sm">
                        {row.label}
                      </td>
                      {row.data.map((val, i) => (
                        <td
                          key={i}
                          className="p-1 md:p-3 border border-slate-700 text-slate-300 text-center truncate"
                        >
                          {val}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Rectifier Dimension Table */}

          <div className="mt-12 mx-4 md:m-10 border-t border-slate-700 pt-10 bg-slate-950 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-center text-slate-100 mb-6 uppercase tracking-widest">
              RECTIFIER DIMENSIONS : FULL & HALF WAVE
            </h3>

            <div className="w-full overflow-x-auto">
              <table className="w-full table-fixed border-collapse border border-slate-700 text-[10px] md:text-sm text-slate-300">
                <thead>
                  <tr className="bg-slate-900">
                    <th className="p-2 md:p-3 border border-slate-700 font-bold text-yellow-500 uppercase truncate">
                      Model
                    </th>
                    <th className="p-2 md:p-3 border border-slate-700 font-bold text-yellow-500 uppercase truncate">
                      Input(AC)
                    </th>
                    <th className="p-2 md:p-3 border border-slate-700 font-bold text-yellow-500  uppercase truncate">
                      Output(DC)
                    </th>
                    <th className="p-2 md:p-3 border border-slate-700 font-bold text-yellow-500 uppercase truncate">
                      Dim (mm)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      model: "UB 501A",
                      input: "415 Vac",
                      output: "190 Vac, 2 amp",
                      dim: "52*45*23",
                    },
                    {
                      model: "UB 501B",
                      input: "230 Vac",
                      output: "190 Vac, 2 amp",
                      dim: "52*45*23",
                    },
                  ].map((row) => (
                    <tr
                      key={row.model}
                      className="hover:bg-slate-800 transition-colors"
                    >
                      <td className="p-2 md:p-3 border border-slate-700 text-slate-200 text-center truncate font-medium">
                        {row.model}
                      </td>
                      <td className="p-2 md:p-3 border border-slate-700 text-slate-300 text-center truncate">
                        {row.input}
                      </td>
                      <td className="p-2 md:p-3 border border-slate-700 text-slate-300 text-center truncate">
                        {row.output}
                      </td>
                      <td className="p-2 md:p-3 border border-slate-700 text-slate-300 text-center truncate">
                        {row.dim}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
