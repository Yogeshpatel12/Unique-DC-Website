import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Shield,
  Settings,
  Truck,
  Award,
  Zap,
  CheckCircle2,
  ArrowRight,
  Play,
  Download,
  BadgeCheck,
  TrendingUp,
  Flag,
} from "lucide-react";
import { downloadPDF } from "../lib/download";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const handleExplore = () => {
    window.location.href = "/products";
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 opacity-100">
        <img
          src="/images/Motor.png"
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
 
          </motion.div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white tracking-tighter mb-8 leading-[0.8] drop-shadow-2xl">
            ELECTROMAGNETIC BRAKING<br />
            <span className="text-metallic-red inline-block mt-2">
              SOLUTIONS
            </span>
          </h1>

          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-22 font-light tracking-tight">
            We design and manufacture Motion control systems for <br />
            heavy-duty industrial applications.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={handleExplore}
              className="group relative px-10 py-5 bg-metallic-red text-white font-bold rounded-sm overflow-hidden transition-all shadow-[0_0_40px_rgba(255,49,49,0.3)]"
            >
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="relative z-10 flex items-center gap-3 uppercase tracking-widest text-xs">
                Explore Products{" "}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
            </button>
            <button
              onClick={() =>
                downloadPDF(
                  "Technical Datasheet",
                  "Complete range of Unique DC Brakes specifications.",
                )
              }
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

const trustItems = [
  {
    title: "ISO 9001, MSME Certified",
    subtitle: "Certified",
    icon: Award,
  },
  {
    title: "20000+ Units Delivered",
    subtitle: "Registered",
    icon: BadgeCheck,
  },
  {
    title: "More than 7+ Years in Business",
    subtitle: "Experience",
    icon: TrendingUp,
  },
  {
    title: "500+ Clients Worldwide",
    subtitle: "Proudly Built",
    icon: Flag,
  },
];

const TrustIndicators = () => (
  <section className="py-10 bg-black border-b border-white/10">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {trustItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="group h-52 bg-white/5 border border-white/10 rounded-1xl p-6 flex flex-col items-center justify-center text-center hover:bg-white/10 hover:border-brand-red/30 transition-all duration-300 hover:-translate-y-1">

              <Icon className="w-10 h-10 text-brand-red mb-4 group-hover:scale-110 transition-transform" />

              <h3 className="text-white font-bold text-lg md:text-xl">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm md:text-base mt-1">
                {item.subtitle}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

const Section = ({
  title,
  subtitle,
  children,
  className = "",
  id = "",
}: any) => (
  <section
    id={id}
    className={`min-h-screen flex flex-col justify-center py-10 ${className}`}
  >
    <div className="max-w-7xl mx-auto px-4 w-full">
      <div className="mb-14">
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


const WorkflowSection = () => (
  <Section
    title="Manufacturing Excellence"
    className="bg-gray-900 [&_h2]:text-gray-400 uppercase"
  >
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {[
        {
          step: "01",
          title: "R&D Design",
          desc: "CAD modeling and FEA stress testing for every custom build.",
        },
        {
          step: "02",
          title: "Precision Machining",
          desc: "CNC milling with micron-level tolerances for mating surfaces.",
        },
        {
          step: "03",
          title: "Hardness Testing",
          desc: "Vickers hardness verification for all structural components.",
        },
        {
          step: "04",
          title: "Final Calibration",
          desc: "Simulated load testing before global shipment.",
        },
      ].map((s, i) => (
        <div key={i} className="bg-white p-8 border border-gray-100 rounded-sm">
          <div className="w-12 h-12 bg-brand-red text-white flex items-center justify-center font-bold mb-6 rounded-full">
            {s.step}
          </div>
          <h4 className="font-bold text-lg mb-3">{s.title}</h4>
          <p className="text-slate-500 text-sm">{s.desc}</p>
        </div>
      ))}
    </div>
  </Section>
);
const clientLogos = [
  "/images/Vedanta_Logo.png",
  "/images/Jsw_Logo.png",
  "/images/K2_Crane_Logo.png",
  "/images/L&T_Logo.jpg",
  "/images/Premium_Logo.jpg",
  "/images/Reva_Logo.png",
  "/images/Rotomag_Logo.jpg",
  "/images/Shapoorji_Logo.png",
  "/images/Welspun_Logo.png",
  "/images/Crompton_Logo.png",
  "/images/Electromech_Logo.png",
  "/images/BharatBijli_Logo.jpg",
];

const ClientLogosSection = () => (
  <section className="py-6 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-brand-red font-bold uppercase tracking-widest text-lg mb-4">
          Trusted By Industry Leaders
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          OUR CLIENTS
        </h2>

        {/* <p className="text-slate-600 max-w-3xl mx-auto">
          Trusted by leading crane manufacturers, steel plants,
          automation companies, logistics operators and industrial
          engineering organizations.
        </p> */}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
  {clientLogos.map((logo, index) => (
    <div
      key={index}
      className="
        h-36
        bg-white
        border
        border-slate-200
        rounded-sm
        flex
        items-center
        justify-center
        p-4
        hover:shadow-lg
        transition-all
      "
    >
      <img
        src={logo}
        alt={`Client ${index + 1}`}
        className="
          max-h-20
          max-w-full
          object-contain
          opacity-70
          hover:opacity-100
          transition-all
          duration-300
        "
      />
    </div>
  ))}
</div>
    </div>
  </section>
);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  // GSAP for subtle text animation in hero
  useGSAP(
    () => {
      gsap.from(".hero-text", {
        y: 20,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    },
    { scope: heroRef },
  );

  return (
    <div ref={containerRef} className="relative pt-20 overflow-hidden">
      <div ref={heroRef} className="relative z-10">

        <HeroSection />
        
      </div>

      

      <Section
        title="Industries We Empower"
        subtitle="Global Reach"
        className="bg-slate-50 uppercase"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Heavy Duty Cranes",
              img: "/images/Crane.avif",
            },
            {
              name: "Motor Manufacturing",
              img: "/images/Motor.jpg",
            },
            {
              name: "Wind Turbines",
              img: "/images/Windmills.jpg",
            },
            {
              name: "Elevators & Lifts",
              img: "/images/Elevators.jpg",
            },
            {
              name: "Construction & Mining",
              img: "/images/Mining1.png",
            },
            {
              name: "Textile & Printing",
              img: "/images/Textile.jpg",
            },
          ].map((item) => (
            <motion.div
              whileHover={{ y: -10 }}
              key={item.tag}
              className="group relative h-[400px] overflow-hidden rounded-sm cursor-pointer"
            >
              <img
                src={item.img}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
              <div className="absolute bottom-8 left-8">
                <span className="text-brand-red font-mono text-sm mb-2 block">
                  {item.tag}
                </span>
                <h4 className="text-white text-2xl font-bold">{item.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      

      <Section title="Engineering Confidence" subtitle="Manufacturing Excellence in Action" className="bg-slate-50 uppercase">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-1xl overflow-hidden aspect-square md:aspect-auto md:h-[600px]">
            <img
              src="/images/Main_Brake.png"
              className="w-full h-full object-cover transition-transform duration-500  hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative rounded-1xl overflow-hidden aspect-square md:aspect-auto md:h-[600px]">
            <img
              src="/images/Motor.png"
              className="w-full h-full object-cover transition-transform duration-500  hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </Section>

      <WorkflowSection />
      <TrustIndicators />
      <ClientLogosSection />

      <Section
        title="Ready to Optimize?"
        subtitle="Connect With Us"
        className="uppercase"
      >
        <div className="bg-slate-900 p-12 md:p-24 rounded-3xl text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-80">
            <img
              src="/images/Mining1.png"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h4 className="text-4xl font-bold text-white mb-8">
              Book your Order within 24 hours.
            </h4>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() =>
                  downloadPDF(
                    "Full Catalogue",
                    "Complete technical specifications for all products.",
                  )
                }
                className="bg-white text-slate-900 px-10 py-5 rounded-sm font-bold hover:bg-slate-50 transition-all uppercase tracking-widest text-xs"
              >
                Download Catalogue
              </button>
              <a
                href={`https://wa.me/918233268311?text=${encodeURIComponent("Hi Unique DC, I am interested in your industrial braking solutions. Could you please share your latest price list and catalog?")}`}
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
    </div>
  );
}
