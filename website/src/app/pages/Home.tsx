import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { QuickCheck } from "@/app/components/QuickCheck";
import { SimpleInfoSections } from "@/app/components/SimpleInfoSections";
import { Footer } from "@/app/components/Footer";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";

export default function Home() {
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const heroButtonRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // IntersectionObserver für den Hero-Button
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Zeige sticky CTA nur wenn Hero-Button nicht mehr sichtbar ist
        setShowStickyCTA(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: '-73px 0px 0px 0px' // Berücksichtige Header-Höhe
      }
    );

    if (heroButtonRef.current) {
      observer.observe(heroButtonRef.current);
    }

    return () => {
      if (heroButtonRef.current) {
        observer.unobserve(heroButtonRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white relative">
      <Header />
      <main className="relative">
        <Hero heroButtonRef={heroButtonRef} />
        <QuickCheck />
        <SimpleInfoSections />
      </main>
      <Footer />

      {/* Sticky CTA Button */}
      <AnimatePresence>
        {showStickyCTA && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-[73px] left-0 right-0 z-40 bg-white/95 backdrop-blur-sm shadow-lg border-b border-[#E8DCC4]/30"
          >
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
              <span className="text-sm md:text-base text-gray-700 font-medium hidden md:block">
                Bereit für den nächsten Schritt?
              </span>
              <button
                onClick={() => navigate("/kontakt")}
                className="ml-auto bg-[#D4A88C] hover:bg-[#C9997A] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full text-sm md:text-base shadow-md hover:shadow-lg transition-all"
              >
                Kostenloses Erstgespräch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}