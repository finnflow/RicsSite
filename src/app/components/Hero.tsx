import { Button } from "@/app/components/ui/button";
import { OrganicShapes } from "@/app/components/OrganicShapes";
import { useNavigate } from "react-router";

interface HeroProps {
  heroButtonRef?: React.RefObject<HTMLDivElement>;
}

export function Hero({ heroButtonRef }: HeroProps) {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#FBF8F3] to-[#F5EDE4]">
      <OrganicShapes />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20 md:py-32">
        <h1 className="text-4xl md:text-6xl lg:text-7xl mb-8 md:mb-10 text-gray-800 leading-[1.15] tracking-tight">
          Ernährung und innere Arbeit – einzeln oder kombiniert
        </h1>
        
        <p className="text-lg md:text-2xl lg:text-3xl text-gray-600 mb-12 md:mb-16 font-light leading-relaxed">
          Ursachenarbeit statt schnelle Lösungen
        </p>
        
        <div ref={heroButtonRef}>
          <Button 
            onClick={() => navigate("/kontakt")}
            size="lg"
            className="w-full md:w-auto bg-[#D4A88C] hover:bg-[#C9997A] text-white px-8 md:px-12 py-6 md:py-7 rounded-full text-base md:text-lg shadow-[0_8px_30px_rgb(212,168,140,0.25)] hover:shadow-[0_12px_40px_rgb(212,168,140,0.35)] transition-all"
          >
            Kostenloses Erstgespräch
          </Button>
        </div>
      </div>
    </section>
  );
}