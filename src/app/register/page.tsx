"use client";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { User, Mail, Lock, UserPlus } from "lucide-react";

export default function RegisterPage() {
  const { register } = useAuth();
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      if (await register(name, email, password)) {
        setTimeout(() => {
          router.push("/login");
        }, 1000);
      } else {
        setError("El usuario ya existe.");
      }
    } catch (error) {
      console.error("Error al crear la cuenta:", error);
      setError("Hubo un error al crear la cuenta.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 flex items-center justify-center p-4 animate-gradient-x">
      <section className="w-full max-w-md">
        <article className="bg-white rounded-2xl shadow-2xl p-8 space-y-6 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
          <header className="text-center">
            <figure className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mb-4 animate-bounce">
              <UserPlus className="w-8 h-8 text-purple-700 animate-pulse" />
            </figure>
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
              Crear Cuenta
            </h1>
            <p className="mt-2 text-gray-600 animate-fade-in">
              Únete a nuestra plataforma de e-learning
            </p>
          </header>

          {error && (
            <section className="bg-pink-50 text-pink-600 p-3 rounded-lg text-sm flex items-center justify-center animate-shake">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              {error}
            </section>
          )}

          <form onSubmit={handleRegister} className="space-y-4">
            <section className="space-y-2 animate-fade-in-up delay-75">
              <label htmlFor="name" className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 block">
                Nombre
              </label>
              <section className="relative group">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-transform group-hover:scale-110">
                  <User className="h-5 w-5 text-purple-600 group-focus-within:text-pink-500 transition-colors" />
                </span>
                <input
                  id="name"
                  type="text"
                  placeholder="Tu nombre completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="block w-full pl-10 pr-3 py-2.5 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200 group-hover:border-purple-300 group-hover:shadow-sm"
                />
              </section>
            </section>

            <section className="space-y-2 animate-fade-in-up delay-150">
              <label htmlFor="email" className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 block">
                Email
              </label>
              <section className="relative group">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-transform group-hover:scale-110">
                  <Mail className="h-5 w-5 text-purple-600 group-focus-within:text-pink-500 transition-colors" />
                </span>
                <input
                  id="email"
                  type="email"
                  placeholder="nombre@ejemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full pl-10 pr-3 py-2.5 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200 group-hover:border-purple-300 group-hover:shadow-sm"
                />
              </section>
            </section>

            <section className="space-y-2 animate-fade-in-up delay-300">
              <label htmlFor="password" className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 block">
                Contraseña
              </label>
              <section className="relative group">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-transform group-hover:scale-110">
                  <Lock className="h-5 w-5 text-purple-600 group-focus-within:text-pink-500 transition-colors" />
                </span>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full pl-10 pr-3 py-2.5 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200 group-hover:border-purple-300 group-hover:shadow-sm"
                />
              </section>
            </section>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2.5 px-4 rounded-lg focus:ring-4 focus:ring-pink-500 focus:ring-opacity-50 transition-all duration-300 font-medium flex items-center justify-center space-x-2
                ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:from-purple-700 hover:to-pink-600 hover:shadow-lg transform hover:-translate-y-0.5'}`}
            >
              {isSubmitting ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <span>Crear Cuenta</span>
              )}
            </button>
          </form>

          <footer className="text-center text-sm animate-fade-in">
            <p className="text-gray-600">
              ¿Ya tienes una cuenta?{" "}
              <a
                href="/login"
                className="text-pink-500 hover:text-pink-600 font-medium transition-colors duration-200 hover:underline hover:underline-offset-4"
              >
                Iniciar Sesión
              </a>
            </p>
          </footer>
        </article>
      </section>
    </main>
  );
}
