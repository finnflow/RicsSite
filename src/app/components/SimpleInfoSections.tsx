import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function SimpleInfoSections() {
  // Opacity States für Scroll-Fokus
  const [arbeitsweiseOpacity, setArbeitsweiseOpacity] = useState(1);
  const [ablaufOpacity, setAblaufOpacity] = useState(1);
  
  // Refs für die Kacheln
  const arbeitsweiseRef = useRef<HTMLDivElement>(null);
  const ablaufRef = useRef<HTMLDivElement>(null);

  // Scroll-basierte Animation für Mobile
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
      
      // Helper function für Opacity-Berechnung mit Scroll-Richtung
      const maxDistance = windowHeight * 0.35; // Reduziert für mehr Fokus
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
      
      // Helper function für Element-Opacity-Update
      const updateElementOpacity = (
        ref: React.RefObject<HTMLDivElement>,
        setOpacity: (opacity: number) => void
      ) => {
        const element = ref.current;
        if (!element) return null;
        
        const rect = element.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const distance = Math.abs(viewportCenter - center);
        const opacity = calculateOpacity(distance);
        
        setOpacity(opacity);
        return { distance, opacity };
      };
      
      // Update alle Opacities
      updateElementOpacity(arbeitsweiseRef, setArbeitsweiseOpacity);
      updateElementOpacity(ablaufRef, setAblaufOpacity);
    };

    // Initial berechnen
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-16 md:py-28 bg-gradient-to-b from-[#FBF8F3] via-white to-[#FBF8F3]">
      <div className="max-w-5xl mx-auto px-6 space-y-12 md:space-y-20">
        {/* Arbeitsweise */}
        <motion.div
          ref={arbeitsweiseRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: arbeitsweiseOpacity, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          id="angebot"
          className="text-center max-w-3xl mx-auto bg-gradient-to-br from-[#F5EFE6] to-white rounded-2xl md:rounded-[2rem] p-8 md:p-12 shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-[#D4A88C] to-[#C9997A] rounded-full mx-auto mb-6 flex items-center justify-center shadow-md">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl mb-4 md:mb-6 text-gray-800">Arbeitsweise</h2>
          <p className="text-lg md:text-xl text-gray-700 mb-6 md:mb-8 leading-relaxed">
            Ernährung und/oder emotionale/energetische Arbeit – einzeln oder kombiniert
          </p>
          <Link to="/angebot" className="text-[#D4A88C] hover:text-[#C9997A] transition-colors inline-flex items-center gap-2 group">
            <span className="text-sm md:text-base">Alle Optionen & Details</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Wie geht es weiter */}
        <motion.div
          ref={ablaufRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: ablaufOpacity, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          id="ablauf"
          className="text-center max-w-3xl mx-auto bg-white rounded-2xl md:rounded-[2rem] p-8 md:p-12 shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-[#E8DCC4] to-[#C9B5A0] rounded-full mx-auto mb-6 flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-white rounded-full" />
          </div>
          <h2 className="text-2xl md:text-3xl mb-4 md:mb-6 text-gray-800">Wie geht es weiter?</h2>
          <p className="text-lg md:text-xl text-gray-700 mb-6 md:mb-8 leading-relaxed">
            Kontakt → kostenloses Erstgespräch → passende Option
          </p>
          <Link to="/ablauf" className="text-[#D4A88C] hover:text-[#C9997A] transition-colors inline-flex items-center gap-2 group">
            <span className="text-sm md:text-base">Details zum Ablauf</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}