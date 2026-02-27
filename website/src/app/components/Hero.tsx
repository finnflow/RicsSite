import { Button } from "@/app/components/ui/button";
import { OrganicShapes } from "@/app/components/OrganicShapes";
import { SunLogo } from "@/app/components/SunLogo";
import { useNavigate } from "react-router";
import { motion } from "motion/react";

interface HeroProps {
  heroButtonRef?: React.RefObject<HTMLDivElement>;
}

export function Hero({ heroButtonRef }: HeroProps) {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#FBF8F3] to-[#F5EDE4] overflow-hidden">
      {/* Subtle botanical line-art watermark */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]"
        viewBox="0 0 800 800"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <g stroke="#8B9D83" fill="none" strokeWidth="0.8" strokeLinecap="round">
          {/* Elegant vine from bottom left */}
          <path d="M 100,700 Q 150,650 200,600 Q 250,550 280,480 Q 300,430 320,380" />
          <path d="M 200,600 Q 220,580 235,565" />
          <path d="M 235,565 L 245,555 L 250,565" />
          <path d="M 280,480 Q 295,465 305,455" />
          <path d="M 305,455 L 312,448 L 318,458" />
          
          {/* Delicate leaves */}
          <path d="M 320,380 Q 340,360 355,345" />
          <path d="M 355,345 Q 365,335 372,325 Q 375,320 372,315" />
          <path d="M 355,345 Q 350,340 345,338" />
          
          {/* Top right accent */}
          <path d="M 700,100 Q 680,130 660,160 Q 640,190 625,220" />
          <path d="M 660,160 L 670,170 L 665,175" />
          <path d="M 625,220 L 632,230 L 627,235" />
          
          {/* Subtle center detail */}
          <path d="M 450,350 Q 465,360 475,375" />
          <path d="M 475,375 L 480,385 L 472,388" />
        </g>
      </svg>
      
      {/* Animated warm gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#E8DCC4]/20 via-transparent to-[#D4A88C]/10"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Subtle green/lavender color accents */}
      <motion.div
        className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-[#9CAF88]/8 to-transparent pointer-events-none"
        animate={{
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-[#B8A8C9]/6 to-transparent pointer-events-none"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      
      {/* Very subtle sun logo watermark - top right */}
      <div className="absolute top-20 right-10 pointer-events-none hidden md:block">
        <SunLogo size={280} isWatermark={true} />
      </div>
      
      <OrganicShapes />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20 md:py-32">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl mb-8 md:mb-10 text-gray-800 leading-[1.15] tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Ernährung und innere Arbeit – einzeln oder kombiniert
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-2xl lg:text-3xl text-gray-600 mb-12 md:mb-16 font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Ursachenarbeit statt schnelle Lösungen
        </motion.p>
        
        <motion.div 
          ref={heroButtonRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          whileHover={{ y: -4 }}
        >
          <Button 
            onClick={() => navigate("/kontakt")}
            size="lg"
            className="w-full md:w-auto bg-gradient-to-r from-[#D4A88C] to-[#C9997A] hover:from-[#C9997A] hover:to-[#B88869] text-white px-8 md:px-12 py-6 md:py-7 rounded-full text-base md:text-lg shadow-[0_8px_30px_rgb(212,168,140,0.25)] hover:shadow-[0_12px_40px_rgb(212,168,140,0.4)] transition-all duration-300"
          >
            Kostenloses Erstgespräch
          </Button>
        </motion.div>
      </div>
    </section>
  );
}