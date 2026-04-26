import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Users, Globe2, History } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-red/10 skew-x-12 translate-x-20" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-2xl"
          >
            <h2 className="text-brand-red font-bold uppercase tracking-widest text-xs mb-4">Our Legacy</h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">DECADE OF <br />EXCELLENCE.</h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Founded on the principles of precision and safety, Unique DC Motor Brakes has grown from a specialized workshop to a global leader in industrial braking technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-slate-50 rounded-2xl scale-95 group-hover:scale-100 transition-transform duration-500" />
              <img 
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200" 
                className="relative rounded-lg shadow-2xl z-10"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6 text-slate-900 tracking-tight">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                To provide the industrial world with braking solutions that never fail. We believe that safety is not just a feature, but the core of engineering integrity. Our goal is to empower heavy industries with technology that enhances both safety and operational efficiency.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-4xl font-bold text-slate-900 mb-2">150+</h4>
                  <p className="text-slate-500 text-sm">Global Clients</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-slate-900 mb-2">15K+</h4>
                  <p className="text-slate-500 text-sm">Brakes Installed</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-slate-900 mb-2">99.9%</h4>
                  <p className="text-slate-500 text-sm">Service Uptime</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-slate-900 mb-2">50+</h4>
                  <p className="text-slate-500 text-sm">Design Patents</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">The Pillars of Our Success</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: History, title: "Legacy", desc: "Built on 10 years of engineering expertise." },
              { icon: Trophy, title: "Quality", desc: "Rigorous testing protocols for every unit." },
              { icon: Users, title: "People", desc: "Dedicated team of 100+ precision engineers." },
              { icon: Globe2, title: "Presence", desc: "Serving industries across 4 continents." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-red">
                  <item.icon size={32} />
                </div>
                <h4 className="font-bold mb-3">{item.title}</h4>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
