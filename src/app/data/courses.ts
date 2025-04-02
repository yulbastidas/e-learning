export interface Course {
    id: string;
    title: string;
    description: string;
    image: string;
    videoUrl: string;
    category: string;
    level: string;
  }
  
  export const courses: Course[] = [
    { 
      id: "1", 
      title: "Matemáticas Básicas", 
      description: "Aprende los conceptos fundamentales de matemáticas de manera divertida.", 
      image: "/images/math-icons.jpg", 
      videoUrl: "https://www.youtube.com/embed/k_dC1sj9sOE?rel=0&showinfo=0", 
      category: "Matemáticas",
      level: "Básico"
    },
    { 
      id: "2", 
      title: "Aprende a Leer", 
      description: "Método completo para aprender a leer desde cero con ejercicios prácticos.", 
      image: "/images/book-icon.jpg", 
      videoUrl: "https://www.youtube.com/embed/7gbXrkiSpZ8?rel=0&showinfo=0", 
      category: "Lenguaje",
      level: "Básico"
    },
    { 
      id: "3", 
      title: "Ciencias Naturales", 
      description: "Descubre el mundo de las ciencias con experimentos y explicaciones sencillas.", 
      image: "/images/science-icons.jpg", 
      videoUrl: "https://www.youtube.com/embed/3jAszWxXp4s?rel=0&showinfo=0", 
      category: "Ciencias",
      level: "Intermedio"
    },
    { 
      id: "4", 
      title: "Historia Universal", 
      description: "Viaja a través del tiempo y conoce los eventos más importantes de la historia.", 
      image: "/images/history-book.jpg", 
      videoUrl: "https://www.youtube.com/embed/yzjnJ_YQRQY?rel=0&showinfo=0", 
      category: "Historia",
      level: "Intermedio"
    },
    { 
      id: "5", 
      title: "Inglés para Niños", 
      description: "Aprende inglés de manera divertida con canciones y juegos interactivos.", 
      image: "/images/english-flag.jpg", 
      videoUrl: "https://www.youtube.com/embed/1hrcA6gIpmQ?rel=0&showinfo=0", 
      category: "Idiomas",
      level: "Básico"
    },
    { 
      id: "6", 
      title: "Geografía Mundial", 
      description: "Conoce los países, capitales y maravillas naturales de nuestro planeta.", 
      image: "/images/world-globe.jpg", 
      videoUrl: "https://www.youtube.com/embed/PzqdDdxr9VI?rel=0&showinfo=0", 
      category: "Geografía",
      level: "Intermedio"
    }
  ];