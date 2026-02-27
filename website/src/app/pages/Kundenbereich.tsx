import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { ChatWidget } from "@/app/components/ChatWidget";
import { Play, FileText, Download, Calendar, Check, X, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";

export default function Kundenbereich() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    
    if (!isLoggedIn) {
      // Redirect to locked page if not logged in
      navigate("/kundenbereich/locked");
    } else {
      setIsLoading(false);
    }
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-gray-600">Lädt...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-28 pb-20">
        {/* Hero */}
        <section className="max-w-4xl mx-auto px-6 mb-12 md:mb-16 text-center">
          <h1 className="text-4xl md:text-5xl mb-4 text-gray-900">Kundenbereich</h1>
          <p className="text-lg md:text-xl text-gray-600">
            Schön, dass du da bist
          </p>
        </section>

        {/* Orientierung - Quick Links */}
        <section className="max-w-7xl mx-auto px-6 mb-16 md:mb-24">
          <h2 className="text-2xl md:text-3xl mb-8 md:mb-10 text-center text-gray-900">Orientierung</h2>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {/* Start hier */}
            <div className="bg-gradient-to-br from-[#F5EDE4] to-white rounded-2xl md:rounded-3xl p-6 md:p-8 text-center shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20 hover:shadow-[0_8px_40px_rgba(201,181,160,0.2)] transition-shadow cursor-pointer">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#D4A88C]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-6 h-6 md:w-7 md:h-7 text-[#D4A88C]" />
              </div>
              <h3 className="text-lg md:text-xl mb-2 text-gray-900">Start hier</h3>
              <p className="text-xs md:text-sm text-gray-600">
                Erste Schritte & Einführung
              </p>
            </div>

            {/* Deine Materialien */}
            <div className="bg-gradient-to-br from-[#F5EDE4] to-white rounded-2xl md:rounded-3xl p-6 md:p-8 text-center shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20 hover:shadow-[0_8px_40px_rgba(201,181,160,0.2)] transition-shadow cursor-pointer">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#D4A88C]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 md:w-7 md:h-7 text-[#D4A88C]" />
              </div>
              <h3 className="text-lg md:text-xl mb-2 text-gray-900">Deine Materialien</h3>
              <p className="text-xs md:text-sm text-gray-600">
                Alle Downloads & Inhalte
              </p>
            </div>

            {/* Kursbot */}
            <Link to="/kursbot" className="bg-gradient-to-br from-[#F5EDE4] to-white rounded-2xl md:rounded-3xl p-6 md:p-8 text-center shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20 hover:shadow-[0_8px_40px_rgba(201,181,160,0.2)] transition-shadow cursor-pointer">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#D4A88C]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 md:w-7 md:h-7 text-[#D4A88C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl mb-2 text-gray-900">Kursbot</h3>
              <p className="text-xs md:text-sm text-gray-600">
                Fragen zum Kursmaterial
              </p>
            </Link>
          </div>
        </section>

        {/* Materialien Section */}
        <section className="max-w-7xl mx-auto px-6 mb-16 md:mb-24">
          <h2 className="text-2xl md:text-3xl mb-6 md:mb-10 text-gray-900">Deine Materialien</h2>
          
          <div className="space-y-3 md:space-y-4">
            {/* Module/Topic 1 */}
            <div className="bg-gradient-to-br from-white to-[#F5EDE4] rounded-xl md:rounded-2xl p-4 md:p-6 shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#D4A88C]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 md:w-6 md:h-6 text-[#D4A88C]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base md:text-lg text-gray-900 truncate">Modul 1: Grundlagen</h3>
                    <p className="text-xs md:text-sm text-gray-600">5 Dokumente</p>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-[#D4A88C] hover:text-[#C9997A] transition-colors flex-shrink-0">
                  <Download className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="hidden md:inline text-sm">Herunterladen</span>
                </button>
              </div>
            </div>

            {/* Module/Topic 2 */}
            <div className="bg-gradient-to-br from-white to-[#F5EDE4] rounded-xl md:rounded-2xl p-4 md:p-6 shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#D4A88C]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 md:w-6 md:h-6 text-[#D4A88C]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base md:text-lg text-gray-900 truncate">Modul 2: Vertiefung</h3>
                    <p className="text-xs md:text-sm text-gray-600">8 Dokumente</p>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-[#D4A88C] hover:text-[#C9997A] transition-colors flex-shrink-0">
                  <Download className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="hidden md:inline text-sm">Herunterladen</span>
                </button>
              </div>
            </div>

            {/* Module/Topic 3 */}
            <div className="bg-gradient-to-br from-white to-[#F5EDE4] rounded-xl md:rounded-2xl p-4 md:p-6 shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20 opacity-50">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-200 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 md:w-6 md:h-6 text-gray-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base md:text-lg text-gray-700 truncate">Modul 3: Praxis</h3>
                    <p className="text-xs md:text-sm text-gray-500">Noch gesperrt</p>
                  </div>
                </div>
                <span className="text-xs md:text-sm text-gray-500 px-3 py-1 md:px-4 md:py-2 bg-gray-100 rounded-full flex-shrink-0">
                  Gesperrt
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Nächster Schritt - Recommendation */}
        <section className="max-w-4xl mx-auto px-6 mb-16 md:mb-24">
          <div className="bg-gradient-to-br from-[#F5EDE4] to-white rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20">
            <h2 className="text-2xl md:text-3xl mb-4 md:mb-6 text-gray-900">Dein nächster Schritt</h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
              Basierend auf deinem Fortschritt empfehlen wir dir, mit <strong>Modul 1: Grundlagen</strong> zu beginnen. Nimm dir Zeit für die Übungen und arbeite in deinem eigenen Tempo.
            </p>
            <button className="bg-[#D4A88C] hover:bg-[#C9997A] text-white px-6 md:px-8 py-3 md:py-4 rounded-full transition-colors text-sm md:text-base">
              Modul 1 öffnen
            </button>
          </div>
        </section>

        {/* Hilfe & Support */}
        <section className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl mb-6 md:mb-10 text-center text-gray-900">Hilfe & Support</h2>
          
          <div className="bg-gradient-to-br from-white to-[#F5EDE4] rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20">
            <div className="grid md:grid-cols-2 gap-8 md:gap-10">
              {/* Was du bekommst */}
              <div>
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <div className="w-10 h-10 bg-[#D4A88C]/20 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#D4A88C]" />
                  </div>
                  <h3 className="text-lg md:text-xl text-gray-900">Support für</h3>
                </div>
                <ul className="space-y-2 md:space-y-3">
                  <li className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                    <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                    <span>Technische Probleme (Login, Downloads)</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                    <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                    <span>Fragen zur Plattform</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                    <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                    <span>Zugriffsprobleme</span>
                  </li>
                </ul>
              </div>

              {/* Was nicht inkludiert ist */}
              <div>
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <div className="w-10 h-10 bg-gray-300/50 rounded-full flex items-center justify-center">
                    <X className="w-5 h-5 text-gray-600" />
                  </div>
                  <h3 className="text-lg md:text-xl text-gray-900">Nicht enthalten</h3>
                </div>
                <ul className="space-y-2 md:space-y-3">
                  <li className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                    <X className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                    <span>Inhaltliche Fragen (nur bei Begleitpaket)</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                    <X className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                    <span>Feedback zu deiner Situation</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                    <X className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                    <span>Individuelle Anpassungen</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Link */}
            <div className="mt-8 md:mt-10 pt-8 md:pt-10 border-t border-[#E8DCC4]/30 text-center">
              <Link to="/kontakt" className="inline-flex items-center gap-2 text-[#D4A88C] hover:text-[#C9997A] transition-colors group">
                <Mail className="w-5 h-5" />
                <span className="text-sm md:text-base">Support kontaktieren</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Dokumente section */}
        <section className="max-w-4xl mx-auto px-6 mt-16 md:mt-24">
          <h2 className="text-2xl md:text-3xl mb-6 md:mb-8 text-gray-900">Deine Dokumente</h2>
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20">
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center justify-between py-2 md:py-3">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <FileText className="w-4 h-4 md:w-5 md:h-5 text-[#D4A88C] flex-shrink-0" />
                  <span className="text-sm md:text-base text-gray-700 truncate">Bestätigung_Januar_2026.pdf</span>
                </div>
                <button className="text-xs md:text-sm text-[#D4A88C] hover:text-[#C9997A] transition-colors flex-shrink-0 ml-4">
                  Download
                </button>
              </div>
              <div className="flex items-center justify-between py-2 md:py-3 border-t border-gray-100">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <FileText className="w-4 h-4 md:w-5 md:h-5 text-[#D4A88C] flex-shrink-0" />
                  <span className="text-sm md:text-base text-gray-700 truncate">Rechnung_2026_001.pdf</span>
                </div>
                <button className="text-xs md:text-sm text-[#D4A88C] hover:text-[#C9997A] transition-colors flex-shrink-0 ml-4">
                  Download
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Chat Widget Section */}
        <section className="max-w-4xl mx-auto px-6 mt-16 md:mt-24">
          <h2 className="text-2xl md:text-3xl mb-6 md:mb-8 text-gray-900">Schnelle Hilfe</h2>
          <ChatWidget />
        </section>
      </main>

      <Footer />
    </div>
  );
}