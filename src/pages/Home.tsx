import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Shield, Settings, Truck, Award, Zap, CheckCircle2, ArrowRight, Play, Download } from 'lucide-react';
import { downloadPDF } from '../lib/download';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const handleExplore = () => {
    window.location.href = '/products';
  };
  
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 opacity-40">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000"
          alt="Industrial Engineering"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      {/* Metallic Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-slate-900/80 to-transparent" />
      
      <div className="relative z-10 text-center max-w-5xl px-4">
        <div className="hero-text">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="h-[1px] w-12 bg-brand-red" />
            <span className="text-brand-red font-bold uppercase tracking-[0.4em] text-[10px]">Premium Industrial Brakes</span>
            <div className="h-[1px] w-12 bg-brand-red" />
          </motion.div>
          
          <h1 className="text-4xl sm:text-6xl md:text-9xl font-bold text-white tracking-tighter mb-8 leading-[0.8] drop-shadow-2xl">
            PRECISION <br />
            <span className="text-metallic-red inline-block mt-2">ENGINEERING</span>
          </h1>
          
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light tracking-tight">
            High-performance DC motor brakes for <br />heavy-duty industrial cranes and automation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={handleExplore}
              className="group relative px-10 py-5 bg-metallic-red text-white font-bold rounded-sm overflow-hidden transition-all shadow-[0_0_40px_rgba(255,49,49,0.3)]"
            >
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="relative z-10 flex items-center gap-3 uppercase tracking-widest text-xs">
                Explore Products <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button 
              onClick={() => downloadPDF("Technical Datasheet", "Complete range of Unique DC Brakes specifications.")}
              className="px-10 py-5 border border-white/10 text-white/70 font-bold rounded-sm hover:bg-white/5 hover:text-white transition-all uppercase tracking-widest text-xs flex items-center gap-3"
            >
              <Download size={16} /> Technical Datasheet
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const TrustIndicators = () => (
  <section className="py-24 bg-white border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50">
        <div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all">
          <span className="font-bold text-2xl tracking-tighter text-slate-800">ISO 9001</span>
        </div>
        <div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all">
          <span className="font-bold text-2xl tracking-tighter text-slate-800">TÜV SÜD</span>
        </div>
        <div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all">
          <span className="font-bold text-2xl tracking-tighter text-slate-800">CE CERTIFIED</span>
        </div>
        <div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all">
          <span className="font-bold text-2xl tracking-tighter text-slate-800">MADE IN INDIA</span>
        </div>
      </div>
    </div>
  </section>
);

const Section = ({ title, subtitle, children, className = "", id = "" }: any) => (
  <section id={id} className={`min-h-screen flex flex-col justify-center py-20 ${className}`}>
    <div className="max-w-7xl mx-auto px-4 w-full">

      <div className="mb-20">
        <motion.h3 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-brand-red font-bold uppercase tracking-widest text-xs mb-4"
        >
          {subtitle}
        </motion.h3>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900"
        >
          {title}
        </motion.h2>
      </div>
      {children}
    </div>
  </section>
);

const TechnicalSpecsReveal = () => (
    <Section title="Precision Engineering" subtitle="Beyond Standards" className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
                { label: "Magnetic Flux", value: "2.4 Tesla", desc: "Optimized core geometry for maximum clamping force." },
                { label: "Braking Torque", value: "3500 Nm", desc: "High-density friction material for instantaneous stop." },
                { label: "Thermal Capacity", value: "850°C", desc: "Engineered to withstand extreme heat in steel mills." }
            ].map((spec, i) => (
                <div key={i} className="p-10 border border-slate-100 rounded-sm">
                    <div className="text-brand-red font-mono text-xs mb-4 uppercase">Spec 0{i+1}</div>
                    <div className="text-4xl font-bold text-slate-900 mb-2">{spec.value}</div>
                    <div className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">{spec.label}</div>
                    <p className="text-slate-500 text-sm leading-relaxed">{spec.desc}</p>
                </div>
            ))}
        </div>
    </Section>
);

const WorkflowSection = () => (
    <Section title="Manufacturing Excellence" subtitle="Our Process" className="bg-slate-50">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
                { step: "01", title: "R&D Design", desc: "CAD modeling and FEA stress testing for every custom build." },
                { step: "02", title: "Precision Machining", desc: "CNC milling with micron-level tolerances for mating surfaces." },
                { step: "03", title: "Hardness Testing", desc: "Vickers hardness verification for all structural components." },
                { step: "04", title: "Final Calibration", desc: "Simulated load testing before global shipment." }
            ].map((s, i) => (
                <div key={i} className="bg-white p-8 border border-gray-100 rounded-sm">
                    <div className="w-12 h-12 bg-brand-red text-white flex items-center justify-center font-bold mb-6 rounded-full">{s.step}</div>
                    <h4 className="font-bold text-lg mb-3">{s.title}</h4>
                    <p className="text-slate-500 text-sm">{s.desc}</p>
                </div>
            ))}
        </div>
    </Section>
);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  
  // GSAP for subtle text animation in hero
  useGSAP(() => {
    gsap.from(".hero-text", {
        y: 20,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
    });
  }, { scope: heroRef });

  return (
    <div ref={containerRef} className="relative pt-20 overflow-hidden">
      <div ref={heroRef} className="relative z-10">
        <HeroSection />
      </div>
      
      <TrustIndicators />

      <Section title="Industries We Empower" subtitle="Global Reach" className="bg-slate-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { tag: "01", name: "Heavy Duty Cranes", img: "https://images.unsplash.com/photo-1541888941255-081d746fc605?auto=format&fit=crop&q=80&w=800" },
            { tag: "02", name: "Steel Manufacturing", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800" },
            { tag: "03", name: "Port Logistics", img: "https://images.unsplash.com/photo-1571171637578-41bc2dd4d7f0?auto=format&fit=crop&q=80&w=800" },
          ].map(item => (
            <motion.div 
              whileHover={{ y: -10 }}
              key={item.tag} 
              className="group relative h-[400px] overflow-hidden rounded-sm cursor-pointer"
            >
              <img src={item.img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
              <div className="absolute bottom-8 left-8">
                <span className="text-brand-red font-mono text-sm mb-2 block">{item.tag}</span>
                <h4 className="text-white text-2xl font-bold">{item.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <TechnicalSpecsReveal />

      <Section title="Engineering Confidence" subtitle="Core Values">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
                {[
                    { icon: Shield, title: "Uncompromising Safety", desc: "Fail-safe mechanisms that meet international safety standards." },
                    { icon: Zap, title: "Rapid Response", desc: "Minimal engagement time for precision positioning control." },
                    { icon: Award, title: "Premium Materials", desc: "High-grade friction linings and corrosion-resistant components." }
                ].map((item, i) => (
                    <div key={i} className="flex gap-6">
                        <div className="w-14 h-14 bg-slate-100 flex items-center justify-center rounded-lg shrink-0 text-brand-red">
                            <item.icon size={28} />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                            <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-square md:aspect-auto md:h-[600px]">
                <img 
                    src="https://images.unsplash.com/photo-1531266752426-aad472b7bbf4?auto=format&fit=crop&q=80&w=1200" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                />
            </div>
        </div>
      </Section>

      <WorkflowSection />

      <Section title="Products Preview" subtitle="Innovations" className="bg-slate-950 text-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
             {[1, 2, 3, 4].map(id => (
                <div key={id} className="bg-slate-900 p-8 border border-white/5 hover:border-brand-red transition-colors group">
                    <div className="aspect-square bg-slate-800 mb-8 flex items-center justify-center overflow-hidden">
                        <img 
                            src={`https://images.unsplash.com/photo-159742324403d-d1ef50e7a28e?auto=format&fit=crop&q=80&w=500&seed=${id}`} 
                            className="w-2/3 group-hover:scale-110 transition-transform"
                            referrerPolicy="no-referrer"
                        />
                    </div>
                    <h4 className="text-lg font-bold mb-2">DC EM Brake Series {id}000</h4>
                    <p className="text-slate-500 text-sm mb-6">Optimized for high-cycle industrial applications with magnetic release.</p>
                    <Link to="/products" className="text-brand-red text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                        View Specs <ArrowRight size={14} />
                    </Link>
                </div>
             ))}
        </div>
      </Section>

      <Section title="Expert Solutions" subtitle="Service Focus">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-12 border border-gray-100 rounded-sm hover:shadow-xl transition-all">
                <Settings className="text-brand-red mb-6" size={40} />
                <h4 className="text-2xl font-bold mb-4 text-slate-900">Custom Engineering</h4>
                <p className="text-slate-500 mb-8">Tailored braking solutions for non-standard motor configurations and specialized environments.</p>
                <div className="space-y-3">
                    {["On-site Consultation", "FEA Analysis", "Prototyping"].map(t => (
                        <div key={t} className="flex items-center gap-2 text-sm text-slate-700">
                             <CheckCircle2 size={16} className="text-brand-red" /> {t}
                        </div>
                    ))}
                </div>
            </div>
            <div className="p-12 border border-gray-100 rounded-sm hover:shadow-xl transition-all">
                <Truck className="text-brand-red mb-6" size={40} />
                <h4 className="text-2xl font-bold mb-4 text-slate-900">Global Logistics</h4>
                <p className="text-slate-500 mb-8">Priority manufacturing and expedited shipping for critical maintenance and breakdown repairs.</p>
                <div className="space-y-3">
                    {["Export Packaging", "Customs Clearance", "Express Delivery"].map(t => (
                        <div key={t} className="flex items-center gap-2 text-sm text-slate-700">
                             <CheckCircle2 size={16} className="text-brand-red" /> {t}
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </Section>

      <Section title="Client Voices" subtitle="Testimonials" className="bg-brand-black text-white relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
                { name: "John Miller", role: "Ops Manager, SteelCorp", quote: "The reliability of Unique Brakes has reduced our hoist downtime by 40%. Exceptionally engineered product." },
                { name: "Sarah Chen", role: "Senior Engineer, Port Hub", quote: "Finally a manufacturer that understands the nuances of port crane requirements. Their DC series is unbeatable." },
                { name: "Ahmed Khan", role: "Maintenance Lead, InLogistics", quote: "Switching to Unique was the best decision for our warehouse automation overhaul. Seamless integration." }
            ].map((t, i) => (
                <div key={i} className="bg-slate-900 border border-white/5 p-10 rounded-sm">
                    <p className="text-lg italic mb-8">"{t.quote}"</p>
                    <div>
                        <h5 className="font-bold text-white">{t.name}</h5>
                        <p className="text-brand-red/70 text-sm">{t.role}</p>
                    </div>
                </div>
            ))}
        </div>
      </Section>

      <Section title="Ready to Optimize?" subtitle="Connect With Us" className="mb-[20vh]">
        <div className="bg-slate-900 p-12 md:p-24 rounded-3xl text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                 <img src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto">
                <h4 className="text-4xl font-bold text-white mb-8">Get a tailored quote for your project within 24 hours.</h4>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button 
                      onClick={() => downloadPDF("Full Catalogue", "Complete technical specifications for all products.")}
                      className="bg-white text-slate-900 px-10 py-5 rounded-sm font-bold hover:bg-slate-50 transition-all uppercase tracking-widest text-xs"
                    >
                      Download Catalogue
                    </button>
                    <a 
                      href={`https://wa.me/919999999999?text=${encodeURIComponent("Hi Unique DC, I am interested in your industrial braking solutions. Could you please share your latest price list and catalog?")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-brand-red text-white px-10 py-5 rounded-sm font-bold hover:bg-brand-red/90 transition-all uppercase tracking-widest text-xs flex items-center justify-center gap-2"
                    >
                      Request Price List
                    </a>
                </div>
            </div>
        </div>
      </Section>

      {/* Final section to show drop completion */}
      <section className="h-40 bg-white" />
    </div>
  );
}
