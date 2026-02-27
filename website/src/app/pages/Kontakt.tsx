import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { Check, X, Mail, Clock, ShieldAlert } from 'lucide-react'
import { Link } from 'react-router'
import { Button } from '@/app/components/ui/button'
import { Input } from '@/app/components/ui/input'
import { Textarea } from '@/app/components/ui/textarea'

export default function Kontakt() {
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
            <span className="text-gray-900">Kontakt</span>
          </div>
        </div>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-6 mb-16 text-center">
          <h1 className="text-5xl mb-6 text-gray-900">Kontakt</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Unverbindlich, datensparsam, transparent
          </p>
        </section>

        {/* Main Content */}
        <section className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-10">
            {/* Left: Contact Form */}
            <div className="md:col-span-3">
              <div className="bg-gradient-to-br from-[#F5EDE4] to-white rounded-3xl p-10 shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20">
                <h2 className="text-3xl mb-6 text-gray-900">Nachricht senden</h2>

                <form className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                      E-Mail-Adresse *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="deine@email.de"
                      className="bg-white border-[#E8DCC4]/40 rounded-xl"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                      Deine Nachricht (1-2 Sätze)
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Worum geht es grob? (Optional, aber hilfreich)"
                      rows={5}
                      className="bg-white border-[#E8DCC4]/40 rounded-xl"
                    />
                  </div>

                  {/* Info Box */}
                  <div className="bg-white/60 rounded-xl p-6 border border-[#E8DCC4]/30">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <div className="flex items-center gap-2 mb-3 text-[#D4A88C]">
                          <Check className="w-5 h-5" />
                          <span className="text-sm">Was nötig ist</span>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>• Deine E-Mail-Adresse</li>
                          <li>• Optional: 1-2 Sätze</li>
                        </ul>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-3 text-gray-500">
                          <X className="w-5 h-5" />
                          <span className="text-sm">Was nicht nötig ist</span>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>• Kein Name erforderlich</li>
                          <li>• Keine Telefonnummer</li>
                          <li>• Keine Lebensgeschichte</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-[#D4A88C] hover:bg-[#C9997A] text-white py-6 rounded-full text-lg shadow-[0_8px_30px_rgb(212,168,140,0.25)]">
                    Nachricht senden
                  </Button>
                </form>
              </div>
            </div>

            {/* Right: Info Card */}
            <div className="md:col-span-2">
              <div className="bg-gradient-to-br from-white to-[#F5EDE4] rounded-3xl p-8 shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20 sticky top-32">
                <h3 className="text-2xl mb-6 text-gray-900">Was passiert nach dem Absenden?</h3>

                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-[#D4A88C]/20 rounded-full flex items-center justify-center">
                        <Check className="w-5 h-5 text-[#D4A88C]" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-900 mb-1">Bestätigung</h4>
                      <p className="text-sm text-gray-600">
                        Du siehst sofort eine Bestätigung auf dieser Seite
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-[#D4A88C]/20 rounded-full flex items-center justify-center">
                        <Clock className="w-5 h-5 text-[#D4A88C]" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-900 mb-1">Antwort</h4>
                      <p className="text-sm text-gray-600">
                        Ich melde mich innerhalb von 24-48 Stunden per E-Mail
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-[#D4A88C]/20 rounded-full flex items-center justify-center">
                        <Mail className="w-5 h-5 text-[#D4A88C]" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-900 mb-1">Terminvorschlag</h4>
                      <p className="text-sm text-gray-600">
                        In meiner Antwort schlage ich dir Zeiten für ein kostenloses Erstgespräch
                        vor
                      </p>
                    </div>
                  </div>
                </div>

                {/* Notfallhinweis */}
                <div className="mt-8 pt-8 border-t border-[#E8DCC4]/30">
                  <div className="flex gap-3">
                    <ShieldAlert className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm text-gray-900 mb-2">Abgrenzung & Notfallhinweis</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Bei akuten Krisen wende dich bitte an die Telefonseelsorge (0800 111 0 111)
                        oder den ärztlichen Bereitschaftsdienst (116 117). Meine Arbeit ersetzt
                        keine medizinische oder psychotherapeutische Behandlung.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
