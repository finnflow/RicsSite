import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { Check, X, AlertCircle, FileText, Download, ArrowRight, LogIn, Clock, TrendingUp } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { Button } from "@/app/components/ui/button";

export default function Selbststart() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-28 pb-20">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-[#D4A88C] transition-colors">Start</Link>
            <span>/</span>
            <span className="text-gray-900">Selbststart</span>
          </div>
        </div>

        {/* Info Box at top */}
        <section className="max-w-4xl mx-auto px-6 mb-12">
          <div className="bg-gradient-to-br from-[#FBF8F3] to-[#F5EDE4] rounded-2xl p-6 shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#D4A88C]/20">
            <div className="flex gap-4">
              <AlertCircle className="w-6 h-6 text-[#D4A88C] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-800 leading-relaxed">
                  <strong>Unsicher, ob das für dich passt?</strong> → Nutze das{" "}
                  <Link to="/kontakt" className="text-[#D4A88C] hover:underline">
                    kostenlose Erstgespräch zur Klärung
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
          <h1 className="text-5xl mb-6 text-gray-900">Selbststart – Info-only ohne Begleitung</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Eigenständig arbeiten mit strukturierten Materialien – in deinem eigenen Tempo, wann und wie es für dich passt.
          </p>
        </section>

        {/* Für wen geeignet / nicht geeignet */}
        <section className="max-w-6xl mx-auto px-6 mb-24">
          <h2 className="text-4xl mb-12 text-center text-gray-900">Für wen geeignet / nicht geeignet</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Geeignet */}
            <div className="bg-gradient-to-br from-[#F5EDE4] to-white rounded-3xl p-10 shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20">
              <div className="w-12 h-12 bg-[#D4A88C]/20 rounded-full flex items-center justify-center mb-6">
                <Check className="w-6 h-6 text-[#D4A88C]" />
              </div>
              <h3 className="text-2xl mb-6 text-gray-900">Passt zu dir, wenn...</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-700">
                  <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                  <span>Du gut eigenständig lernen kannst</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                  <span>Du strukturierte Infos schätzt</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                  <span>Du in deinem eigenen Tempo arbeiten möchtest</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                  <span>Budget für persönliche Begleitung nicht verfügbar ist</span>
                </li>
              </ul>
            </div>

            {/* Nicht geeignet */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-gray-200">
              <div className="w-12 h-12 bg-gray-300/50 rounded-full flex items-center justify-center mb-6">
                <X className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-2xl mb-6 text-gray-900">Passt nicht, wenn...</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-700">
                  <X className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                  <span>Du persönliche Begleitung brauchst</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <X className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                  <span>Du individuelle Fragen stellen möchtest</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <X className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                  <span>Akute Probleme eine Begleitung nötig machen</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <X className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                  <span>Du Feedback zu deiner Situation brauchst</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Was du bekommst */}
        <section className="max-w-6xl mx-auto px-6 mb-24">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Bekommst */}
            <div className="bg-gradient-to-br from-[#F5EDE4] to-white rounded-3xl p-10 shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20">
              <div className="w-12 h-12 bg-[#D4A88C]/20 rounded-full flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-[#D4A88C]" />
              </div>
              <h3 className="text-2xl mb-6 text-gray-900">Was du bekommst</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-700">
                  <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                  <span>Strukturierte Informationsmaterialien</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                  <span>Anleitungen zur Selbstreflexion</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                  <span>Übersichten & Checklisten</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                  <span>Technischer Support bei Zugriffsproblemen</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                  <span>Zugang zum Kundenbereich</span>
                </li>
              </ul>
            </div>

            {/* Nicht bekommst */}
            <div className="bg-gradient-to-br from-white to-[#F5EDE4] rounded-3xl p-10 shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20">
              <div className="w-12 h-12 bg-gray-300/50 rounded-full flex items-center justify-center mb-6">
                <X className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-2xl mb-6 text-gray-900">Was du nicht bekommst</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Transparenz statt falscher Erwartungen:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-700">
                  <X className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                  <span>Keine persönliche Begleitung</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <X className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                  <span>Keine individuellen Rückfragen zu Inhalten</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <X className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                  <span>Kein Feedback zu deiner Situation</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <X className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                  <span>Keine Anpassungen an deine Bedürfnisse</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Wenn du später Begleitung willst */}
        <section className="max-w-4xl mx-auto px-6 mb-24">
          <div className="bg-gradient-to-br from-[#FBF8F3] to-white rounded-3xl p-10 shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20">
            <h3 className="text-2xl mb-4 text-gray-900">Wenn du später Begleitung willst</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Du kannst jederzeit von Info-Only auf persönliche Begleitung wechseln. Deine bisherigen Materialien bleiben erhalten.
            </p>
            <Link to="/kontakt" className="inline-flex items-center gap-2 text-[#D4A88C] hover:text-[#C9997A] transition-colors group">
              <span>Kontakt aufnehmen</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* Ablauf Selbststart */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <h2 className="text-4xl mb-12 text-center text-gray-900">Ablauf Selbststart</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="bg-gradient-to-br from-[#F5EDE4] to-white rounded-2xl p-8 text-center shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20">
              <div className="w-14 h-14 bg-[#D4A88C] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
                1
              </div>
              <LogIn className="w-8 h-8 text-[#D4A88C] mx-auto mb-2" />
              <h4 className="text-lg mb-2 text-gray-900">Zugang erwerben</h4>
              <p className="text-sm text-gray-600">
                Du bekommst Zugang zum Kundenbereich
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-gradient-to-br from-[#F5EDE4] to-white rounded-2xl p-8 text-center shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20">
              <div className="w-14 h-14 bg-[#D4A88C] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
                2
              </div>
              <Download className="w-8 h-8 text-[#D4A88C] mx-auto mb-2" />
              <h4 className="text-lg mb-2 text-gray-900">Materialien laden</h4>
              <p className="text-sm text-gray-600">
                Lade die Materialien herunter
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-gradient-to-br from-[#F5EDE4] to-white rounded-2xl p-8 text-center shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20">
              <div className="w-14 h-14 bg-[#D4A88C] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
                3
              </div>
              <Clock className="w-8 h-8 text-[#D4A88C] mx-auto mb-2" />
              <h4 className="text-lg mb-2 text-gray-900">In deinem Tempo</h4>
              <p className="text-sm text-gray-600">
                Arbeite eigenständig, wann und wie du willst
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-gradient-to-br from-[#F5EDE4] to-white rounded-2xl p-8 text-center shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20">
              <div className="w-14 h-14 bg-[#D4A88C] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
                4
              </div>
              <TrendingUp className="w-8 h-8 text-[#D4A88C] mx-auto mb-2" />
              <h4 className="text-lg mb-2 text-gray-900">Upgrade möglich</h4>
              <p className="text-sm text-gray-600">
                Bei Bedarf später zur Begleitung wechseln
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-6 text-center">
          <Button 
            onClick={() => navigate("/checkout")}
            className="bg-[#D4A88C] hover:bg-[#C9997A] text-white px-12 py-7 rounded-full text-lg shadow-[0_8px_30px_rgb(212,168,140,0.25)]"
          >
            Jetzt starten
          </Button>
          <p className="mt-6 text-sm text-gray-600">
            Oder{" "}
            <Link to="/kontakt" className="text-[#D4A88C] hover:underline">
              zuerst Erstgespräch vereinbaren
            </Link>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}