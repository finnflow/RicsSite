import { Link, useNavigate } from 'react-router'
import { Menu, X, LogOut } from 'lucide-react'
import { useState, useEffect } from 'react'
import { SunLogo } from '@/app/components/SunLogo'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLogoHovered, setIsLogoHovered] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    // Check login status from localStorage
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true'
    setIsLoggedIn(loggedIn)

    // Listen for storage changes (login/logout from other tabs or components)
    const handleStorageChange = () => {
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true'
      setIsLoggedIn(loggedIn)
    }

    window.addEventListener('storage', handleStorageChange)
    window.addEventListener('login', handleStorageChange)
    window.addEventListener('logout', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('login', handleStorageChange)
      window.removeEventListener('logout', handleStorageChange)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('hasSelfstartAccess')
    setIsLoggedIn(false)
    setIsMenuOpen(false)
    // Dispatch custom event to update header
    window.dispatchEvent(new Event('logout'))
    navigate('/')
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo/Brand with Sun Icon */}
        <Link
          to="/"
          className="flex items-center gap-2.5 text-xl md:text-xl tracking-wide text-gray-800 hover:text-[#D4A88C] transition-colors group"
          onClick={closeMenu}
          onMouseEnter={() => setIsLogoHovered(true)}
          onMouseLeave={() => setIsLogoHovered(false)}
        >
          <SunLogo
            size={20}
            className="text-gray-700 group-hover:text-[#D4A88C] transition-colors -mb-0.5 hidden md:block"
            externalHover={isLogoHovered}
          />
          <SunLogo
            size={18}
            className="text-gray-700 group-hover:text-[#D4A88C] transition-colors -mb-0.5 md:hidden"
            externalHover={isLogoHovered}
          />
          <span>Lebensessenzen</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          <Link to="/angebot" className="text-gray-700 hover:text-[#D4A88C] transition-colors">
            Angebot
          </Link>
          <Link to="/ablauf" className="text-gray-700 hover:text-[#D4A88C] transition-colors">
            Ablauf
          </Link>
          <Link to="/kontakt" className="text-gray-700 hover:text-[#D4A88C] transition-colors">
            Kontakt
          </Link>
          {isLoggedIn ? (
            <>
              <Link
                to="/kundenbereich"
                className="text-gray-700 hover:text-[#D4A88C] transition-colors"
              >
                Kundenbereich
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-gray-700 hover:text-[#D4A88C] transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </>
          ) : (
            <Link to="/login" className="text-gray-700 hover:text-[#D4A88C] transition-colors">
              Login
            </Link>
          )}
        </nav>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden text-gray-800 hover:text-[#D4A88C] transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menü"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
          <nav className="flex flex-col px-6 py-4 space-y-4">
            <Link
              to="/angebot"
              className="text-gray-700 hover:text-[#D4A88C] transition-colors py-2"
              onClick={closeMenu}
            >
              Angebot
            </Link>
            <Link
              to="/ablauf"
              className="text-gray-700 hover:text-[#D4A88C] transition-colors py-2"
              onClick={closeMenu}
            >
              Ablauf
            </Link>
            <Link
              to="/kontakt"
              className="text-gray-700 hover:text-[#D4A88C] transition-colors py-2"
              onClick={closeMenu}
            >
              Kontakt
            </Link>
            {isLoggedIn ? (
              <>
                <Link
                  to="/kundenbereich"
                  className="text-gray-700 hover:text-[#D4A88C] transition-colors py-2"
                  onClick={closeMenu}
                >
                  Kundenbereich
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-gray-700 hover:text-[#D4A88C] transition-colors py-2 text-left"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="text-gray-700 hover:text-[#D4A88C] transition-colors py-2"
                onClick={closeMenu}
              >
                Login
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}
