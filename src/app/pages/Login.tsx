import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { Button } from "@/app/components/ui/button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo: Speichere Login-Status
    localStorage.setItem("isLoggedIn", "true");
    // Dispatch custom event to update header
    window.dispatchEvent(new Event("login"));
    navigate("/kundenbereich");
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
            <span className="text-gray-900">Login</span>
          </div>
        </div>

        {/* Login Form */}
        <section className="max-w-md mx-auto px-6">
          <h1 className="text-4xl md:text-5xl mb-6 text-gray-900 text-center">Login</h1>
          <p className="text-gray-600 mb-12 text-center">
            Melde dich an, um auf deinen Kundenbereich zuzugreifen.
          </p>

          <form onSubmit={handleLogin} className="bg-gradient-to-br from-[#F5EDE4] to-white rounded-3xl p-8 md:p-10 shadow-[0_4px_20px_rgba(201,181,160,0.1)] border border-[#E8DCC4]/20">
            <div className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                  E-Mail-Adresse
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4A88C] focus:border-transparent"
                  placeholder="deine@email.de"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm text-gray-700 mb-2">
                  Passwort
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4A88C] focus:border-transparent"
                  placeholder="••••••••"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#D4A88C] hover:bg-[#C9997A] text-white py-6 rounded-full text-lg shadow-[0_8px_30px_rgb(212,168,140,0.25)] hover:shadow-[0_12px_40px_rgb(212,168,140,0.35)] transition-all"
              >
                Anmelden
              </Button>
            </div>

            <p className="text-sm text-gray-600 mt-6 text-center">
              Noch kein Zugang?{" "}
              <Link to="/selbststart" className="text-[#D4A88C] hover:underline">
                Jetzt starten
              </Link>
            </p>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}