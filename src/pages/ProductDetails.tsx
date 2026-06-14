import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Send, ShieldCheck, FileText } from "lucide-react";

// Shared products data (This should ideally be in a separate data file)
const products = [
  {
    id: 1,
    name: "DC MOTOR BRAKE",
    cat: "Electromagnetic",
    torque: "200 Nm",
    voltage: "440V DC",
    image: "/images/Main_Brake_2.png",
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

export default function ProductDetails() {
  const { id } = useParams();
  // Find the product by ID
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="pt-32 text-center h-screen bg-white">
        <h2 className="text-2xl font-bold text-slate-900">Model not found.</h2>
        <Link
          to="/products"
          className="mt-4 text-red-600 inline-block hover:underline font-bold uppercase tracking-widest text-xs"
        >
          Return to Catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        {/* Simple Navigation */}
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-red-600 transition-all font-bold uppercase tracking-widest text-[10px] group"
        >
          <ArrowLeft
            size={15}
            className="group-hover:-translate-x-1 transition-transform"
          />{" "}
          Back
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* One Single Hero Image */}
          <div className="bg-slate-50 border border-slate-100 rounded-sm overflow-hidden flex items-center justify-center">
            {/* One Single Hero Image */}
            <div className="bg-slate-50 border border-slate-100 rounded-sm overflow-hidden  flex items-center justify-center">
              <img
                src={product.image} // <-- Uses the actual path from your products array
                alt={product.name}
                className="w-full h-auto object-contain max-h-[600px]" // Added max-h to prevent layout distortion
              />
            </div>
          </div>

          {/* Clean Specifications Area */}
          <div className="flex flex-col">
            <div className="mb-4">
              <h1 className="text-3xl md:text-5xl font-bold text-slate-800 tracking-tight leading-tight">
                {product.name}
              </h1>
              <p className="text-slate-400 text-sm font-medium italic">
                Industrial Grade Component
              </p>
            </div>

            <p className="text-slate-600 text-lg font-light leading-relaxed ">
              This model is designed for high-cycle industrial failsafe
              operation. Engineered for zero-latency response and maximum
              thermal resilience in heavy-duty machinery environments.
            </p>

            {/* Simple Data Table */}
            <div className="border-t border-slate-100 py-6 mb-10">
              <div className="flex justify-between py-4 border-b border-slate-50">
                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                  Torque Rating
                </span>
                <span className="text-slate-900 font-bold">
                  {product.torque}
                </span>
              </div>
              <div className="flex justify-between py-4 border-b border-slate-50">
                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                  Operating Voltage
                </span>
                <span className="text-slate-900 font-bold">
                  {product.voltage}
                </span>
              </div>
              <div className="flex justify-between py-4">
                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                  Compliance
                </span>
                <span className="text-slate-900 font-bold flex items-center gap-2">
                  <ShieldCheck size={17} className="text-red-600" /> ISO
                  Certified
                </span>
              </div>
            </div>

            {/* Clear Call to Action */}
            <div className="flex flex-col gap-4">
              <a
                href={`https://wa.me/918233268311?text=${encodeURIComponent(`Hi Unique DC, I Checked out the details for ${product.name}. on the Website.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-950 text-white px-10 py-5 font-bold uppercase tracking-widest text-[11px] hover:bg-red-600 transition-all rounded-sm text-center flex items-center justify-center gap-3 shadow-lg hover:shadow-red-600/20"
              >
                <Send size={16} /> Request Technical Quote
              </a>

              <button className="flex items-center justify-center gap-2 text-slate-400 hover:text-slate-900 transition-colors text-[11px] font-bold uppercase tracking-widest py-2">
                <FileText size={14} /> Download PDF Datasheet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
