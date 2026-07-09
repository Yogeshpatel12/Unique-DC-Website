import React from 'react';
import { motion } from 'motion/react';

export default function Gallery() {
  const items = [
    { 
      id: 1, 
      title: "Windmills Machinery", 
      category: "Heavy Industry", 
      img: "/images/Windmills.jpg" // Ensure this matches your file name
    },
    { 
      id: 2, 
      title: "Heavy Duty Crane", 
      category: "Construction", 
      img: "/images/Crane.avif" 
    },
    { 
      id: 3, 
      title: "Port Gantry Integration", 
      category: "Logistics", 
      img: "/images/PortGantry.jpg" 
    },
    { 
      id: 4, 
      title: "Elevators & Lifts", 
      category: "Quality Control", 
      img: "/images/Elevators.jpg" 
    },
    { 
      id: 5, 
      title: "Construction & Mining ", 
      category: "Engineering", 
      img: "/images/Mining1.png" 
    },
    { 
      id: 6, 
      title: "Textile & Printing", 
      category: "Innovation", 
      img: "/images/Textile.jpg" 
    },
  ];

  // ... rest of your component


  return (
    <div className="pt-5">
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4  ">
          <div className="text-center mb-10">
            <h2 className="text-yellow-500 font-bold uppercase tracking-widest text-xs mb-0">Visual Records</h2>
            <h1 className="text-3xl md:text-5xl pb-0 font-bold text-gray-800 tracking-tight">INDUSTRIES WE SERVE</h1>
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
                  className="w-full h-full object-cover  group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                <div className="absolute bottom-10 left-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {/* <span className="text-brand-red font-mono text-sm mb-2 block">{item.category}</span> */}
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
