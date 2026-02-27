import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { Check, X, ArrowRight, Mail, Calendar, MessageCircle, ArrowDown } from 'lucide-react'
import { Link, useNavigate } from 'react-router'
import { Button } from '@/app/components/ui/button'
import { motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

export default function Ablauf() {
  const navigate = useNavigate()

  // Opacity States für Scroll-Fokus (Mobile)
  const [heroOpacity, setHeroOpacity] = useState(1)
  const [stepsOpacity, setStepsOpacity] = useState(1) // Gemeinsame Opacity für alle Steps auf Desktop
  const [step1Opacity, setStep1Opacity] = useState(1)
  const [step2Opacity, setStep2Opacity] = useState(1)
  const [step3Opacity, setStep3Opacity] = useState(1)
  const [step4Opacity, setStep4Opacity] = useState(1)
  const [erstkontaktOpacity, setErstkontaktOpacity] = useState(1)
  const [wasPassiertOpacity, setWasPassiertOpacity] = useState(1)
  const [wasNichtOpacity, setWasNichtOpacity] = useState(1)
  const [grenzenOpacity, setGrenzenOpacity] = useState(1)
  const [wennPasstOpacity, setWennPasstOpacity] = useState(1)

  // Refs für alle Content-Blöcke
  const heroRef = useRef<HTMLDivElement>(null)
  const stepsContainerRef = useRef<HTMLDivElement>(null) // Ref für alle Steps zusammen (Desktop)
  const step1Ref = useRef<HTMLDivElement>(null)
  const step2Ref = useRef<HTMLDivElement>(null)
  const step3Ref = useRef<HTMLDivElement>(null)
  const step4Ref = useRef<HTMLDivElement>(null)
  const erstkontaktRef = useRef<HTMLDivElement>(null)
  const wasPassiertRef = useRef<HTMLDivElement>(null)
  const wasNichtRef = useRef<HTMLDivElement>(null)
  const grenzenRef = useRef<HTMLDivElement>(null)
  const wennPasstRef = useRef<HTMLDivElement>(null)

  // Scroll-basierte Animation
  useEffect(() => {
    const isMobile = window.innerWidth < 768
    let lastScrollY = window.scrollY
    let scrollDirection: 'up' | 'down' = 'down'

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up'
      lastScrollY = currentScrollY

      const windowHeight = window.innerHeight
      const viewportCenter = windowHeight / 2

      // Helper function für Opacity-Berechnung mit Scroll-Richtung
      const maxDistance = windowHeight * 0.4
      const calculateOpacity = (distance: number) => {
        // Nach unten scrollen: Früher 100% Opacity (4x früher)
        const adjustedMaxDistance = scrollDirection === 'down' ? maxDistance * 4.0 : maxDistance

        if (distance < adjustedMaxDistance) {
          return Math.max(0.4, 1 - (distance / adjustedMaxDistance) * 0.6)
        }
        return 0.4
      }

      // Helper function für Element-Opacity-Update
      const updateElementOpacity = (
        ref: React.RefObject<HTMLDivElement>,
        setOpacity: (opacity: number) => void,
      ) => {
        const element = ref.current
        if (!element) return null

        const rect = element.getBoundingClientRect()
        const center = rect.top + rect.height / 2
        const distance = Math.abs(viewportCenter - center)
        const opacity = calculateOpacity(distance)

        setOpacity(opacity)
        return { distance, opacity }
      }

      // Update Hero opacity (beide)
      updateElementOpacity(heroRef, setHeroOpacity)

      if (isMobile) {
        // Mobile: Individuelle Steps
        updateElementOpacity(step1Ref, setStep1Opacity)
        updateElementOpacity(step2Ref, setStep2Opacity)
        updateElementOpacity(step3Ref, setStep3Opacity)
        updateElementOpacity(step4Ref, setStep4Opacity)
      } else {
        // Desktop: Alle Steps zusammen
        updateElementOpacity(stepsContainerRef, setStepsOpacity)
      }

      // Update andere Sections
      updateElementOpacity(erstkontaktRef, setErstkontaktOpacity)
      updateElementOpacity(wasPassiertRef, setWasPassiertOpacity)
      updateElementOpacity(wasNichtRef, setWasNichtOpacity)
      updateElementOpacity(grenzenRef, setGrenzenOpacity)
      updateElementOpacity(wennPasstRef, setWennPasstOpacity)
    }

    // Initial berechnen
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-28 pb-20">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-[#D4A88C] transition-colors">
              Start
            </Link>
            <span>/</span>
            <span className="text-gray-900">Ablauf & Erstgespräch</span>
          </div>
        </div>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-6 mb-16 md:mb-20 text-center">
          <h1 className="text-4xl md:text-5xl mb-4 md:mb-6 text-gray-900">Ablauf & Erstgespräch</h1>
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: heroOpacity, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Transparenz und Sicherheit von Anfang an. Hier erfährst du, wie der Weg zu einem
              möglichen gemeinsamen Arbeiten aussieht.
            </p>
          </motion.div>
        </section>

        {/* Prozess in wenigen Schritten */}
        <section className="max-w-6xl mx-auto px-6 mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl mb-8 md:mb-12 text-center text-gray-900">
            Der Prozess in wenigen Schritten
          </h2>
          <motion.div
            ref={stepsContainerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: stepsOpacity, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="hidden md:grid md:grid-cols-4 gap-6"
          >
            {/* Step 1 - Desktop */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#F5EDE4] to-white rounded-2xl p-8 text-center h-full shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20">
                <div className="w-16 h-16 bg-[#D4A88C] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  1
                </div>
                <Mail className="w-8 h-8 text-[#D4A88C] mx-auto mb-4" />
                <h3 className="text-lg mb-2 text-gray-900">Kontakt</h3>
                <p className="text-sm text-gray-600">Du schreibst mir eine kurze Nachricht</p>
              </div>
              <div className="absolute left-full top-0 bottom-0 w-6 flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-[#D4A88C]" />
              </div>
            </div>

            {/* Step 2 - Desktop */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#F5EDE4] to-white rounded-2xl p-8 text-center h-full shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20">
                <div className="w-16 h-16 bg-[#D4A88C] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  2
                </div>
                <Calendar className="w-8 h-8 text-[#D4A88C] mx-auto mb-4" />
                <h3 className="text-lg mb-2 text-gray-900">Terminvereinbarung</h3>
                <p className="text-sm text-gray-600">
                  Wir finden einen Termin für das kostenlose Erstgespräch
                </p>
              </div>
              <div className="absolute left-full top-0 bottom-0 w-6 flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-[#D4A88C]" />
              </div>
            </div>

            {/* Step 3 - Desktop */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#F5EDE4] to-white rounded-2xl p-8 text-center h-full shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20">
                <div className="w-16 h-16 bg-[#D4A88C] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  3
                </div>
                <MessageCircle className="w-8 h-8 text-[#D4A88C] mx-auto mb-4" />
                <h3 className="text-lg mb-2 text-gray-900">Erstgespräch</h3>
                <p className="text-sm text-gray-600">Wir klären, ob es passt (ca. 30-45 Min)</p>
              </div>
              <div className="absolute left-full top-0 bottom-0 w-6 flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-[#D4A88C]" />
              </div>
            </div>

            {/* Step 4 - Desktop */}
            <div>
              <div className="bg-gradient-to-br from-[#F5EDE4] to-white rounded-2xl p-8 text-center h-full shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20">
                <div className="w-16 h-16 bg-[#D4A88C] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  4
                </div>
                <Check className="w-8 h-8 text-[#D4A88C] mx-auto mb-4" />
                <h3 className="text-lg mb-2 text-gray-900">Entscheidung</h3>
                <p className="text-sm text-gray-600">
                  Du entscheidest in Ruhe, ob du starten möchtest
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mobile Steps */}
          <div className="grid md:hidden gap-6">
            {/* Step 1 - Mobile */}
            <div className="relative">
              <motion.div
                ref={step1Ref}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: step1Opacity, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="bg-gradient-to-br from-[#F5EDE4] to-white rounded-2xl p-8 text-center h-full shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20"
              >
                <div className="w-16 h-16 bg-[#D4A88C] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  1
                </div>
                <Mail className="w-8 h-8 text-[#D4A88C] mx-auto mb-4" />
                <h3 className="text-lg mb-2 text-gray-900">Kontakt</h3>
                <p className="text-sm text-gray-600">Du schreibst mir eine kurze Nachricht</p>
              </motion.div>
              <div className="flex justify-center py-1">
                <ArrowDown className="w-6 h-6 text-[#D4A88C]" />
              </div>
            </div>

            {/* Step 2 - Mobile */}
            <div className="relative">
              <motion.div
                ref={step2Ref}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: step2Opacity, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="bg-gradient-to-br from-[#F5EDE4] to-white rounded-2xl p-8 text-center h-full shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20"
              >
                <div className="w-16 h-16 bg-[#D4A88C] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  2
                </div>
                <Calendar className="w-8 h-8 text-[#D4A88C] mx-auto mb-4" />
                <h3 className="text-lg mb-2 text-gray-900">Terminvereinbarung</h3>
                <p className="text-sm text-gray-600">
                  Wir finden einen Termin für das kostenlose Erstgespräch
                </p>
              </motion.div>
              <div className="flex justify-center py-1">
                <ArrowDown className="w-6 h-6 text-[#D4A88C]" />
              </div>
            </div>

            {/* Step 3 - Mobile */}
            <div className="relative">
              <motion.div
                ref={step3Ref}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: step3Opacity, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="bg-gradient-to-br from-[#F5EDE4] to-white rounded-2xl p-8 text-center h-full shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20"
              >
                <div className="w-16 h-16 bg-[#D4A88C] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  3
                </div>
                <MessageCircle className="w-8 h-8 text-[#D4A88C] mx-auto mb-4" />
                <h3 className="text-lg mb-2 text-gray-900">Erstgespräch</h3>
                <p className="text-sm text-gray-600">Wir klären, ob es passt (ca. 30-45 Min)</p>
              </motion.div>
              <div className="flex justify-center py-1">
                <ArrowDown className="w-6 h-6 text-[#D4A88C]" />
              </div>
            </div>

            {/* Step 4 - Mobile */}
            <div>
              <motion.div
                ref={step4Ref}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: step4Opacity, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="bg-gradient-to-br from-[#F5EDE4] to-white rounded-2xl p-8 text-center h-full shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20"
              >
                <div className="w-16 h-16 bg-[#D4A88C] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  4
                </div>
                <Check className="w-8 h-8 text-[#D4A88C] mx-auto mb-4" />
                <h3 className="text-lg mb-2 text-gray-900">Entscheidung</h3>
                <p className="text-sm text-gray-600">
                  Du entscheidest in Ruhe, ob du starten möchtest
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Erstkontakt */}
        <section className="max-w-4xl mx-auto px-6 mb-16 md:mb-24">
          <motion.div
            ref={erstkontaktRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: erstkontaktOpacity, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="bg-gradient-to-br from-white to-[#F5EDE4] rounded-2xl md:rounded-3xl p-8 md:p-10 shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20"
          >
            <h2 className="text-2xl md:text-3xl mb-4 md:mb-6 text-gray-900">
              Erstkontakt: Minimalangaben
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Für die erste Kontaktaufnahme brauche ich nur:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                <span>Deine E-Mail-Adresse</span>
              </li>
              <li className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                <span>1-2 Sätze, worum es grob geht (wenn du magst)</span>
              </li>
            </ul>
            <p className="text-xs md:text-sm text-gray-600">
              Mehr Details besprechen wir im Erstgespräch. Datensparsam von Anfang an.
            </p>
          </motion.div>
        </section>

        {/* Erstgespräch Details */}
        <section className="max-w-6xl mx-auto px-6 mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl mb-8 md:mb-12 text-center text-gray-900">
            Das Erstgespräch
          </h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Was passiert */}
            <motion.div
              ref={wasPassiertRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: wasPassiertOpacity, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="bg-gradient-to-br from-[#F5EDE4] to-white rounded-2xl md:rounded-3xl p-8 md:p-10 shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20"
            >
              <div className="w-12 h-12 bg-[#D4A88C]/20 rounded-full flex items-center justify-center mb-6">
                <Check className="w-6 h-6 text-[#D4A88C]" />
              </div>
              <h3 className="text-xl md:text-2xl mb-4 md:mb-6 text-gray-900">Was passiert</h3>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                  <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                  <span>Wir lernen uns kennen</span>
                </li>
                <li className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                  <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                  <span>Du erzählst, wo du stehst und was du suchst</span>
                </li>
                <li className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                  <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                  <span>Ich erkläre, wie ich arbeite</span>
                </li>
                <li className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                  <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                  <span>Wir klären, ob es menschlich und fachlich passt</span>
                </li>
              </ul>
            </motion.div>

            {/* Was nicht passiert */}
            <motion.div
              ref={wasNichtRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: wasNichtOpacity, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl md:rounded-3xl p-8 md:p-10 shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-gray-200"
            >
              <div className="w-12 h-12 bg-gray-300/50 rounded-full flex items-center justify-center mb-6">
                <X className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl md:text-2xl mb-4 md:mb-6 text-gray-900">Was nicht passiert</h3>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                  <X className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                  <span>Kein Verkaufsgespräch</span>
                </li>
                <li className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                  <X className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                  <span>Keine Verpflichtung</span>
                </li>
                <li className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                  <X className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                  <span>Kein Druck zur Entscheidung</span>
                </li>
                <li className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                  <X className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                  <span>Keine versteckten Kosten</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Grenzen & Ausschluss */}
        <section className="max-w-4xl mx-auto px-6 mb-16 md:mb-24">
          <motion.div
            ref={grenzenRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: grenzenOpacity, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="bg-gradient-to-br from-[#FBF8F3] to-white rounded-2xl md:rounded-3xl p-8 md:p-10 shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20"
          >
            <h2 className="text-2xl md:text-3xl mb-4 md:mb-6 text-gray-900">
              Grenzen & Ausschluss
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4 md:mb-6">
              Meine Arbeit ersetzt keine medizinische oder psychotherapeutische Behandlung. Bei
              akuten psychischen Krisen, Essstörungen oder anderen behandlungsbedürftigen
              Erkrankungen kann ich nicht begleiten.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Im Erstgespräch klären wir gemeinsam, ob eine Begleitung sinnvoll ist oder ob andere
              Anlaufstellen besser passen.
            </p>
          </motion.div>
        </section>

        {/* Optionen nach Erstgespräch */}
        <section className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl mb-8 md:mb-12 text-center text-gray-900">
            Nach dem Erstgespräch
          </h2>
          <div className="max-w-3xl mx-auto">
            {/* Wenn es passt */}
            <motion.div
              ref={wennPasstRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: wennPasstOpacity, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="bg-gradient-to-br from-[#F5EDE4] to-white rounded-2xl md:rounded-3xl p-8 md:p-10 shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20"
            >
              <div className="w-14 h-14 bg-[#D4A88C]/20 rounded-full flex items-center justify-center mb-6 text-2xl text-[#D4A88C]">
                ✓
              </div>
              <h3 className="text-xl md:text-2xl mb-4 text-gray-900">Wenn es passt</h3>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                Wir vereinbaren den nächsten Schritt und besprechen, wie die Zusammenarbeit konkret
                aussehen kann.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                  <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                  <span>Individuelle Planung</span>
                </li>
                <li className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                  <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                  <span>Transparente Kosten</span>
                </li>
                <li className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                  <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                  <span>Klare Vereinbarungen</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12 md:mt-16">
            <Button
              onClick={() => navigate('/kontakt')}
              className="w-full md:w-auto bg-[#D4A88C] hover:bg-[#C9997A] text-white px-8 md:px-12 py-6 md:py-7 rounded-full text-base md:text-lg shadow-[0_8px_30px_rgb(212,168,140,0.25)] hover:shadow-[0_12px_40px_rgb(212,168,140,0.35)] transition-all"
            >
              Erstgespräch vereinbaren
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
