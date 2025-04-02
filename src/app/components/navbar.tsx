'use client'
import { useState, useEffect } from "react"
import Link from "next/link"
import { useAuth } from "../context/AuthContext"
import { Menu, X, LogOut, User, BookOpen, Info, Rocket, Sparkles } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const auth = useAuth()
  const user = auth?.user
  const logout = auth?.logout

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      {}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
        <section className="max-w-7xl mx-auto px-6">
          <section className="flex justify-between items-center">
            {}
            <Link href="/" className="flex items-center group relative">
              <figure className="relative mr-4">
                <span className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition-all duration-300" />
                <span className="relative flex items-center justify-center w-12 h-12 bg-white rounded-lg border border-gray-100 group-hover:rotate-6 transition-transform duration-300 shadow-sm">
                  <Rocket className="w-6 h-6 text-purple-600 group-hover:text-pink-500 transition-colors duration-300 group-hover:animate-float" />
                </span>
              </figure>
              <h1 className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent tracking-tight">
                Learn<span className="text-pink-600">X</span>
              </h1>
              <Sparkles className="absolute -right-4 -top-2 w-4 h-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-twinkle" />
            </Link>

            {}
            <section className="hidden md:flex items-center space-x-10">
              <nav className="flex items-center space-x-8">
                <Link 
                  href="/courses" 
                  className="relative text-gray-700 hover:text-purple-600 font-medium transition-all duration-300 group px-3 py-2"
                >
                  <span className="flex items-center space-x-2">
                    <BookOpen className="w-5 h-5 text-purple-500 group-hover:text-pink-500 transition-colors" />
                    <span>Cursos</span>
                  </span>
                  <span className="absolute bottom-0 left-1/2 w-4/5 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transform -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                </Link>
                
                <Link 
                  href="/about" 
                  className="relative text-gray-700 hover:text-purple-600 font-medium transition-all duration-300 group px-3 py-2"
                >
                  <span className="flex items-center space-x-2">
                    <Info className="w-5 h-5 text-purple-500 group-hover:text-pink-500 transition-colors" />
                    <span>Nosotros</span>
                  </span>
                  <span className="absolute bottom-0 left-1/2 w-4/5 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transform -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                </Link>
              </nav>

              {user ? (
                <section className="flex items-center space-x-4 pl-6 border-l border-gray-200">
                  <figure className="flex items-center space-x-3 bg-gradient-to-r from-purple-50 to-pink-50 px-4 py-2 rounded-full border border-gray-100 shadow-inner">
                    <span className="w-9 h-9 rounded-full bg-gradient-to-r from-purple-500 to-pink-400 flex items-center justify-center text-white font-bold">
                      {user.name.charAt(0)}
                    </span>
                    <figcaption className="font-medium text-gray-700">Hola, {user.name.split(' ')[0]}</figcaption>
                  </figure>
                  <button 
                    onClick={logout} 
                    className="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md"
                    aria-label="Cerrar sesión"
                  >
                    <LogOut className="w-5 h-5 text-gray-500 hover:text-pink-500 transition-colors" />
                  </button>
                </section>
              ) : (
                <section className="flex items-center space-x-4 pl-6 border-l border-gray-200">
                  <Link 
                    href="/login" 
                    className="px-5 py-2.5 text-gray-700 font-medium rounded-full hover:bg-gray-50 transition-all duration-300 border border-gray-200 hover:border-purple-300 hover:text-purple-600"
                  >
                    Ingresar
                  </Link>
                  <Link 
                    href="/register" 
                    className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium rounded-full hover:from-purple-700 hover:to-pink-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Registrarse
                  </Link>
                </section>
              )}
            </section>

            {}
            <button 
              className="md:hidden w-10 h-10 flex items-center justify-center bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-all duration-300 shadow-sm"
              onClick={toggleMenu}
              aria-label="Menú mobile"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-gray-700" />
              ) : (
                <Menu className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </section>
        </section>
      </nav>

      {}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 mt-20 bg-black/10 backdrop-blur-sm" onClick={toggleMenu} />
      )}

      {}
      {isMenuOpen && (
        <section className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-md md:hidden py-6 px-6 bg-white rounded-xl shadow-xl border border-gray-100 animate-fadeIn">
          <nav className="flex flex-col space-y-6">
            <Link 
              href="/courses" 
              className="flex items-center space-x-4 px-5 py-3 rounded-lg hover:bg-purple-50 transition-all duration-300 group"
              onClick={() => setIsMenuOpen(false)}
            >
              <BookOpen className="w-6 h-6 text-purple-500 group-hover:text-pink-500 transition-colors" />
              <span className="font-medium text-gray-700 text-lg">Cursos</span>
            </Link>
            
            <Link 
              href="/about" 
              className="flex items-center space-x-4 px-5 py-3 rounded-lg hover:bg-purple-50 transition-all duration-300 group"
              onClick={() => setIsMenuOpen(false)}
            >
              <Info className="w-6 h-6 text-purple-500 group-hover:text-pink-500 transition-colors" />
              <span className="font-medium text-gray-700 text-lg">Nosotros</span>
            </Link>
          </nav>

          <section className="mt-10 pt-8 border-t border-gray-100">
            {user ? (
              <section className="flex flex-col space-y-6">
                <figure className="flex items-center space-x-4 px-5 py-4 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50">
                  <span className="w-11 h-11 rounded-full bg-gradient-to-r from-purple-500 to-pink-400 flex items-center justify-center text-white font-bold text-lg">
                    {user.name.charAt(0)}
                  </span>
                  <figcaption className="font-medium text-gray-700 text-lg">{user.name}</figcaption>
                </figure>
                <button 
                  onClick={() => {
                    logout()
                    setIsMenuOpen(false)
                  }} 
                  className="w-full flex items-center justify-center space-x-3 px-5 py-4 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 transition-all duration-300 text-lg"
                >
                  <LogOut className="w-6 h-6 text-gray-500" />
                  <span className="font-medium text-gray-700">Cerrar sesión</span>
                </button>
              </section>
            ) : (
              <section className="flex flex-col space-y-4">
                <Link 
                  href="/login" 
                  className="w-full text-center px-5 py-3.5 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 transition-all duration-300 font-medium text-gray-700 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ingresar
                </Link>
                <Link 
                  href="/register" 
                  className="w-full text-center px-5 py-3.5 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium hover:from-purple-700 hover:to-pink-600 transition-all duration-300 shadow-md text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Registrarse
                </Link>
              </section>
            )}
          </section>
        </section>
      )}

      {}
      <div className={`h-20 transition-all duration-500 ${scrolled ? 'h-16' : 'h-20'}`} />
    </>
  )
}