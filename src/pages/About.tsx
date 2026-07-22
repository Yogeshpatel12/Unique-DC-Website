import React from "react";
import { motion } from "motion/react";
import aboutImg from "../assets/Handle_Brake.jpg"; // Keep your existing asset

export default function About() {
  return (
    <div className="pt-10 bg-white min-h-screen">
      {/* Hero Header - Matching Product Page Style */}
      <header className="relative bg-slate-950 py-26 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,46,46,0.1),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center md:text-left max-w-3xl"
          >
            <h2 className="text-yellow-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">
              Our Legacy
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
              A DECADE OF <br />
              <span className="text-metallic-red">INDUSTRIAL EXCELLENCE.</span>
            </h1>
            <p className="text-slate-400 text-sm font-light uppercase leading-relaxed mb-15 max-w-xl">
              Founded on the principles of precision and safety, UNIQUE DC Motor 
              Brakes has grown from a specialized workshop to a global leader 
              in industrial braking technology.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Grid Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-slate-50 rounded-2xl scale-95 group-hover:scale-100 transition-transform duration-500" />
              <img
                src="/images/About2.png"
                className="relative rounded-lg shadow-2xl z-10"
                alt="Our Workshop"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6 text-yellow-500 tracking-tight border-l-4 border-metallic-red pl-4">
                Our Mission
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                At <b className="text-yellow-500">UNIQUE DC</b>, we design and manufacture high-performance
                motion control systems specifically engineered for heavy-duty
                industrial applications. We understand that in demanding
                environments-where immense force, precision, and zero-downtime
                are non-negotiable-standard solutions simply won't cut it. 
                Our robust turnkey systems and custom-engineered components are 
                built to withstand the harshest conditions.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                {[
                  { label: "Global Clients", val: "250+" },
                  { label: "Brakes Installed", val: "20K+" },
                  { label: "Service Uptime", val: "99.9%" },
                  { label: "Design Patents", val: "25+" },
                ].map((stat, i) => (
                  <div key={i} className="border-t border-slate-200 pt-4">
                    <h4 className="text-3xl font-bold text-slate-900 mb-1">{stat.val}</h4>
                    <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}