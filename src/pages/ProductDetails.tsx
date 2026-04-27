import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, CheckCircle2, Download, ShieldCheck, Zap, BarChart3, Settings2, Send, Info, ChevronRight, Wrench, ArrowRight } from 'lucide-react';
import { downloadPDF } from '../lib/download';
import Product360Viewer from '../components/Product360Viewer';

export default function ProductDetails() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = React.useState('specs');

  const productTitle = `MODEL U-DX-${id}00-PRO`;
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="pt-20 bg-white min-h-screen">
      {/* Navigation Breadcrumb */}
      <div className="bg-slate-50 border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            <Link to="/" className="hover:text-slate-900 transition-colors underline decoration-slate-200">Home</Link>
            <ChevronRight size={12} />
            <Link to="/products" className="hover:text-slate-900 transition-colors underline decoration-slate-200">Catalog</Link>
            <ChevronRight size={12} />
            <span className="text-slate-900">{productTitle}</span>
          </div>
        </div>
      </div>

      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
            
            {/* Left: Sticky Image Gallery */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="lg:sticky lg:top-32"
            >
              <div className="group relative aspect-square bg-slate-50 border border-gray-100 overflow-hidden mb-6 rounded-sm flex items-center justify-center">
                <Product360Viewer productId={id || 1} />
                <div className="absolute top-6 left-6 flex flex-col gap-2 pointer-events-none">
                   <div className="bg-brand-red text-white text-[9px] font-black tracking-widest uppercase px-3 py-1 rounded-sm shadow-lg shadow-brand-red/20 text-center">PREMIUM SERIES</div>
                   <div className="bg-white/90 backdrop-blur text-slate-900 text-[9px] font-black tracking-widest uppercase px-3 py-1 border border-slate-200 rounded-sm text-center">ISO CERTIFIED</div>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map(i => (
                  <button key={i} className="aspect-square bg-white border border-gray-100 rounded-sm overflow-hidden hover:border-brand-red transition-all group p-1">
                    <img src={`https://images.unsplash.com/photo-1590235246063-b879fd6a47ad?auto=format&fit=crop&q=80&w=300&seed=${id}-${i}`} className="w-full h-full object-cover group-hover:opacity-80 transition-opacity grayscale hover:grayscale-0" />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Right: Technical Details */}
            <div className="flex flex-col">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-6">
                   <span className="w-12 h-[1px] bg-brand-red" />
                   <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-[10px]">Technical Specifications</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-slate-950 mb-6 tracking-tighter leading-[0.9]">{productTitle}</h1>
                <p className="text-slate-500 text-lg font-light leading-relaxed mb-10 max-w-xl">
                  High-cycle industrial electromagnetic brake designed for failsafe operation in heavy-duty machinery. Engineered for zero-latency response and maximum thermal resilience.
                </p>

                {/* Quick Info Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mb-12 py-8 border-t border-b border-slate-100">
                  <div>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Max Torque</span>
                    <span className="text-xl font-bold text-slate-900">{200 * Number(id)} Nm</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Input Volt</span>
                    <span className="text-xl font-bold text-slate-900">440V DC</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Duty Class</span>
                    <span className="text-xl font-bold text-slate-900">CLASS F</span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 mb-16">
                   <a 
                    href={`https://wa.me/918233268311?text=${encodeURIComponent(`Hi Unique DC, I am interested in a technical quote for ${productTitle}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-grow flex items-center justify-center gap-3 px-8 py-5 bg-brand-red text-white text-xs font-bold uppercase tracking-widest hover:bg-brand-red/90 transition-all rounded-sm shadow-xl shadow-brand-red/20"
                   >
                     <Send size={16} /> Request Quotation
                   </a>
                   <button 
                    onClick={() => downloadPDF(productTitle, "Full technical data sheet and installation guide.")}
                    className="flex items-center justify-center gap-3 px-8 py-5 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-all rounded-sm"
                   >
                     <Download size={16} /> Technical Sheet
                   </button>
                </div>

                {/* Tabbed Content */}
                <div className="border-t border-slate-100">
                  <div className="flex gap-10 mb-10 overflow-x-auto no-scrollbar">
                    {['Specs', 'Features', 'Resources'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab.toLowerCase())}
                        className={`text-[10px] font-bold uppercase tracking-widest py-6 border-t-2 -mt-[2px] transition-all whitespace-nowrap ${
                          activeTab === tab.toLowerCase() ? 'border-brand-red text-slate-900' : 'border-transparent text-slate-400 hover:text-slate-600'
                        }`}
                      >
                        {tab} Details
                      </button>
                    ))}
                  </div>

                  <AnimatePresence mode="wait">
                    {activeTab === 'specs' && (
                      <motion.div
                        key="specs"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-4"
                      >
                        <div className="grid grid-cols-1 gap-1">
                          {[
                            { label: "Brake Lining", value: "Asbestos-free High Friction" },
                            { label: "Magnet Coil", value: "Enameled Copper, Class F Insulation" },
                            { label: "Operating Temp", value: "-20°C to +850°C" },
                            { label: "Response Time", value: "< 50ms" },
                            { label: "Enclosure", value: "IP55 / Dust & Moisture Proof" },
                            { label: "Release Mechanism", value: "Direct Electromagnetic Release" }
                          ].map((spec, i) => (
                            <div key={i} className="flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100/50 transition-colors">
                              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{spec.label}</span>
                              <span className="text-xs font-bold text-slate-900 tracking-tight">{spec.value}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'features' && (
                      <motion.div
                        key="features"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="grid grid-cols-1 gap-4"
                      >
                         {[
                           { title: "Smart Calibration", desc: "Self-adjusting friction gap for consistent torque performance over time." },
                           { title: "Heat Shield Tech", desc: "Advanced fan-ventilation fins for superior heat dissipation during high-frequency cycles." },
                           { title: "Fail-Safe Logic", desc: "Instant mechanical engagement upon power interruption for absolute safety." }
                         ].map((feat, i) => (
                           <div key={i} className="p-6 border border-gray-100 rounded-sm">
                             <h4 className="text-sm font-bold text-slate-950 mb-2 uppercase tracking-wide flex items-center gap-2">
                               <CheckCircle2 size={14} className="text-brand-red" /> {feat.title}
                             </h4>
                             <p className="text-slate-500 text-xs leading-relaxed">{feat.desc}</p>
                           </div>
                         ))}
                      </motion.div>
                    )}

                    {activeTab === 'resources' && (
                      <motion.div
                        key="resources"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="grid grid-cols-2 gap-4"
                      >
                         {[
                           { name: "Wiring Diagram", size: "2.4 MB" },
                           { name: "CAD Drawings (DWG)", size: "8.1 MB" },
                           { name: "Maintenance Manual", size: "1.2 MB" },
                           { name: "Compliance Certs", size: "0.5 MB" }
                         ].map((res, i) => (
                           <button 
                            key={i} 
                            onClick={() => downloadPDF(res.name, `Product resource for ${productTitle}.`)}
                            className="flex flex-col p-6 bg-slate-50 border border-gray-100 hover:border-brand-red/30 hover:bg-white transition-all text-left group"
                           >
                              <Download size={18} className="text-slate-400 group-hover:text-brand-red mb-4" />
                              <span className="text-xs font-bold text-slate-900 mb-1">{res.name}</span>
                              <span className="text-[10px] text-slate-400 font-medium uppercase">{res.size}</span>
                           </button>
                         ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Compliance Section */}
      <section className="bg-slate-950 py-32 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-red/5 skew-x-12 translate-x-24" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div>
                <h2 className="text-brand-red font-bold uppercase tracking-[0.3em] text-[10px] mb-6">Built for the Toughest Tasks</h2>
                <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-[1.1] tracking-tight">RIGOROUSLY TESTED <br />FOR COMPONENT SAFETY.</h3>
                <p className="text-slate-400 text-lg font-light leading-relaxed mb-10">
                  Every Model {id} goes through 25,000 cycle testing before certification. We ensure zero leakage, maximum torque stability, and consistent thermal profiles.
                </p>
                <div className="flex gap-12">
                   <div className="flex flex-col">
                      <span className="text-3xl font-bold text-white mb-2">100%</span>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">In-house Testing</span>
                   </div>
                   <div className="flex flex-col">
                      <span className="text-3xl font-bold text-white mb-2">0.02s</span>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Avg Response Time</span>
                   </div>
                   <div className="flex flex-col">
                      <span className="text-3xl font-bold text-white mb-2">5YR+</span>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Avg Service Life</span>
                   </div>
                </div>
             </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                   { icon: ShieldCheck, title: "Failsafe Design", desc: "Instant engagement on power loss." },
                   { icon: Zap, title: "Low Wattage", desc: "Energy efficient induction coils." },
                   { icon: Info, title: "Modular Parts", desc: "Tool-free replacement for wear parts." },
                   { icon: BarChart3, title: "Data Driven", desc: "Factory logging for every unit." }
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-white/5 border border-white/10 hover:border-brand-red/30 transition-all">
                    <item.icon className="text-brand-red mb-6" size={28} />
                    <h4 className="text-sm font-bold uppercase tracking-wider mb-3 leading-tight">{item.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
             </div>
           </div>
        </div>
      </section>

      {/* Cross-Sell */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h2 className="text-brand-red font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Related Series</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-950 tracking-tight">OTHER CONFIGURATIONS.</h3>
        </div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
           {[Number(id)+1, Number(id)+2, Number(id)+3].map(relId => (
             <Link key={relId} to={`/products/${relId}`} className="group p-10 bg-slate-50 border border-gray-100 hover:border-brand-red/30 transition-all rounded-sm flex flex-col items-center text-center">
                <div className="aspect-square w-32 bg-white border border-gray-100 rounded-sm mb-8 flex items-center justify-center p-4">
                  <img src={`https://images.unsplash.com/photo-159742324403d-d1ef50e7a28e?auto=format&fit=crop&q=80&w=300&seed=${relId}`} className="max-h-full object-contain grayscale group-hover:grayscale-0 transition-all" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">MODEL U-DX-{relId}00-PRO</h4>
                <p className="text-slate-500 text-xs mb-6">High torque electromagnetic brake</p>
                <div className="text-[10px] font-bold uppercase tracking-widest text-brand-red flex items-center gap-2 group-hover:gap-4 transition-all">
                  View Technical Specs <ArrowRight size={12} />
                </div>
             </Link>
           ))}
        </div>
      </section>
    </div>
  );
}
