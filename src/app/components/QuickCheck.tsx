import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function QuickCheck() {
  const [opacity, setOpacity] = useState(1);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    let lastScrollY = window.scrollY;
    let scrollDirection: 'up' | 'down' = 'down';
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
      lastScrollY = currentScrollY;
      
      const windowHeight = window.innerHeight;
      const viewportCenter = windowHeight / 2;
      
      const maxDistance = windowHeight * 0.4;
      const calculateOpacity = (distance: number) => {
        // Nach unten scrollen: Früher 100% Opacity (4x früher)
        const adjustedMaxDistance = scrollDirection === 'down' 
          ? maxDistance * 4.0 
          : maxDistance;
        
        if (distance < adjustedMaxDistance) {
          return Math.max(0.4, 1 - (distance / adjustedMaxDistance) * 0.6);
        }
        return 0.4;
      };
      
      const element = ref.current;
      if (!element) return;
      
      const rect = element.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const distance = Math.abs(viewportCenter - center);
      const newOpacity = calculateOpacity(distance);
      
      setOpacity(newOpacity);
    };

    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-[#FBF8F3]">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: opacity, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-gradient-to-br from-white to-[#F5EFE6] rounded-2xl md:rounded-[2rem] p-8 md:p-12 shadow-[0_8px_30px_rgba(201,181,160,0.15)] border border-[#E8DCC4]/20"
        >
          <h2 className="text-2xl md:text-3xl mb-8 md:mb-12 text-gray-800 text-center">Passt zu dir, wenn...</h2>
          
          <ul className="space-y-6 md:space-y-8 max-w-xl mx-auto mb-8 md:mb-12">
            <li className="flex items-start gap-4 md:gap-5">
              <div className="w-7 h-7 bg-gradient-to-br from-[#D4A88C] to-[#C9997A] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                <Check className="w-4 h-4 text-white" strokeWidth={3} />
              </div>
              <span className="text-base md:text-lg text-gray-700 leading-relaxed">
                Du bereit bist, tiefer zu schauen und an Ursachen zu arbeiten
              </span>
            </li>
            <li className="flex items-start gap-4 md:gap-5">
              <div className="w-7 h-7 bg-gradient-to-br from-[#D4A88C] to-[#C9997A] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                <Check className="w-4 h-4 text-white" strokeWidth={3} />
              </div>
              <span className="text-base md:text-lg text-gray-700 leading-relaxed">
                Du nachhaltige Veränderung statt Quick-Fixes suchst
              </span>
            </li>
            <li className="flex items-start gap-4 md:gap-5">
              <div className="w-7 h-7 bg-gradient-to-br from-[#D4A88C] to-[#C9997A] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                <Check className="w-4 h-4 text-white" strokeWidth={3} />
              </div>
              <span className="text-base md:text-lg text-gray-700 leading-relaxed">
                Du offen für ganzheitliche Ansätze bist
              </span>
            </li>
          </ul>
          
          <div className="text-center pt-4 border-t border-[#E8DCC4]/30">
            <Link to="/angebot" className="text-[#D4A88C] hover:text-[#C9997A] transition-colors inline-flex items-center gap-2 group mt-4">
              <span className="text-sm md:text-base">Für wen es nicht passt + Details</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}