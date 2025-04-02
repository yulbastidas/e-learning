export default function AboutPage() {
    return (
      <section className="p-6 bg-gradient-to-r from-yellow-50 to-pink-50 min-h-screen">
        <h1 className="text-4xl font-bold text-center mb-6 text-[#4B5563]">¡Gracias por visitar E-Learning!</h1>
        <p className="text-xl text-gray-700 text-center mb-4">
          E-Learning es una plataforma diseñada para ayudar a los más pequeños a aprender y mejorar sus habilidades motrices, cognoscitivas y creativas mientras se divierten.
        </p>
        <p className="text-lg text-gray-600 text-center mb-8">
          ¡Aquí, el aprendizaje se convierte en una aventura! Nos enfocamos en ofrecer contenido educativo adaptado a las necesidades de cada niño, ayudando a los padres en su proceso de enseñanza y desarrollo.
        </p>
  
        <section className="text-center space-y-6">
          <h2 className="text-2xl font-semibold text-[#4B5563]">¿Por qué elegir E-Learning?</h2>
          <p className="text-lg text-gray-600">
            Nuestra misión es brindar herramientas divertidas y educativas que fomenten el crecimiento y el desarrollo de habilidades motrices. ¡Aquí, aprender no solo es divertido, sino que es un juego!
          </p>
          <p className="text-lg text-gray-600">
            Con E-Learning, los niños pueden:
          </p>
          <ul className="list-inside list-disc text-lg text-gray-600">
            <li>Mejorar sus habilidades motrices mediante juegos interactivos.</li>
            <li>Aprender conceptos básicos de forma divertida y atractiva.</li>
            <li>Desarrollar su creatividad a través de actividades visuales y musicales.</li>
          </ul>
  
          <h3 className="text-xl font-semibold text-[#4B5563] mt-6">¿Cómo funciona?</h3>
          <p className="text-lg text-gray-600">
            Cada actividad está diseñada para ser educativa y, a la vez, entretenida. Los niños interactúan con contenido de calidad que les permite aprender mientras se divierten. ¡A través de nuestros módulos, se fomenta la autonomía, el pensamiento crítico y las habilidades motrices!
          </p>
  
          <section className="space-x-4 mt-6">
            <a 
              href="https://www.facebook.com/share/1BYiRHr9Gj/?mibextid=wwXIfr" 
              target="_blank"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors text-lg font-semibold"
            >
              ¡Síguenos en Facebook!
            </a>
          </section>
  
          <section className="mt-8 text-center">
            <h2 className="text-xl font-semibold text-[#4B5563]">¡Muchísimas gracias por ser parte de nuestra comunidad!</h2>
            <p className="text-lg text-gray-700 mt-2">
              Nos complace que estés aquí y que quieras darle a tus pequeños la oportunidad de aprender y jugar al mismo tiempo. Queremos que cada niño se sienta motivado, inspirado y capaz de alcanzar su máximo potencial.
            </p>
          </section>
          
          <section className="mt-8 text-center">
            <p className="text-lg text-gray-700">
              Si tienes preguntas o deseas obtener más información, no dudes en contactarnos. Estamos aquí para ayudarte a hacer crecer las habilidades de tus pequeños de manera divertida y educativa.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              ¡Gracias por confiar en E-Learning y ser parte de nuestra misión de transformar el aprendizaje infantil!
            </p>
          </section>
        </section>
      </section>
    );
  }