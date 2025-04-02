'use client';
import React, { useState, useEffect } from 'react';


import { courses } from '../data/courses';

const CourseFilters = ({ onFilterChange }: { onFilterChange: (filter: string, value: string) => void }) => {
  const categories = [...new Set(courses.map(course => course.category))];
  const levels = [...new Set(courses.map(course => course.level))];

  return (
    <section className="flex flex-wrap justify-center gap-4 mb-8">
      <section>
        <label className="block text-sm font-medium text-gray-700 mb-1">Categoría:</label>
        <select 
          onChange={(e) => onFilterChange('category', e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="">Todas</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </section>
      
      <section>
        <label className="block text-sm font-medium text-gray-700 mb-1">Nivel:</label>
        <select 
          onChange={(e) => onFilterChange('level', e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="">Todos</option>
          {levels.map(level => (
            <option key={level} value={level}>{level}</option>
          ))}
        </select>
      </section>
    </section>
  );
};

const SudokuGame = () => {
  const [board, setBoard] = useState<number[][]>([
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
  ]);

  const handleChange = (row: number, col: number, value: number) => {
    const newBoard = [...board];
    newBoard[row][col] = value;
    setBoard(newBoard);
  };

  const renderBoard = () => (
    <section className="grid grid-cols-9 gap-px bg-gray-300 border-2 border-gray-400 rounded-lg overflow-hidden">
      {board.map((row, rowIndex) => 
        row.map((cell, colIndex) => {
          const isBoxBorder = rowIndex % 3 === 0 || colIndex % 3 === 0;
          const borderClass = isBoxBorder ? 'border-t-2 border-l-2 border-gray-400' : '';
          
          return (
            <input
              key={`${rowIndex}-${colIndex}`}
              value={cell === 0 ? '' : cell}
              onChange={(e) => handleChange(rowIndex, colIndex, +e.target.value || 0)}
              className={`w-10 h-10 sm:w-12 sm:h-12 text-center text-xl font-medium bg-white focus:outline-none focus:bg-blue-50 ${borderClass} ${cell !== 0 ? 'text-blue-600' : 'text-gray-600'}`}
              maxLength={1}
              type="number"
              min="1"
              max="9"
            />
          );
        })
      )}
    </section>
  );

  return (
    <section className="mt-12 p-6 bg-white rounded-xl shadow-lg">
      <section className="text-center mb-6">
        <h2 className="text-3xl font-bold text-blue-600 mb-2">¡Juega Sudoku!</h2>
        <p className="text-gray-600 mb-4">Completa el tablero con números del 1 al 9 sin repetir en filas, columnas o cajas</p>
      </section>
      <section className="flex justify-center">
        {renderBoard()}
      </section>
      <section className="mt-6 text-center">
        <button 
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors shadow-md"
        >
          Reiniciar Juego
        </button>
      </section>
    </section>
  );
};

const MemoryGame = () => {
  const animals = [
    '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼',
    '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'
  ];

  const [flipped, setFlipped] = useState<boolean[]>(Array(16).fill(false));
  const [matched, setMatched] = useState<boolean[]>(Array(16).fill(false));
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [shuffledCards, setShuffledCards] = useState<string[]>([]);

  useEffect(() => {
    const shuffled = [...animals].sort(() => Math.random() - 0.5);
    setShuffledCards(shuffled);
  }, []);

  const handleCardClick = (index: number) => {
    if (flipped[index] || matched[index] || flippedCards.length === 2) return;

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    setFlipped(prev => {
      const newFlipped = [...prev];
      newFlipped[index] = true;
      return newFlipped;
    });

    if (newFlippedCards.length === 2) {
      const [firstIndex, secondIndex] = newFlippedCards;
      
      if (shuffledCards[firstIndex] === shuffledCards[secondIndex]) {
        setMatched(prev => {
          const newMatched = [...prev];
          newMatched[firstIndex] = true;
          newMatched[secondIndex] = true;
          return newMatched;
        });
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          setFlipped(prev => {
            const newFlipped = [...prev];
            newFlipped[firstIndex] = false;
            newFlipped[secondIndex] = false;
            return newFlipped;
          });
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  const resetGame = () => {
    const shuffled = [...animals].sort(() => Math.random() - 0.5);
    setShuffledCards(shuffled);
    setFlipped(Array(16).fill(false));
    setMatched(Array(16).fill(false));
    setFlippedCards([]);
  };

  const renderCards = () => (
    <section className="grid grid-cols-4 gap-3">
      {shuffledCards.map((animal, index) => (
        <button
          key={index}
          onClick={() => handleCardClick(index)}
          className={`w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-lg transition-all duration-300 ${
            flipped[index] || matched[index]
              ? 'bg-green-100 transform rotate-y-180'
              : 'bg-blue-500 hover:bg-blue-400'
          } shadow-md`}
        >
          <span className="text-3xl">
            {(flipped[index] || matched[index]) ? animal : "?"}
          </span>
        </button>
      ))}
    </section>
  );

  return (
    <section className="mt-12 p-6 bg-white rounded-xl shadow-lg">
      <section className="text-center mb-6">
        <h2 className="text-3xl font-bold text-blue-600 mb-2">¡Memoria de Animales!</h2>
        <p className="text-gray-600 mb-4">Encuentra todas las parejas de animales iguales</p>
      </section>
      <section className="flex justify-center">
        {renderCards()}
      </section>
      {matched.every(Boolean) && (
        <section className="mt-4 text-center">
          <p className="text-xl text-green-600 font-bold animate-bounce">¡Felicidades, has ganado!</p>
          <button 
            onClick={resetGame}
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors shadow-md"
          >
            Jugar de nuevo
          </button>
        </section>
      )}
      <section className="mt-4 text-center">
        <button 
          onClick={resetGame}
          className="px-4 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
        >
          Reiniciar Juego
        </button>
      </section>
    </section>
  );
};

const ClickThePointsGame = () => {
  const [points, setPoints] = useState<{id: number, x: number, y: number}[]>([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameActive, setGameActive] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setGameActive(false);
    }
    return () => clearInterval(timer);
  }, [gameActive, timeLeft]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (gameActive) {
      interval = setInterval(() => {
        const x = Math.floor(Math.random() * 80) + 10;
        const y = Math.floor(Math.random() * 80) + 10;
        setPoints(prev => [...prev, {id: Date.now(), x, y}]);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameActive]);

  const handlePointClick = (id: number) => {
    setPoints(points.filter(point => point.id !== id));
    setScore(prev => prev + 1);
  };

  const startGame = () => {
    setPoints([]);
    setScore(0);
    setTimeLeft(30);
    setGameActive(true);
  };

  return (
    <section className="mt-12 p-6 bg-white rounded-xl shadow-lg">
      <section className="text-center mb-6">
        <h2 className="text-3xl font-bold text-blue-600 mb-2">¡Haz clic en los puntos!</h2>
        <p className="text-gray-600 mb-4">Haz clic en tantos puntos como puedas antes de que se acabe el tiempo</p>
      </section>
      
      {!gameActive ? (
        <section className="text-center">
          <button 
            onClick={startGame}
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors shadow-md"
          >
            {score > 0 ? 'Jugar de nuevo' : 'Comenzar Juego'}
          </button>
          {score > 0 && (
            <p className="mt-4 text-xl font-semibold">
              Puntuación anterior: <span className="text-blue-600">{score}</span> puntos
            </p>
          )}
        </section>
      ) : (
        <section className="relative bg-gray-100 rounded-lg p-4" style={{ height: '400px' }}>
          <span className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full">
            Tiempo: {timeLeft}s
          </span>
          <span className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full">
            Puntos: {score}
          </span>
          
          {points.map((point) => (
            <button
              key={point.id}
              onClick={() => handlePointClick(point.id)}
              className="absolute w-8 h-8 bg-red-500 rounded-full cursor-pointer animate-ping"
              style={{ 
                top: `${point.y}%`, 
                left: `${point.x}%`,
                animationDuration: '1s'
              }}
            />
          ))}
        </section>
      )}
    </section>
  );
};

export default function CoursesPage() {
  const [filters, setFilters] = useState({
    category: '',
    level: ''
  });

  const handleFilterChange = (filter: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filter]: value
    }));
  };

  const filteredCourses = courses.filter(course => {
    return (
      (filters.category === '' || course.category === filters.category) &&
      (filters.level === '' || course.level === filters.level)
    );
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6">
      <section className="max-w-7xl mx-auto">
        <section className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-12">
            ¡Aprende Divirtiéndote!
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Descubre nuestros cursos educativos con videos reales y juegos interactivos.
          </p>
        </section>

        <CourseFilters onFilterChange={handleFilterChange} />

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Nuestros Cursos</h2>
          
          {filteredCourses.length === 0 ? (
            <section className="text-center py-12">
              <p className="text-xl text-gray-600">No hay cursos que coincidan con los filtros seleccionados.</p>
            </section>
          ) : (
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <article 
                  key={course.id} 
                  className="p-6 bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-100"
                >
                  <figure className="relative h-48 overflow-hidden rounded-lg mb-4">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-full object-contain"
                    />
                  </figure>
                  <h3 className="text-2xl font-semibold text-blue-600 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-2">{course.description}</p>
                  <section className="flex justify-between mb-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded">{course.category}</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded">{course.level}</span>
                  </section>
                  <figure className="aspect-w-16 aspect-h-9 mb-4">
                    <iframe 
                      src={course.videoUrl} 
                      title={course.title}
                      className="w-full h-48 rounded-lg shadow-md"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </figure>
                  <a 
                    href={course.videoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Ver Curso Completo
                  </a>
                </article>
              ))}
            </section>
          )}
        </section>

        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-600 mb-2">Juegos Educativos</h2>
          <p className="text-xl text-gray-700 mb-6">
            Refuerza lo aprendido con nuestros juegos interactivos
          </p>
        </section>

        <section className="space-y-16">
          <SudokuGame />
          <MemoryGame />
          <ClickThePointsGame />
        </section>

        <footer className="mt-16 py-8 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Aprende Divirtiéndote. Todos los derechos reservados.</p>
        </footer>
      </section>
    </main>
  );
}