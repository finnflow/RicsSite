import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { Check } from "lucide-react";
import { useNavigate, Link } from "react-router";
import { Button } from "@/app/components/ui/button";

export default function Checkout() {
  const navigate = useNavigate();

  const handlePayment = () => {
    // Demo: Simuliere Zahlung
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("hasSelfstartAccess", "true");
    navigate("/checkout/success");
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-28 pb-20">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-[#D4A88C] transition-colors">Start</Link>
            <span>/</span>
            <Link to="/selbststart" className="hover:text-[#D4A88C] transition-colors">Selbststart</Link>
            <span>/</span>
            <span className="text-gray-900">Checkout</span>
          </div>
        </div>

        {/* Checkout */}
        <section className="max-w-2xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl mb-6 text-gray-900 text-center">Selbststart sichern</h1>
          <p className="text-gray-600 mb-12 text-center">
            Du bist nur einen Schritt entfernt. Nach der Zahlung erhältst du sofort Zugriff.
          </p>

          <div className="bg-gradient-to-br from-[#F5EDE4] to-white rounded-3xl p-8 md:p-10 shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20 mb-8">
            <h2 className="text-2xl mb-6 text-gray-900">Zusammenfassung</h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-700">Selbststart-Programm</span>
                <span className="text-gray-900">€97</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-lg text-gray-900">Gesamt</span>
                <span className="text-2xl text-gray-900">€97</span>
              </div>
            </div>

            <div className="bg-white/50 rounded-2xl p-6 mb-8">
              <h3 className="text-lg mb-4 text-gray-900">Das erhältst du:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-700">
                  <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                  <span>Sofortiger Zugang zum Kundenbereich</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                  <span>Alle Selbststart-Materialien & Übungen</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                  <span>Lebenslanger Zugriff auf alle Inhalte</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <Check className="w-5 h-5 text-[#D4A88C] flex-shrink-0 mt-0.5" />
                  <span>Bonus: Ernährungs-Quickstart PDF</span>
                </li>
              </ul>
            </div>

            <Button
              onClick={handlePayment}
              className="w-full bg-[#D4A88C] hover:bg-[#C9997A] text-white py-6 rounded-full text-lg shadow-[0_8px_30px_rgb(212,168,140,0.25)] hover:shadow-[0_12px_40px_rgb(212,168,140,0.35)] transition-all"
            >
              Jetzt zahlen (Demo)
            </Button>

            <p className="text-sm text-gray-600 mt-6 text-center">
              Dies ist eine Demo. In der echten Version würdest du zu einer sicheren Zahlungsseite weitergeleitet.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}