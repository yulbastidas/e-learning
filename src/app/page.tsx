import Image from 'next/image';

import React from 'react';
import { BookOpen, Palette, Music, Brain, Star, ChevronRight, Heart, Gamepad2, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Arte y Creatividad",
    description: "Dibuja, pinta y crea obras de arte increíbles"
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Matemáticas Divertidas",
    description: "Aprende números y operaciones jugando"
  },
  {
    icon: <Music className="w-6 h-6" />,
    title: "Música y Ritmo",
    description: "Explora el mundo de los sonidos y la música"
  }
];

const activities = [
  {
    title: "Aventuras con Números",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "¡Aprende matemáticas con juegos divertidos!"
  },
  {
    title: "Mundo de Letras",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Descubre el mágico mundo de la lectura"
  },
  {
    title: "Laboratorio Creativo",
    image: "https://images.unsplash.com/photo-1513682121497-80211f36a7d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Experimentos y manualidades emocionantes"
  }
];

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 to-pink-50">
      <header className="relative overflow-hidden pt-20 pb-12 lg:pt-32 lg:pb-24">
        <article className="container mx-auto px-4">
          <section className="max-w-3xl mx-auto text-center mb-16">
            <section className="transform transition-all duration-500 hover:scale-105 group">
              <figure className="relative inline-block">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent relative z-10">
                  ¡Aprende Jugando!
                </h1>
                <Sparkles className="absolute -top-4 -right-6 w-8 h-8 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </figure>
              <p className="text-xl text-gray-600 mb-8">
                Un mundo mágico de aprendizaje donde los niños descubren, crean y se divierten
              </p>
            </section>
            <nav className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/register" 
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl active:scale-95 group"
              >
                <span className="group-hover:scale-110 transition-transform">¡Comienza la aventura!</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </nav>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20">
            {[
              { number: "1000+", label: "Juegos Educativos", icon: <Gamepad2 className="w-8 h-8 text-purple-500 group-hover:animate-bounce" /> },
              { number: "50+", label: "Aventuras de Aprendizaje", icon: <Star className="w-8 h-8 text-yellow-500 group-hover:animate-pulse" /> },
              { number: "5.0", label: "Diversión Garantizada", icon: <Heart className="w-8 h-8 text-pink-500 group-hover:animate-ping" /> }
            ].map((stat, index) => (
              <article 
                key={index} 
                className="bg-white rounded-3xl p-6 text-center shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 border-dashed border-purple-200 hover:border-solid hover:border-purple-400 group"
              >
                <figure className="flex justify-center mb-3">
                  <span className="p-3 bg-purple-50 rounded-full group-hover:bg-gradient-to-br from-purple-100 to-pink-100 transition-all">
                    {stat.icon}
                  </span>
                </figure>
                <h3 className="text-3xl font-bold text-purple-600 mb-2">{stat.number}</h3>
                <p className="text-gray-600 group-hover:text-purple-800 transition-colors">{stat.label}</p>
              </article>
            ))}
          </section>
        </article>
      </header>

      <section className="py-20 bg-white">
        <article className="container mx-auto px-4">
          <header className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-600">Aventuras que te Esperan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubre un mundo lleno de diversión y aprendizaje con nuestras actividades
            </p>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {activities.map((activity, index) => (
              <article
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-4 border-purple-100 hover:border-pink-300 group"
              >
                <figure className="relative h-48 overflow-hidden">
                  <img 
                    src={activity.image} 
                    alt={activity.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></span>
                </figure>
                <section className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-purple-600 group-hover:text-pink-600 transition-colors">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors">
                    {activity.description}
                  </p>
                </section>
              </article>
            ))}
          </section>
        </article>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <article className="container mx-auto px-4">
          <header className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-600">¡Diversión sin Límites!</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explora todas las formas divertidas de aprender con nosotros
            </p>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <article
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-4 border-pink-100 hover:border-purple-300 group"
              >
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transform -rotate-6 group-hover:rotate-0 transition-transform duration-300 shadow-md">
                  {feature.icon}
                </span>
                <h3 className="text-xl font-semibold mb-3 text-purple-600 group-hover:text-pink-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors">
                  {feature.description}
                </p>
              </article>
            ))}
          </section>
        </article>
      </section>

      <section className="py-20">
        <article className="container mx-auto px-4">
          <section className="max-w-4xl mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-12 text-center text-white transform transition-all duration-300 hover:scale-[1.02] shadow-xl">
            <span className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-pulse">
              <Star className="w-8 h-8 text-yellow-300" />
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para la Diversión?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              ¡Únete a miles de niños que aprenden jugando todos los días!
            </p>
            <a 
              href="/register"
              className="inline-block px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl active:scale-95"
            >
              ¡Comienza Gratis!
            </a>
          </section>
        </article>
      </section>

      <footer className="bg-white py-12">
        <article className="container mx-auto px-4 text-center">
          <span className="w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-bounce">
            <BookOpen className="w-8 h-8 text-purple-600" />
          </span>
          <p className="text-gray-600">
            © {new Date().getFullYear()} Plataforma de Aprendizaje Infantil. Todos los derechos reservados.
          </p>
        </article>
      </footer>
    </main>
  );
}

export default App;