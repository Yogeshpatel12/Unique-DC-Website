import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Send, ShieldCheck, FileText } from "lucide-react";

// Shared products data (This should ideally be in a separate data file)
const products = [
  {
    id: 1,
    name: "FAIL-SAFE BRAKE",
    cat: "USB & UMB (Normally On)",
    torque: "2 - 1600 Nm",
    voltage: "190V DC",
    material: "Cast Iron",
    image: "/images/SingleBrake.png",
  },
  {
    id: 2,
    name: "BRAKE",
    cat: "USB & UMB (Normally On)",
    torque: "2 - 1600 Nm",
    voltage: "190V DC",
    material: "Cast Iron",
    image: "/images/Main_Brake.png",
  },
  {
    id: 3,
    name: "DC MOTORS",
    cat: "UBM (1440 RPM)",
    torque: "Power : 0.25 - 20 Hp",
    voltage: "190V DC",
    material: "Cast Iron",
    image: "/images/Motor.png",
  },
  {
    id: 4,
    name: "NMRV GEAR BOX",
    cat: "0.5 KW",
    torque: "Worm",
    voltage: "Input : 3 - 10 Hp",
    material: "Cast Iron",
    image: "/images/Nmrv.png",
  },
  {
    id: 5,
    name: "COMBINATION",
    cat: "UCB",
    torque: "15 - 500 Nm",
    voltage: "24/96/190 V DC",
    material: "Cast Iron",
    image: "/images/Combination_Brake.png",
  },
  {
    id: 6,
    name: "FALSE-SAFE BRAKE",
    cat: "Type : USB & UMB (Normally On)",
    torque: "2 - 1600 Nm",
    voltage: "190V DC",
    material: "Cast Iron",
    image: "/images/Main_Brake_5.png",
  },
  {
    id: 7,
    name: "RECTIFIERS",
    cat: "UFC",
    torque: "15 - 500 Nm",
    voltage: "190V DC",
    material: "Hard Plastics",
    image: "/images/Rectiffier.png",
  },
  {
    id: 8,
    name: "HUB MOUNT BRAKE",
    cat: "UBM",
    torque: "1600 Nm",
    voltage: "190V DC",
    material: "Cast Iron",
    image: "/images/BrakeMotor2.png",
  },
  {
    id: 9,
    name: "CLUTCH BRAKE",
    cat: "UCB",
    torque: "15 - 500 Nm",
    voltage: "24/96/190V DC",
    material: "Cast Iron",
    image: "/images/Clutch_Brake.png",
  },
  {
    id: 10,
    name: "LINERS",
    cat: "UFB",
    torque: "2 -1200 Nm",
    voltage: "190V DC",
    material: "Cast Iron",
    image: "/images/Liner.png",
  },
  {
    id: 11,
    name: "FRICTION PLATES",
    cat: "Electromagnetic",
    torque: "1400 Nm",
    voltage: "190V DC",
    material: "Cast Iron",
    image: "/images/Rectiffier.png",
  },
  {
    id: 12,
    name: "ACCESSORIES",
    cat: "Custom Brakes",
    torque: "1600 Nm",
    voltage: "190V DC",
    material: "Cast Iron",
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
              <h2 className="text-3xl md:text-5xl font-bold text-slate-800 tracking-tight leading-tight">
                {product.name}
              </h2>
            </div>

            {/* Simple Data Table */}
            <div className="border-t border-slate-100 py-6 mb-10">
              <div className="flex justify-between py-4 border-b border-slate-50">
                <span className="text-slate-400 text-[12px] font-bold uppercase tracking-widest">
                  Type :
                </span>
                <span className="text-slate-900 font-bold">{product.cat}</span>
              </div>
              <div className="flex justify-between py-4 border-b border-slate-50">
                <span className="text-slate-400 text-[12px] font-bold uppercase tracking-widest">
                  Torque :
                </span>
                <span className="text-slate-900 font-bold">
                  {product.torque}
                </span>
              </div>
              <div className="flex justify-between py-4 border-b border-slate-50">
                <span className="text-slate-400 text-[12px] font-bold uppercase tracking-widest">
                  Voltage :
                </span>
                <span className="text-slate-900 font-bold">
                  {product.voltage}
                </span>
              </div>
              <div className="flex justify-between py-4 border-b border-slate-50">
                <span className="text-slate-400 text-[12px] font-bold uppercase tracking-widest">
                  Material :
                </span>
                <span className="text-slate-900 font-bold">
                  {product.material}
                </span>
              </div>
              <div className="flex justify-between py-4">
                <span className="text-slate-400 text-[12px] font-bold uppercase tracking-widest">
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
