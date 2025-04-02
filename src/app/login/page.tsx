"use client";

import React, { useState, useEffect } from "react";
import { Lock, Mail, LogIn } from "lucide-react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (trimmedEmail === "test@test.com" && trimmedPassword === "password") {
      setError("");
    } else {
      setError("Credenciales incorrectas.");
    }
  };

  if (!isClient) {
    return null; 
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 to-pink-50 flex items-center justify-center p-4">
      <section className="w-full max-w-md">
        <article className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          <header className="text-center">
            <figure className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
              <LogIn className="w-8 h-8 text-white" />
            </figure>
            <h1 className="text-3xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
              Iniciar Sesión
            </h1>
            <p className="mt-2 text-[#4B5563]">Bienvenido de nuevo</p>
          </header>

          {error && (
            <section className="bg-[#FEE2E2] text-[#DC2626] p-3 rounded-lg text-sm flex items-center justify-center">
              {error}
            </section>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <section className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-[#4B5563] block">
                Email
              </label>
              <section className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-purple-500" />
                </span>
                <input
                  id="email"
                  type="email"
                  placeholder="nombre@ejemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full pl-10 pr-3 py-2.5 border border-[#4B5563] rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-colors"
                />
              </section>
            </section>

            <section className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-[#4B5563] block">
                Contraseña
              </label>
              <section className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-purple-500" />
                </span>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full pl-10 pr-3 py-2.5 border border-[#4B5563] rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-colors"
                />
              </section>
            </section>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2.5 px-4 rounded-lg hover:from-purple-600 hover:to-pink-600 focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50 transition-colors duration-200 font-medium flex items-center justify-center space-x-2"
            >
              <span>Ingresar</span>
              <LogIn className="w-5 h-5" />
            </button>
          </form>

          <footer className="text-center text-sm">
            <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">
              ¿Olvidaste tu contraseña?
            </a>
          </footer>
        </article>
      </section>
    </main>
  );
}

export default LoginForm;