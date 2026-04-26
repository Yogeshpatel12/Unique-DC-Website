import React from 'react';
import { motion } from 'motion/react';

export default function Gallery() {
  const items = [
    { id: 1, title: "Steel Mill Deployment", category: "Heavy Industry", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200" },
    { id: 2, title: "Tower Crane Brake Assembly", category: "Construction", img: "https://images.unsplash.com/photo-1541888941255-081d746fc605?auto=format&fit=crop&q=80&w=1200" },
    { id: 3, title: "Port Gantry Integration", category: "Logistics", img: "https://images.unsplash.com/photo-1571171637578-41bc2dd4d7f0?auto=format&fit=crop&q=80&w=1200" },
    { id: 4, title: "Precision CNC Testing", category: "Quality Control", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" },
    { id: 5, title: "Custom Hydraulic Unit", category: "Engineering", img: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=1200" },
    { id: 6, title: "R&D Lab Bench", category: "Innovation", img: "https://images.unsplash.com/photo-1531266752426-aad472b7bbf4?auto=format&fit=crop&q=80&w=1200" },
  ];

  return (
    <div className="pt-20">
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-brand-red font-bold uppercase tracking-widest text-xs mb-4">Visual Records</h2>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-950 tracking-tight">INDUSTRY IN ACTION.</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map(item => (
              <motion.div
                key={item.id}
                whileHover={{ y: -10 }}
                className="group relative h-[500px] overflow-hidden rounded-sm cursor-zoom-in"
              >
                <img 
                  src={item.img} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                <div className="absolute bottom-10 left-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-brand-red font-mono text-sm mb-2 block">{item.category}</span>
                  <h4 className="text-white text-2xl font-bold">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
