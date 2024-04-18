
// Importa los componentes necesarios de Next.js
import Head from 'next/head';

// Define la función ServicePage
export default function ServicePage() {
  return (
    <div className="container mx-auto px-4 mt-40 mb-16">
      {/* Encabezado */}
      <header className="bg-gray-800 text-white py-4 px-8 rounded-lg">
        <h1 className="text-3xl font-bold">Nuestros Servicios</h1>
      </header>

      {/* Contenido */}
      <main className="container mx-auto py-8">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Servicio de Cita Médica */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Cita Médica</h2>
            <p className="text-gray-700">Programa una cita con nuestros profesionales médicos para recibir atención médica personalizada.</p>
          </div>

          {/* Servicio de Personalización de Productos */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Personalización de Productos</h2>
            <p className="text-gray-700">Personalizamos productos según tus especificaciones para que se adapten perfectamente a tus necesidades.</p>
          </div>

          {/* Otros Servicios (Agregar según sea necesario) */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Otros Servicios</h2>
            <p className="text-gray-700">Ofrecemos una variedad de otros servicios para satisfacer diversas necesidades. ¡Contáctanos para más detalles!</p>
          </div>
        </section>
      </main>
    </div>
  );
}
