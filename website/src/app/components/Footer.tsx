export function Footer() {
  return (
    <footer id="kontakt" className="py-16 bg-gradient-to-b from-[#FBF8F3] to-white border-t border-[#E8DCC4]/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-8 text-gray-600">
            <a href="#impressum" className="hover:text-[#D4A88C] transition-colors">
              Impressum
            </a>
            <a href="#datenschutz" className="hover:text-[#D4A88C] transition-colors">
              Datenschutz
            </a>
          </div>
          <p className="text-sm text-gray-500">
            © Lebensessenzen | Ricarda Ludwig
          </p>
        </div>
      </div>
    </footer>
  );
}