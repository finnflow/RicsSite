import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { CheckCircle } from 'lucide-react'
import { useNavigate } from 'react-router'
import { Button } from '@/app/components/ui/button'

export default function CheckoutSuccess() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-28 pb-20">
        <section className="max-w-2xl mx-auto px-6 text-center">
          <div className="mb-8">
            <CheckCircle className="w-20 h-20 text-[#D4A88C] mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl mb-6 text-gray-900">Zahlung erfolgreich!</h1>
            <p className="text-xl text-gray-600 mb-12">
              Willkommen an Bord! Dein Zugang wurde freigeschaltet.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#F5EDE4] to-white rounded-3xl p-8 md:p-10 shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20 mb-8">
            <h2 className="text-2xl mb-6 text-gray-900">Was jetzt?</h2>
            <div className="space-y-4 text-left mb-8">
              <div className="bg-white/50 rounded-xl p-4">
                <p className="text-gray-700">
                  ✓ Du hast eine Bestätigungs-E-Mail erhalten (in dieser Demo nicht wirklich, aber
                  in der echten Version schon)
                </p>
              </div>
              <div className="bg-white/50 rounded-xl p-4">
                <p className="text-gray-700">✓ Dein Kundenbereich ist jetzt freigeschaltet</p>
              </div>
              <div className="bg-white/50 rounded-xl p-4">
                <p className="text-gray-700">
                  ✓ Alle Selbststart-Materialien stehen dir zur Verfügung
                </p>
              </div>
            </div>

            <Button
              onClick={() => navigate('/kundenbereich')}
              className="w-full bg-[#D4A88C] hover:bg-[#C9997A] text-white py-6 rounded-full text-lg shadow-[0_8px_30px_rgb(212,168,140,0.25)] hover:shadow-[0_12px_40px_rgb(212,168,140,0.35)] transition-all"
            >
              Zum Kundenbereich
            </Button>
          </div>

          <p className="text-sm text-gray-600">Bei Fragen stehe ich dir jederzeit zur Verfügung.</p>
        </section>
      </main>

      <Footer />
    </div>
  )
}
