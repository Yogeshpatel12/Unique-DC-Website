import React from "react";
import { motion } from "motion/react";
// Removed Trophy, Users, Globe2, History as they are no longer used
import aboutImg from "../assets/Handle_Brake.jpg"; // Adjust path based on your folder structure

export default function About() {
  return (
    <div className="pt-8">
      {/* Hero Section with Background Image */}
      <section
        className="relative py-42 md:py-48 bg-slate-950 text-white overflow-hidden bg-left md:bg-right"
        style={{
          backgroundImage: `linear-gradient(to right,  rgba(2, 6, 23, 0.4)), url(${aboutImg})`,
          backgroundSize: "cover",
          // backgroundPosition: "right center",
        }}
      >
        {/* Red accent overlay */}
        <div className="absolute top-0 right-0 w-1/3 h-full  skew-x-12 translate-x-20" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-2xl"
          >
            
            
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 opacity-0">
              DECADE OF <br />
              EXCELLENCE.
            </h1>
            <h2 className="text-yellow-400 font-bold uppercase tracking-widest text-xs mb-4">
              Our Legacy
            </h2>
            <p className="text-slate-200 text-lg leading-relaxed">
              Founded on the principles of precision and safety, Unique DC Motor
              Brakes has grown from a specialized workshop to a global leader in
              industrial braking technology.
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
                src="/images/About2.png"
                className="relative rounded-lg shadow-2xl z-10"
                alt="Our Workshop"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6 text-yellow-500 tracking-tight">
                Our Mission
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                At <b className="text-yellow-500">UNIQUE DC</b>, we design and manufacture high-performance
                motion control systems specifically engineered for heavy-duty
                industrial applications. We understand that in demanding
                environments-where immense force, precision, and zero-downtime
                are non-negotiable, standard solutions simply won't cut it. From
                heavy machinery and automation to rugged manufacturing
                ecosystems, our robust turnkey systems and custom-engineered
                components are built to withstand the harshest conditions. We
                combine cutting-edge technology with uncompromising durability
                to keep your critical operations moving safely, efficiently, and
                flawlessly.{" "}
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-4xl font-bold text-slate-900 mb-2">
                    250+
                  </h4>
                  <p className="text-slate-500 text-sm">Global Clients</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-slate-900 mb-2">
                    15K+
                  </h4>
                  <p className="text-slate-500 text-sm">Brakes Installed</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-slate-900 mb-2">
                    99.9%
                  </h4>
                  <p className="text-slate-500 text-sm">Service Uptime</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-slate-900 mb-2">
                    50+
                  </h4>
                  <p className="text-slate-500 text-sm">Design Patents</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy section (The 3/4 boxes) has been removed */}
    </div>
  );
}
