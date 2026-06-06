import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Send, ShieldCheck, FileText } from 'lucide-react';

// Shared products data (This should ideally be in a separate data file)
const products = [
  { id: 1, name: "U-DX-1000-PRO", cat: "Electromagnetic", torque: "200 Nm", voltage: "440V DC" },
  { id: 2, name: "U-DX-2000-PRO", cat: "Disc Brakes", torque: "400 Nm", voltage: "440V DC" },
  { id: 3, name: "U-DX-3000-PRO", cat: "Electromagnetic", torque: "600 Nm", voltage: "440V DC" },
  { id: 4, name: "U-DX-4000-PRO", cat: "Hydraulic", torque: "800 Nm", voltage: "440V DC" },
  { id: 5, name: "U-DX-5000-PRO", cat: "Electromagnetic", torque: "1000 Nm", voltage: "440V DC" },
  { id: 6, name: "U-DX-6000-PRO", cat: "Disc Brakes", torque: "1200 Nm", voltage: "440V DC" },
  { id: 7, name: "U-DX-7000-PRO", cat: "Electromagnetic", torque: "1400 Nm", voltage: "440V DC" },
  { id: 8, name: "U-DX-8000-PRO", cat: "Custom Brakes", torque: "1600 Nm", voltage: "440V DC" },
];

export default function ProductDetails() {
  const { id } = useParams();
  // Find the product by ID
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="pt-32 text-center h-screen bg-white">
        <h2 className="text-2xl font-bold text-slate-900">Model not found.</h2>
        <Link to="/products" className="mt-4 text-red-600 inline-block hover:underline font-bold uppercase tracking-widest text-xs">Return to Catalog</Link>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Simple Navigation */}
        <Link to="/products" className="inline-flex items-center gap-2 text-slate-400 hover:text-red-600 transition-all font-bold uppercase tracking-widest text-[10px] mb-12 group">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Engineering Catalog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* One Single Hero Image */}
          <div className="bg-slate-50 border border-slate-100 rounded-sm overflow-hidden p-8 flex items-center justify-center">
             <img 
               src={`https://images.unsplash.com/photo-159742324403d-d1ef50e7a28e?auto=format&fit=crop&q=80&w=800&seed=${id}`} 
               alt={product.name}
               className="w-full h-auto object-contain"
             />
          </div>

          {/* Clean Specifications Area */}
          <div className="flex flex-col">
            <div className="mb-6">
              <span className="text-red-600 font-black tracking-[0.2em] uppercase text-[10px] block mb-2">{product.cat} Series</span>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-950 tracking-tight leading-tight">{product.name}</h1>
              <p className="text-slate-400 text-sm font-medium italic mt-2">Industrial Grade Component</p>
            </div>

            <p className="text-slate-600 text-lg font-light leading-relaxed mb-10">
              This model is designed for high-cycle industrial failsafe operation. Engineered for zero-latency response and maximum thermal resilience in heavy-duty machinery environments.
            </p>

            {/* Simple Data Table */}
            <div className="border-t border-slate-100 py-6 mb-10">
              <div className="flex justify-between py-4 border-b border-slate-50">
                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Torque Rating</span>
                <span className="text-slate-900 font-bold">{product.torque}</span>
              </div>
              <div className="flex justify-between py-4 border-b border-slate-50">
                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Operating Voltage</span>
                <span className="text-slate-900 font-bold">{product.voltage}</span>
              </div>
              <div className="flex justify-between py-4">
                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Compliance</span>
                <span className="text-slate-900 font-bold flex items-center gap-2">
                  <ShieldCheck size={14} className="text-red-600" /> ISO Certified
                </span>
              </div>
            </div>

            {/* Clear Call to Action */}
            <div className="flex flex-col gap-4">
                <a 
                  href={`https://wa.me/918233268311?text=${encodeURIComponent(`Hi Unique DC, I am interested in technical details for ${product.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-950 text-white px-10 py-5 font-bold uppercase tracking-widest text-[11px] hover:bg-red-600 transition-all rounded-sm text-center flex items-center justify-center gap-3 shadow-lg hover:shadow-red-600/20"
                >
                  <Send size={16} /> Request Technical Quote
                </a>
                
                <button className="flex items-center justify-center gap-2 text-slate-400 hover:text-slate-900 transition-colors text-[10px] font-bold uppercase tracking-widest py-2">
                    <FileText size={14} /> Download PDF Datasheet
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}