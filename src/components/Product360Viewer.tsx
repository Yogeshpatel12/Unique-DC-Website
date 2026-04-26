import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { RotateCcw, MoveHorizontal } from 'lucide-react';

interface Props {
  productId: string | number;
}

export default function Product360Viewer({ productId }: Props) {
  const x = useMotionValue(0);
  const rotateY = useTransform(x, [-500, 500], [-180, 180]);
  const springRotateY = useSpring(rotateY, { stiffness: 100, damping: 30 });
  
  const [isTooltipVisible, setIsTooltipVisible] = React.useState(true);

  const handleDrag = (event: any, info: any) => {
    x.set(x.get() + info.delta.x);
    if (isTooltipVisible) setIsTooltipVisible(false);
  };

  const resetRotation = () => {
    x.set(0);
  };

  return (
    <div className="relative w-full h-full cursor-grab active:cursor-grabbing perspective-1000 group">
      {isTooltipVisible && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none bg-slate-900/5 backdrop-blur-[2px]"
        >
          <MoveHorizontal className="text-brand-red mb-2 animate-bounce" size={24} />
          <span className="text-[10px] font-bold text-slate-900 uppercase tracking-widest bg-white px-3 py-1 border border-slate-200">Drag to rotate 360°</span>
        </motion.div>
      )}

      <motion.div
        drag="x"
        dragConstraints={{ left: -500, right: 500 }}
        dragElastic={0.1}
        onDrag={handleDrag}
        style={{ rotateY: springRotateY }}
        className="w-full h-full flex items-center justify-center preserve-3d"
      >
        <div className="relative w-full h-full flex items-center justify-center p-8">
            <img 
              src={`https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200&seed=${productId}`} 
              className="max-h-full object-contain pointer-events-none drop-shadow-2xl"
              referrerPolicy="no-referrer"
            />
            {/* Base light reflection simulated */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
        </div>
      </motion.div>

      <div className="absolute bottom-4 right-4 z-30 flex gap-2">
         <button 
          onClick={resetRotation}
          className="p-2 bg-white border border-gray-100 rounded-sm shadow-sm hover:text-brand-red transition-all"
          title="Reset View"
         >
           <RotateCcw size={14} />
         </button>
      </div>

      <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2">
         <div className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
         <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Interactive 3D Engine</span>
      </div>
    </div>
  );
}
