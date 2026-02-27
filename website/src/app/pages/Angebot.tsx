import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { Check, X, ArrowRight, Utensils, Heart } from "lucide-react";
import { Link } from "react-router";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Angebot() {
  // State für die Zwei Säulen Animation (Mobile only)
  // 1 = Fokus Ernährung, 2 = Fokus Emotionale Arbeit
  const [pillarState, setPillarState] = useState(1);
  
  // Opacity States für alle Content-Blöcke
  const [heroOpacity, setHeroOpacity] = useState(1);
  const [ernaehrungOpacity, setErnaehrungOpacity] = useState(1);
  const [emotionalOpacity, setEmotionalOpacity] = useState(1);
  const [geeignetOpacity, setGeeignetOpacity] = useState(1);
  const [nichtGeeignetOpacity, setNichtGeeignetOpacity] = useState(1);
  const [mitBegleitungOpacity, setMitBegleitungOpacity] = useState(1);
  const [selbststartOpacity, setSelbststartOpacity] = useState(1);
  
  // Refs für alle Content-Blöcke
  const heroRef = useRef<HTMLDivElement>(null);
  const ernaehrungRef = useRef<HTMLDivElement>(null);
  const emotionalRef = useRef<HTMLDivElement>(null);
  const geeignetRef = useRef<HTMLDivElement>(null);
  const nichtGeeignetRef = useRef<HTMLDivElement>(null);
  const mitBegleitungRef = useRef<HTMLDivElement>(null);
  const selbststartRef = useRef<HTMLDivElement>(null);

  // Scroll zu Section Funktion
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const yOffset = -260; // Offset für Header + Icon vollständig sichtbar
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Scroll-basierte Animation für Mobile
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let scrollDirection: 'up' | 'down' = 'down';

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
      lastScrollY = currentScrollY;
      
      const windowHeight = window.innerHeight;
      const viewportCenter = windowHeight / 2;
      
      // Helper function für Opacity-Berechnung mit Scroll-Richtung
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
      updateElementOpacity(heroRef, setHeroOpacity);
      
      const ernaehrungData = updateElementOpacity(ernaehrungRef, setErnaehrungOpacity);
      const emotionalData = updateElementOpacity(emotionalRef, setEmotionalOpacity);
      
      updateElementOpacity(geeignetRef, setGeeignetOpacity);
      updateElementOpacity(nichtGeeignetRef, setNichtGeeignetOpacity);
      updateElementOpacity(mitBegleitungRef, setMitBegleitungOpacity);
      updateElementOpacity(selbststartRef, setSelbststartOpacity);
      
      // Pillar State basierend auf welche Card näher zur Mitte ist
      if (ernaehrungData && emotionalData) {
        if (ernaehrungData.distance < emotionalData.distance) {
          setPillarState(1);
        } else {
          setPillarState(2);
        }
      }
    };

    // Initial berechnen
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-28 pb-20">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-[#D4A88C] transition-colors">Start</Link>
            <span>/</span>
            <span className="text-gray-900">Angebot & Methoden</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-6 mb-16 md:mb-20 text-center">
          <h1 className="text-4xl md:text-5xl mb-6 md:mb-8 text-gray-900">Warum zwei Säulen?</h1>
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: heroOpacity, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-gradient-to-br from-[#F5EDE4] to-[#FAF3EC] rounded-2xl md:rounded-3xl p-8 md:p-10 shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20"
          >
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6">
              Körper und Psyche sind untrennbar miteinander verbunden. Manchmal liegt der Schlüssel zur Veränderung in der Ernährung, manchmal in der emotionalen Arbeit – oft in beidem.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Deshalb biete ich beide Ansätze an – einzeln oder kombiniert, je nachdem, was für dich passt.
            </p>
          </motion.div>
        </section>

        {/* Zwei gleichwertige Zugänge */}
        <section className="max-w-7xl mx-auto px-6 mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl mb-8 md:mb-12 text-center text-gray-900">Zwei gleichwertige Zugänge</h2>
          
          {/* Desktop Version - Original Behalten */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Ernährung */}
            <div className="bg-gradient-to-br from-[#F5EDE4] to-white rounded-2xl md:rounded-3xl p-8 md:p-10 shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20">
              <div className="w-14 h-14 bg-[#D4A88C]/20 rounded-full flex items-center justify-center mb-6">
                <Utensils className="w-7 h-7 text-[#D4A88C]" />
              </div>
              <h3 className="text-xl md:text-2xl mb-4 text-gray-900">Ernährung</h3>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                Individuell abgestimmte Ernährungsberatung, die über "Iss mehr Gemüse" hinausgeht. Ursachen finden, Zusammenhänge verstehen, nachhaltig verändern.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                  <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                  <span>Auf deinen Körper abgestimmt</span>
                </li>
                <li className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                  <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                  <span>Auch als <Link to="/selbststart" className="underline hover:text-[#D4A88C] transition-colors">Selbststart</Link> verfügbar</span>
                </li>
                <li className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                  <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                  <span>Langfristige Veränderung</span>
                </li>
              </ul>
              <Link 
                to="/ernaehrung" 
                className="text-[#D4A88C] hover:text-[#C9997A] transition-colors inline-flex items-center gap-2 group text-sm md:text-base"
              >
                <span>Mehr erfahren</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Emotionale Arbeit */}
            <div className="bg-gradient-to-br from-[#F5EDE4] to-white rounded-2xl md:rounded-3xl p-8 md:p-10 shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20">
              <div className="w-14 h-14 bg-[#D4A88C]/20 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-[#D4A88C]" />
              </div>
              <h3 className="text-xl md:text-2xl mb-4 text-gray-900">Emotionale / Energetische Arbeit</h3>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                Tiefenarbeit mit emotionalen und energetischen Blockaden. Ursachen erkennen, alte Muster lösen, neue Wege finden.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-gray-700">
                  <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                  <span>Arbeit an den Wurzeln</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                  <span>Sanft aber wirksam</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                  <span>Nachhaltige Transformation</span>
                </li>
              </ul>
              <Link 
                to="/emotionale-arbeit" 
                className="text-[#D4A88C] hover:text-[#C9997A] transition-colors inline-flex items-center gap-2 group text-sm md:text-base"
              >
                <span>Mehr erfahren</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Mobile Version - Mit Scroll-Animation */}
          <div className="md:hidden">
            {/* Sticky Pillar Bar */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="sticky top-20 z-10 bg-white/95 backdrop-blur-sm py-3 mb-6 -mx-6 px-6 border-b border-[#E8DCC4]/30"
            >
              <div className="flex items-center gap-3 max-w-md mx-auto">
                {/* Ernährung Mini-Säule */}
                <button
                  onClick={() => scrollToSection(ernaehrungRef)}
                  className={`flex-1 flex items-center gap-2 px-4 py-3 rounded-xl transition-all cursor-pointer ${
                    pillarState === 1
                      ? 'bg-[#D4A88C]/20 opacity-100 border-2 border-[#D4A88C]'
                      : 'bg-gray-100 opacity-50 border-2 border-transparent'
                  }`}
                >
                  <Utensils className={`w-5 h-5 ${pillarState === 1 ? 'text-[#D4A88C]' : 'text-gray-500'}`} />
                  <span className={`text-sm ${pillarState === 1 ? 'text-gray-900 font-medium' : 'text-gray-600'}`}>
                    Ernährung
                  </span>
                </button>

                {/* Emotionale Arbeit Mini-Säule */}
                <button
                  onClick={() => scrollToSection(emotionalRef)}
                  className={`flex-1 flex items-center gap-2 px-4 py-3 rounded-xl transition-all cursor-pointer ${
                    pillarState === 2
                      ? 'bg-[#D4A88C]/20 opacity-100 border-2 border-[#D4A88C]'
                      : 'bg-gray-100 opacity-50 border-2 border-transparent'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${pillarState === 2 ? 'text-[#D4A88C]' : 'text-gray-500'}`} />
                  <span className={`text-sm ${pillarState === 2 ? 'text-gray-900 font-medium' : 'text-gray-600'}`}>
                    Emotional
                  </span>
                </button>
              </div>
            </motion.div>

            {/* Content Cards mit Scroll-Tracking */}
            <div className="space-y-6">
              {/* Ernährung Card */}
              <motion.div
                ref={ernaehrungRef}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: ernaehrungOpacity, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-gradient-to-br from-[#F5EDE4] to-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20"
              >
                <div className="w-14 h-14 bg-[#D4A88C]/20 rounded-full flex items-center justify-center mb-6">
                  <Utensils className="w-7 h-7 text-[#D4A88C]" />
                </div>
                <h3 className="text-xl mb-4 text-gray-900">Ernährung</h3>
                <p className="text-base text-gray-700 leading-relaxed mb-6">
                  Individuell abgestimmte Ernährungsberatung, die über "Iss mehr Gemüse" hinausgeht. Ursachen finden, Zusammenhänge verstehen, nachhaltig verändern.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                    <span>Auf deinen Körper abgestimmt</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                    <span>Auch als <Link to="/selbststart" className="underline hover:text-[#D4A88C] transition-colors">Selbststart</Link> verfügbar</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                    <span>Langfristige Veränderung</span>
                  </li>
                </ul>
                <Link 
                  to="/ernaehrung" 
                  className="text-[#D4A88C] hover:text-[#C9997A] transition-colors inline-flex items-center gap-2 group text-sm"
                >
                  <span>Mehr erfahren</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              {/* Emotionale Arbeit Card */}
              <motion.div
                ref={emotionalRef}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: emotionalOpacity, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-gradient-to-br from-[#F5EDE4] to-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20"
              >
                <div className="w-14 h-14 bg-[#D4A88C]/20 rounded-full flex items-center justify-center mb-6">
                  <Heart className="w-7 h-7 text-[#D4A88C]" />
                </div>
                <h3 className="text-xl mb-4 text-gray-900">Emotionale / Energetische Arbeit</h3>
                <p className="text-base text-gray-700 leading-relaxed mb-6">
                  Tiefenarbeit mit emotionalen und energetischen Blockaden. Ursachen erkennen, alte Muster lösen, neue Wege finden.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                    <span>Arbeit an den Wurzeln</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                    <span>Sanft aber wirksam</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                    <span>Nachhaltige Transformation</span>
                  </li>
                </ul>
                <Link 
                  to="/emotionale-arbeit" 
                  className="text-[#D4A88C] hover:text-[#C9997A] transition-colors inline-flex items-center gap-2 group text-sm"
                >
                  <span>Mehr erfahren</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Für wen geeignet / nicht geeignet */}
        <section className="max-w-5xl mx-auto px-6 mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl mb-8 md:mb-12 text-center text-gray-900">Für wen geeignet / nicht geeignet</h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Geeignet */}
            <motion.div
              ref={geeignetRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: geeignetOpacity, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-gradient-to-br from-[#F5EDE4] to-white rounded-2xl md:rounded-3xl p-8 md:p-10 shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20"
            >
              <div className="w-12 h-12 bg-[#D4A88C]/20 rounded-full flex items-center justify-center mb-6">
                <Check className="w-6 h-6 text-[#D4A88C]" />
              </div>
              <h3 className="text-xl md:text-2xl mb-6 text-gray-900">Passt zu dir, wenn...</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                  <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                  <span>Du bereit für Ursachenarbeit bist</span>
                </li>
                <li className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                  <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                  <span>Langfristige Veränderung dein Ziel ist</span>
                </li>
                <li className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                  <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                  <span>Du offen für ganzheitliche Ansätze bist</span>
                </li>
                <li className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                  <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                  <span>Eigenverantwortung für dich wichtig ist</span>
                </li>
              </ul>
            </motion.div>

            {/* Nicht geeignet */}
            <motion.div
              ref={nichtGeeignetRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: nichtGeeignetOpacity, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl md:rounded-3xl p-8 md:p-10 shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-gray-200"
            >
              <div className="w-12 h-12 bg-gray-300/50 rounded-full flex items-center justify-center mb-6">
                <X className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl md:text-2xl mb-6 text-gray-900">Passt nicht, wenn...</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                  <X className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                  <span>Du nur schnelle Lösungen suchst</span>
                </li>
                <li className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                  <X className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                  <span>Symptome behandeln ausreicht</span>
                </li>
                <li className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                  <X className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                  <span>Du keine Zeit für Veränderung hast</span>
                </li>
                <li className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                  <X className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                  <span>Fertige Lösungen dein Ziel sind</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Einstiegswege */}
        <section className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl mb-8 md:mb-12 text-center text-gray-900">Deine Optionen</h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Mit Begleitung */}
            <Link to="/kontakt" className="group">
              <motion.div
                ref={mitBegleitungRef}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: mitBegleitungOpacity, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-gradient-to-br from-[#F5EDE4] to-white rounded-2xl md:rounded-3xl p-8 md:p-10 h-full shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20 hover:shadow-[0_8px_40px_rgba(201,181,160,0.2)] transition-shadow"
              >
                <div className="w-14 h-14 bg-[#D4A88C]/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-[#D4A88C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl mb-4 text-gray-900">Mit Begleitung</h3>
                <p className="text-base text-gray-700 leading-relaxed mb-6">
                  Persönliche 1:1 Begleitung für deine individuelle Reise. Maßgeschneidert auf dich und deine Situation.
                </p>
                <div className="flex items-center gap-2 text-[#D4A88C] group-hover:translate-x-1 transition-transform">
                  <span className="text-sm md:text-base">Kontakt aufnehmen</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </motion.div>
            </Link>

            {/* Ohne Begleitung */}
            <Link to="/selbststart" className="group">
              <motion.div
                ref={selbststartRef}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: selbststartOpacity, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-gradient-to-br from-white to-[#F5EDE4] rounded-2xl md:rounded-3xl p-8 md:p-10 h-full shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20 hover:shadow-[0_8px_40px_rgba(201,181,160,0.2)] transition-shadow"
              >
                <div className="w-14 h-14 bg-[#D4A88C]/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-[#D4A88C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl mb-4 text-gray-900">Selbststart</h3>
                <p className="text-base text-gray-700 leading-relaxed mb-6">
                  Info-Materialien ohne persönliche Begleitung. In deinem eigenen Tempo, wann und wie es für dich passt.
                </p>
                <div className="flex items-center gap-2 text-[#D4A88C] group-hover:translate-x-1 transition-transform">
                  <span className="text-sm md:text-base">Mehr erfahren</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </motion.div>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}