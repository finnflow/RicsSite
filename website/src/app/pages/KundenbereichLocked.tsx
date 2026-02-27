import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { Lock, ArrowRight } from 'lucide-react'
import { Link, useNavigate } from 'react-router'
import { Button } from '@/app/components/ui/button'

export default function KundenbereichLocked() {
  const navigate = useNavigate()

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
            <span className="text-gray-900">Kundenbereich</span>
          </div>
        </div>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-6 mb-16 text-center">
          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="w-10 h-10 text-gray-400" />
          </div>
          <h1 className="text-4xl md:text-5xl mb-6 text-gray-900">Kundenbereich</h1>
          <p className="text-xl text-gray-600">
            Du hast noch keinen Zugriff auf den Kundenbereich.
          </p>
        </section>

        {/* Options */}
        <section className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Login Option */}
            <div className="bg-gradient-to-br from-[#F5EDE4] to-white rounded-3xl p-8 md:p-10 shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20">
              <h2 className="text-2xl mb-4 text-gray-900">Bereits Kunde?</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Wenn du bereits Zugang hast, melde dich einfach an.
              </p>
              <Button
                onClick={() => navigate('/login')}
                className="w-full bg-[#D4A88C] hover:bg-[#C9997A] text-white py-6 rounded-full text-lg shadow-[0_8px_30px_rgb(212,168,140,0.25)] hover:shadow-[0_12px_40px_rgb(212,168,140,0.35)] transition-all"
              >
                Zum Login
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Selbststart Option */}
            <div className="bg-gradient-to-br from-white to-[#F5EDE4] rounded-3xl p-8 md:p-10 shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20">
              <h2 className="text-2xl mb-4 text-gray-900">Noch kein Zugang?</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Mit dem Selbststart-Programm erhältst du sofort Zugang zum Kundenbereich.
              </p>
              <Button
                onClick={() => navigate('/selbststart')}
                className="w-full bg-white hover:bg-gray-50 text-[#D4A88C] border-2 border-[#D4A88C] py-6 rounded-full text-lg transition-all"
              >
                Zum Selbststart
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          {/* Info */}
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Bei Fragen kannst du mich jederzeit{' '}
              <Link to="/kontakt" className="text-[#D4A88C] hover:underline">
                kontaktieren
              </Link>
              .
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
