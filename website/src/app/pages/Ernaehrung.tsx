import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { Check, Utensils, Target, Users, BookOpen } from 'lucide-react'
import { Link, useNavigate } from 'react-router'
import { Button } from '@/app/components/ui/button'
import { motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

export default function Ernaehrung() {
  const navigate = useNavigate()

  // Opacity States für Scroll-Fokus
  const [heroOpacity, setHeroOpacity] = useState(1)
  const [philosophieOpacity, setPhilosophieOpacity] = useState(1)
  const [ganzheitlichOpacity, setGanzheitlichOpacity] = useState(1)
  const [ansatzOpacity, setAnsatzOpacity] = useState(1)
  const [themenbereiche1Opacity, setThemenbereiche1Opacity] = useState(1)
  const [themenbereiche2Opacity, setThemenbereiche2Opacity] = useState(1)
  const [themenbereiche3Opacity, setThemenbereiche3Opacity] = useState(1)
  const [fuerWenOpacity, setFuerWenOpacity] = useState(1)
  const [ctaOpacity, setCtaOpacity] = useState(1)

  // Refs für alle Content-Blöcke
  const heroRef = useRef<HTMLDivElement>(null)
  const philosophieRef = useRef<HTMLDivElement>(null)
  const ganzheitlichRef = useRef<HTMLDivElement>(null)
  const ansatzRef = useRef<HTMLDivElement>(null)
  const themenbereiche1Ref = useRef<HTMLDivElement>(null)
  const themenbereiche2Ref = useRef<HTMLDivElement>(null)
  const themenbereiche3Ref = useRef<HTMLDivElement>(null)
  const fuerWenRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  // Scroll-basierte Animation für Mobile
  useEffect(() => {
    if (window.innerWidth >= 768) return // Nur für Mobile

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

      // Update alle Opacities
      updateElementOpacity(heroRef, setHeroOpacity)
      updateElementOpacity(philosophieRef, setPhilosophieOpacity)
      updateElementOpacity(ganzheitlichRef, setGanzheitlichOpacity)
      updateElementOpacity(ansatzRef, setAnsatzOpacity)
      updateElementOpacity(themenbereiche1Ref, setThemenbereiche1Opacity)
      updateElementOpacity(themenbereiche2Ref, setThemenbereiche2Opacity)
      updateElementOpacity(themenbereiche3Ref, setThemenbereiche3Opacity)
      updateElementOpacity(fuerWenRef, setFuerWenOpacity)
      updateElementOpacity(ctaRef, setCtaOpacity)
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
          <div className="flex flex-wrap items-center gap-1.5 md:gap-2 text-xs md:text-sm text-gray-600">
            <Link to="/" className="hover:text-[#D4A88C] transition-colors whitespace-nowrap">
              Start
            </Link>
            <span>/</span>
            <Link
              to="/angebot"
              className="hover:text-[#D4A88C] transition-colors whitespace-nowrap"
            >
              Angebot & Methoden
            </Link>
            <span>/</span>
            <span className="text-gray-900 whitespace-nowrap">Ernährung</span>
          </div>
        </div>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-6 mb-16 md:mb-20 text-center">
          <div className="w-20 h-20 bg-[#D4A88C]/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Utensils className="w-10 h-10 text-[#D4A88C]" />
          </div>
          <h1 className="text-4xl md:text-5xl mb-4 md:mb-6 text-gray-900">Ernährung</h1>
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: heroOpacity, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Individuell abgestimmte Ernährungsberatung, die über "Iss mehr Gemüse" hinausgeht.
              Ursachen finden, Zusammenhänge verstehen, nachhaltig verändern.
            </p>
          </motion.div>
        </section>

        {/* Philosophie */}
        <section className="max-w-4xl mx-auto px-6 mb-16 md:mb-20">
          <motion.div
            ref={philosophieRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: philosophieOpacity, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="bg-gradient-to-br from-[#F5EDE4] to-white rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20"
          >
            <h2 className="text-2xl md:text-3xl mb-6 text-gray-900">Meine Philosophie</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Es gibt nicht die eine richtige Ernährung für alle. Was für den einen funktioniert,
                kann für den anderen das Gegenteil bewirken. Deshalb arbeite ich individuell,
                betrachte den ganzen Menschen und suche nach den tatsächlichen Ursachen – nicht nach
                schnellen Lösungen.
              </p>
              <p>
                Ernährung ist mehr als Kalorien und Nährstoffe. Sie ist eng verbunden mit unseren
                Emotionen, unserem Alltag, unserer Geschichte. Deshalb schaue ich auf das große
                Ganze: Was isst du? Wie isst du? Warum isst du?
              </p>
              <p>
                Mein Ziel ist nicht, dir einen starren Plan zu geben, sondern dich zu befähigen,
                selbst die richtigen Entscheidungen für deinen Körper zu treffen – langfristig und
                nachhaltig.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Ganzheitlich */}
        <section className="max-w-4xl mx-auto px-6 mb-16 md:mb-20">
          <motion.div
            ref={ganzheitlichRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: ganzheitlichOpacity, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="bg-gradient-to-br from-[#F5EDE4] to-white rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20"
          >
            <h2 className="text-2xl md:text-3xl mb-6 text-gray-900">Ganzheitlich</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Ich betrachte nicht nur deine Ernährung, sondern auch deine Bewegung, deine Ruhe und
                deine Stressbelastung. Denn alles ist miteinander verbunden und wirkt auf deinen
                Körper.
              </p>
              <p>
                Durch eine ganzheitliche Betrachtung kann ich dir helfen, die Ursachen deiner
                Probleme zu finden und langfristige Lösungen zu finden.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Mein Ansatz */}
        <section className="max-w-4xl mx-auto px-6 mb-16 md:mb-20">
          <h2 className="text-2xl md:text-3xl mb-8 text-center text-gray-900">Mein Ansatz</h2>
          <motion.div
            ref={ansatzRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: ansatzOpacity, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="grid md:grid-cols-3 gap-6"
          >
            {/* Individuell */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20">
              <Target className="w-12 h-12 text-[#D4A88C] mx-auto mb-4" />
              <h3 className="text-lg mb-3 text-gray-900">Individuell</h3>
              <p className="text-sm text-gray-600">
                Auf deinen Körper, deine Situation, deine Ziele abgestimmt
              </p>
            </div>

            {/* Ursachenorientiert */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20">
              <BookOpen className="w-12 h-12 text-[#D4A88C] mx-auto mb-4" />
              <h3 className="text-lg mb-3 text-gray-900">Ursachenorientiert</h3>
              <p className="text-sm text-gray-600">
                Wir schauen tiefer: Warum reagiert dein Körper so?
              </p>
            </div>

            {/* Alltagstauglich */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20">
              <Users className="w-12 h-12 text-[#D4A88C] mx-auto mb-4" />
              <h3 className="text-lg mb-3 text-gray-900">Alltagstauglich</h3>
              <p className="text-sm text-gray-600">
                Keine komplizierten Pläne, sondern umsetzbare Schritte
              </p>
            </div>
          </motion.div>
        </section>

        {/* Themenbereiche */}
        <section className="max-w-4xl mx-auto px-6 mb-16 md:mb-20">
          <h2 className="text-2xl md:text-3xl mb-8 text-center text-gray-900">
            Mögliche Themenbereiche
          </h2>
          <div className="space-y-6">
            <motion.div
              ref={themenbereiche1Ref}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: themenbereiche1Opacity, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="bg-gradient-to-br from-[#F5EDE4] to-white rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20"
            >
              <h3 className="text-lg md:text-xl mb-4 text-gray-900">
                Verdauungsbeschwerden & Unverträglichkeiten
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                  <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                  <span>Blähungen, Völlegefühl, Durchfall</span>
                </li>
                <li className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                  <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                  <span>Nahrungsmittelunverträglichkeiten</span>
                </li>
                <li className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                  <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                  <span>Reizdarm-Symptome</span>
                </li>
                <li className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                  <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                  <span>Darmgesundheit aufbauen</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              ref={themenbereiche2Ref}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: themenbereiche2Opacity, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="bg-gradient-to-br from-[#F5EDE4] to-white rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20"
            >
              <h3 className="text-lg md:text-xl mb-4 text-gray-900">
                Energielosigkeit & Stoffwechsel
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                  <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                  <span>Chronische Müdigkeit</span>
                </li>
                <li className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                  <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                  <span>Gewichtsprobleme</span>
                </li>
                <li className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                  <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                  <span>Hormonelle Dysbalancen</span>
                </li>
                <li className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                  <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                  <span>Blutzuckerschwankungen</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              ref={themenbereiche3Ref}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: themenbereiche3Opacity, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="bg-gradient-to-br from-[#F5EDE4] to-white rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20"
            >
              <h3 className="text-lg md:text-xl mb-4 text-gray-900">Emotionales Essverhalten</h3>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                  <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                  <span>Stress-Essen & Heißhunger</span>
                </li>
                <li className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                  <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                  <span>Unbewusste Essmuster</span>
                </li>
                <li className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                  <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                  <span>Beziehung zum Essen klären</span>
                </li>
                <li className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                  <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                  <span>Genuss statt Verzicht</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Für wen passt das */}
        <section className="max-w-4xl mx-auto px-6 mb-16 md:mb-20">
          <motion.div
            ref={fuerWenRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: fuerWenOpacity, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="bg-white rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20"
          >
            <h2 className="text-2xl md:text-3xl mb-6 text-gray-900">Für wen passt das?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-[#D4A88C] flex-shrink-0 mt-1" />
                <p className="text-gray-700 leading-relaxed">
                  Du hast schon vieles ausprobiert, aber nichts hat langfristig funktioniert
                </p>
              </div>
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-[#D4A88C] flex-shrink-0 mt-1" />
                <p className="text-gray-700 leading-relaxed">
                  Du möchtest die Ursachen verstehen, nicht nur Symptome bekämpfen
                </p>
              </div>
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-[#D4A88C] flex-shrink-0 mt-1" />
                <p className="text-gray-700 leading-relaxed">
                  Du bist bereit, dich mit dir und deinem Körper auseinanderzusetzen
                </p>
              </div>
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-[#D4A88C] flex-shrink-0 mt-1" />
                <p className="text-gray-700 leading-relaxed">
                  Du suchst eine individuelle Lösung, keine Standardantworten
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-6">
          <motion.div
            ref={ctaRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: ctaOpacity, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="bg-[#D4C4B0] rounded-2xl md:rounded-3xl p-8 md:p-12 text-center shadow-[0_4px_20px_rgba(212,196,176,0.25)]"
          >
            <h2 className="text-2xl md:text-3xl mb-4 text-gray-900 font-medium">
              Bereit für den ersten Schritt?
            </h2>
            <p className="text-base md:text-lg text-gray-800 mb-8 max-w-2xl mx-auto">
              Im kostenlosen Erstgespräch klären wir, ob meine Art zu arbeiten zu deinem Anliegen
              passt.
            </p>
            <Button
              onClick={() => navigate('/kontakt')}
              size="lg"
              className="w-full md:w-auto bg-white hover:bg-gray-50 text-gray-900 px-8 md:px-12 py-6 md:py-7 rounded-full text-base md:text-lg font-medium shadow-md hover:shadow-lg transition-all"
            >
              Kostenloses Erstgespräch
            </Button>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
