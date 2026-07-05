import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Award,
  ArrowRight,
  Download,
  BadgeCheck,
  TrendingUp,
  Flag,
} from "lucide-react";
import { downloadPDF } from "../lib/download";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  return (
    <section className="relative h-[89vh] overflow-hidden">

      {/* ================= Background Slider ================= */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop
        speed={1200}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        className="absolute inset-0 z-0 w-full h-full"
      >
        <SwiperSlide>
          <img
            src="/images/Motor.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/images/HeroImage.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/images/Windmills.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>

      {/* ================= Dark Overlay ================= */}
      <div className="absolute inset-0 bg-black/55 z-10"></div>

      {/* ================= Red Gradient ================= */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,46,46,0.12),transparent_70%)] z-20"></div> */}

      {/* ================= Hero Content ================= */}
      <div className="absolute inset-0 z-30 flex items-center justify-center">
        <div className="hero-text text-center px-4">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4 mb-8"
          />

          <h1 className="text-3xl text-metallic-red sm:text-4xl md:text-8xl font-bold tracking-tight leading-[0.85] text-white drop-shadow-2xl">
            UNIQUE DC
            <br />
            <span className="text-metallic-red">
              MOTORS & BRAKES
            </span>
          </h1>
          <p className="mt-2 text-sm sm:text-xl md:text-1xl text-white drop-shadow-lg">
            Motor Brake Manufacturers from Udaipur, RJ.
          </p>

          

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
  <section className="py-10 border-b border-white/10">
    <div className="max-w-7xl mx-auto px-4">
      <div className="bg-black grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {trustItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="group h-52 bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-white/10 hover:border-yellow-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <Icon className="w-10 h-10 shrink-0 text-yellow-500 mb-4 group-hover:scale-110 transition-transform" />
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
          className="text-yellow-500 font-bold uppercase tracking-widest text-xs mb-4"
        >
          {subtitle}
        </motion.h3>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-slate-600"
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
    className="bg-gray-900 [&_h2]:text-yellow-500 uppercase"
  >
    <div className="grid grid-cols-1 text-slate-500 md:grid-cols-4 gap-4">
      {[
        {
          step: "01",
          title: "R&D Design",
          desc: "CAD modeling and FEA stress testing for every custom build.",
        },
        {
          step: "02",
          title: "Precision ",
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
          <div className="w-12 h-12 bg-yellow-500 text-white flex items-center justify-center font-bold mb-6 rounded-full">
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
  "/images/Suzlon_Logo.png",
  "/images/BharatBijli_Logo.jpg",
];

const ClientLogosSection = () => (
  <section className="py-6 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-yellow-500 font-bold uppercase tracking-widest text-lg mb-4">
          Trusted By Industry Leaders
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-700 mb-6">
          OUR CLIENTS
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {clientLogos.map((logo, index) => (
          <div
            key={index}
            className="h-36 bg-white border border-slate-200 rounded-sm flex items-center justify-center p-4 hover:shadow-lg transition-all"
          >
            <img
              src={logo}
              alt={`Client ${index + 1}`}
              className="max-h-20 max-w-full object-contain opacity-70 hover:opacity-100 transition-all duration-300"
              referrerPolicy="no-referrer"
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
        <Section
          title="Engineering Confidence"
          subtitle="Manufacturing Excellence in Action"
          className="bg-slate-50 uppercase"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-sm overflow-hidden aspect-square md:aspect-auto md:h-[600px]">
              <img
                src="/images/Main_Brake.png"
                alt="Main Brake"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="relative rounded-sm overflow-hidden aspect-square md:aspect-auto md:h-[600px]">
              <img
                src="/images/Motor.png"
                alt="Motor Specs"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="relative rounded-sm overflow-hidden aspect-square md:aspect-auto md:h-[600px]">
              <img
                src="/images/Liner.png"
                alt="Motor Specs"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="relative rounded-sm overflow-hidden aspect-square md:aspect-auto md:h-[600px]">
              <img
                src="/images/Rectiffier.png"
                alt="Motor Specs"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </Section>
      </div>

      <Section
        title="Industries We Empower"
        subtitle="Global Reach"
        className="bg-slate-100 uppercase text-metallic-green"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Heavy Duty Cranes",
              img: "/images/Crane.avif",
              tag: "cranes",
            },
            {
              name: "Motor Manufacturing",
              img: "/images/Motor.jpg",
              tag: "motors",
            },
            {
              name: "Wind Turbines",
              img: "/images/Windmills.jpg",
              tag: "turbines",
            },
            {
              name: "Elevators & Lifts",
              img: "/images/Elevators.jpg",
              tag: "elevators",
            },
            {
              name: "Construction & Mining",
              img: "/images/Mining1.png",
              tag: "mining",
            },
            {
              name: "Textile & Printing",
              img: "/images/Textile.jpg",
              tag: "textile",
            },
          ].map((item) => (
            <motion.div
              whileHover={{ y: -10 }}
              key={item.tag}
              className="group relative h-[400px] overflow-hidden rounded-sm cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.name}
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
              alt="Mining Application Background"
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
                className="bg-white text-slate-900 px-10 py-5 rounded-sm font-bold hover:bg-yellow-500 transition-all uppercase tracking-widest text-xs"
              >
                Download Catalogue
              </button>
              <a
                href={`https://wa.me/918233268311?text=${encodeURIComponent("Hi Unique DC, I am interested in your industrial braking solutions. Could you please share your latest price list and catalog?")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-700 text-white px-10 py-5 rounded-sm font-bold hover:bg-yellow-500 transition-all uppercase tracking-widest text-xs flex items-center justify-center gap-2"
              >
                Request Price List
              </a>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
