import { Check, ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

export function QuickCheck() {
  const [opacity, setOpacity] = useState(1)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    let lastScrollY = window.scrollY
    let scrollDirection: 'up' | 'down' = 'down'

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up'
      lastScrollY = currentScrollY

      const windowHeight = window.innerHeight
      const viewportCenter = windowHeight / 2

      const maxDistance = windowHeight * 0.4
      const calculateOpacity = (distance: number) => {
        // Nach unten scrollen: Früher 100% Opacity (4x früher)
        const adjustedMaxDistance = scrollDirection === 'down' ? maxDistance * 4.0 : maxDistance

        if (distance < adjustedMaxDistance) {
          return Math.max(0.4, 1 - (distance / adjustedMaxDistance) * 0.6)
        }
        return 0.4
      }

      const element = ref.current
      if (!element) return

      const rect = element.getBoundingClientRect()
      const center = rect.top + rect.height / 2
      const distance = Math.abs(viewportCenter - center)
      const newOpacity = calculateOpacity(distance)

      setOpacity(newOpacity)

      // Check if element is in viewport for stagger animation
      if (rect.top < windowHeight * 0.75 && !isVisible) {
        setIsVisible(true)
      }
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isVisible])

  const checkItems = [
    'Du bereit bist, tiefer zu schauen und an Ursachen zu arbeiten',
    'Du nachhaltige Veränderung statt Quick-Fixes suchst',
    'Du offen für ganzheitliche Ansätze bist',
  ]

  // Farbmix: Beige, Grün, Lila
  const checkColors = [
    { from: '#D4A88C', via: '#C9997A', to: '#B88869' }, // Warm Beige
    { from: '#9CAF88', via: '#8B9D83', to: '#7A8C73' }, // Salbei-Grün
    { from: '#B8A8C9', via: '#A89FC9', to: '#9890B9' }, // Lavendel-Lila
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-[#FBF8F3]">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          ref={ref}
          className="bg-white rounded-3xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto border border-[#E8DCC4]/40 hover:shadow-xl transition-shadow duration-300"
          style={{ opacity }}
        >
          <div className="text-center mb-8 relative">
            <motion.h2
              className="text-2xl md:text-3xl mb-8 md:mb-12 text-gray-800 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Passt zu dir, wenn...
            </motion.h2>

            <ul className="space-y-6 md:space-y-8 max-w-xl mx-auto mb-8 md:mb-12">
              {checkItems.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-4 md:gap-5"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: isVisible ? 1 : 0,
                    x: isVisible ? 0 : -20,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + index * 0.15,
                    ease: 'easeOut',
                  }}
                >
                  <motion.div
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md"
                    style={{
                      background: `linear-gradient(to bottom right, ${checkColors[index].from}, ${checkColors[index].via}, ${checkColors[index].to})`,
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </motion.div>
                  <span className="text-base md:text-lg text-gray-700 leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              className="text-center pt-4 border-t border-[#E8DCC4]/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link
                to="/angebot"
                className="text-[#D4A88C] hover:text-[#C9997A] transition-colors inline-flex items-center gap-2 group mt-4"
              >
                <span className="text-sm md:text-base">Für wen es nicht passt + Details</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
